<template>
    <div class="headercontainer04">
        <div class="container04">
            <a href="static/img/allpic.87321c0.png"></a>
            <img class="logo" src="../../assets/home/logo.png" alt="">  
            <ul>
                <li>
                    <router-link class="a_text" to="/Home">首页</router-link>
                </li>    
                <li>
                    <router-link class="a_text" to="/Lesson">课程</router-link>
                </li> 
                <li>
                    <router-link class="a_text" to="/source">素材</router-link>
                </li> 
                 <li>
                    <router-link class="a_text" to="/Publish">发布</router-link>
                </li>
                <li>
                    <a class="a_text" href="https://mofang.qq.com/index/?type=staffpick&pagenum=0&pagesize=40" target="_blank">磨坊</a>
                </li> 
                <li>
                    <router-link class="a_text" to="/Download">下载</router-link>
                </li>  
            </ul> 
            <img class="make" src="../../assets/home/make.png" alt=""> 
            <div class="login_sign" v-show="loginsign"> 
                <p class="login" type="text"  @click="dialogLogin = true" >登陆</p>   
                <span class="cut_off_line">/</span>  
                <p class="sign"  type="text" @click="dialogRegister = true" >注册</p>  
            </div>
            <div class="username" v-show="usercenter"> 
                <img class="user" src="../../assets/home/user.png" alt="">
                <p class="login" type="text"  @click="dialogLogin = true" >{{$store.state.usernamesession02}}</p>   
            </div>  
            <div v-show="dropdowm">
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
                            <router-link to="/setting"><el-dropdown-item>账号设置</el-dropdown-item></router-link>   
                            <el-dropdown-item><p @click="Cancellogout">退出登陆</p></el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
        </div>
 

        <!-- 模态框 -->
    
        <!-- 注册模块 -->
        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogRegister" :modal="false" width="420px">
                    <div class="container19">
                        <el-form :model="formRegister" :rules="rules">
                            <img class="welcome" src="../../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                            <el-form-item prop="username" class="tele">
                                <el-input v-model="formRegister.username" auto-complete="off" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item prop="mail"  class="iden01">
                                <el-input type="email" v-model="formRegister.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" class="iden02">
                                <el-input type="password" v-model="formRegister.password" auto-complete="off" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" class="iden03">
                                <el-input type="password" v-model="formRegister.checkpassword" auto-complete="off" placeholder="请确认密码"></el-input>
                            </el-form-item>
                            <el-button type="primary" class="register" @click="Registerbtn">注册</el-button>
                        </el-form>
                        <div>
                            <span class="free_res">已有账号<span @click="dialogLogin = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                </el-dialog>
            </div>
        </transition>
         <!-- 账号密码登陆 -->
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin" class="dialog_login" width="420px" :modal="false">
                <div>
                    <div class="container21">
                        <form action="">
                            <img class="welcome" src="../../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                            <input type="text" v-model="formLogin.username" class="tele" placeholder="请输入手机号码/账号">
                            <input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码">
                            <p class="ap_text" @click="dialogLogin = false,dialogForgetpass = true">忘记密码?</p>
                            <button class="register" @click="Loginbtn">登陆</button>
                            <div class="free_res"><p>没有账号?</p><span @click="dialogLogin = false,dialogRegister = true">免费注册</span></div>    
                        </form> 
                    </div>
                </div> 
            </el-dialog> 
        </transition>
         <!-- 重置密码登陆 -->
        <transition name="el-fade-in-linear">
        <el-dialog :visible.sync="dialogForgetpass" class="dialog_login" width="420px" :modal="false">
            <div>
                <div class="container46">
                    <el-form action="" :rules="rules">
                        <img class="welcome" src="../../assets/login/welcome.png" alt="">
                        <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                         <el-form-item  class="tele">
                                <el-input type="email" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                        <el-form-item prop="code" class="iden01">
                                <el-input v-model="formReset.code" auto-complete="off"  placeholder="验证码"></el-input>
                        </el-form-item>
                        <button class="iden02" @click="Getcodebtn">获取验证码</button>
                        <button class="register"  @click="Getusercodebtn">重置密码</button>
                    </el-form>
                </div>
            </div>    
        </el-dialog>  
        </transition>
          <!-- 重置密码 -->
        <transition name="el-fade-in-linear">
        <el-dialog :visible.sync="dialogPassSure" class="dialog_login" width="420px" :modal="false">
            <div>
                <div class="container44">
                    <form action="">
                        <img class="welcome" src="../../assets/login/welcome.png" alt="">
                        <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                        <input type="password" v-model="formReset.password" class="tele" placeholder="输入密码">
                        <input type="password" v-model="formReset.checkpassword" class="iden01" placeholder="再次确认密码">                  
                        <button class="register" @click="Getuserpassbtn">确认</button>
                    </form> 
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
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                email: ''
            },
            dialogRegister: false,
            dialogSetpass:false,
            dialogLogin: false,
            dialogForgetpass: false,
            dialogPassSure:false,
            loginsign: true,
            usercenter: false,
            dropdowm:false,
            stata:'',
            resgistermsg:'',
            usernamesession01:this.$store.state.usernamesession01,
            formLogin: {
                username: '',
                username01:'',
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
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
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
                code:[
                    { required: true, message: '验证码不正确', trigger: 'blur' },
                    { min:6,max:6, message: '请输入正确的验证码', trigger: 'blur' }
                ],
            },
        };
    },
    mounted:function() {
        this.Getsession()  
        // this.$store.dispatch('Getsession01') 
    }, 
    methods: {
        ...mapActions(['Getsession01']),   
            //登陆
        Loginbtn() {
            this.axios.post('/res/login', {
                username:this.formLogin.username,
                password:this.formLogin.password,
            })
            .then(response => {
                this.state = response.data.data.state;
                switch(this.state)
                    {
                    case 0:
                    this.$message({
                        message: '此账号没有激活',
                        center: true
                    });
                    break;
                    case 1:
                    this.dialogLogin = false,
                    this.loginsign = false,
                    this.usercenter = true,
                    this.dropdowm = true,
                    this.$message({
                        message: '登陆成功',
                        center: true,
                    });  
                    this.$router.push({ name: 'Lesson' }); 
                    break;
                    case 2:
                    this.$message({
                        message: '密码错误',
                        center: true
                    });
                    break;
                    default:
                     this.$message({
                        message: '账号错误',
                        center: true
                    });
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
            // session验证
            console.log(this.$store.state.userid)   
            this.axios.get('/res/verify')
            .then(response =>{
                // this.formLogin.username01=response.data.data.username
                if(response.data.data){
                    this.dialogLogin = false;
                    this.loginsign = false;
                    this.usercenter = true;
                    this.dropdowm = true; 
                    this.$store.state.usernamesession02=response.data.data.username
                    this.$store.state.userid=response.data.data.userid
                }else{
                    this.dialogLogin = false;
                    this.loginsign = true;
                    this.usercenter = false;
                    this.dropdowm = false; 
                }
            }) 
        },
        //取消登陆
        Cancellogout() {
            // 退出登陆
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
.headercontainer04{
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0px;
    left: 0px;
    background: #fff;
    z-index: 200;
}
.container04{
    width: 1000px;
    height:60px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    top: 0px;
}
.logo{
    height: auto;
    width: auto;
    position: absolute;
    left: 2%;
    top: 3px; 
}
.container04 ul{
    position: absolute;
    left: 20%;
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
}
.a_text:hover{
    color: #0078d7;
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
    left: 780px;
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
     position: absolute;
     top: 5px;
     left: 884px;
     width: 90px;
     height: 50px;
     z-index: 200;
     border-radius: 10px;
}
.login_sign:hover{  
   background-color: #E3E3E3;
}
.username .login{
    position: absolute;
    top: 20px;
    left:915px;
    width: auto;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    z-index: 1000;
}
.username .user{
    position: absolute;
    top: 5px;
    left:870px;
    width: 40px;
    height: 40px;
    background: red;
    border-radius: 20px;
    z-index: 1000;
}
.login{
    display: inline;
    position: absolute;
    top: 17px;
    left:10px;
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
    left:40px;
}
.sign{
    display: inline;
    position: absolute;
    top: 17px;
    left:49px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
}
.sign:hover{
    text-decoration: underline;
}
.block-col-12{
    position: absolute;
    left: 90%;
    top: 15px;
    width: 130px;
    height: 50px;
    font-size: 24px;
    opacity: 0;
    z-index: 1200;
}
#dropdown-menu-8301{
    position: fixed;
    height: 229px;
    width: 181px;
}
.container21{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #9cf7ff;
}
.container21 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container21 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container21 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container21 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 167px;
    left: 60px;
    padding-left: 10px;
}

.container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 229px;
    left: 292px;
    color: #3399CC;
    font-size: 14px;
    cursor: pointer;
}
.container21 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 254px;
    left: 60px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.container21 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 317px;
    left: 107px;
    font-size: 15px;
     color: #000;
}
.container21 .free_res span{
    position: absolute;
    top: 317px;
    left: 216px;
    color: #0078d7;
    font-size: 15px;
    cursor: pointer;
}
.container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #9cf7ff;
}
.container44 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container44 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container44 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 130px;
    left: 60px;
    padding-left: 10px;
}
.container44 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 195px;
    left: 60px;
    padding-left: 10px;
}
.container44 .register{
    position: absolute;
    height: 49px;
    width: 310px;
    top: 284px;
    left: 60px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 476px;
    background: #9cf7ff;
}
.container19 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container19 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container19 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 168px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden02{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 226px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden03{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 284px;
    left: 60px;
    padding-left: 10px;
}
.container19 .register{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 366px;
    left: 68px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.container19 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 338px;
    left: 28px;
    font-size: 15px;
    cursor: pointer;
}
.container19 .free_res span{
    position: absolute;
    top: 0px;
    left: 75px;
    height: 14px;
    width: 141px;
    color: #0078d7;
    font-size: 15px;
    cursor: pointer;
}
.container46{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #9cf7ff;
}
.container46 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container46 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container46 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 130px;
    left: 60px;
    padding-left: 10px;
}
.container46 .iden01{
    position: absolute;
    height: 49px;
    width: 180px;
    top: 195px;
    left: 70px;
    padding-left: 0px;
    margin: 0px!important;
}
.container46 .iden02{
    position: absolute;
    height: 40px;
    width: 111px;
    top: 195px;
    left: 260px;
    background: #68c5f5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
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
    top: 274px;
    left: 70px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
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
</style>