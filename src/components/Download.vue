<template>
    <div class="container12">
        <Header/>
        <div class="content03">
            <DownHead/>
        </div>
        <div class="footer03">
            <Footer/>
        </div> 
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import DownHead from '@/components/DownLoadPage/DownHead'
import Footer from '@/components/HomePage/Footer'
export default{
    components:{
        Header,
        Footer,
        DownHead
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/index.less';
.container12{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: @mainbg-color;
}
.content03 {
    flex: 1;
    padding-left: 5px;
    margin-top: -128px;
}
.footer03 {
    flex: 0;
    background: @mainbg-color;
}
</style>
