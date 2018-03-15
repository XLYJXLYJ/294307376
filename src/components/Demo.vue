<template>
    <div class="container25">
        <Header/>
        <div class="lesson_bg">
        </div>
        <img class="star01" src="../assets/Download/starfish.png" alt="">
        <div class="container24">
           <p>我的管理中心</p>
           <button>新建作品</button>
        </div>
        <div class="mydemo_frame">
        <router-link class="Mydemo" to="/Mydemo">作品</router-link>
        <router-link class="Delete" to="/Delete">废纸篓</router-link>
        </div>
        <router-view></router-view>
        <Footer/>
    </div>   
</template>
<script>
import Header from '@/components/HomePage/header'

import Footer from '@/components/HomePage/Footer'
export default{
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
.container25 .lesson_bg{
    position: absolute;
    left: 0px;
    top: 60px;
    height: 850px;
    width: 100%;
    background: url(../assets/Lesson/Lesson_bg.png) no-repeat;
    z-index: -1;
}
.container24{
    position: absolute;
    top: 180px;
    left: 468px;
    width: 1000px;
    height: 700px;
    background:#FFFBF2; 
}
.container25 .container03{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -308px;
}
.container25 .star01{
   position: absolute;
   left: 453px;
   top: 146px; 
   z-index: 50;
}
.container24 p{
    position: absolute;
    top: 27px;
    left: 48px;
    font-size: 18px;
    color: #91121B;
}
.container24 button{
    position: absolute;
    top: 27px;
    left: 839px;
    height: 28px;
    width: 96px;
    font-size: 16px;
    color: #fff;
    background: #fcb239;
}
 .mydemo_frame{
    position: absolute;
    width: 322px;
    height: 20px;
    top: 255px;
    left: 468px;
    border-bottom: 2px solid #e6d7b8;
}
.Mydemo{
    position: absolute;
    top: -1px;
    left: 13px;
    width: 76px;
    height: 20px;
    font-size: 16px;
    color: #000;
    text-decoration: none;
}
 .Delete{
    position: absolute;
    top: -1px;
    left: 89px;
    width: 76px;
    height: 20px;
    font-size: 16px;
    color: #000;
    text-decoration: none;
}
.mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid #FFFBF2;  
    border-top: 2px solid #e6d7b8;
    border-left: 2px solid #e6d7b8;
    border-right: 2px solid #e6d7b8;
}
.mydemo_frame .router-link-active:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 19px;
    height: 2px;
    width: 76px;
    background-color: #FFFBF2;
    border-radius: 2px; 
   
}
</style>
