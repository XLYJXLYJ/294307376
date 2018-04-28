<template>
    <div class="container25">
        <Header/>
        <div class="content05">   
            <div class="container24">
            <img class="star01" src="../assets/Download/starfish.png" alt="">  
            <p>我的管理中心</p>
            <router-link to="/snap"><button>新建作品</button></router-link>
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
    mounted(){
        this.demoroute()
    },
    methods:{
        demoroute(){
            this.$router.push({ name: 'Alldemohaha' })
        }
    },
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
    background: #F5F5F5;
}
.content05{
    flex: 1;
    padding-top: 154px;
    padding-left: 5px;
}
.footer05{
    margin-top: 36px;
    flex: 0;
}
.container24{
    margin: 0 auto;
    width: 1200px;
    height: 840px;
    background:#FFf; 
    position: relative;
}
.container25 .star01{
    position: relative;
    left: -18px;
    top: -30px; 
    z-index: 50;
}
.container24 p{
    position: relative;
    top: -62px;
    left: 77px;
    font-size: 22px;
    color: #333;
    font-weight: 600;
}
.container24 button{
    position: relative;
    top: -88px;
    left: 1032px;
    height: 34px;
    width: 115px;
    font-size: 16px;
    color: #fff;
    background: #f13232;
    border: none;
    cursor: pointer;
}
 .container24 .mydemo_frame{
    position:relative;
    width: 643px;
    height: 38px;
    top: -60px;
    left: 0px;
    border-bottom: 2px solid #333;
}
.container24 .Mydemo{
    position: absolute;
    top: -10px;
    left: 24px;
    width: 101px;
    height: 37px;
    font-size: 18px;
    color: #333;
    text-decoration: none;
    padding-top: 8px;
    padding-left: 60px;
}
.container24 .Delete{
    position: absolute;
    top: -10px;
    left: 189px;
    width: 109px;
    height: 37px;
    font-size: 18px;
    color: #333;
    text-decoration: none;
    padding-top: 8px;
    padding-left: 60px;
}
.container24 .mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid #fff;  
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    border-right: 2px solid #333;
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
