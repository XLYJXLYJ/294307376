<template>
    <div  class="container32">
        <Header/>
        <div class="container31">  
            <img class="star01" src="../assets/all/starall.png" alt=""> 
            <!-- <div class="setaccount">
            <p class="one_text">账号设置</p>
            </div>   -->
            <div class="mydemo_frame">
                <div @click="clickblock01"><router-link class="Mydemo" v-bind:class="{ blockblue: isblue, blockblack: !isblack}" to="/Setting/Usercenter">个人中心</router-link></div>
                <div @click="clickblock02"><router-link class="Delete" v-bind:class="{ blockblue: !isblue, blockblack: isblack }" to="/Setting/Copassword">修改密码</router-link></div>
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
    data(){
        return{
            isblue:true,
            isblack:true,
        }
    },
    mounted(){
        this.Settingroute()
    },
    methods:{
        //控制tab
        clickblock01(){
            this.isblue=true
            this.isblack=true
        },
        clickblock02(){
            this.isblue=false
            this.isblack=false
        },
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
<style scoped lang="less">
@import '../assets/index.less';
.container32{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background:@mainbg-color;
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
    min-height:374px;
    background:@background-color; 
    position: relative;
}
.container32 .container31 .star01{
    position: absolute;
    left: 38px;
    top: 8px; 
    width: auto;
    height: 200px;
}
.container31 .one_text{
    position: relative;
    top: -68px;
    left: 66px;
    font-size:@llg-size;
    color: @gray;
    font-weight: 600;
}
.container31 .two_text{
    position: relative;
    top: 127px;
    left: 50px;
    font-size:@lllg-size;
    color: #91121B;
    font:bold;
    text-align: center;
    width: 229px;
    height: 29px;
}
.container32 .container31 .mydemo_frame{
    position:absolute;
    width: 1136px;
    height: 28px;
    top: 171px;
    left: 35px;
    padding-bottom: 0px;
    border-bottom: 3px solid #1969c7;
}
.container32 .container31 .Mydemo{
    position: absolute;
    top: -26px;
    left: 367px;
    width: 159px;
    height: 44px;
    font-size:24px;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
}
.container32 .container31 .Delete{
    position: absolute;
    top: -26px;
    left: 547px;
    width: 159px;
    height: 44px;
    font-size:24px;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
}
.blockblue{
    background: #1969c7;
    color: #fff;
}
.blockblack{
    color: #000;
}
</style>
