<template>
    <div class="container14">
      <Header/>
      <LessonDownload/>
      <LessonList01/> 
      <LessonList02/>
      <Footer/>
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
<style scoped>
.container14{
    width: 100%;
    height: 700px;
}
.container14 .container03{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -843px;
}
</style>