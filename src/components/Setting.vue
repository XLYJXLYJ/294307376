<template>
<div>
<Header/>
<div class="container32">
    <div class="container31">  
        <img class="star01" src="../assets/Download/starfish.png" alt="">
        <div class="setaccount">
           <p class="one_text">账号设置</p>
        </div>
        <div>
            <img class="cat" src="../assets/set/cat.png" alt="">
            <p class="two_text">古月哥欠、</p>
        </div>
        <div class="mydemo_frame">
        <router-link class="Mydemo" to="/Usercenter">个人中心</router-link>
        <router-link class="Delete" to="/Copassword">修改密码</router-link>
        </div>
        <router-view></router-view>     
    </div>   
 <Footer/>
 </div>
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
.container32{
   position: absolute;
    left: 0px;
    top: 60px;
    height: 100%;
    width: 100%;
    background: url(../assets/Lesson/Lesson_bg.png) no-repeat;
    z-index: -1;
}
.container31{
    position: absolute;
    top: 135px;
    left: 468px;
    width: 1000px;
    height: 657px;
    background:#FFFBF2; 
}
.container32 .container003{
  height: 323px;
  width: 100%;
  background-color: #1e1e1e;
  position: absolute;
  left: 0px;
  bottom: -323px;
}
.container31 .star01{
   position: absolute;
   left: -12px;
   top: -35px; 
   z-index: 50;
}
.container31 .one_text{
    position: absolute;
    top: 22px;
    left: 66px;
    font-size: 18px;
    color: #91121B;
    font-weight: 600;
}
.container31 .two_text{
    position: absolute;
    top: 327px;
    left: 100px;
    font-size: 24px;
    color: #91121B;
    font:bold;
}
.container31 .cat{
    position: absolute;
    left: 58px;
    top: 140px;
    font-size: 24px;
    color: #555;
}
 .container32 .mydemo_frame{
    position: absolute;
    width: 522px;
    height: 20px;
    top: 140px;
    left: 339px;
    border-bottom: 2px solid #e6d7b8;
}
 .container32 .Mydemo{
    position: absolute;
    top: -1px;
    left: 13px;
    width: 76px;
    height: 20px;
    font-size: 16px;
    color: #000;
    text-decoration: none;
}
 .container32 .Delete{
    position: absolute;
    top: -1px;
    left: 89px;
    width: 76px;
    height: 20px;
    font-size: 16px;
    color: #000;
    text-decoration: none;
}
.container32 .mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid #FFFBF2;  
    border-top: 2px solid #e6d7b8;
    border-left: 2px solid #e6d7b8;
    border-right: 2px solid #e6d7b8;
}
.container32 .mydemo_frame .router-link-active:before {
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
