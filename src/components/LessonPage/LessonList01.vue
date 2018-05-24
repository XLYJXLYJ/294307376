<template>
    <div class="container11">
        <div class="container011">
            <div class="logo04_p"><p>Snap课程</p></div>
            <div class="cut_off"></div>
            <div class="container_up01">
                <img class="video" src="../../assets/Lesson/video.png" alt="">
                <p class="snap">01 Snap课程</p>
                <span class="snap_detail">阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木</span>
            </div>
            <div class="block">
                 <ul>
                    <li v-for="(item,index) in lessonLength" :key='index' @click="selectLesson(index)" :class="{lessonhover:index===isLessonHover}"><p>{{item}}</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lessonLength:18,
                isLessonHover:''
            }
        },
        methods:{
            selectLesson(index){
                this.isLessonHover=index
            }
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
 .container11{
     width: 1200px;
     height: 651px;
     z-index: 100;
     background: @background-color;
     margin: 0 auto;
     z-index: -1;
     margin-top: 26px;
 }
  .container011{
     position: relative;
 }
 .container11 .logo04_p p{
     position: absolute;
     width: 102px;
     height: 24px;
     left: 60px;
     top: 26px;
     font-size:@llg-size;
 }
  .container11 .cut_off{
    position: absolute;
    left: 0px;
    top: 64px;
    height: 4px;
    z-index: 100;
    width: 1200px;
    background: @cut-color;
}
 .container11 .container_up01{
    position: absolute;
    left: 0px;
    top: 68px;
    height:574px;
    z-index: 100;
    width: 1200px;
    background: @background-color;
}
 .container11 .video{
    position: absolute;
    left: 63px;
    top: 83px;
    height: 373px;
    z-index: 100;
    width: 568px;
}
 .container11 .snap{
    position: absolute;
    left: 700px;
    top: 83px;
    height: 25px;
    z-index: 100;
    width: 131px;
    font-size:@llg-size;
    color: @black;
}
 .container11 .snap_detail{
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
 .container11 .block ul{
    position: absolute;
    left: 698px;
    top: 304px;
    height: 185px;
    z-index: 100;
    width: 452px;
    font-size: 0px;
    text-align:left; 
}
 .container11 .block li{
    position: relative;
    left: 0px; 
    height: 71px;
    z-index: 100;
    width: 68px;
    border: 1px solid #ffe7e7;
    display: inline-block;
    font-size: 20px;
    text-align: center;
    background: #ff7979;
    cursor: pointer;
}
 .container11 .block li:hover{
    background: #f13232;
}
.lessonhover{
    background: #f13232;
 }
.container11 .block li p{
    position: relative;
    top: 20px;
    color: #fff;
}
</style>
