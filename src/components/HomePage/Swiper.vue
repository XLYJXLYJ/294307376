<template>
    <div class="contain08">
        <div class="container09">
            <!-- <el-carousel :interval="3000">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index"> -->
                    <img class="bottom-img" src="static/1.png" alt="">
                    <img class="one-img" src="static/left-up.png" alt="">
                    <p class="ot1">一台小而强大的单片机</p>
                    <p class="ot2">非常适合用来学习编程，物联网，机器人</p>
                    <p class="ot3">从零开始进入科技的世界</p>
                    <button class="headbutton">查看课程</button>
                    <p class="buyzod">购买ZODuino套件 ></p>
                    <p class="ot4">ZODuino是非常适合学习C语言的平台，C语言是计算机语言的基础，是每一个学习</p>
                    <p class="ot5">工科的学生必须掌握的语言。使用ZODUINO，在开发机器人的过程中学习C语言，将</p>
                    <p class="ot6">更加直观，有趣，获得一种全新的学习体验！</p>
                    <img class="two-img" src="static/right.png" alt="">
                <!-- </el-carousel-item>
            </el-carousel> -->
        </div>
        <div class="book">
            <P class="booktitle">推荐你学习的书籍</P>
            <ul>
                <li>
                    <img src="../../assets/home/book1.png" alt="">
                    <p>Scratch少儿趣味编程</p>
                </li>
                <li>
                    <img src="../../assets/home/book3.png" alt="">
                    <p>创客空间搭建指南</p>
                </li>
                <li>
                    <img src="../../assets/home/book2.png" alt="">
                    <p>Arduino开发从零开始学</p>
                </li>
                <li>
                    <img src="../../assets/home/book4.png" alt="">
                    <p>Doom启示录</p>
                </li>
            </ul>
            <img class="bookshopimg" src="../../assets/home/shopbook.png" alt="">
            <p class="see-more-book">查看更多>> </p>
        </div>
        <div class="create">
            <div>
                <p class="creattitle">常去的地方</p>
                <!-- <a href="http://www.manykit.com/codeplay/#/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""></div></a> -->
                <router-link to="/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""><p>Snap</p></div></router-link>
                <router-link to="/Blockly" target="_blank"><div class="creat02"><img src="../../assets/home/p.png" alt=""><p>Blockly</p></div></router-link> 
                <a href="https://github.com/manykits/PHOENIXEngine" target="_blank"><div class="creat03"><img src="../../assets/home/g.png" alt=""><p>PHOENIXEngine</p></div></a>
                <a href="https://github.com/manykits" target="_blank"><div class="creat04"><img src="../../assets/home/b.png" alt=""><p>GitHub</p></div></a> 
                <a href="https://shop194048616.taobao.com" target="_blank"><div class="creat05"><img src="../../assets/home/m.png" alt=""><p>商城</p></div></a>
                <a href="http://www.manykit.com/toycar/#/Toycar" target="_blank"><div class="creat06"><img src="../../assets/home/p1.png" alt=""><p>编程对战车</p></div></a>       
            </div> 
            <!-- <div id="videobox">
                 <img src="static/homelesson.png"   @click="videoScreen">
                 <img class="play" src="../../assets/home/player.png"  @click="videoScreen" alt="">
            </div> -->
            <!-- <div id="videobox">
                 <video id="video" src="/static/homelesson.mp4"  :autoplay="playStatus" @click="playClick" height="224px" width="100%">

                </video> 
            </div> -->
            <!-- <el-dialog :visible.sync="dialogVideo"  width="63%" :modal="true" :modal-append-to-body="false" :lock-scroll="false" :show-close='false'>
                <div>
                    <div class="containervideo" v-show="dialogVideo">  
                        <video id="video" src="static/homelesson.mp4"  :autoplay="playStatus" controls @click="playClick" height="100%" width="100%">
                        <img src="../../assets/home/player.png" alt="">
                        </video> 
                    </div>
                </div> 
            </el-dialog>       -->
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    const DataImg =[//默认图片
        {url: 'static/1.png'},
        // {url: 'static/2.png'},
        // {url: 'static/3.png'}, 
    ]
export default{
    data(){
        return{
            DataImg:DataImg,//默认图片赋值
            index: 0,//默认显示第一张图片
            playStatus:false,//默认的播放状态
            dialogVideo:false//播放模态款状态，默认时关闭
        }
    },
    watch:{
        //监控视频窗口，只要变化，则暂停播放
        dialogVideo:function(){
            this._dom = document.getElementById('video');
            this._dom.pause();  
            play.value="暂停"; 
        }
    },
    methods:{
        //控制视频播放，暂停
        playClick(){
            this._dom = document.getElementById('video');
            if (this._dom.paused) {  
                this._dom.play();  
                play.value="播放";  
            }else{ 
                this._dom.pause();  
                play.value="暂停";  
            }  
        },
        //清除作品缓存
        clearSession(){
            sessionStorage.snapdemoid = ''
            this.$store.state.demoxmlid = ''
            this.$store.state.coverid=0
        },
        //点击视频播放框变大
        videoScreen(){
            this.dialogVideo = true
        },
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.contain08{
    width: 100%;
    height: 980px;
    position: relative;
    // top: 60px;
    margin-top: 0px;
}
.contain08 .container09 .bottom-img{
    height: 417px;
    width: 1200px; 
    margin: 0 auto;
}
.contain08 .container09 .one-img{
    position: absolute;
    left: 28px;
    top: 60px;
}
.contain08 .container09 .ot1{
    position: absolute;
    left: 28px;
    top: 110px;
    font-size: 15px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .ot2{
    position: absolute;
    left: 28px;
    top: 129px;
    font-size: 15px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .ot3{
    position: absolute;
    left: 28px;
    top: 147px;
    font-size: 14px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .ot4{
    position: absolute;
    left: 517px;
    top: 327px;
    font-size: 14px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .ot5{
    position: absolute;
    left: 517px;
    top: 344px;
    font-size: 14px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .ot6{
    position: absolute;
    left: 517px;
    top: 361px;
    font-size: 14px;
    color: #fff;
    font-family: 'SimHei';
}
.contain08 .container09 .headbutton{
    width: 179px;
    height: 46px;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-size: 23px;
    border: none;
    border-radius: 5px;
    font-family: 'light';
    letter-spacing: 2px;
    position: absolute;
    left: 28px;
    top: 224px;
    font-family: 'SimHei';
}
.contain08 .container09 .buyzod{
    cursor: pointer;
    position: absolute;
    left: 28px;
    top: 327px;
    font-size: 18px;
    color: #ffff00;
    font-weight:bold;
    font-family: 'SimHei';
}
.contain08 .container09 .two-img{
    position: absolute;
    right: 0px;
    top: 292px;
    cursor: pointer;
    width: 141px;
    height: 125px;
}
.contain08 .book{
    height: 395px;
    width: 1200px;
    position: relative;
}
.contain08 .booktitle{
    position: absolute;
    top: 36px;
    left: 21px;
    font-size: 20px;
    font-family: 'SimHei';
}
.contain08 .bookshopimg{
    position: absolute;
    top: 88px;
    left: 826px;
    width: 336px;
    height: 309px;
}
.contain08 .book ul{
    height: 309px;
    width: 820px;
    position: absolute;
    left: -2px;
    top:88px; 
}
.contain08 .book ul li{
    height: 309px;
    width: auto;
    position: relative;
    left: 0px;
    top:0px; 
    float: left;
    font-family: 'SimHei';
    font-size: 16px;
    text-align: center;
    margin-left: 29px;
}
.contain08 .book ul li img{
    border: 1px solid #e1e1e1;
    width: auto;
    height: 255px;
}
.contain08 .book ul li p{
    position: relative;
    top: 12px;
    font-weight: bold;
    min-width: 34px;
    height: 34px;
}
.contain08 .book .see-more-book{
    position: absolute;
    top: 46px;
    left: 732px;
    font-size: 15px;
    color: #999999;
    font-family: 'SimHei';
}
.contain08 .create{
    height: 169px;
    width: 1200px;
    background: @background-color;
    position: relative;
    // top: 36px;
    margin: 0 auto;
}
.contain08 .creattitle{
    height: 20px;
    width: 120px;
    font-size: 20px;
    position: absolute;
    // top: 36px;
    top: 50px;
    left: 21px;
    font-family: 'SimHei';
}
.contain08 .create .creat01{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 34px;
    top:94px;
    background-color: @main-color;
}
.contain08 .create .creat01 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 26px;
    width: 46px;
}
.contain08 .create .creat01 p{
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
.contain08 .create .creat02{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 225px;
    top: 94px;
    background-color: #2E8BCD;
}
.contain08 .create .creat02 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 40px;
    width: 40px;
}
.contain08 .create .creat02 p{
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
.contain08 .create .creat03{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 414px;
    top: 94px;
    background-color: #20608F;
}
.contain08 .create .creat03 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 41px;
    width: 38px;
}
.contain08 .create .creat03 p{
    font-size: 14px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
.contain08 .create .creat04{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 602px;
    top:94px;
    background-color: #008740;
}
.contain08 .create .creat04 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 44px;
    width: 38px;
}
.contain08 .create .creat04 p{
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
.contain08 .create .creat05{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 793px;
    top:94px;
    background-color: #FF9C00;
}
.contain08 .create .creat05 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 33px;
    width: 46px;
}
.contain08 .create .creat05 p{
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
.contain08 .create .creat06{
    height: 74px;
    width: 181px;
    display: inline-block;
    position: absolute;
    left: 981px;
    top:94px;
    background-color: #C711DD;
}
.contain08 .create .creat06 img{
    position: absolute;
    left: 16px;
    top: 23px;
    height: 27px;
    width: 37px;
}
.contain08 .create .creat06 p{
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: 'SimHei';
}
#videobox{
    width: 322px;
    height: 218px;
    position: relative;
    left: 874px;
    top: -108px;
    background: @black;
    border: 2px solid #b5b5b5;
    opacity:0.77;
}
#videobox img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
#videobox .play{
    width: 67px;
    height: 67px;
    position: relative;
    top: 38%;
    left: 40%;
}
</style>