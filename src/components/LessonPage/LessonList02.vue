<template>
    <div class="container16">
        <div class="container016">
            <div class="logo04_p"><p>Snap课程</p></div>
            <div class="cut_off"></div>
            <div class="container_up02">
                <img class="video" src="../../assets/Lesson/video.png" alt="" @click="videoScreen">
                <p class="snap">01 Snap课程</p>
                <span class="snap_detail">阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木</span>
            </div>
            <div class="block">
                 <ul>
                    <li v-for="(item,index) in lessonLength" :key='index' @click="selectLesson(index)" :class="{lessonhover:index==isLessonHover}"><p>{{item}}</p></li>
                </ul>
            </div>
        </div>

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
</template>
<script>
    export default{
        data(){
            return{
                lessonLength:18,
                isLessonHover:'',
                playStatus:false,//默认的播放状态
                dialogVideo:false//播放模态款状态，默认时关闭
            }
        },
        watch:{
            //监控视频窗口，只要变化，则暂停播放
            dialogVideo:function(){
                this._dom = document.getElementById('video');
                this._dom.pause();  
            }
        },
        methods:{
            selectLesson(index){
                this.isLessonHover=index
            },
                    //控制视频播放，暂停
            playClick(){
                this._dom = document.getElementById('video');
                if (this._dom.paused) {  
                    this._dom.play();
                }else{ 
                    this._dom.pause();  
                }  
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
 .container16{
     width: 1200px;
     height: 651px;
     z-index: 100;
     background: @background-color;
     margin: 0 auto;
     z-index: -1;
     margin-top: 26px;
 }
.container016{
     position: relative;
 }
 .container16 .logo04_p p{
     position: absolute;
     width: 102px;
     height: 24px;
     left: 60px;
     top: 26px;
     font-size:@llg-size;
 }
 .container16 .cut_off{
    position: absolute;
    left: 0px;
    top: 64px;
    height: 4px;
    z-index: 100;
    width: 1200px;
    background: @cut-color;
}
 .container16 .container_up02{
    position: absolute;
    left: 0px;
    top: 68px;
    height:574px;
    z-index: 100;
    width: 1200px;
    background: @background-color;
}
 .container16 .video{
    position: absolute;
    left: 63px;
    top: 83px;
    height: 373px;
    z-index: 100;
    width: 568px;
}
 .container16 .snap{
    position: absolute;
    left: 700px;
    top: 83px;
    height: 25px;
    z-index: 100;
    width: 131px;
    font-size:@llg-size;
    color: @black;
}
 .container16 .snap_detail{
    position: absolute;
    left: 697px;
    top: 128px;
    height: 49px;
    z-index: 100;
    width: 433px;
    font-size:@md-size;
    color: @container0203-color;
    text-align:left;
    text-indent:2em;
}
 .container16 .block ul{
    position: absolute;
    left: 698px;
    top: 304px;
    height: 185px;
    z-index: 100;
    width: 452px;
    font-size: 0px;
    text-align:left;
}
 .container16 .block li{
    position: relative;
    left: 0px; 
    height: 71px;
    z-index: 100;
    width: 68px;
    border: 1px solid #FF7878;
    display: inline-block;
    font-size: 20px;
    text-align: center;
    background: #FF9797;
    cursor: pointer;
}
 .container16 .block li:hover{
    background: #f13232;
}
.lessonhover{
    background: #f13232!important;
 }
.container16 .block li p{
    position: relative;
    top: 20px;
    color: #fff;
}
</style>
