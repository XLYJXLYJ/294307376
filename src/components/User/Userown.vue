<template>
    <div class="container39">
        <div>
            <div>
                <img class="head" :src="'data:image/png;base64,'+userimageUrl" alt="" v-show="userownimg01">
                <img class="head"  src="static/images/localpic.png" alt="" v-show="userownimg02">
                <p class="name">{{username}}</p>
                <p class="atten">编程达人</p>
            </div>
            <div>
                <button class="attenbutton01" @click="Postuseinfo" v-show="savedes"><p>保存</p></button>
                <!-- <button v-show="followother" :class='{"attenbutton01":buttoncolor,"attenbutton02":!buttoncolor}' @click="attenbutton"><p>{{ atten?'关注':'取消关注' }}</p></button> -->
            </div>
        </div>
        <div class="aboutbox">
            <p class="aboutme" placeholder="请填写关于你的一些信息">关于我</p>
            <textarea class="aboutmetext" name="" id="" cols="30" rows="10" v-model="aboutme"></textarea>
        </div>
         <div class="doing">
            <p class="medoing" placeholder="请填写你正在规划的事情">我正在做什么</p>
            <textarea class="medoingtext" name="" id="" cols="30" rows="10"  v-model="doing"></textarea>
        </div>
        <div>
            <div class="demonone" v-show="demonone">
                <img class="userdemo" src="../../assets/user/bg01.png" alt="">
                <div class="makedemotext"><router-link to="snap" target="_blank" @click="makecover">创作</router-link><p>你的封面作品</p> <br/><span>还没有封面作品</span></div>
            </div>  
            <div class="demoimg" v-show="demoimg">
                <router-link to="/video"><img @click="seedemo" class="userdemo" :src="'data:image/png;base64,'+demoimageUrl" alt=""></router-link>
            </div>   
            <p class="name01">封面作品</p>
            <p class="atten01">暂无作品</p>
        </div>
        <div class="sum">
            <p class="sum01">你的作品已经累积获得了:</p>
            <div class="good"><p>{{praisetotal|looksums}}</p><span>个赞</span></div>
            <div class="store"><p>{{collecttotal|looksums}}</p><span>个收藏</span></div>
            <div class="make"><p>{{looktotal|looksums}}</p><span>次浏览</span></div>
            <!-- <div class="see"><p>100</p><span>次浏览</span></div> -->
        </div>
        <div class="mydy">我的动态</div>
    </div>
</template>
<script>
import Vue from 'vue'
import { looksum } from '../../public/seesum.js'
    export default{
        filters: {
            looksums(n) {//数字转换
                var n = n;
                return looksum(n);
            }
        },
        data(){
            return{
                //  atten:true,是否关注
                //  buttoncolor:true,//关注按钮颜色
                 username:'',//名字
                 aboutme:'',//关于我
                 doing:'',//我正在做什么
                 userimageUrl:'',//用户头像图片
                 demoimageUrl:'',//作品封面
                 demonone:'',//默认的作品封面背景(作者没有封面)
                 demoimg:'',//作者的封面图片
                 demoimageid:'',//作者封面作品的id
                 collecttotal:'',//收藏数量
                 praisetotal:'',//点赞数量
                 looktotal:'',//观看总数
                 savedes:'',//保存按钮
                //  followother:'',关注按钮
                 userownimg01:'',//显示用户选择的头像
                 userownimg02:'',//显示默认的头像
                 imgBuffer:''//封面作品
            } 
        },
        // watch:{
        //     doing:function(){
        //         this.Postuseinfo()
        //     },
        //     aboutme:function(){
        //         this.Postuseinfo()
        //     }
        // },
        mounted: function () {     
            this.Getuseinfo()
        },
        methods:{
            //查看封面作品
            seedemo(){
                sessionStorage.id = this.demoimageid
            },
            //设置封面作品跟踪coverid
            makecover(){
                this.$store.state.coverid=1
            },
            // attenbutton(atten){关注按钮与颜色的切换
            //     this.buttoncolor=!this.buttoncolor
            //     this.atten=!this.atten;
            // },

            //控制显示默认头像还是用户选择头像
            isuserimg(){
                if(this.userimageUrl == ''){
                    this.userownimg02=true,
                    this.userownimg01=false

                }else{
                    this.userownimg02=false,
                    this.userownimg01=true
                
                }
            },
            //加载默认数据
            Getuseinfo(){//需要加昵称信息和是否关注信息
                if(!sessionStorage.lookuserdes==''){//加载其他作者的信息
                    this.savedes=false,
                    this.followother=true
                    this.axios.post('/res/userinfo',{
                        userid:sessionStorage.lookuserdes,
                        getinfostate:3
                    })
                    .then(response => { 
                        this.username= response.data.data.username   
                        this.userimageUrl= response.data.data.imgBuffer    
                        this.aboutme = response.data.data.aboutme,
                        this.doing = response.data.data.doing
                        this.demoimageid= response.data.data.coverworkid 
                        this.collecttotal = response.data.data.collecttotal
                        this.praisetotal = response.data.data.praisetotal
                        this.looktotal = response.data.data.looktotal
                        console.log(response.data.data.coverworkid )
                        if(!response.data.data.coverworkid){
                            this.demonone=true,
                            this.demoimg=false

                        }else{
                            this.demonone=false,
                            this.demoimg=true
                            this.getdemoimg()//是否显示封面做作品
                        }
                        this.isuserimg()//是否显示默认的头像
                    })
                }else{             
                    this.savedes=true,
                    this.followother=false
                    this.axios.post('/res/userinfo',{//加载作者本人的信息
                        userid:sessionStorage.userid,
                        getinfostate:3
                    })
                    .then(response => {     
                        this.username= response.data.data.username   
                        this.userimageUrl= response.data.data.imgBuffer    
                        this.aboutme = response.data.data.aboutme,
                        this.doing = response.data.data.doing
                        this.demoimageid= response.data.data.coverworkid 
                        this.collecttotal = response.data.data.collecttotal
                        this.praisetotal = response.data.data.praisetotal
                        this.looktotal = response.data.data.looktotal
                        if(!this.demoimageid){
                            this.demonone=true,
                            this.demoimg=false
                           
                        }else{
                            this.demonone=false,
                            this.demoimg=true   
                            this.getdemoimg()                 
                        }
                        this.isuserimg()
                    })
                }

            },

            // 关注
            // jia(){
            //     if(this.$store.state.userid){//是否登录
            //         if(this.buttoncolor){
            //             this.axios.post('/res/useropreate',{
            //                     userid:sessionStorage.userid,
            //                     state:5,
            //                     attentionid:sessionStorage.lookuserdes
            //                 })
            //                 .then(response => {           
                                
            //             })
            //         }else{
            //             this.axios.post('/res/useropreate',{
            //                     userid:sessionStorage.userid,
            //                     state:6,
            //                     attentionid:sessionStorage.lookuserdes
            //                 })
            //                 .then(response => {           
                                
            //             })
            //         }
            //     }else{
            //             this.$message({
            //             message: '请先登录',
            //             center: true,
            //         });
            //     }
            // }, 

            //根据封面作品id获取封面
            getdemoimg(){
                this.axios.post('/res/getfile',{
                    userid:sessionStorage.userid,
                    id:this.demoimageid,
                    state:1
                })
                .then(response =>{
                    this.imgBuffer=response.data.data.imgBuffer
                    console.log(response)
                    if(!this.imgBuffer){
                        this.demonone=true,
                        this.demoimg=false
                    }else{
                        this.demonone=false,
                        this.demoimg=true
                        this.demoimageUrl=response.data.data.imgBuffer
                    }
                })
            },
            //保存信息
            Postuseinfo(){
            　　if(window.navigator.onLine==true) {                     //是否联网　
                    if(sessionStorage.userid){                          //是否登录
                        this.axios.post('/res/userinfo',{
                            userid:sessionStorage.userid,
                            state:2,
                            aboutme:this.aboutme,
                            doing:this.doing
                        })
                    .then(response => {           
                        this.$message({
                            message:'保存成功',
                            center:true
                        })
                    })
                    }else{
                        this.$message(
                            {
                                message: '请先登录',
                                center: true
                            }
                        )
                    }
            　　}else {　
    　　　　         this.$message({
                        message: '发布失败，请检查网络',
                        center: true
                    });
            　　}
            }
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container39{
    width:1200px;
    height: 655px;
    background: @background-color;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container39 .head{
    width:72px;
    height: 72px;
    position: absolute;
    top: 12px;
    left: 9px;  
    border-radius: 40px;
    box-shadow:0px 3px 5px @shadow-color; 
}
.container39 .name{
    width:128px;
    height: 30px;
    position: absolute;
    top: 17px;
    left: 102px; 
    color: @main-color;
    font-size:@lllg-size;  
    font-weight: 600;
}
.container39 .atten{
    width:104px;
    height: 23px;
    position: absolute;
    top: 55px;
    left: 103px; 
    color: @background-color;
    font-size:@md-size;  
    font-weight: 600;
    text-align: center;
    background: url(../../assets/user/rectan02.png)  
}
.container39 .attenbutton01{
    width:108px;
    height: 36px;
    position: absolute;
    top: 24px;
    left: 1024px; 
    color: @background-color;
    font-size:@xm-size;  
    font-weight: 600;
    border: none;
    background: @main-color;
    cursor: pointer;
}
.container39 .attenbutton02{
    width:108px;
    height: 36px;
    position: absolute;
    top: 24px;
    left: 1024px; 
    color: @background-color;
    font-size:@xm-size;  
    font-weight: 600;
    border: none;
    background: @gray;
    cursor: pointer;
}
.container39 .aboutbox{
    position: absolute;
    top: 124px;
    left: 19px;
}
.container39 .aboutme{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 67px;
    height: 22px;
    color: @gray;
    font-size:@llg-size;
}
.container39 .aboutmetext{
    position: absolute;
    top: 37px;
    left: 0px;
    width: 345px;
    height: 175px;
    color: #A9A9A9;
    font-size:@md-size;
    background: @mainbg-color; 
    border: 2px dashed #d5d3cd;
    border-radius: 10px;
    text-indent: 1rem;
    padding-top: 5px;
}
.container39 .doing{
    position: absolute;
    top: 371px;
    left: 19px;
}
.container39 .medoing{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 135px;
    height: 23px;
    color: @gray;
    font-size:@llg-size;
}
.container39 .medoingtext{
    position: absolute;
    top: 37px;
    left: 0px;
    width: 345px;
    height: 175px;
    color: #A9A9A9;
    font-size:@md-size;
    background: @mainbg-color; 
    border: 2px dashed #d5d3cd;
    border-radius: 10px;
    text-indent: 1rem;
    padding-top: 5px;
}
.container39 .userdemo{
    position: absolute;
    top: 161px;
    left: 425px;
    height: 251px;
    width: 251px;
}
.container39 .makedemotext{
    position: absolute;
    width: 197px;
    top: 343px;
    left: 435px;
    color: #3D4245;
}
.container39 .makedemotext a{
    position: absolute;
    left: 60px;
    font-size:@xm-size;
    color: @main-color;  
}
.container39 .makedemotext p{
    position: absolute;
    font-size:@xm-size;
    left: 92px;
    color: #3d4245;  
}
.container39 .makedemotext span{
    color: @delete-color;
    font-size:@xm-size;
    position: absolute;
    font-size:@sm-size;
    left: 74px;
}
.container39 .name01{
    position: absolute;
    top: 123px;
    left: 435px;
    color: @gray;
    font-size:@llg-size;
}
.container39 .atten01{
    position: absolute;
    top: 429px;
    left: 518px;
    color: @black;
    font-size:@xm-size;
}
.container39 .sum{
    position: absolute;
    width: 251px;
    height: 137px;
    left: 425px;
    top: 460px;
    border: 1px solid #e5e1d9;
    background: @mainbg-color;
}
.container39 .mydy{
    position: absolute;
    width: 90px;
    height: 22px;
    left: 760px;
    top: 124px;
    color: @gray;
    font-size:@llg-size;
}
.container39 .sum .sum01{
    position: absolute;
    width: 196px;
    height: 17px;
    left: 27px;
    top: 23px;
    color: #ccc;
    font-size:@xm-size;
}
.container39 .sum .good{
    position: absolute;
    width: 69px;
    height: 18px;
    left: 28px;
    top: 58px;
}
.container39 .sum .good p{
    position: absolute;
    width: auto;
    color: @black;
    font-size:@lg-size;
}
.container39 .sum .good span{
    position: absolute;
    left: 40px;
    top: 6px;
    color: #ccc;
    font-size:@ss-size;
}
.container39 .sum .store p{
    position: absolute;
    top: 58px;
    left: 119px;
    width: auto;
    color: @black;
    font-size:@lg-size;
}
.container39 .sum .store span{
    position: absolute;
    top: 63px;
    left: 158px;
    color: #ccc;
    font-size:@ss-size;
}
.container39 .sum .make p{
    position: absolute;
    top: 99px;
    left: 28px;
    color: @black;
    font-size:@lg-size;
}
.container39 .sum .make span{
    position: absolute;
    top: 105px;
    left: 64px;
    color: #ccc;
    font-size:@ss-size;
}
.container39 .sum .see p{
    position: absolute;
    top: 99px;
    left: 119px;
    color: @black;
    font-size:@lg-size;
}
.container39 .sum .see span{
    position: absolute;
    top: 105px;
    left: 158px;
    color: #ccc;
    font-size:@ss-size;
}
</style>
