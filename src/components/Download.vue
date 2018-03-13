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
.container12 .container03{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
</style>
