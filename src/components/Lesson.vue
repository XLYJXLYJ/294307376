<template>
    <div class="container14">
        <Header/>
        <div class="content02">
            <LessonDownload/>
            <div class="lessonnav">
                <router-link to="/Lesson/textLesson" class="logo04_p1">课程大纲</router-link> 
                <!-- <router-link to="/Lesson/videoLesson" class="logo04_p2">视频教程</router-link>  -->
            </div>

            <!-- <div class="line"></div> -->
            <router-view></router-view>
        </div>
        
        <div class="footer02">
            <Footer/>
        </div> 
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import LessonDownload from '@/components/LessonPage/LessonDownload'
export default{
    components:{
        Header,
        Footer,
        LessonDownload,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/index.less';
.container14{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content02{
    flex: 1;
    padding-left: 5px;
    margin-top: -128px;
    background:#f5f5f5;
}
.footer02{
    flex: 0;
    margin-top: -8px;
    left: 4px;
    background: @mainbg-color;
}
.container14 .lessonnav{
    width: 1200px;
    height: 20px;
    margin: 0 auto;
    position: relative;
}
.container14 .line{
    height: 1px;
    width: 1160px;
    background: #c51d4a;
    position: relative;
    top: 60px;
    margin: 0 auto;
 }
 .container14 .logo04_p1{
     font-size: 24px;
     width: 130px;
     height: 30px;
     position: relative;
     left: 20px;
     top: 39px;
     text-align: center;
     margin-top: 10px;
     cursor: pointer;
     color: #c51d4a;
     text-decoration: none;
     padding: 10px;
 }
.container14 .logo04_p2{
     font-size: 24px;
     width: 130px;
     height: 30px;
     position: relative;
     left: 20px;
     top: 39px;
     text-align: center;
     margin-top: 0px;
     cursor: pointer;
     color: #c51d4a;
     text-decoration: none;
     padding: 10px;
 }
 .container14 .router-link-active{
    text-decoration: none; 
    position: relative;
    color: #c51d4a;
    // border: 1px solid #c51d4a;
    background: #FFE0E0;
    // border-bottom: 2px solid @background-color;
    z-index: 1000;
}
</style>