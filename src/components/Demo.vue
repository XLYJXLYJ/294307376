<template>
    <div class="container25">
        <Header/>
        <div class="content05">
            <img class="star01" src="../assets/Download/starfish.png" alt="">
            <div class="container24">
            <p>我的管理中心</p>
            <button>新建作品</button>
            <div class="mydemo_frame">
            <router-link class="Mydemo" to="/Demo/Mydemo">作品</router-link>
            <router-link class="Delete" to="/Demo/Delete">废纸篓</router-link>
            </div>
            </div>      
            <router-view></router-view>
        </div>
         <div class="footer05">
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
.container25{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: url(../assets/Lesson/Lesson_bg.png) no-repeat;
}
.content05{
    flex: 1;
    padding-top: 40px;
    height: 850px;
}
.footer05{
    flex: 0;
}
.container24{
    margin: 0 auto;
    width: 1000px;
    height: 700px;
    background:#FFFBF2; 
}
.container25 .star01{
   position: relative;
   left: -463px;
   top: 44px; 
   z-index: 50;
}
.container24 p{
    position: relative;
    top: 20px;
    left: -374px;
    font-size: 18px;
    color: #91121B;
}
.container24 button{
    position: relative;
    top: 27px;
    left: 339px;
    height: 28px;
    width: 96px;
    font-size: 16px;
    color: #fff;
    background: #fcb239;
    border: none;
    cursor: pointer;
}
 .container24 .mydemo_frame{
    position: relative;
    width: 332px;
    height: 20px;
    top: 30px;
    left: 30px;
    border-bottom: 2px solid #e6d7b8;
}
.container24 .Mydemo{
    position: absolute;
    top: -12px;
    left: 13px;
    width: 126px;
    height: 21px;
    font-size: 16px;
    color: #999;
    text-decoration: none;
    padding-top: 8px;
}
.container24 .Delete{
    position: absolute;
    top: -12px;
    left: 129px;
    width: 126px;
    height: 21px;
    font-size: 16px;
    color: #999;
    text-decoration: none;
    padding-top: 8px;
}
.container24 .mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid #FFFBF2;  
    border-top: 2px solid #e6d7b8;
    border-left: 2px solid #e6d7b8;
    border-right: 2px solid #e6d7b8;
    color: #000;
}
.container24 .mydemo_frame .router-link-active:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 19px;
    height: 2px;
    width: 76px;
    border-radius: 2px;  
}
</style>
