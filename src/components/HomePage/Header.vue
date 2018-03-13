<template>
    <div class="container04">
        <img class="logo" src="../../assets/logo.png" alt="">  
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <router-link class="a_text" :to="item.url">{{item.context}}</router-link>
            </li>     
        </ul> 
        <img class="make" src="../../assets/make.png" alt="">  
        <img class="user" src="../../assets/user.png" alt="">
        <p class="login">登陆/注册</p>     
    </div>
</template>

<script>
import Vue from 'vue'
export default{
    data(){
        return {
            items: [
                {context:'发现',url:'/Home'},
                {context:'课程',url:'/Lesson'},
                {context:'素材',url:'/Material'},
                {context:'下载',url:'/Download'}   
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container04{
    width: 1920px;
    height:60px;
    background: #fff;
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 100;
}
.logo{
    height: auto;
    width: auto;
    position: absolute;
    left: 487px;
    top: 3px; 
}
.container04 ul{
    position: absolute;
    left: 659px;
    margin-top: 22px; 
}
.container04 ul li{
    list-style: none;
    float: left; 
    margin-left: 30px;
    font-size: 16px; 
    padding-bottom: 8px;
}
.a_text{
    text-decoration: none;
    color: #565656;
    font-family:"微软雅黑";
}
.container04 .router-link-active{
    text-decoration: none;
    border-bottom: 4px solid #fff;  
    position: relative;
    color: #0078d7;
}
.container04 .router-link-active:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 24px;
    bottom: 0;
    right: 0px;
    height: 4px;
    width: 20px;
    background-color: #0078d7;
    border-radius: 2px;
}
.make{
    position: absolute;
    left: 1228px;
    height: 35px;
    width: 85px;
    margin-top: 10px;
    opacity:1;
}
.make:hover{
   opacity:0.7;
   cursor:pointer;
}
.user{
    position: absolute;
    top: 10px;
    left:1323px;
    border-radius: 17px;
}
.login{
    display: inline;
    position: absolute;
    top: 20px;
    left:1374px;
}

</style>