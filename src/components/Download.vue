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
<style scoped>
.container12{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content03 {
    flex: 1;
}
.footer03 {
    flex: 0;
    margin-top: 110px;
}
</style>
