<template>
    <div class="container12">
      <Header/>
      <DownHead/>
      <Footer/>
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
    width: 100%;
    height: auto;
    background: #fff;
}
.container12 .container003{
  position: absolute;
  left: 0px;
  bottom: -19rem;
}
</style>
