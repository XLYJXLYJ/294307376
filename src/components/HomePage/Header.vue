<template>
    <div class="headercontainer04">
        <div class="headone">
            <!-- 头部 -->
            <div class="headonecenter">
                <!-- 语言设置 -->
                <span class="el-dropdown-link" @click="language">
                    中文<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <div class="shopping"><a href="http://www.manykit.com/" target="_blank">官方商城</a></div>
                <div class="appdownload"><router-link to="/Download">APP下载</router-link></div>
                <!-- 登录注册 -->
                <div class="login_sign" v-show="loginsign"> 
                    <p class="login" type="text"  
                    @click="dialogLogin = true, 
                    dialogLoginshow = true, 
                    dialogRegister = false, 
                    dialogForgetpass= false">登录</p>   
                    <p class="sign"  type="text" 
                    @click="dialogLogin = true, 
                    dialogLoginshow = false, 
                    dialogRegister = true, 
                    dialogForgetpass= false, 
                    dialogPassSure=false">注册</p>   
                </div>
                <div class="username" v-show="usercenter" id="myPanel"> 
                    <p class="login01" type="text"  @click="dropdowmcontrol">{{this.$store.state.usernamesession02}}</p>   
                </div> 
                <!-- 下拉框  -->
                <div v-show="$store.state.isdropdownparent">
                    <ul class="block-col-12">
                        <router-link to="/Demo"><li><p>作品管理</p></li></router-link>
                        <router-link to="#"><li>社区消息</li></router-link>
                        <router-link to="/User"><li>个人中心</li></router-link>     
                        <router-link to="/setting"><li>账号设置</li></router-link>  
                        <li><p @click="Cancellogout">退出登陆</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 头部列表 -->
        <div class="container04">  
            <div class="container04center">
                <img class="logo" src="../../assets/home/logo.png" alt="">  
                <ul>
                    <li>
                        <router-link to="/Home"><p>首页</p></router-link>
                    </li>    
                    <li>
                        <router-link to="/Lesson"><p>课程</p></router-link>
                    </li> 
                    <li>
                        <router-link to="/source/sourceshop"><p>素材</p></router-link>
                    </li> 
                    <li>
                        <router-link to="/Download"><p>下载</p></router-link>
                    </li>  
                </ul> 
            </div>
        </div> 
         <!-- 模态框 -->      
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin"  width="420px" :modal="true" :modal-append-to-body="false">
                <div>
                    <div class="container21" v-show="dialogLoginshow">
                        <form action="">
                            <p class="sign_logo">登录</p>
                            <input type="text" v-model="formLogin.username" class="tele" placeholder="请输入用户名">
                            <input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码">
                            <p class="ap_text" @click="dialogLoginshow= false,dialogForgetpass = true">忘记密码?</p>
                            <button class="register" @click.prevent="Loginbtn">登录</button>
                            <div class="free_res"><p>没有账号?</p><span @click="dialogLoginshow = false,dialogRegister = true">免费注册</span></div>    
                        </form> 
                    </div>
                    <div class="container19" v-show="dialogRegister">
                        <el-form :model="formRegister" :rules="rules">
                            <p class="sign_logo">注册</p>
                            <el-form-item prop="username">
                                <input v-model="formRegister.username"  class="tele" auto-complete="off" placeholder="请输入用户名">
                            </el-form-item>
                            <el-form-item prop="mail">
                                <input type="email"  class="iden01" v-model="formRegister.mail" auto-complete="off" placeholder="请输入邮箱">
                            </el-form-item>
                            <el-form-item prop="password">
                                <input type="password" class="iden02" v-model="formRegister.password" auto-complete="off" placeholder="请输入密码">
                            </el-form-item>
                            <el-form-item prop="password">
                                <input type="password" class="iden03" v-model="formRegister.checkpassword" auto-complete="off" placeholder="请确认密码">
                            </el-form-item>
                            <el-button type="primary" class="register" @click.prevent="Registerbtn">注册</el-button>
                        </el-form>
                        <div>
                            <span class="free_res">已有账号?<span @click="dialogLoginshow = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                <div class="container46" v-show="dialogForgetpass">
                    <el-form action="" :rules="rules">
                        <p class="sign_logo">忘记密码</p>
                         <el-form-item >
                                <input type="email"  class="tele" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱">
                            </el-form-item>
                        <el-form-item prop="code">
                                <input v-model="formReset.code"  class="iden01" auto-complete="off"  placeholder="验证码">
                        </el-form-item>
                        <button class="iden02" @click.prevent="Getcodebtn">获取验证码</button>
                        <button class="register"  @click="Getusercodebtn">下一步</button>
                    </el-form>
                </div>
                <div v-show="dialogPassSure">
                    <div class="container44">
                        <form action="">
                            <p class="sign_logo">确认密码</p>
                            <input type="password" v-model="formReset.password" class="tele" placeholder="输入密码">
                            <input type="password" v-model="formReset.checkpassword" class="iden01" placeholder="再次确认密码">                  
                            <button class="register" @click.prevent="Getuserpassbtn">确认</button>
                        </form> 
                    </div>
                </div> 
                </div> 
            </el-dialog> 
        </transition>
    </div>   
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { mapGetters,mapActions} from 'vuex'

export default {
    data() {
        return {
            dialogRegister: false,
            dialogLogin: false,
            dialogLoginshow:false,
            dialogForgetpass: false,
            dialogPassSure:false,
            loginsign: true,
            usercenter: false,
            msg:'',
            // dropdowm:false,
            formLogin: {
                username: '',
                password: '',
            },
            formRegister: {
                username: '',
                password: '',
                checkpassword: '',
                mail:'',
            },
            formReset: {
                password: '',
                ckeckpassword: '',
                mail:'',
                code:'',
                msg:'',
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                    {pattern:/^[a-zA-Z]w{1,4}$/,message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}],
                mail:[
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type:'email', message: '请输入合法的email邮箱', trigger: 'blur,change' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {min:6,max:12, message: '长度在 6 到 12 个英文与数字', trigger: 'blur' }
                ],
                checkpassword:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {min:6,max:12, message: '长度在 6 到 12 个英文与数字', trigger: 'blur' }
                ],
            },
        };
    },
    mounted:function() { 
        // 判断session值是否存在，如果存在，则执行
        this.Getsession()
        this.Getsessionname()
    }, 
    methods: {
        ...mapActions(['Getsession01']),  
        // 语言设置 
        language(){
            this.$message({
                message:'敬请期待更多语言功能'
            })
        },
        // 下拉菜单
        dropdowmcontrol(){
            this.$store.state.isdropdownparent = !this.$store.state.isdropdownparent
        },
        //登陆
        Loginbtn() {
            this.axios.post('/res/login', {
                username:this.formLogin.username,
                password:this.formLogin.password,
            })
            .then(response => {
                var datamsg = response.data
                this.msg = response.data.errmsg
                console.log(datamsg.errmsg)
                if(!response.data.data){
                    this.$message({
                        message:datamsg.errmsg,
                        center:true
                    })
                }else{
                    console.log('denglu')
                    this.Getsessionname()
                    this.Getsession()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 注册
        Registerbtn() {
            if( this.formRegister.password!==this.formRegister.checkpassword||this.formRegister.password.length<6||this.formRegister.checkpassword.length<6||this.formRegister.username.length<3||this.formRegister.username.length>10||this.formRegister.mail.length<9){
                this.$message({
                message: '请根据提示输入相应的内容',
                center: true
                });
            }
            else
            {    
                this.axios.post('/res/signup', {
                    username:this.formRegister.username,
                    password:this.formRegister.password,
                    mail:this.formRegister.mail
                })
                .then(response => {
                    this.registermsg = response.data.data.msg;
                    this.$message({
                    message: this.registermsg,
                    center: true
                    });    
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        //获取验证码
        Getcodebtn() {
            if(this.formReset.mail.length<9){
                this.$message({
                message: '请根据提示输入相应的内容',
                center: true
                });
            }
            else
            {    
                this.axios.post('/res/getverifycode',{
                    mail:this.formReset.mail
                })
                .then(response => {
                    console.log(response)
                    this.$message({
                    message: response.data.data.msg,
                    center: true
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        //获取用户验证码
        Getusercodebtn() {
            this.axios.post('/res/checkcode',{
                code:this.formReset.code,
                mail:this.formReset.mail
            })
            .then(response => {
                this.$message({
                message: response.data.data.msg,
                center: true
                });
                if(response.data.data.state==1){
                this.dialogPassSure = true
                this.dialogForgetpass = false
                }   
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 修改密码
        Getuserpassbtn() {
            if(this.formReset.password!==this.formReset.checkpassword||this.formReset.password<6||this.formReset.checkpassword<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/setpassword',{
                    password:this.formReset.password,
                    mail:this.formReset.mail
            })
            .then(response => {
                this.dialogPassSure = false
                this.$message({
                    message: '修改密码成功',
                    center: true
                }); 
            })
            .catch(function (error) {
                console.log(error);
            });
            }     
        },
        //session验证登陆
        Getsession() {  
            this.axios.get('/res/verify')
            .then(response =>{
                if(response.data.data){
                    this.dialogLogin = false;
                    this.loginsign = false;
                    this.usercenter = true;
                    sessionStorage.userid = response.data.data.userid
                    sessionStorage.usernamesession = response.data.data.username
                }else{
                    this.dialogLogin = false;
                    this.loginsign = true;
                    this.usercenter = false;
                }
            }) 
        },
        Getsessionname(){
            if(sessionStorage.usernamesession){
                this.dialogLogin = false;
                this.loginsign = false;
                this.$store.state.usernamesession02 = sessionStorage.usernamesession
                this.$store.state.userid = sessionStorage.userid
                this.usercenter = true; 
            }
        },
        // 退出登陆
        Cancellogout() {
            this.axios.get('/res/logout')
            .then(response =>{  
                this.loginsign = true;
                this.usercenter = false;
                this.dropdowm = false;     
            }) 
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 总样式开始 */
.headercontainer04{
    position: fixed;
    width: 100%;
    height: 114px;
    top: 0px;
    left: 0px;
    z-index: 200;
}
/* 总样式结束 */

/* 头部样式开始 */
.headercontainer04 .headone{
    position: fixed;
    width: 100%;
    height: 30px;
    top: 0px;
    left: 0px;
    background: #333;
    z-index: 200;
}
.headercontainer04 .headonecenter{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    z-index: 0;
    position: relative;
}
.headercontainer04 .headonecenter .el-dropdown-link{
    position: relative;
    left: 2px;
    top: 2px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    z-index: 200;
}
.headercontainer04 .headonecenter .el-dropdown-link02{
    position: relative;
    left: -20px;
}
.headercontainer04 .headonecenter .shopping{
    position: relative;
    left: 916px;
    top: -14px;
    font-size: 12px;
    width: 60px;
    height: 30px;
    color: #fff;
    cursor: pointer;
}
.headercontainer04 .headonecenter .shopping a{
    color: #fff;
}
.headercontainer04 .headonecenter .appdownload{
    position: relative;
    left: 1006px;
    top: -42px;
    font-size: 12px;
    width: 60px;
    height: 13px;
    line-height: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
}
.headercontainer04 .headonecenter .appdownload a{
    color: #fff;
    position: relative;
    top: 4px;
}
.headercontainer04 .headonecenter .block-col-12{
    position:relative;
    left:1104px;
    top: -34px;
    color: #333;
    width: 94px;
    height: 188px;
    font-size: 12px;
    z-index: 1000;
    background: #fff;
    border: 1px solid #333333;
}
.headercontainer04 .headonecenter .block-col-12 a{
    color: #333;
}
.headercontainer04 .headonecenter .block-col-12 li{
    padding-top: 10px;
    padding-left: 24px;
    height: 28px;
}
.headercontainer04 .headonecenter .block-col-12 li:hover{
    background:#000;
    color: #fff;
}
/* 头部样式结束 */

/* 头部列表开始 */
.container04{
    width: 100%;
    height:84px;
    background: #fff;
    position: relative;
    top: 30px;
    box-shadow:1px 7px 5px #f6f6f6;
}
.container04 .container04center{
    width: 1200px;
    height:84px;
    margin: 0 auto;
    position: relative;
    top: 0px;
}
.container04 ul{
    position: absolute;
    left: 186px;
    margin-top: 32px; 
    z-index: 200;
}
.container04 ul li{
    list-style: none;
    float: left; 
    margin-left: 41px;
    font-size: 16px; 
    padding-bottom: 8px;
    font-size: 20px;
    z-index: 200;
    cursor: pointer;
}
.container04 ul li p{
    color: #000;
    cursor: pointer;
    text-decoration: none;
}
.container04 ul li a{
    text-decoration: none;
}
.container04 ul li p:hover{
    color: #F13232;
    cursor: pointer;
}
.container04 .router-link-active{
    text-decoration: none;
    position: relative;
    color: #F13232!important;
}
.container04 .router-link-active p{
    color: #F13232!important;
}
.container04 .router-link-active:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 34px;
    bottom: 0px;
    right: 0px;
    height: 2px;
    width: 22px;
    background-color: #F13232;
    border-radius: 2px;
}
.headercontainer04 .logo{
    height: 52px;
    width: 132px;;
    position: absolute;
    left: 0px;
    top: 21px; 
}
.headercontainer04 .login_sign{
     position: absolute;
     top: -14px;
     left: 1124px;
     width: 90px;
     height: 50px;
     z-index: 200;
     border-radius: 10px;
     color: #fff;
     cursor: pointer;
}
.headercontainer04 .login{
    display: inline;
    position: absolute;
    top: 22px;
    left:20px;
    font-size: 12px;
    color: #fff;;
    cursor: pointer;
}
.headercontainer04 .login01{
    display: inline;
    position: absolute;
    top: 6px;
    left:1140px;
    font-size: 12px;
    color: #fff;;
    cursor: pointer;
}
.headercontainer04 .login:hover{
    text-decoration: underline;
}
.headercontainer04 .dialog{
    z-index: 200;
}
.headercontainer04 .cut_off_line{
    position: absolute;
    top: 19px;
    left:40px;
}
.headercontainer04 .sign{
    display: inline;
    position: absolute;
    top: 22px;
    left:52px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
}
.headercontainer04 .sign:hover{
    text-decoration: underline;
}
.headercontainer04 #dropdown-menu-8301{
    position: fixed;
    height: 229px;
    width: 181px;
}
/* 头部列表结束 */

/* 模态框开始 */
.container21{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container21 .sign_logo{
    width: 50px;
    height: 23px;
    position: relative;
    top: 44px;
    left: 184px;
    color: #333;
    font-size: 24px;
    margin-left: 30px;
}
.container21 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container21 .iden01{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}

.container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 226px;
    left: 291px;
    color: #F13232;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
}
.container21 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 254px;
    left: 60px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
    outline: none;
}
.container21 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 317px;
    left: 137px;
    font-size: 14px;
    color: #000;
    font-weight: 600;
}
.container21 .free_res span{
    position: absolute;
    top: 317px;
    left: 216px;
    color: #F13232;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
}
.container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container44 .sign_logo{
    position: absolute;
    height: 24px;
    width: 106px;
    top: 44px;
    left: 155px;
    color: #333;
    font-size: 24px;
}
.container44 .tele{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container44 .iden01{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}
.container44 .register{
    position: absolute;
    height: 49px;
    width: 310px;
    top: 254px;
    left: 60px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
    outline: none;
}
.container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 492px;
    background: #fff;
}
.container19 .sign_logo{
    position: absolute;
    top: 44px;
    left: 184px;
    color: #333;
    font-size: 24px;
}
.container19 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden01{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 144px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden02{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 186px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden03{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 228px;
    left: 60px;
    padding-left: 10px;
}
.container19 .register{
    position: absolute;
    height: 49px;
    width: 301px;
    top: 382px;
    left: 60px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
    outline: none;
}
.container19 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 353px;
    left: 60px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.container19 .free_res span{
    position: absolute;
    top: 0px;
    left: 75px;
    height: 14px;
    width: 141px;
    color: #F13232;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.container46{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container46 .sign_logo{
    position: absolute;
    top: 44px;
    left: 159px;
    color: #333;
    font-size: 24px;
}
.container46 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container46 .iden01{
    position: absolute;
    height: 48px;
    width: 170px;
    top: 148px;
    left: 60px;
    padding-left: 10px;
    margin: 0px!important;
}
.container46 .iden02{
    position: absolute;
    height: 52px;
    width: 111px;
    top: 170px;
    left: 250px;
    background: #F13232;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: none;
}
.container46 .setpass{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 220px;
    left: 70px;
    padding-left: 10px;
}
.container46 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 256px;
    left: 60px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
    outline: none;
}
.container46 .back_login{
    position: absolute;
    height: 16px;
    width: 289px;
    top: 345px;
    left: 332px;
    color: #44878D;
    font-size: 15px;
    cursor: pointer;
}
/* 模态框结束 */
</style>