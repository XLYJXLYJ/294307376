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
<style scoped lang="less">
@import '../assets/index.less';
.container38{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: @mainbg-color;
    z-index:-1;
}
.container38{
    flex: 1;
    padding-top: 114px;
    height: auto;
    padding-bottom: 36px;
    padding-left: 5px;
    margin-top: -128px;
}
.footer06{
    flex: 0;
}
</style>
