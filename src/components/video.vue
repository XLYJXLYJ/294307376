<template>
    <div class="con3536">
        <Header/>
        <div class="container35">
            <div class="container36">
                <div>
                    <p class="one">{{list.title}}</p>
                    <p class="two">分享于：{{list.publishtime|formatDate}}</p>
                    <p class="three">已有{{list.looktotal}}次浏览</p>
                </div>
                <div>
                    <router-link to="/User">
                        <img class="cat01" :src="'data:image/png;base64,'+imgBuffer" alt="" @click="lookusersdes" v-show="videoimg01">
                        <img class="cat01" src="static/localpic.png" alt="" @click="lookusersdes" v-show="videoimg02">
                        <p class="four" @click="lookusersdes">{{list.name}}</p>
                    </router-link>
                    <div :class='{"jia":!isAttention,"jia1":isAttention}' @click="jia"></div>
                </div>
                <div>
                    <div :class='{"love":!isPraise,"love1":isPraise}' @click="love"  title='点赞'><span class="lovenum">{{list.praisetotal}}</span></div>
                    <div :class='{"star":!isCollect,"star1":isCollect}' @click="star" title='收藏'><span class="starnum">{{list.collecttotal}}</span></div>
                    <!-- <button class="buycode">购买代码</button>
                    <span class="buy">已有4人购买</span> -->
                    <!-- <a class="avideo" href="http://localhost:8080/static/js/snap.html#present:Username=jens&ProjectName=tree%20animation" target="myFrameName"><button>点击播放</button></a> -->
                </div>
            </div>
            <!-- <div class="videocanvas"><img src="../assets/Video/video.png" alt=""></div> -->
            <div class="mydemo_framebox">
                <div>
                    <!-- <a href="http://localhost:8080/static/js/snap.html#present:Username=jens&ProjectName=tree%20animation"></a> -->
                    <!-- <a href="https://www.baidu.com/" target="_blank">点击播放百度</a> -->
                    <!-- <iframe class="video" frameborder="0" src="static/player/index.html" id="myFrameId"  name="snapplay" width="767" height="575"></iframe> -->
                    <!-- <iframe class="video" frameborder="0" src="static/ceshi/snap.html" id="myFrameId"  name="snapplay" width="767" height="575"></iframe> -->
                    <!-- <iframe class="video" frameborder="0" :src="'static/ceshi/snap.html#run:'+demoxml+'.xml'" id="myFrameId"  name="snapplay" width="767" height="575"></iframe> -->
                    <iframe class="video" frameborder="0" :src="'static/snap/playersnap.html#present:Username=Lynn&ProjectName='+demoid" id="myFrameId"  name="snapplay" width="767" height="575"></iframe>
                    <!-- <iframe class="video" frameborder="0" id="myFrameId" :src="'static/snap/snap.html#run:/codeplay/file/'+demoid+'.xml'" name="myFrameName"></iframe> -->
                </div>
                <div class="mydemo_frame">
                    <router-link class="Myvideo" to="/Video/Myvideo">Ta的作品</router-link>
                    <router-link class="Lovevideo" to="/Video/Lovevideo">推荐作品</router-link>
                </div>   
            </div>
            <router-view></router-view>
        </div>   
        <div class="comment">
            <div class="comment01">
                <div>
                    <p class="explain">作品说明:</p>
                    <span class="explaintext">{{list.desc}}</span>
                </div>
                <div>
                    <div class="home-container">
                        <div class="qrshare">
                            <canvas id="qrccode" height="117" width="117" style="height: 117px!important;width: 117px;"></canvas>
                        </div>
                        <div class="btn-wrap">
                            <textarea type="textarea" v-model="bannerUrl"></textarea>
                        </div>
                    </div>
                    <div class="qrsharetext">
                        <button @click="shareVideo">全屏播放</button>
                        <!-- <p>or</p> -->
                        <span>扫码在手机上玩</span>
                    </div>
                </div>
            </div>
        </div> 

        <!-- 模态框 -->      
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogVideo"  width="1200px" height="600px" style="background: black" :modal="true" :modal-append-to-body="false" :lock-scroll="false" :show-close="false">
                    <iframe class="videoiframe" style="height:550px;width:1196px;" :src="'static/snap/playersnap.html#present:Username=Lynn&ProjectName='+demoid" ></iframe>   
            </el-dialog> 
        </transition>  
   
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import { formatDate } from '../public/time.js'
var QRCode = require('qrcode')//二维码生成插件
var canvas = '';
export default{
    filters: {//时间过滤器
        formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
    },
    data(){
        return{
            dialogVideo: false,//控制模态框显示隐藏变量
            list:[
                {collecttotal:''},//收藏量
                {praisetotal:''},//点赞
            ],
            isAttention:'',//是否关注
            isCollect:'',//是否收藏
            isPraise:'',//是否点赞
            authid:'',//作者id
            demoid:'',//作品id
            bannerUrl: '',//分享链接
            demoxml:'',//作品数据
            publishtime:'',//发布时间
            lookuserdes:'',//赋值sessionStorage作者id
            videoimg01:'',//控制用户头像是否显示
            videoimg02:'',//控制默认头像是否显示
            imgBuffer:'',//用户自选头像imgbuffer
        }
    },
    created(){
        this.loadproject()
    },
    mounted(){
        this.recommendRoute()
        this.loadprojectplay()
        this.$store.state.shareid = sessionStorage.id  
    },
    
    methods:{
        //分享按钮函数
        shareVideo(){
             this.dialogVideo=true
        },
        //赋值作品的作者id给sessionStorage,用于跳转到个人中心获取数据
        lookusersdes(){
            sessionStorage.lookuserdes = this.authid
        },
        // 加载默认路由
        shareid(){
            if(this.$route.path==='/video'){  
                this.$store.state.shareid = sessionStorage.id  
            }
        },
        //路由跳转
        recommendRoute(){
            this.$router.push({ name: 'Lovevideo' })
        },
        //加载默认数据
        loadproject(){
            // if(sessionStorage.userid!=='unfined')
            this.axios.post('/res/getfile',{
                userid:sessionStorage.userid,
                id:sessionStorage.id,
                state:3
            })
            .then(response => {                        
                this.list = response.data.data
                this.imgBuffer= response.data.data.imgBuffer
                this.isCollect = response.data.data.isCollect
                this.isPraise = response.data.data.isPraise
                this.isAttention= response.data.data.isAttention
                this.publishtime= response.data.data.publishtime
                this.$store.state.authid= response.data.data.authid//赋值全局的作者名称
                this.authid= response.data.data.authid//赋值video的作者名称
                this.demoid = sessionStorage.id 
                this.bannerUrl = 'http://www.manykit.com/codeplay/static/snap/playersharesnap.html#present:Username='+ this.authid +'&ProjectName='+this.$store.state.shareid
                //  this.bannerUrl = 'localhost:8080/static/snap/playersharesnap.html#present:Username=10004&ProjectName=20'
                this.$nextTick(function () {//生成二维码
                    canvas = document.getElementById('qrccode')
                    this.createQrc()
                })
                if(this.list.imgBuffer){
                    this.videoimg01 = true,
                    this.videoimg02 = false
                }else{
                    this.videoimg01 = false,
                    this.videoimg02 = true
                }
            }) 
           
        },
        // 播放文件获取数据
        loadprojectplay(){
             this.axios.post('/res/getfile',{
                id:sessionStorage.id,
            })
            .then(response => {                          
               this.demoxml = response.data  

            //    console.log(this.demoxml)
            //    console.log(this.$store.state.demoxmlid)
            // window.frames["snapplay"].ide.droppedText(this.demoxml,'OPEN') 
            // window.frames["snapplay"].ide.openProjectString(this.demoxml) 
            //  window.frames["snapplay"].ide.openUserProject(this.demoxml)
            // window.frames["snapplay"].ide.droppedText(this.demoxml,'OPEN')  
            
            })
            // window.frames["snapplay"].ide.openProjectString(this.demoxml) 
        },
        // loadprojectplay(){
        //     return new Promise((resolve,reject) =>{
        //         this.axios.post('/res/getfile',{
        //             id:this.$store.state.shareid,
        //         })
        //         .then(function(response) { 
        //             resolve(response.data)                         
        //         this.demoxml = response.data  
        //         console.log(this.$store.state.demoxmlid)
        //         window.frames["snapplay"].ide.droppedText(response.data,'O') 
                
        //         })
        //     })
        //     .then(function(s){
        //      window.frames["snapplay"].ide.openProjectString(s) 
        //     window.frames["snapplay"].ide.openProjectString(s) 
        //     this.loadxml(s)
        //     window.frames["snapplay"].ide.toggleAppMode(true)
        //     window.frames["snapplay"].ide.droppedText(response.data,'O') 
        //      window.frames["snapplay"].ide.toggleAppMode(true)
             
             
        // }) 
        // },
        // loadxml(s){
        //     window.frames["snapplay"].ide.openProjectString(s) 
        // },

        // 点赞
        love(){  
            if(this.$store.state.userid){
                if(!this.isPraise){
                    this.list.praisetotal++; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:3,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                           
                    })
                }else{
                    this.list.praisetotal--; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:4,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                           
                    })
                }
                this.isPraise = !this.isPraise
            }else{
                    this.$message({
                    message: '请先登录',
                    center: true,
                });
            }
        },
        // 收藏
        star(){
            if(this.$store.state.userid){
                if(!this.isCollect){
                    this.list.collecttotal++; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:1,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            
                    })
                }else{
                    this.list.collecttotal--; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:2,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            
                    })
                }
                this.isCollect= !this.isCollect
            }else{
                    this.$message({
                    message: '请先登录',
                    center: true,
                });
            }
        },
        // 关注
        jia(){
            if(this.$store.state.userid){
                this.isAttention = !this.isAttention
                if(this.isAttention){
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:5,
                            attentionid:this.authid
                        })
                        .then(response => {           
                           
                    })
                }else{
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:6,
                            attentionid:this.authid
                        })
                        .then(response => {           
                            
                    })
                }
            }else{
                    this.$message({
                    message: '请先登录',
                    center: true,
                });
            }
        },     
        // 自动生成二维码
        createQrc () {
            if (!this.bannerUrl) {
                window.alert('链接不能为空')
                return false
            }
            QRCode.toCanvas(canvas, this.bannerUrl, (error) => {
                if (error) {
                console.log(error)
                } else {
                
                }
            })
        },
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped lang="less">
@import '../assets/index.less';
// .el-dialog__body{
//     margin: 0px;
//     padding: 0px;
// }
.con3536{
    width: 100%;
    background: @mainbg-color;
}
.container35{
    margin: 0 auto;
    height: 934px;
    width: 1200PX;
    z-index: -1;
}
.container35 .container36{
    width: 1200px;
    height: 158px;
    position: absolute;
    top: 139px;
    background: @background-color;
    z-index: 10;
}
.container36 .one{
    height: 28px;
    width: 268px;
    color: #43455a;
    font-size:@lllg-size;
    position: relative;
    top: 34px;
    left: 36px;
}
.container36 .two{
    height: 12px;
    width: 250px;
    color: #7b7d8b;
    font-size:@xm-size;
    position: relative;
    top: 54px;
    left: 36px;
}
.container36 .three{
    height: 17px;
    width: 109px;
    color: #43455A;
    font-size:@xm-size;
    position: relative;
    top: 73px;
    left: 35px;
}
.container36 .cat01{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 49px;
    left: 540px;
    box-shadow:0px 3px 5px @shadow-color; 
    border-radius: 40px;
}
.container36 .four{
    position: absolute;
    top: 53px;
    left: 614px;
    color:#43455A;
    font-size:@llg-size;
}
.container36 .jia{
    position: absolute;
    top: 94px;
    left: 614px;
    height: 16px;
    width: 82px;
    background: url(../assets/Video/guanzhu1.png) no-repeat;
    cursor: pointer;
}
.container36 .jia1{
    position: absolute;
    top: 94px;
    left: 614px;
    height: 16px;
    width: 82px;
    background: url(../assets/Video/guanzhu.png) no-repeat;
    cursor: pointer;
}
.container36 .atten{
    position: absolute;
    top: 78px;
    left: 529px;
    color: #ffca32;
    font-size:@ss-size;
    cursor: pointer;
}
.container36 .love{
    position: absolute;
    width: 36px;
    height: 32px;
    background: url(../assets/Video/love.png) no-repeat;
    top: 52px;
    left: 863px;
    cursor: pointer;
}
.container36 .lovenum{
    position: relative;
    top: 30px;
    left: 14px;
    cursor: pointer;
    font-size:@xm-size;
    width: 28px;
    height: 28px;
    text-align: center;
}
.container36 .love1{
    position: absolute;
    width: 36px;
    height: 32px;
    background: url(../assets/Video/love1.png) no-repeat;
    top: 52px;
    left: 863px;
    cursor: pointer;
}
.container36 .star{
    position: absolute;
    top: 47px;
    left: 946px;
    width: 38px;
    height: 36px;
    background: url(../assets/Video/star.png) no-repeat;
    cursor: pointer;
}
.container36 .starnum{
    position: relative;
    top: 35px;
    left: 14px;
    font-size:@xm-size;
    width: 28px;
    height: 28px;
    text-align: center;
    cursor: pointer;
}
.container36 .star1{
    position: absolute;
    top: 47px;
    left: 946px;
    width: 38px;
    height: 36px;
    background: url(../assets/Video/star1.png) no-repeat;
    cursor: pointer;
}
/* .container36 .buycode{
    position: absolute;
    top: 48px;
    left: 1036px;
    border: none;
    height: 44px;
    width: 102px;
    color: @background-color;
    background: @main-color;
    cursor: pointer;
}
.container36 .buy{
    position: absolute;
    top: 99px;
    left: 1051px;
    border: none;
    color: @main-color;
    font-size:@ss-size;
} */
.container35 .video{
    width: 767px;
    height: 575px;
    position: absolute;
    top:0px; 
    left: 0px;
    z-index: 2;
    background: @background-color;
}
.container35 .mydemo_framebox{
    height: 627px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    top: 317px;
        overflow-y:visible;
}
.container35 .mydemo_framebox img{
    width: 100%;
    height: 100%;
}
.container35  .mydemo_frame{
    position: absolute;
    left: 786px;
    top: 0px;  
    height: 575px;
    width:414px;
    background: @background-color;
}
.container35  .mydemo_frame .Myvideo{
    position: absolute;
    left: 70px;
    top:22px;  
    color: #7E7E7E;
    font-size:@xm-size;
}
.container35  .mydemo_frame .Lovevideo{
    position: absolute;
    left: 281px;
    top:22px;  
    color: #7E7E7E;
    font-size:@xm-size;
}
.con3536 .comment{
    width: 100%;
    height: 182px;
    position: relative;
    background: @background-color;
    top: 0px;
    left: 0px;
    z-index: 0;
}
.con3536 .comment01{
    margin: 0 auto;
    width: 1200px;
    height: 182px;
    z-index: 1000;
    position: relative;
}
.con3536 .comment01 .explain{
    height: 22px;
    width:auto;
    font-size:@llg-size;
    color: #43455a;
    position: absolute;
    top: 47px;
    left: 0px;
}
.con3536 .comment01 .explaintext{
    height: 84px;
    width:780px;
    font-size:@xm-size;
    color: #43455a;
    position: absolute;
    top: 85px;
    left: 0px;
    word-wrap: break-word;
    overflow-y: hidden;
}
.con3536 .comment01 .qrshare{
    width:117px;
    height: 117px;
    position: absolute;
    top: 20px;
    left: 861px;
    z-index: 1000;
}
.con3536 .comment01 .qrsharetext{
    width:140px;
    height: 87px;
    position: absolute;
    top: 45px;
    left: 1050px;
}
.con3536 .comment01 .qrsharetext button{
    width:70px;
    height: 38px;
    position: absolute;
    top: 0px;
    left: 30px;
    background: @main-color;
    color:@background-color;
    border: none;
}
.con3536 .comment01 .qrsharetext span{
    width:140px;
    height: 38px;
    position: absolute;
    top: 74px;
    left: 0px;
    color: #43455a;
    font-size:@md-size;
    padding-left: 20px;
    background: url(../assets/Video/jiantou.png) no-repeat 0px 5px;
}
.con3536 .comment01 .qrsharetext p{
    width:19px;
    height: 12px;
    position: absolute;
    top: 46px;
    left: 55px;
    color: #b1b2ba;
    font-size:@md-size;
}

.con3536 .comment01 .qrsharetext button:hover{
    border: 2px solid #c51c1c;
    cursor: pointer;
}
#qrccode{
    width:137px!important;
    height: 137px!important;
}
.btn-wrap {
    width: 0px;
    height: 0px;
    margin: 0 auto;
}
.btn-wrap textarea{
    opacity: 0;
}
.container35  .mydemo_frame .router-link-active{
    text-decoration: none;
    color: @main-color;
}

.container3536 .videoiframe{
    // position:absolute;
    // width: 1200px!important;
    // height: 100%!important;
}
</style>
