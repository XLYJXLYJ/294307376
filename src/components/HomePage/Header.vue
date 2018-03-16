<template>
    <div>
        <div class="container04">
            <img class="logo" src="../../assets/logo.png" alt="">  
            <ul>
                <li>
                    <router-link class="a_text" to="/Home">发现</router-link>
                </li>    
                <li>
                    <router-link class="a_text" to="/Lesson">课程</router-link>
                </li> 
                <li>
                    <a class="a_text" href="https://mofang.qq.com/index/?type=staffpick&pagenum=0&pagesize=40" target="_blank">素材</a>
                </li> 
                <li>
                    <router-link class="a_text" to="/Download">下载</router-link>
                </li>  
            </ul> 
            <img class="make" src="../../assets/make.png" alt="">   
        </div>
        <div class="login_sign"> 
            <img class="user" src="../../assets/user.png" alt="">
            <p class="login" type="text"  @click="dialogLogin = true" >登陆</p>   
            <span class="cut_off_line">/</span>  
            <p class="sign"  type="text" @click="dialogRegister = true" >注册</p>  
        </div>
        <div>
            <el-row class="block-col-12">
                <el-col :span="12">
                    <el-dropdown>
                    <span  class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/Demo"><el-dropdown-item>作品管理</el-dropdown-item></router-link>
                        <el-dropdown-item>社区消息</el-dropdown-item>
                        <router-link to="/User"><el-dropdown-item>个人中心</el-dropdown-item></router-link>              
                        <el-dropdown-item>账号设置</el-dropdown-item>
                        <el-dropdown-item>退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </div>

        <!-- 模态框 -->
        <el-dialog :visible.sync="dialogLogin" class="dialog_login" width="37%">
                    <Login/>     
        </el-dialog> 
        <el-dialog :visible.sync="dialogRegister" class="dialog_login" width="37%">
                    <Register/>     
        </el-dialog>  
    </div>
</template>

<script>
import Vue from 'vue'
import Login from '@/components/Login/Login'
import Register from '@/components/Login/Register'
 export default {
    data() {
      return {
        dialogLogin: false,
        dialogRegister: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    components:{
        Login,
        Register
    }
  };

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
    color: #999;
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
.login_sign{
     position: fixed;
     top: 5px;
     left: 1323px;
     width: 130px;
     height: 50px;
     z-index: 200;
     border-radius: 10px;
}
.login_sign:hover{  
   background-color: #E3E3E3;
}
.user{
    position: absolute;
    top: 5px;
    left:5px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.login{
    display: inline;
    position: absolute;
    top: 17px;
    left:49px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
}
.login:hover{
    text-decoration: underline;
}
.dialog{
    z-index: 200;
}
.cut_off_line{
    position: absolute;
    top: 19px;
    left:81px;
}
.sign{
    display: inline;
    position: absolute;
    top: 17px;
    left:89px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
}
.sign:hover{
    text-decoration: underline;
}
.block-col-12{
    position: fixed;
    left: 1450px;
    top: 15px;
    width: 130px;
    height: 50px;
    font-size: 24px;
    /* opacity: 0; */
    z-index: 200;
}
#dropdown-menu-8301{
    position: fixed;
    height: 229px;
    width: 181px;
}

</style>