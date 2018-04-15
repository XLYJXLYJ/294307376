<template>
    <div class="container39">
        <div>
            <div>
                <img class="head" src="../../assets/user/head.png" alt="">
                <p class="name">{{$store.state.usernamesession02}}</p>
                <p class="atten">编程达人</p>
            </div>
            <div>
                <button class="attenbutton01" @click="Postuseinfo"><p>保存</p></button>
                <!-- <button :class='{"attenbutton01":buttoncolor,"attenbutton02":!buttoncolor}' @click="attenbutton"><p>{{ atten?'关注':'取消关注' }}</p></button> -->
            </div>
        </div>
        <div class="aboutbox">
            <p class="aboutme">关于我</p>
            <textarea class="aboutmetext" name="" id="" cols="30" rows="10" v-model="aboutme"></textarea>
        </div>
         <div class="doing">
            <p class="medoing">我正在做什么</p>
            <textarea class="medoingtext" name="" id="" cols="30" rows="10"  v-model="doing"></textarea>
        </div>
        <div>
            <div>
                <img class="userdemo" src="../../assets/user/bg01.png" alt="">
                <div class="makedemotext"><a href="">创作</a><p>你的封面作品</p> <br/><span>还没有封面作品</span></div>
            </div>
            
            <p class="name01">封面作品</p>
            <p class="atten01">暂无作品</p>
        </div>
        <div class="sum">
            <p class="sum01">你的作品已经累积获得了:</p>
            <div class="good"><p>100</p><span>个赞</span></div>
            <div class="store"><p>100</p><span>个收藏</span></div>
            <div class="make"><p>100</p><span>次再创作</span></div>
            <div class="see"><p>100</p><span>次浏览</span></div>
        </div>
        <div class="mydy">我的动态</div>
  </div>
</template>
<script>
import Vue from 'vue'
    export default{
        data(){
            return{
                 atten:true,
                 buttoncolor:true,
                 listdemo:'',
                 postlistdemo:'',
                 aboutme:'',
                 doing:''
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
            attenbutton(atten){
                this.buttoncolor=!this.buttoncolor
                this.atten=!this.atten;
            },
            Getuseinfo(){
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        getinfostate:2
                    })
                    .then(response => {           
                        this.aboutme = response.data.data.aboutme,
                        this.doing = response.data.data.doing
                })
            },
            Postuseinfo(){
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:2,
                        aboutme:this.aboutme,
                        doing:this.doing
                    })
                    .then(response => {           
                        this.postlistdemo = response.data
                        // console.log(response.data.data)
                })
            }
        }
    }
</script>
<style>
.container39{
    width:1200px;
    height: 655px;
    background: #fff;
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
}
.container39 .name{
    width:128px;
    height: 30px;
    position: absolute;
    top: 17px;
    left: 102px; 
    color: #F13232;
    font-size: 28px;  
    font-weight: 600;
}
.container39 .atten{
    width:104px;
    height: 23px;
    position: absolute;
    top: 55px;
    left: 103px; 
    color: #fff;
    font-size: 18px;  
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
    color: #fff;
    font-size: 16px;  
    font-weight: 600;
    border: none;
    background: #F13232;
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
    color: #333;
    font-size: 22px;
}
.container39 .aboutmetext{
    position: absolute;
    top: 37px;
    left: 0px;
    width: 345px;
    height: 180px;
    color: #A9A9A9;
    font-size: 18px;
    background: #F5F5F5; 
    border: 2px dashed #d5d3cd;
    border-radius: 10px;
    text-indent: 1rem;
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
    color: #333;
    font-size: 22px;
}
.container39 .medoingtext{
    position: absolute;
    top: 37px;
    left: 0px;
    width: 345px;
    height: 180px;
    color: #A9A9A9;
    font-size: 18px;
    background: #F5F5F5; 
    border: 2px dashed #d5d3cd;
    border-radius: 10px;
    text-indent: 1rem;
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
    font-size: 16px;
    color: #F13232;  
}
.container39 .makedemotext p{
    position: absolute;
    font-size: 16px;
    left: 92px;
    color: #3d4245;  
}
.container39 .makedemotext span{
    color: #999;
    font-size: 16px;
    position: absolute;
    font-size: 14px;
    left: 74px;
}
.container39 .name01{
    position: absolute;
    top: 123px;
    left: 435px;
    color: #333;
    font-size: 22px;
}
.container39 .atten01{
    position: absolute;
    top: 429px;
    left: 518px;
    color: #000;
    font-size: 16px;
}
.container39 .sum{
    position: absolute;
    width: 251px;
    height: 137px;
    left: 425px;
    top: 460px;
    border: 1px solid #e5e1d9;
    background: #F5F5F5;
}
.container39 .mydy{
    position: absolute;
    width: 90px;
    height: 22px;
    left: 760px;
    top: 124px;
    color: #333;
    font-size: 22px;
}
.container39 .sum .sum01{
    position: absolute;
    width: 196px;
    height: 17px;
    left: 27px;
    top: 23px;
    color: #ccc;
    font-size: 16px;
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
    color: #000;
    font-size: 20px;
}
.container39 .sum .good span{
    position: absolute;
    left: 36px;
    top: 6px;
    color: #ccc;
    font-size: 12px;
}
.container39 .sum .store p{
    position: absolute;
    top: 58px;
    left: 119px;
    width: auto;
    color: #000;
    font-size: 20px;
}
.container39 .sum .store span{
    position: absolute;
    top: 63px;
    left: 154px;
    color: #ccc;
    font-size: 12px;
}
.container39 .sum .make p{
    position: absolute;
    top: 99px;
    left: 28px;
    color: #000;
    font-size: 20px;
}
.container39 .sum .make span{
    position: absolute;
    top: 105px;
    left: 64px;
    color: #ccc;
    font-size: 12px;
}
.container39 .sum .see p{
    position: absolute;
    top: 99px;
    left: 119px;
    color: #000;
    font-size: 20px;
}
.container39 .sum .see span{
    position: absolute;
    top: 105px;
    left: 154px;
    color: #ccc;
    font-size: 12px;
}
</style>
