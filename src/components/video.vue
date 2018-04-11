<template>
    <div class="con3536">
        <Header/>
        <div class="container35">
            <div class="container36">
                    <div>
                        <p class="one">元宵节猜灯谜</p>
                        <p class="two">分享于：2018.03.02</p>
                        <p class="three">已有339次浏览</p>
                    </div>
                    <div>
                        <img class="cat01" src="../assets/Video/cat01.png" alt="">
                        <p class="four">2018</p>
                        <img class="jia" src="../assets/Video/jia.png" alt="">
                        <p class="atten">关注</p>
                    </div>
                    <div>
                        <img class="love" src="../assets/Video/love.png" alt="">
                        <img class="star" src="../assets/Video/star.png" alt="">
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
                        
                        <iframe class="video" frameborder="0" id="myFrameId" :src="'static/js/snap.html#run:/codeplay/file/'+this.$store.state.demoxmlid+'.xml'" name="myFrameName"></iframe>
                </div>
                <div class="mydemo_frame">
                <router-link class="Myvideo" to="/Video/Myvideo">Ta的作品</router-link>
                <router-link class="Lovevideo" to="/Video/Lovevideo">推荐作品</router-link>
                </div>
                
            </div>
                <router-view></router-view>
            <div class="comment">
                <div class="commitbox">
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
            demoxml:'',
            item:{
                // url:"static/js/snap.html#present:Username=jens&ProjectName=tree%20animation"
                url:'https://www.baidu.com/'
            }
        }
    },
    mounted(){
        this.loadproject()
        console.log(123)
    },
    methods:{
        loadproject(){
            console.log(666)
        this.axios.post('/res/getfile',{
            id:this.$store.state.demoxmlid,
        })
        .then(response => {                          
            this.demoxml = response.data
            console.log(response)
            console.log(this.demoxml)
            console.log(this.$store.state.demoxmlid)
             window.frames["myFrameName"].ide.droppedText(this.demoxml,'HHH') 
        })
        // window.frames["snap"].ide.droppedText(this.demoxml,'HHH') 
        // window.frames["snap"].ide.droppedText(this.$store.state.demoxml,'HHH') 
    },
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
    background: url(../assets/Lesson/Lesson_bg.png);
}
.container35{
    margin: 0 auto;
    height: 850px;
    width: 1000PX;
    z-index: -1;
}
.con3536 .container003{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -6.4rem;
}
.container35 .container36{
    width: 1000px;
    height: 132px;
    position: absolute;
    top: 80px;
    background: #fff;
    z-index: 10;
}
.container36 .one{
    height: 25px;
    width: 144px;
    color: #43455a;
    font-size: 24px;
    position: relative;
    top: 30px;
    left: 30px;
}
.container36 .two{
    height: 12px;
    width: auto;
    color: #7b7d8b;
    font-size: 14px;
    position: relative;
    top: 42px;
    left: -400px;
}
.container36 .three{
    height: 13px;
    width: auto;
    color: #43455A;
    font-size: 14px;
    position: relative;
    top: 56px;
    left: -400px;
}
.container36 .cat01{
    position: absolute;
    top: 40px;
    left: 449px;
}
.container36 .four{
    position: absolute;
    top: 40px;
    left: 512px;
    color:#43455A;
    font-size: 18px;
}
.container36 .jia{
    position: absolute;
    top: 80px;
    left: 512px;
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
    top: 48px;
    left: 720px;
    cursor: pointer;
}
.container36 .star{
    position: absolute;
    top: 44px;
    left: 790px;
    cursor: pointer;
}
.container36 .buycode{
    position: absolute;
    top: 40px;
    left: 856px;
    border: none;
    height: 37px;
    width: 105px;
    color: #fff;
    background: #5bc4ea;
    border-radius: 15px;
    cursor: pointer;
}
.container36 .buy{
    position: absolute;
    top: 83px;
    left: 876px;
    border: none;
    color: #0078D7;
    border-radius: 15px;
    font-size: 12px;
}
.container35 .video{
    width: 623px;
    height: 524px;
    position: absolute;
    top:0px; 
    left: 0px;
    z-index: 2;
}
.mydemo_framebox{
    height: 523px;
    width: 1000px;
    margin: 0 auto;
    position: relative;
    top: 228px;
}
.container35  .mydemo_frame{
    position: absolute;
    left: 654px;
    top: 0px;  
    height: 523px;
    width:345px;
    background:#fff;
}
.container35  .mydemo_frame .Myvideo{
    position: absolute;
    left: -48px;
    top:19px;  
    height: 523px;
    width:345px;
    color: #60A1F0;
    font-size: 14px;
}
/* .container35  .videocanvas img{
   width: 100%;
   height: 100%;
} */
/* .container35 .videocanvas{
    position: relative;
    left: 0px;
    top:234px;  
    color: #60A1F0;
    font-size: 14px;
    height: 513px;
    width:605px;
} */
.container35  .mydemo_frame .Lovevideo{
    position: absolute;
    left: 231px;
    top:19px;  
    color: #60A1F0;
    font-size: 14px;
}
.container35 .comment{
    width: 100%;
    height: 182px;
    background: #fff;
    position: absolute;
    top: 771px;
    left: 0px;
}
.container35 .commitbox{
    width: 1000px;
    height: 182px;
    background: #fff;
    margin: 0 auto;
    position: relative;
}
.container35 .comment .explain{
    height: 17px;
    width:auto;
    font-size: 18px;
    color: #43455a;
    position: absolute;
    top: 34px;
    left: 0px;
}
.container35 .comment .explaintext{
    height: 14px;
    width:auto;
    font-size: 14px;
    color: #43455a;
    position: absolute;
    top: 66px;
    left: 0px;
}
.container35 .comment .qrshare{
    width:auto;
    font-size: 14px;
    color: #43455a;
    position: absolute;
    top: 42px;
    left: 720px;
}
.container35 .comment .qrsharetext{
    width:auto;
    font-size: 14px;
    position: absolute;
    top: 42px;
    left: 860px;
}
.container35 .avideo button{
    position: relative;
    background: #5bc4ea;
    width: 346px;
    height: 30px;
    top: 591px;
    left: 326px;
    border: none;
    cursor: pointer;
}
.container35 .avideo button:hover{
   background: #60A1F0;
}
</style>
