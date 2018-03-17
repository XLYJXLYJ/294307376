<template>
<div class="container37">
    <Header/>
    <div class="container38">
         <Userown/>
        <Usershare/>
        <Usershore/>
        <Userfollow/>
        <Usershow/>
    </div>   
    <Footer/>
 </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import Userown from '@/components/User/Userown'
import Usershare from '@/components/User/Usershare'
import Usershore from '@/components/User/Usershore'
import Userfollow from '@/components/User/Userfollow'
import Usershow from '@/components/User/Usershow'
export default{
    components:{
        Header,
        Footer,
        Userown,
        Usershare,
        Usershore,
        Userfollow,
        Usershow
    }
}
</script>
<style scoped>
.container37{
   position: absolute;
    left: 0px;
    top: 60px;
    height: 1768px;
    width: 100%;
    background: url(../assets/Lesson/Lesson_bg.png);
    z-index: -1;
}
.container37 .container03{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -323px;
}
</style>
