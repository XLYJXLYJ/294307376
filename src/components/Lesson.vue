<template>
    <div class="container14">
        <Header/>
        <div class="content02">
            <LessonDownload/>
            <LessonList01/> 
            <LessonList02/>
        </div>
        <div class="footer02">
            <Footer/>
        </div> 
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import LessonList01 from '@/components/LessonPage/LessonList01'
import LessonList02 from '@/components/LessonPage/LessonList02'
import LessonDownload from '@/components/LessonPage/LessonDownload'
export default{
    components:{
        Header,
        Footer,
        LessonDownload,
        LessonList01,
        LessonList02,
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
}
.footer02{
    flex: 0;
    margin-top: -28px;
    background: @mainbg-color;
}
</style>