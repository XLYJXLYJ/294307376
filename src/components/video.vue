<template>
    <div class="con3536">
        <Header/>
        <div class="container35">
            <div class="container36">
                    <div>
                        <p class="one">{{list.title}}</p>
                        <p class="two">分享于：2018.03.02</p>
                        <p class="three">已有339次浏览</p>
                    </div>
                    <div>
                        <img class="cat01" src="../assets/Video/cat01.png" alt="">
                        <p class="four">{{list.name}}</p>
                        <div :class='{"jia":!isAttention,"jia1":isAttention}' @click="jia"></div>
                    </div>
                    <div>
                        <div :class='{"love":!isPraise,"love1":isPraise}' @click="love"><span class="lovenum">{{list.praisetotal}}</span></div>
                        <div :class='{"star":!isCollect,"star1":isCollect}' @click="star"><span class="starnum">{{list.collecttotal}}</span></div>
                        <button class="buycode">购买代码</button>
                        <span class="buy">已有4人购买</span>
                        <!-- <a class="avideo" href="http://localhost:8080/static/js/snap.html#present:Username=jens&ProjectName=tree%20animation" target="myFrameName"><button>点击播放</button></a> -->
                    </div>
            </div>
            <!-- <div class="videocanvas"><img src="../assets/Video/video.png" alt=""></div> -->
            <div class="mydemo_framebox">
                <div>
                        <!-- <a href="http://localhost:8080/static/js/snap.html#present:Username=jens&ProjectName=tree%20animation"></a> -->
                        <!-- <a href="https://www.baidu.com/" target="_blank">点击播放百度</a> -->
                        
                        <iframe class="video" frameborder="0" id="myFrameId" :src="'static/snap/snap.html#run:/codeplay/file/'+demoid+'.xml'" name="myFrameName"></iframe>
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
                        <p class="explain">作品说明</p>
                        <span class="explaintext">猜灯谜，闹元宵，欢乐就在编程玩</span>
                    </div>
                    <div>
                        <img class="qrshare" src="../assets/video/qrshare.png" alt="">
                        <img class="qrsharetext" src="../assets/video/qrsharetext.png" alt="">
                    </div>
                </div>
        </div>      
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
export default{
    data(){
        return{
            list:[
                {collecttotal:''},
                {praisetotal:''},

            ],
            isAttention:'',
            isCollect:'',
            isPraise:'',
            authid:'',
            demoid:'',
            item:{
                // url:"static/js/snap.html#present:Username=jens&ProjectName=tree%20animation"
                url:'https://www.baidu.com/'
            }
        }
    },
    mounted(){
        this.loadproject(),
        this.demoid = sessionStorage.id
    },
    methods:{
        loadproject(){
            // if(sessionStorage.userid!=='unfined')
            this.axios.post('/res/getfile',{
                userid:sessionStorage.userid,
                id:sessionStorage.id,
                state:3
            })
            .then(response => {                          
                this.list = response.data.data
                this.isCollect = response.data.data.isCollect
                this.isPraise = response.data.data.isPraise
                this.isAttention= response.data.data.isAttention
                this.authid= response.data.data.authid
            }) 
        },
        love(){  
            if(this.$store.state.userid){
                if(!this.isPraise){
                    this.list.praisetotal++; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:1,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            console.log(response)
                    })
                }else{
                    this.list.praisetotal--; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:2,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            console.log(response)
                    })
                }
                this.isPraise = !this.isPraise
                console.log(this.isPraise+'222')
            }else{
                    this.$message({
                    message: '请先登录',
                    center: true,
                });
            }
        },
        star(){
            if(this.$store.state.userid){
                if(!this.isCollect){
                    this.list.collecttotal++; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:3,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            console.log(response)
                    })
                }else{
                    this.list.collecttotal--; 
                    this.axios.post('/res/useropreate',{
                            userid:sessionStorage.userid,
                            state:4,
                            id:sessionStorage.id,
                        })
                        .then(response => {           
                            console.log(response)
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
        jia(){
            this.isAttention = !this.isAttention
            if(this.isAttention){
                   this.axios.post('/res/useropreate',{
                        userid:sessionStorage.userid,
                        state:5,
                        attentionid:this.authid
                    })
                    .then(response => {           
                        console.log(response)
                })
            }else{
                   this.axios.post('/res/useropreate',{
                        userid:sessionStorage.userid,
                        state:6,
                        attentionid:this.authid
                    })
                    .then(response => {           
                        console.log(response)
                })
            }
            
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style>
.con3536{
    width: 100%;
    background: #F5F5F5;
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
    background: #fff;
    z-index: 10;
}
.container36 .one{
    height: 28px;
    width: 168px;
    color: #43455a;
    font-size: 28px;
    position: relative;
    top: 34px;
    left: 36px;
}
.container36 .two{
    height: 12px;
    width: 150px;
    color: #7b7d8b;
    font-size: 16px;
    position: relative;
    top: 54px;
    left: 36px;
}
.container36 .three{
    height: 17px;
    width: 109px;
    color: #43455A;
    font-size: 16px;
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
}
.container36 .four{
    position: absolute;
    top: 53px;
    left: 614px;
    color:#43455A;
    font-size: 22px;
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
    font-size: 12px;
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
    top: 28px;
    left: 10px;
    cursor: pointer;
    font-size: 16px;
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
    top: 33px;
    left: 10px;
    font-size: 16px;
    width: 28px;
    height: 28px;
    text-align: center;
    cursor: pointer;
}
.container36 .star1{
    position: absolute;
    top: 47px;
    left: 946px;
    width: 30px;
    height: 28px;
    background: url(../assets/Video/star1.png) no-repeat;
    cursor: pointer;
}
.container36 .buycode{
    position: absolute;
    top: 48px;
    left: 1036px;
    border: none;
    height: 44px;
    width: 102px;
    color: #fff;
    background: #F13232;
    cursor: pointer;
}
.container36 .buy{
    position: absolute;
    top: 99px;
    left: 1051px;
    border: none;
    color: #F13232;
    font-size: 12px;
}
.container35 .video{
    width: 767px;
    height: 575px;
    position: absolute;
    top:0px; 
    left: 0px;
    z-index: 2;
}
.container35 .mydemo_framebox{
    height: 627px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    top: 317px;
}
.container35  .mydemo_frame{
    position: absolute;
    left: 786px;
    top: 0px;  
    height: 575px;
    width:414px;
    background:#fff;
}
.container35  .mydemo_frame .Myvideo{
    position: absolute;
    left: 70px;
    top:22px;  
    color: #7E7E7E;
    font-size: 16px;
}
.container35  .mydemo_frame .Lovevideo{
    position: absolute;
    left: 281px;
    top:22px;  
    color: #7E7E7E;
    font-size: 16px;
}
.con3536 .comment{
    width: 100%;
    height: 182px;
    position: relative;
    background: #fff;
    top: 0px;
    left: 0px;
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
    font-size: 22px;
    color: #43455a;
    position: absolute;
    top: 47px;
    left: 0px;
}
.con3536 .comment01 .explaintext{
    height: 17px;
    width:auto;
    font-size: 16px;
    color: #43455a;
    position: absolute;
    top: 85px;
    left: 0px;
}
.con3536 .comment01 .qrshare{
    width:auto;
    font-size: 14px;
    color: #43455a;
    position: absolute;
    top: 34px;
    left: 864px;
}
.con3536 .comment01 .qrsharetext{
    width:auto;
    font-size: 14px;
    position: absolute;
    top: 56px;
    left: 1050px;
}
</style>
