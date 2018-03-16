<template>
    <div>
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
                    </div>
                </div>
                <div class="video"></div>
                <div class="videocontrol">
                    <img class="loop" src="../assets/Video/loop.png" alt="">
                    <img class="love02" src="../assets/Video/love.png" alt="">
                    <img class="enlarge" src="../assets/Video/enlarge.png" alt="">
                </div>
                <div class="comment">
                    <div>
                        <p>作品说明</p>
                        <span>猜灯谜，闹元宵，欢乐就在编程玩</span>
                    </div>
                    <div>
                        <img src="" alt="">
                        <button>分享</button>
                        <span>or</span>
                        <i></i><span>扫码在手机上玩</span>
                    </div>
                </div>
                <div class="mydemo_frame">
                <router-link class="Myvideo" to="/Myvideo">Ta的作品</router-link>
                <router-link class="Lovevideo" to="/Lovevideo">推荐作品</router-link>
                </div>
                <router-view></router-view>     
                <Footer/>
        </div>
    </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
export default{
    components:{
        Header,
        Footer
    }
}
</script>
<style>
.container35{
    position: absolute;
    left: 0px;
    top: 60px;
    height: 850px;
    width: 100%;
    background: url(../assets/Lesson/Lesson_bg.png) no-repeat;
    z-index: -1;
}
.container35 .container03{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -367px;
}
.container35 .container36{
    width: 1000px;
    height: 132px;
    position: absolute;
    top: 20px;
    left: 460px;
    background: #fff;
    z-index: -1;
}
.container36 .one{
    height: 25px;
    width: 144px;
    color: #43455a;
    font-size: 24px;
    position: absolute;
    top: 30px;
    left: 30px;
}
.container36 .two{
    height: 12px;
    width: auto;
    color: #7b7d8b;
    font-size: 14px;
    position: absolute;
    top: 69px;
    left: 30px;
}
.container36 .three{
    height: 13px;
    width: auto;
    color: #43455A;
    font-size: 14px;
    position: absolute;
    top: 90px;
    left: 30px;
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
}
.container36 .love{
    position: absolute;
    top: 48px;
    left: 720px;
}
.container36 .star{
    position: absolute;
    top: 44px;
    left: 790px;
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
    width: 640px;
    height: 480px;
    position: absolute;
    left: 460px;
    top: 168px;
    background: blue;
    z-index: 2;
}
.container35 .videocontrol{
    width: 640px;
    height: 43px;
    position: absolute;
    left: 460px;
    top: 648px;
    background: #fff;
    z-index: 2;
}
.container35 .videocontrol .loop{
    position: absolute;
    left: 19px;
    top: 8px;  
}
.container35 .videocontrol .love02{
    position: absolute;
    left: 534px;
    top: 12px;  
}
.container35 .videocontrol .enlarge{
    position: absolute;
    left: 599px;
    top: 12px;  
}
.container35  .mydemo_frame{
    position: absolute;
    left: 1114px;
    top: 167px;  
    height: 523px;
    width:345px;
    background:#fff;
}
.container35  .mydemo_frame .Myvideo{
    position: absolute;
    left: 58px;
    top:19px;  
    color: #60A1F0;
    font-size: 14px;
}
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
    top: 712px;
}
</style>
