<template>
    <div class="containblockly">
         <div class="logo"><p class="one">PHONENI</p><p class="two">X</p><P class="three">Frame Blockly</P></div>
         <div class="programe"><img src="../assets/blockly/familly.png" alt=""><p>编程</p></div>
         <div class="programecourse"><img src="../assets/blockly/jiao.png" alt=""><p>教程</p></div>
         <div class="left"><img src="../assets/blockly/leftimg.png" alt=""></div>
         <div class="right"><img src="../assets/blockly/rightimg.png" alt=""></div>
         <div v-show="loginSign">
            <div class="login"
            @click="dialogLogin = true, 
            dialogLoginShow = true, 
            dialogRegister = false, 
            dialogForgetPassword= false">登录</div>
            <span class="or">|</span>
            <div class="signup"
            @click="dialogLogin = true, 
            dialogLoginShow = false, 
            dialogRegister = true, 
            dialogForgetPassword= false, 
            dialogPasswordSure=false">注册</div>
         </div>
        <div  v-show="userCenter" id="myPanel01"> 
            <p class="user"  @click="dropDowmcontrol">{{this.$store.state.usernamesession02}}</p>   
        </div> 

        <iframe class="blockly" src="static/blockly/apps/px2blockly/index.html" frameborder="0"></iframe>

          <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin"  width="420px" :modal="true" :modal-append-to-body="false" :lock-scroll="false" :show-close="false">
                <img class="close" @click="Close" src="../assets/login/close.png" alt="">
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
    export default{
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
        methods:{
            // 下拉菜单
            dropDowmcontrol(){
                this.$store.state.isdropdownparent = !this.$store.state.isdropdownparent
            },
            //模态款黑色的关闭按钮
            Close(){
                this.dialogLogin = false
            },
            //登陆
            async Loginbtn() {
                var reguserpassword = /^[a-zA-Z0-9]\w{4,16}$/;
                // let logintextpassword = this.publicKey;
                // var privatekey = new NodeRSA(logintextpassword);
                // this.formLogin.passwordrsc = privatekey.encrypt(this.formLogin.password, 'base64');
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
                    password:this.formLogin.password,
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
                // let logintextpassword = this.publicKey;
                // var privatekey = new NodeRSA(logintextpassword);
                // this.formRegister.encryptPassword = privatekey.encrypt(this.formRegister.password, 'base64');
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
                        password:this.formRegister.password,
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
                // var privatekey = new NodeRSA(logintextpassword);
                // this.formReset.encryptPassword = privatekey.encrypt(this.formReset.password, 'base64');
                if(this.formReset.password!==this.formReset.checkPassword||this.formReset.password<6||this.formReset.checkPassword<6){
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
                        localStorage.userid = response.data.data.userid
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
    }
</script>

<style scoped lang="less">
@import '../assets/index.less';
.containblockly{
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: #006cc2;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.blockly{
    flex: 1;
    width: 100%;
    min-height: 542px;
}
.containblockly .logo{
    position: fixed;
    width: 182px;
    height: 40px;
    left: 0px;
    top: 0px;
}
.containblockly .logo .one{
    position: fixed;
    width: 52px;
    height: 16px;
    left: 11px;
    top: 10px;
    color: #fff;
    font-size: 14px;
}
.containblockly .logo .two{
    position: fixed;
    width: 52px;
    height: 16px;
    left: 76px;
    top: 8px;
    color: #da3988;
    font-size: 16px;
}
.containblockly .logo .three{
    position: fixed;
    width: 94px;
    height: 16px;
    left: 86px;
    top: 10px;
    color: #fff;
    font-size: 14px;
}
.containblockly .programe{
    position: fixed;
    padding: 0;
    text-align:center;
    height: 40px;
    width: 84px;
    border:0;
    left: 181px;
    background-color: #76baee;
    cursor: pointer;
}
.containblockly .programe img{
    position: absolute;
    padding: 0;
    height: 14px;
    width: 17px;
    left: 10px;
    top: 13px;
    cursor: pointer;
}
.containblockly .programe p{
    position: absolute;
    height: 19px;
    width: 33px;
    left: 30px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.containblockly .programecourse{
    position: fixed;
    padding: 0;
    text-align:center;
    height: 40px;
    width: 84px;
    border:0;
    left: 266px;
    cursor: pointer;
}
.containblockly .programecourse img{
    position: absolute;
    padding: 0;
    height: 14px;
    width: 17px;
    left: 10px;
    top: 13px;
    cursor: pointer;
}
.containblockly .programecourse p{
    position: absolute;
    height: 19px;
    width: 33px;
    left: 30px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.containblockly .left{
    position: fixed;
    padding: 0;
    text-align:center;
    height: 40px;
    width: 42px;
    border:0;
    left: 352px;
    cursor: pointer;
}
.containblockly .left img{
    position: absolute;
    text-align:center;
    left: 4px;
    top: 13px;
    cursor: pointer;
}
.containblockly .right{
    position: fixed;
    padding: 0;
    text-align:center;
    height: 40px;
    width: 42px;
    border:0;
    left: 396px;
    cursor: pointer;
}
.containblockly .right img{
    position: absolute;
    text-align:center;
    left: 4px;
    top: 13px;
    cursor: pointer;
}
.containblockly .login{
    position: fixed;
    width: 28px;
    height: 16px;
    right: 29px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.containblockly .or{
    position: fixed;
    width: 2px;
    height: 16px;
    right: 65px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.containblockly .signup{
    position: fixed;
    width: 28px;
    height: 19px;
    right: 76px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.containblockly .user{
    position: fixed;
    min-width: 28px;
    height: 16px;
    right: 45px;
    top: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}

/* 模态框开始 */
.containblockly .container21{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.containblockly .container21 .sign_logo{
    width: 50px;
    height: 23px;
    position: relative;
    top: 44px;
    left: 162px;
    color: @gray;
    font-size: 24px;
    margin-left: 30px;
}
.containblockly .container21 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container21 .iden01{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}

.containblockly .container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 228px;
    left: 291px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.containblockly .container21 .register{
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
.containblockly .container21 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 307px;
    left: 137px;
    font-size:@sm-size;
    color: @black;
    font-weight: 600;
}
.containblockly .container21 .free_res span{
    position: absolute;
    top: 307px;
    left: 216px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.containblockly .container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.containblockly .container44 .sign_logo{
    position: absolute;
    height: 24px;
    width: 106px;
    top: 44px;
    left: 155px;
    color: @gray;
    font-size: 24px;
}
.containblockly .container44 .tele{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container44 .iden01{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container44 .register{
    position: absolute;
    height: 49px;
    width: 302px;
    top: 244px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.containblockly .container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 492px;
    background: @background-color;
}
.containblockly .container19 .sign_logo{
    position: absolute;
    top: 44px;
    left: 184px;
    color: @gray;
    font-size: 24px;
}
.containblockly .container19 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container19 .iden01{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 112px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container19 .iden02{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 154px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container19 .iden03{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 196px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container19 .register{
    position: absolute;
    height: 49px;
    width: 301px;
    top: 384px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.containblockly .container19 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 355px;
    left: 60px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.containblockly .container19 .free_res span{
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
.containblockly .container46{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.containblockly .container46 .sign_logo{
    position: absolute;
    top: 44px;
    left: 159px;
    color: @gray;
    font-size: 24px;
}
.containblockly .container46 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.containblockly .container46 .iden01{
    position: absolute;
    height: 48px;
    width: 170px;
    top: 116px;
    left: 60px;
    padding-left: 10px;
    margin: 0px!important;
}
.containblockly .container46 .iden0202{
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
.containblockly .container46 .iden020202{
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

.containblockly .container46 .setpass{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 220px;
    left: 70px;
    padding-left: 10px;
}
.containblockly .container46 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 246px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.containblockly .container46 .back_login{
    position: absolute;
    height: 16px;
    width: 289px;
    top: 345px;
    left: 332px;
    color: @back-color;
    font-size: 15px;
    cursor: pointer;
}
.containblockly .close{
    float: right;
    position: relative;
    right: 13px;
    top: 13px;
    height: 32px;
    width: 32px;
    cursor: pointer;
}
/* 模态框结束 */
</style>

