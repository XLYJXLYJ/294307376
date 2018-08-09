<template>
    <div class="contain08">
        <div class="container09">
            <el-carousel :interval="3000">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="book">
            <P class="booktitle">推荐你学习的书籍</P>
            <ul>
                <li>
                    <img src="../../assets/home/book1.png" alt="">
                    <p>THe Raspberry Pi Beginner's Book</p>
                </li>
                <li>
                    <img src="../../assets/home/book1.png" alt="">
                    <p>THe Raspberry Pi Beginner's Book</p>
                </li>
                <li>
                    <img src="../../assets/home/book1.png" alt="">
                    <p>THe Raspberry Pi Beginner's Book</p>
                </li>
                <li>
                    <img src="../../assets/home/book1.png" alt="">
                    <p>THe Raspberry Pi Beginner's Book</p>
                </li>
            </ul>
            <img class="bookshopimg" src="../../assets/home/shopbook.png" alt="">
        </div>
        <div class="create">
            <div>
                <p class="creattitle">常去的地方</p>
                <!-- <a href="http://www.manykit.com/codeplay/#/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""></div></a> -->
                <router-link to="/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""><p>Snap</p></div></router-link>
                <router-link to="/Blockly" target="_blank"><div class="creat02"><img src="../../assets/home/p.png" alt=""><p>Blockly</p></div></router-link> 
                <a href="static/logo.png" download><div class="creat03"><img src="../../assets/home/g.png" alt=""><p>PHOENIXEngine</p></div></a>
                <a href="/blockly" target="_blank"><div class="creat04"><img src="../../assets/home/b.png" alt=""><p>GitHub</p></div></a> 
                <a href="https://shop194048616.taobao.com"><div class="creat05"><img src="../../assets/home/m.png" alt=""><p>商城</p></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat06"><img src="../../assets/home/p1.png" alt=""><p>编程对战车</p></div></a>       
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
.contain08 .container09{
    height: 417px;
    width: 1200px; 
    margin: 0 auto;
    position: relative;
}
.contain08 .container09 img{
    height: 417px;
    width: 1200px; 
    /* height: 100%;
    width: 100%;  */
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
    font-size: 18px;
    font-family: "黑体";
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
    width: 800px;
    position: absolute;
    left: -2px;
    top:88px; 
}
.contain08 .book ul li{
    height: 309px;
    width: 159px;
    position: relative;
    left: 0px;
    top:0px; 
    float: left;
    font-family: "黑体";
    font-size: 16px;
    text-align: center;
    margin-left: 36px;
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
    font-size: 18px;
    position: absolute;
    // top: 36px;
    top: 50px;
    left: 21px;
    font-family: "黑体";
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
    font-family: '黑体';
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
    font-family: '黑体';
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
    font-size: 16px;
    position: absolute;
    left: 64px;
    top: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: '黑体';
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
    font-family: '黑体';
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
    font-family: '黑体';
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
    font-family: '黑体';
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