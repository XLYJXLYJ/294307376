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
    <div class="footer06">
         <Footer/>
    </div> 
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
.container38{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: url(../assets/Lesson/Lesson_bg.png);
    z-index: -1;
}
.container38{
    flex: 1;
    padding-top: 40px;
    height: auto;
    padding-bottom: 40px;
}
.footer06{
    flex: 0;
}
</style>
