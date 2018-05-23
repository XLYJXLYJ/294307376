<template>
    <div class="contain08">
        <div class="container09">
            <el-carousel :interval="3000">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index" height="380px">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="create">
            <div>
                <!-- <a href="http://www.manykit.com/codeplay/#/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""></div></a> -->
                <router-link to="/snap" target="_blank"><div class="creat01" @click="clearSession"><img src="../../assets/home/s.png" alt=""></div></router-link>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat02"><img src="../../assets/home/p.png" alt=""></div></a>  
                <a href="static/logo.png" download><div class="creat03"><img src="../../assets/home/g.png" alt=""></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat04"><img src="../../assets/home/b.png" alt=""></div></a> 
                <a href="https://shop194048616.taobao.com"><div class="creat05"><img src="../../assets/home/m.png" alt=""></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat06"><img src="../../assets/home/p1.png" alt=""></div></a>       
            </div> 
            <div id="videobox">
                 <img src="static/homelesson.png"   @click="videoScreen">
                 <img class="play" src="../../assets/home/player.png"  @click="videoScreen" alt="">
            </div>
            <!-- <div id="videobox">
                 <video id="video" src="/static/homelesson.mp4"  :autoplay="playStatus" @click="playClick" height="224px" width="100%">

                </video> 
            </div> -->
            <el-dialog :visible.sync="dialogVideo"  width="63%" :modal="true" :modal-append-to-body="false" :lock-scroll="false" :show-close='false'>
                <div>
                    <div class="containervideo" v-show="dialogVideo">  
                        <video id="video" src="static/homelesson.mp4"  :autoplay="playStatus" controls @click="playClick" height="100%" width="100%">
                        <img src="../../assets/home/player.png" alt="">
                        </video> 
                    </div>
                </div> 
            </el-dialog>      
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    const DataImg =[//默认图片
        {url: 'static/1.png'},
        {url: 'static/2.png'},
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
    height: 640px;
    position: relative;
    top: 60px;
    margin-top: 0px;
}
.contain08 .container09{
    height: 380px;
    width: 1200px; 
    margin: 0 auto;
    position: relative;
    top: 70px;
}
.contain08 .container09 img{
    height: 320px;
    width: 1200px; 
    /* height: 100%;
    width: 100%;  */
}
.contain08 .create{
    height: 221px;
    width: 1200px;
    background: @background-color;
    position: relative;
    top: 36px;
    margin: 0 auto;
}
.contain08 .creat01{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: relative;
    left: 0px;
    top:0px;
}
.contain08 .creat01 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat02{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 282px;
}
.contain08 .creat02 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat03{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 561px;
}
.contain08 .creat03 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat04{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top:117px;
}
.contain08 .creat04 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat05{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 282px;
    top:117px;
}
.contain08 .creat05 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat06{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 561px;
    top:117px;
}
.contain08 .creat06 img{
    width: 100%;
    height: 100%;
}
#videobox{
    width: 328px;
    height: 224px;
    position: relative;
    left: 869px;
    top: -108px;
    background: @black;
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