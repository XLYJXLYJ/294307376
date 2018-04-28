<template>
    <div  class="container32">
        <Header/>
        <div class="container31">  
            <img class="star01" src="../assets/Download/starfish.png" alt="">
            <div class="setaccount">
            <p class="one_text">账号设置</p>
            </div>  
            <div class="mydemo_frame">
            <router-link class="Mydemo" to="/Setting/Usercenter">个人中心</router-link>
            <router-link class="Delete" to="/Setting/Copassword">修改密码</router-link>
            </div>
            <router-view></router-view>     
        </div>   
        <div class="footer07">
            <Footer/>
        </div> 
    </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
export default{
    mounted(){
        this.Settingroute()
    },
    methods:{
        Settingroute(){
            this.$router.push({ name: 'Usercenter' })
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
.container32{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background:#F5F5F5;
    z-index: -1;
}
.footer07{
    flex: 0;
    margin-top: 36px;
}
.container31{
    flex: 1;
    margin: 0 auto;
    width: 1200px;
    height: 788px;
    background:#FFF; 
    margin-top: 214px;
}
.container31 .star01{
    position: relative;
    left: -12px;
    top: -35px; 
    z-index: 50;
}
.container31 .one_text{
    position: relative;
    top: -68px;
    left: 66px;
    font-size: 22px;
    color: #333;
    font-weight: 600;
}
.container31 .two_text{
    position: relative;
    top: 127px;
    left: 50px;
    font-size: 28px;
    color: #91121B;
    font:bold;
    text-align: center;
    width: 229px;
    height: 29px;
}
 .container32 .mydemo_frame{
    position: relative;
    width: 522px;
    height: 20px;
    top: 20px;
    left: 379px;
    z-index: 1000;
    border-bottom: 2px solid #333;
}
 .container32 .Mydemo{
    position: absolute;
    top: -23px;
    left: 1px;
    width: 106px;
    height: 31px;
    font-size: 18px;
    color: #999;
    text-decoration: none;
    padding-top: 10px;
    padding-left: 40px;
}
 .container32 .Delete{
    position: absolute;
    top: -23px;
    left: 139px;
    width: 118px;
    height: 31px;
    font-size: 18px;
    color: #999;
    text-decoration: none;
    padding-top: 10px;
    padding-left: 44px;
}
.container32 .mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid #FFFBF2;  
    border-top: 2px solid #333;
    border-left: 2px solid#333;
    border-right: 2px solid #333;
    color: #000;
}
.container32 .mydemo_frame .router-link-active:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 19px;
    height: 2px;
    width: 76px;
    border-radius: 2px;   
}
</style>
