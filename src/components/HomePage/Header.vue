<template>
    <div class="headercontainer04">
        <div class="headone">
            <!-- 头部 -->
            <div class="headonecenter">
                <!-- 语言设置 -->
                <span class="el-dropdown-link" @click="Language">
                    中文<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <div class="shopping"><a href="https://shop194048616.taobao.com/" target="_blank">官方商城</a></div>
                <div class="appdownload"><router-link to="/Download">APP下载</router-link></div>
                <!-- 登录注册 -->
                <div class="login_sign" v-show="loginSign"> 
                    <p class="login" type="text"  
                    @click="dialogLogin = true, 
                    dialogLoginShow = true, 
                    dialogRegister = false, 
                    dialogForgetPassword= false">登录</p>   
                    <p class="sign"  type="text" 
                    @click="dialogLogin = true, 
                    dialogLoginShow = false, 
                    dialogRegister = true, 
                    dialogForgetPassword= false, 
                    dialogPasswordSure=false">注册</p>   
                </div>
                <div class="username"  v-show="userCenter" id="myPanel"> 
                    <p class="login01" type="text"  @click="dropDowmcontrol">{{this.$store.state.usernamesession02}}</p>   
                </div> 
                <!-- 下拉框  -->
                <div v-show="$store.state.isdropdownparent">
                    <ul class="block-col-12">
                        <router-link to="/Demo"><li><p>作品管理</p></li></router-link>
                        <router-link to="#"><li>社区消息</li></router-link>
                        <router-link to="/User"><li @click="clearsessionlookuser">个人中心</li></router-link> 
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
                    <li>
                        <a href="http://www.manykit.com" target="_blank"><p>许多米</p></a> 
                    </li>  
                </ul> 
            </div>
        </div> 
         <!-- 模态框 -->      
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin"  width="420px" :modal="true" :modal-append-to-body="false" :lock-scroll="false">
                <img class="close" @click="Close" src="../../assets/login/close.png" alt="">
                <div>
                    <div class="container21" v-show="dialogLoginShow">
                        <form action="">
                            <p class="sign_logo">登录</p>
                            <input type="text" v-model="formLogin.userName" class="tele" placeholder="请输入用户名">
                            <input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码">
                            <p class="ap_text" @click="dialogLoginShow= false,dialogForgetPassword = true">忘记密码?</p>
                            <button class="register" @click.prevent="Loginbtn">登录</button>
                            <div class="free_res"><p>没有账号?</p><span @click="dialogLoginShow = false,dialogRegister = true">免费注册</span></div>    
                        </form> 
                    </div>
                    <div class="container19" v-show="dialogRegister">
                        <el-form :model="formRegister" :rules="rules">
                            <p class="sign_logo">注册</p>
                            <el-form-item prop="userName">
                                <input v-model="formRegister.userName"  class="tele" auto-complete="off" placeholder="请输入用户名">
                            </el-form-item>
                            <el-form-item prop="mail">
                                <input type="email"  class="iden01" v-model="formRegister.mail" auto-complete="off" placeholder="请输入邮箱">
                            </el-form-item>
                            <el-form-item prop="password">
                                <input type="password" class="iden02" v-model="formRegister.password" auto-complete="off" placeholder="请输入密码">
                            </el-form-item>
                            <el-form-item prop="password">
                                <input type="password" class="iden03" v-model="formRegister.checkPassword" auto-complete="off" placeholder="请确认密码">
                            </el-form-item>
                            <el-button type="primary" class="register" @click.prevent="Registerbtn">注册</el-button>
                        </el-form>
                        <div>
                            <span class="free_res">已有账号?<span @click="dialogLoginShow = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                    <div class="container46" v-show="dialogForgetPassword">
                        <el-form action="" :rules="rules">
                            <p class="sign_logo">忘记密码</p>
                            <el-form-item >
                                    <input type="email"  class="tele" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱">
                                </el-form-item>
                            <el-form-item prop="code">
                                    <input v-model="formReset.code"  class="iden01" auto-complete="off"  placeholder="验证码">
                            </el-form-item>
                            <button v-bind:class="{iden0202:btnTxtColor01 , iden020202:btnTxtColor02}" @click.prevent="Getcodebtn" :disabled="disabled">{{btnTxt}}</button>
                            <button class="register"  @click.prevent="Getusercodebtn">下一步</button>
                        </el-form>
                    </div>
                    <div v-show="dialogPasswordSure">
                        <div class="container44">
                            <form action="">
                                <p class="sign_logo">确认密码</p>
                                <input type="password" v-model="formReset.password" class="tele" placeholder="输入密码">
                                <input type="password" v-model="formReset.checkPassword" class="iden01" placeholder="再次确认密码">                  
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
import NodeRSA from 'node-rsa'//获取公钥插件

export default {
    data() {
        return {
            dialogRegister: false,//控制注册框显示隐藏变量
            dialogLogin: false,//控制模态框显示隐藏变量
            dialogLoginShow:false,//控制登录显示隐藏变量
            dialogForgetPassword: false,//控制忘记密码显示隐藏变量
            dialogPasswordSure:false,//控制确认密码显示隐藏变量
            loginSign: true,//控制登录注册显示隐藏变量
            userCenter: false,//控制用户名显示隐藏变量
            msg:'',//后台提示的返回的数据
            publicKey:'',//后台请求的公钥
            disabled:false,//控制按钮是否可点击
            time:0,//验证码时间初始化
            btnTxt:'获取验证码',//验证码按钮文字
            btnTxtColor01:true,//验证码按钮的颜色
            btnTxtColor02:false,//验证码按钮的颜色
            // dropDowm:false,
            formLogin: {//登录表单
                userName: '',//用户输入的名称
                password: '',//用户输入的密码
                passwordrsc:''//加密后的密码
            },
            formRegister: {//注册表单
                userName: '',//用户输入的名称
                password: '',//用户输入的密码
                checkPassword: '',//用户输入的确认密码
                encryptPassword:'',//注册加密后的密码
                mail:'',//用户输入的邮箱
            },
            formReset: {//重置密码表单表单
                password: '',//用户输入密码
                checkPassword: '',//用户再次输入密码
                encryptPassword:'',//加密后的密码
                mail:'',//邮箱
                code:'',//验证码
                msg:'',//后台返回的提示数据
            },
            rules:{//element验证规则
                userName: [
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
                checkPassword:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {min:6,max:12, message: '长度在 6 到 12 个英文与数字', trigger: 'blur' }
                ],
            },
        };
    },
    mounted:function() { 
        // 判断session值是否存在，如果存在，则执行
        this.Getsession()
        // this.Getsessionname()
    }, 
    methods: {
        ...mapActions(['Getsession01']),  
        //清除session
        clearsessionlookuser(){
            sessionStorage.lookuserdes=''
            // location.reload();
        },
        //模态款黑色的关闭按钮
        Close(){
            this.dialogLogin = false
        },
        // 语言设置 
        Language(){
            this.$message({
                message:'敬请期待更多语言功能'
            })
        },
        // 下拉菜单
        dropDowmcontrol(){
            this.$store.state.isdropdownparent = !this.$store.state.isdropdownparent
        },
        //登陆
        async Loginbtn() {
            var reguserpassword = /^[a-zA-Z0-9]\w{4,16}$/;
            let logintextpassword = this.publicKey;
            var privatekey = new NodeRSA(logintextpassword);
            this.formLogin.passwordrsc = privatekey.encrypt(this.formLogin.password, 'base64');
            if(this.formLogin.userName == ''){
                this.$message({
                message: '请输入用户名',
                center: true
                });   
            }
            else if(this.formLogin.password == ''){
                this.$message({
                message: '请输入密码',
                center: true
                });   
            }
            if(!reguserpassword.test(this.formLogin.password)){
                this.$message({
                message: '密码格式不正确',
                center: true
                });   
            }
            else{
                 this.axios.post('/res/login', {
                username:this.formLogin.userName,
                password:this.formLogin.passwordrsc,
            })
            .then(response => {
                var datamsg = response.data
                this.msg = response.data.errmsg
                if(!response.data.data){
                    this.$message({
                        message:datamsg.errmsg,
                        center:true
                    })
                }else{
                    this.dialogLogin = false
                    this.Getsession()
                    // this.Getsessionname()  
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            }   
        },
        // 注册
        Registerbtn() {
            var reguserName = /^[a-zA-Z0-9]\w{3,16}$/;
            var reguserpassword = /^[a-zA-Z0-9]\w{4,16}$/;
            var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            let logintextpassword = this.publicKey;
            var privatekey = new NodeRSA(logintextpassword);
            this.formRegister.encryptPassword = privatekey.encrypt(this.formRegister.password, 'base64');
            if(!reguserName.test(this.formRegister.userName)){
                this.$message({
                message: '用户名长度在4-16之间， 只能包含字母、数字',
                center: true
                });   
            }
            else if(this.formRegister.mail==''||this.formRegister.mail.length<12){
                this.$message({
                message: '邮箱格式不正确',
                center: true
                });  
            }else if(!regEmail.test(this.formRegister.mail)){
                this.$message({
                message: '邮箱格式不正确',
                center: true
                });  
            }
            else if(!reguserpassword.test(this.formRegister.password)){
                this.$message({
                message: '密码长度（6~20 英文+数字）',
                center: true
                });
            }
            else if( this.formRegister.password!==this.formRegister.checkPassword){
                this.$message({
                message: '密码输入不一致',
                center: true
                });
            }
            else
            {    
                this.axios.post('/res/signup', {
                    username:this.formRegister.userName,
                    password:this.formRegister.encryptPassword,
                    mail:this.formRegister.mail
                })
                .then(response => {
                    if(response.data.data){
                        this.registermsg = response.data.data.msg;
                        this.$message({
                        message: this.registermsg,
                        center: true
                        }); 
                    }else{
                        this.registermsg = response.data.errmsg;
                        this.$message({
                        message: this.registermsg,
                        center: true
                        }); 
                    }
                    this.dialogLogin = false 
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
                    this.$message({
                    message: response.data.data.msg,
                    center: true
                    });
                    this.time=60;
                    this.disabled=true;
                    this.Timer();
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        //验证60s
        Timer() {
            if (this.time > 0) {
                    this.time--;
                    this.btnTxt=this.time+"s";
                    setTimeout(this.Timer, 1000);
                    this.btnTxtColor01=false
                    this.btnTxtColor02=true
            } else{
                    this.time=0;
                    this.btnTxt="获取验证码";
                    this.disabled=false;
                    this.btnTxtColor01=true
                    this.btnTxtColor02=false
            }
        },
        //获取用户验证码
        Getusercodebtn() {
            this.axios.post('/res/checkcode',{
                code:this.formReset.code,
                mail:this.formReset.mail
            })
            .then(response => {
                if( response.data.data.msg =="验证成功"){
                    this.$message({
                    message: '验证成功',
                    center: true
                    });
                    this.dialogPasswordSure = true
                    this.dialogForgetPassword = false
                }else{
                    this.$message({
                    message:'验证失败',
                    center: true
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 修改密码
        Getuserpassbtn() {
            let logintextpassword = this.publicKey;
            var privatekey = new NodeRSA(logintextpassword);
            this.formReset.encryptPassword = privatekey.encrypt(this.formReset.password, 'base64');
            if(this.formReset.password!==this.formReset.checkPassword||this.formReset.password<6||this.formReset.checkPassword<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/setpassword',{
                password:this.formReset.encryptPassword,
                mail:this.formReset.mail
            })
            .then(response => {
                this.dialogLogin = false
                this.dialogPasswordSure = false
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
                if(response.data.data.userid){
                    this.publicKey = response.data.data.publicKey
                    this.dialogLogin = false;
                    this.loginSign = false;
                    sessionStorage.userid = response.data.data.userid
                    sessionStorage.usernamesession = response.data.data.username
                    this.$store.state.usernamesession02 = sessionStorage.usernamesession
                    this.$store.state.userid = sessionStorage.userid  
                    this.userCenter = true; 
                }else{
                    this.dialogLogin = false;
                    this.userCenter = false;
                    this.loginSign = true;
                    this.publicKey = response.data.data.publicKey
                }
            }) 
        },
        // Getsessionname(){
        //     console.log(sessionStorage.userid)
        //     if(sessionStorage.userid!=null){
        //         console.log(333)
        //         this.$store.state.userNamesession02 = sessionStorage.usernamesession
        //         this.$store.state.userid = sessionStorage.userid
        //         this.dialogLogin = false;
        //         this.loginSign = false;
        //         this.userCenter = true;
        //         console.log(444)
        //     }
        // },
        // 退出登陆
        Cancellogout() {
            this.axios.get('/res/logout')
            .then(response =>{  
                this.loginSign = true;
                this.userCenter = false;
                this.dropDowm = false;  
                sessionStorage.usernamesession =''  
                sessionStorage.userid ='' 
                this.$store.state.userid = ''
                this.$router.push({ name: 'Home' })
                this.$router.push({ name: 'Recommend' })
                location.reload()   
            }) 
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/index.less';
/* 总样式开始 */
.headercontainer04{
    position: fixed;
    width: 100%;
    min-width: 1300px;
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
    min-width: 1300px;
    height: 30px;
    top: 0px;
    left: 0px;
    background: @gray;
    z-index: 200;
}
.headercontainer04 .headonecenter{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    padding-left: 5px;
}
.headercontainer04 .headonecenter .el-dropdown-link{
    position: relative;
    left: 2px;
    top: 2px;
    font-size:@ss-size;
    color: @img-color;
    cursor: pointer;
    z-index: 200;
}
.headercontainer04 .headonecenter .el-dropdown-link:hover{
    color: @background-color;
}
.headercontainer04 .headonecenter .el-dropdown-link02{
    position: relative;
    left: -20px;
}
.headercontainer04 .headonecenter .shopping{
    position: relative;
    left: 916px;
    top: -14px;
    font-size:@ss-size;
    width: 60px;
    height: 30px;
    color: @img-color;
    cursor: pointer;
}
.headercontainer04 .headonecenter .shopping a{
    color: @img-color;
    text-decoration: none;
}
.headercontainer04 .headonecenter .shopping a:hover{
    color: @background-color;
}
.headercontainer04 .headonecenter .appdownload{
    position: relative;
    left: 1006px;
    top: -42px;
    font-size:@ss-size;
    width: 60px;
    height: 13px;
    line-height: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid @background-color;
    border-right: 1px solid @background-color;
    cursor: pointer;
}
.headercontainer04 .headonecenter .appdownload a{
    color: @img-color;
    position: relative;
    top: 4px;
    text-decoration: none;
}
.headercontainer04 .headonecenter .appdownload a:hover{
    color: @background-color;
}
.headercontainer04 .headonecenter .block-col-12{
    position:relative;
    left:1106px;
    top: -35px;
    color: @gray;
    width: 92px;
    height: 188px;
    font-size:@ss-size;
    z-index: 1000;
    background: @background-color;
    border: 1px solid @gray;
}
.headercontainer04 .headonecenter .block-col-12 a{
    color: @gray;
}
.headercontainer04 .headonecenter .block-col-12 a:hover{
    color: @background-color;
    text-decoration: none;
}
.headercontainer04 .headonecenter .block-col-12 li{
    padding-top: 10px;
    padding-left: 24px;
    height: 28px;
    cursor: pointer;
}
.headercontainer04 .headonecenter .block-col-12 li:hover{
    background:@black;
    color: @background-color;
}
/* 头部样式结束 */

/* 头部列表开始 */
.container04{
    width: 100%;
    height:84px;
    background: @background-color;
    position: relative;
    top: 30px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.2), 0 -6px 11px 0 rgba(0,0,0,.2);
    // box-shadow:0px 3px 5px @shadow-color;
}
.container04 .container04center{
    width: 1200px;
    height:84px;
    margin: 0 auto;
    position: relative;
    top: 0px;
    padding-left: 5px;
}
.container04 ul{
    position: absolute;
    left: 167px;
    margin-top: 32px; 
    z-index: 200;
}
.container04 ul li{
    list-style: none;
    float: left; 
    margin-left: 44px;
    font-size:@xm-size; 
    padding-bottom: 8px;
    z-index: 200;
    cursor: pointer;
}
.container04 ul li p{
    color: @black;
    cursor: pointer;
    text-decoration: none;
}
.container04 ul li a{
    text-decoration: none;
}
.container04 ul li p:hover{
    color: @main-color;
    cursor: pointer;
}
.container04 .router-link-active{
    text-decoration: none;
    position: relative;
    color: @main-color!important;
}
.container04 .router-link-active p{
    color: @main-color!important;
}
.container04 .router-link-active:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 28px;
    bottom: 0px;
    right: 0px;
    height: 2px;
    width: 22px;
    background-color: @main-color;
    border-radius: 2px;
}
.headercontainer04 .logo{
    height: 52px;
    width: 132px;;
    position: absolute;
    left: 0px;
    top: 21px; 
}
.headercontainer04 .close{
    float: right;
    position: relative;
    right: 13px;
    top: 13px;
    cursor: pointer;
}
.headercontainer04 .login_sign{
     position: absolute;
     top: -14px;
     left: 1124px;
     width: 90px;
     height: 50px;
     z-index: 200;
     border-radius: 10px;
     color: @background-color;
     cursor: pointer;
}
.headercontainer04 .login{
    display: inline;
    position: absolute;
    top: 22px;
    left:20px;
    font-size:@ss-size;
    color: @img-color;
    cursor: pointer;
    text-decoration: none;
}
.headercontainer04 .login01{
    display: inline;
    position: absolute;
    top: 6px;
    left:1140px;
    font-size:@ss-size;
    color: @background-color;
    cursor: pointer;
}
.headercontainer04 .login:hover{
    text-decoration: none;
    color: @background-color;
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
    font-size:@ss-size;
    color: @img-color;
    cursor: pointer;
    text-decoration: none;
}
.headercontainer04 .sign:hover{
    text-decoration: none;
    color: @background-color;
}
.headercontainer04 #dropdown-menu-8301{
    position: fixed;
    height: 229px;
    width: 181px;
}
/* 头部列表结束 */

/* 模态框开始 */
.headercontainer04 .container21{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.headercontainer04 .container21 .sign_logo{
    width: 50px;
    height: 23px;
    position: relative;
    top: 44px;
    left: 162px;
    color: @gray;
    font-size: 24px;
    margin-left: 30px;
}
.headercontainer04 .container21 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.headercontainer04 .container21 .iden01{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}

.headercontainer04 .container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 238px;
    left: 291px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.headercontainer04 .container21 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 266px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.headercontainer04 .container21 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 317px;
    left: 137px;
    font-size:@sm-size;
    color: @black;
    font-weight: 600;
}
.headercontainer04 .container21 .free_res span{
    position: absolute;
    top: 317px;
    left: 216px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.container44 .sign_logo{
    position: absolute;
    height: 24px;
    width: 106px;
    top: 44px;
    left: 155px;
    color: @gray;
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
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 492px;
    background: @background-color;
}
.container19 .sign_logo{
    position: absolute;
    top: 44px;
    left: 184px;
    color: @gray;
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
    top: 122px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden02{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 164px;
    left: 60px;
    padding-left: 10px;
}
.container19 .iden03{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 206px;
    left: 60px;
    padding-left: 10px;
}
.container19 .register{
    position: absolute;
    height: 49px;
    width: 301px;
    top: 394px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.container19 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 365px;
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
    color: @main-color;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.container46{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.container46 .sign_logo{
    position: absolute;
    top: 44px;
    left: 159px;
    color: @gray;
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
    top: 126px;
    left: 60px;
    padding-left: 10px;
    margin: 0px!important;
}
.container46 .iden0202{
    position: absolute;
    height: 52px;
    width: 111px;
    top: 170px;
    left: 250px;
    background: @main-color;
    color: @background-color;
    font-size:@xm-size;
    cursor: pointer;
    border: none;
}
.container46 .iden020202{
    position: absolute;
    height: 52px;
    width: 111px;
    top: 170px;
    left: 250px;
    background:@cancel-color;
    color: @background-color;
    font-size:@xm-size;
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
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
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
    color: @back-color;
    font-size: 15px;
    cursor: pointer;
}
/* 模态框结束 */
</style>