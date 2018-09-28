<template>
    <div class="headercontainer04">
        <!-- <div class="headone">
            头部
            <div class="headonecenter">
                语言设置
                <span class="el-dropdown-link" @click="Language">
                    中文<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <div class="xuduo"><a href="https://www.manykit.com/" target="_blank">许多米</a><span class="one">|</span></div>
                <div class="shopping"><a href="https://shop194048616.taobao.com/" target="_blank">官方商城</a><span class="two">|</span></div>
                <div class="appdownload"><router-link to="/Download">APP下载</router-link><span class="three">|</span></div>
                登录注册
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
                    dialogPasswordSure=false">注册<span class="four">|</span></p>
    
                </div>
                <div class="username"  v-show="userCenter" id="myPanel"> 
                    <p class="login01" type="text"  @click="dropDowmcontrol">{{this.$store.state.usernamesession02}}</p>
                </div> 
                下拉框 
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
        </div> -->
        <!-- 头部列表 -->
        <div class="container04">  
            <div class="container04center">
                <img class="logo" src="../../assets/home/logo.png" alt="">  
                <ul>
                    <li>
                        <router-link to="/Home"><p>首页</p></router-link>
                    </li>   
                    <li>
                        <router-link to="/Download"><p>下载</p></router-link>
                    </li>   
                    <li>
                        <router-link to="/Lesson"><p>课程</p></router-link>
                    </li> 
                    <li>
                        <router-link to="/source/sourceshop"><p>素材</p></router-link>
                    </li> 
                    <!-- <li>
                        <a href="http://www.manykit.com" target="_blank"><p>帮助</p></a> 
                    </li>   -->
                    <li>
                        <a href="http://www.manykit.com/forum/" target="_blank"><p>社区</p></a> 
                    </li>  
                </ul> 
            </div>

            <!-- 登录注册 -->
            <div class="login_sign" v-show="loginSign"> 
                <p class="login" type="text"  
                @click="totallogin()">登录/</p>  
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
                    <router-link to="/Demo"><li>作品管理</li></router-link>
                    <!-- <router-link to="#"><li>社区消息</li></router-link> -->
                    <router-link to="/User"><li @click="clearsessionlookuser">个人中心</li></router-link> 
                    <router-link to="/setting"><li>账号设置</li></router-link>  
                    <li @click="Cancellogout">退出登陆</li>
                </ul>
            </div>
        </div> 
         <!-- 模态框 -->      
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin"  width="600px" :modal="true" :modal-append-to-body="false" :lock-scroll="false" :show-close="false">
                <!-- <img class="close" @click="Close" src="../../assets/login/close.png" alt=""> -->
                <div>
                    <div class="container21" v-show="dialogLoginShow">
                        <form>
                            <p class="sign_logo">登录</p>
                            <el-input type="text" v-model="formLogin.userName" class="tele" placeholder="请输入用户名"></el-input>
                            <el-input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码"></el-input>
                            <!-- <p class="ap_text" @click="dialogLoginShow= false,dialogForgetPassword = true">忘记密码?</p> -->
                            <p><a class="ap_text" href="http://www.manykit.com/forum/reset">忘记密码?</a></p>
                            <button class="register" @click.prevent="Loginbtn">登录</button>
                            <div class="free_res"><p>没有账号?</p><span @click="dialogLoginShow = false,dialogRegister = true">免费注册</span></div>    
                        </form> 
                        <div class="threelogin">
                            <!-- <div id="qqLoginBtn"><img class="qq" src="../../assets/login/qq2.png" alt=""></div> -->
                            <div id="qqLoginBtn" class="qq" @click="qqlogin"><img src="../../assets/login/qq2.png" alt=""></div>
                            <!-- <div><img class="wechat" src="../../assets/login/wechat2.png" alt=""></div>
                            <span id="qq_login_btn"></span> -->
                        </div>
                    </div>
                    <div class="container19" v-show="dialogRegister">
                        <el-form :model="formRegister" :rules="rules">
                            <p class="sign_logo">注册</p>
                            <el-form-item prop="userName">
                                <el-input v-model="formRegister.userName"  class="tele" auto-complete="off" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item prop="mail">
                                <el-input type="email"  class="iden01" v-model="formRegister.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" class="iden02" v-model="formRegister.password" auto-complete="off" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" class="iden03" v-model="formRegister.checkPassword" auto-complete="off" placeholder="请确认密码"></el-input>
                            </el-form-item>
                            <el-button type="primary" class="register" @click.prevent="Registerbtn">注册</el-button>
                        </el-form>
                        <div>
                            <span class="free_res">已有账号?<span @click="dialogLoginShow = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                    <div class="container46" v-show="dialogForgetPassword">
                        <el-form :rules="rules">
                            <p class="sign_logo">忘记密码</p>
                            <el-form-item >
                                    <el-input type="email"  class="tele" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
                                </el-form-item>
                            <el-form-item prop="code">
                                    <el-input v-model="formReset.code"  class="iden01" auto-complete="off"  placeholder="验证码"></el-input>
                            </el-form-item>
                            <button v-bind:class="{iden0202:btnTxtColor01 , iden020202:btnTxtColor02}" @click.prevent="Getcodebtn" :disabled="disabled">{{btnTxt}}</button>
                            <button class="register"  @click.prevent="Getusercodebtn">下一步</button>
                        </el-form>
                    </div>
                    <div v-show="dialogPasswordSure">
                        <div class="container44">
                            <form>
                                <p class="sign_logo">确认密码</p>
                                <el-input type="password" v-model="formReset.password" class="tele" placeholder="输入密码"></el-input>
                                <el-input type="password" v-model="formReset.checkPassword" class="iden01" placeholder="再次确认密码"></el-input>                
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

import { loginqq } from '../../public/qq.js'//qq第三方登录

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
            nickname:'',
            nodebb_csrf:'',
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
                // userName: [
                //     { required: true, message: '请输入用户名', trigger: 'blur' },
                //     { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                //     {pattern:/^[a-zA-Z]w{1,4}$/,message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}],
                // mail:[
                //     { required: true, message: '请输入邮箱', trigger: 'blur' },
                //     { type:'email', message: '请输入合法的email邮箱', trigger: 'blur,change' }
                // ],
                // password:[
                //     { required: true, message: '请输入密码', trigger: 'blur' },
                //     {min:6,max:12, message: '长度在 6 到 12 个英文与数字', trigger: 'blur' }
                // ],
                // checkPassword:[
                //     { required: true, message: '请输入密码', trigger: 'blur' },
                //     {min:6,max:12, message: '长度在 6 到 12 个英文与数字', trigger: 'blur' }
                // ],
            },
        };
    },
    mounted:function() { 
        // 判断session值是否存在，如果存在，则执行
        // this.qqlogin()
        // this.getData()
        // this.Getsessionname()
         this.Getsession()
        }, 
        updated:function(){
            QC.Login({
                    btnId: "qqLoginBtn" //插入按钮的节点id
                })
        },
        methods: {
        totallogin(){
            this.dialogLogin = true, 
            this.dialogLoginShow = true, 
            this.dialogRegister = false, 
            this.dialogForgetPassword= false,
            this.dialogPasswordSure=false
           
        },
        qqlogin(){
            let that = this
            QC.Login({
                    btnId: "qqLoginBtn" //插入按钮的节点id
                },function(oInfo, oOpts) {
                    let nickname=oInfo.nickname
                    sessionStorage.info= oInfo.nickname
                    QC.Login.getMe(function(openId, accessToken) {
                    sessionStorage.openid=openId;
                    sessionStorage.accessToken=accessToken;
                    that.axios.post('/res/thirdlogin', {
				        openid:openId,
                        accesstoken:accessToken, 
                        info:nickname,
                        type:1
                    })
                    .then(response => {
                        var datamsg = response.data
                        that.msg = response.data.errmsg
                        if(!response.data.data){
                            this.$message({
                                message:datamsg.errmsg,
                                center:true
                            })
                        }else{
                            var state=response.data.data.isband
                            sessionStorage.qqid = response.data.data.id
                            console.log(state)
                            if(state==1){
                                var username= response.data.data.username
                                var password= response.data.data.password
                                that.axios.post('/forum/login', {
                                    username:username,
                                    password:password,
                                    _csrf:that.nodebb_csrf,
                                    remember:'on',
                                    noscript: false
                                })
                                .then(response => {
                                     
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                            }else{
                                window.location.href = "http://www.manykit.com/register"; 
                            }
                            that.dialogLogin = false
                            sessionStorage.username= datamsg.userName;
                            that.Getsession()
                        }
                    })      
                })
            });     
        },

        qq_user_info: function(){
            let that = this
            QC.Login({
                //请求成功后的回调
            },function(oInfo,oOpts){
                that.set_user({
                    name: oInfo.nickname,
                    imgUrl: oInfo.figureurl_qq_1,
                    email: ""
                })
                that.handleMask(false)
                that.setLocal()
            },function(){
                console.log("退出成功")
            })
        },




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
        Loginbtn() {
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
                    sessionStorage.username= this.formLogin.userName;
                    sessionStorage.password= this.formLogin.password;
                    this.Getsession()
                    // this.Getsessionname()  
                }
            })
            .catch(function (error) {
                console.log(error);
            });

            this.axios.post('/forum/login', {
                username:this.formLogin.userName,
                password:this.formLogin.password,
                _csrf:this.nodebb_csrf,
                remember:'on',
                noscript: false
            })
            .then(response => {
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

                this.axios.post('/forum/api/v2/users', 
                    {
                        _uid:1,
                        username:this.formRegister.userName,
                        password:this.formRegister.password,
                        mail:this.formRegister.mail
                    },
                    {
                        headers: {'Authorization':'Bearer db7a60a5-6c70-4057-b1d4-1dd289895c31'},
                    }
                )
                    .then(response => {
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

            this.axios.get('/forum/api/config')
            .then(response =>{
                this.nodebb_csrf=response.data.csrf_token
            });


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
                sessionStorage.username ='' 
                sessionStorage.password ='' 
                this.$store.state.userid = ''
                this.$router.push({ name: 'Home' })
                this.$router.push({ name: 'Recommend' })
                QC.Login.signOut()
                location.reload()   
            }) 

            this.axios.post('/forum/logout', 
            {
                _csrf:this.nodebb_csrf,
                remember:'off',
                noscript: true,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }
            )
            .then(response => {
            })
            .catch(function (error) {
                console.log(error);
            });




        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/index.less';
/* 总样式开始 */
.headercontainer04{
    position: relative;
    width: 1200px;
    min-width: 1200px;
    height: 75px;
    margin:auto;
    left:0;
    right:0;
    top:0;
    z-index: 200;
}
/* 总样式结束 */

/* 头部样式开始 */
.headercontainer04 .headone{
    position: relative;
    width: 1200px;
    min-width: 1200px;
    height: 30px;
    top: 0px;
    left: 0px;
    margin: 0 auto;
    background:@background-color;
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
.headercontainer04 .headonecenter .one{
    position: relative;
    left: 15px;
    color: @img-color;
}
.headercontainer04 .headonecenter .two{
    position: relative;
    left: 15px;
    color: @img-color;
}
.headercontainer04 .headonecenter .three{
    position: relative;
    left: 15px;
    top: 4px;
    color: @img-color;
}
.headercontainer04 .headonecenter .four{
    position: relative;
    top: -1px;
    left: 15px;
    color: @img-color;
    overflow: hidden;
}
// .headercontainer04 .headonecenter .five{
//     position: relative;
//     top: -1px;
//     left: 20px;
//     color: @img-color;
//     overflow: hidden;
// }
.headercontainer04 .headonecenter .xuduo{
    position: relative;
    left: 881px;
    top: -14px;
    font-size:@ss-size;
    width: 60px;
    height: 30px;
    color: @img-color;
    cursor: pointer;
}
.headercontainer04 .headonecenter .xuduo a{
    color: @img-color;
    text-decoration: none;
}
.headercontainer04 .headonecenter .xuduo a:hover{
    color: @background-color;
}
.headercontainer04 .headonecenter .shopping{
    position: relative;
    left: 951px;
    top: -44px;
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
    left: 1030px;
    top: -72px;
    font-size:@ss-size;
    width: 60px;
    height: 13px;
    line-height: 5px;
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
.headercontainer04 .block-col-12{
    position:absolute;
    left:1098px;
    top: 68px;
    color: @gray;
    width: 88px;
    height: 90px;
    font-size:18px;
    z-index: 1000;
    background: @background-color;
}
.headercontainer04 .block-col-12 a{
    color: @gray;
}
.headercontainer04 .block-col-12 a:hover{
    color: @background-color;
    text-decoration: none;
}
.headercontainer04 .block-col-12 li{
    padding-top: 2px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 8px;
    height: 20px;
    width: 72px;
    cursor: pointer;
    font-size:18px;
    font-family: 'SimHei';
}
.headercontainer04 .block-col-12 li:hover{
    background:@black;
    color: @background-color;
}
/* 头部样式结束 */

/* 头部列表开始 */
.container04{
    width:1200px;
    height:75px;
    background: @background-color;
    position: relative;
    left: 0px;
    margin: 0 auto;
    // box-shadow: 0 0 5px 0 rgba(0,0,0,.2), 0 -6px 11px 0 rgba(0,0,0,.2);
    // box-shadow:0px 3px 5px @shadow-color;
}
.container04 .container04center{
    width: 1200px;
    height:75px;
    margin: 0 auto;
    position: relative;
    top: 0px;
}
.container04 ul{
    position: absolute;
    height: 75px;
    left: 372px;
    z-index: 200;
}
.container04 ul li{
    list-style: none;
    float: left; 
    height: 46px;
    padding-top: 29px; 
    padding-left: 20px;
    padding-right: 21px;
    font-size:22px; 
    z-index: 200;
    cursor: pointer;
}
.container04 ul li{
    font-family: bold;
}
.container04 ul li:hover{
    background: #e6e6e6;
}
.container04 ul li p{
    color: @black;
    cursor: pointer;
    text-decoration: none;
    font-family: 'SimHei';
    
}
.container04 ul li a{
    text-decoration: none;
}
.container04 ul li p:hover{
    // color: @main-color;
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
    // background-color: @main-color;
    border-radius: 2px;
}
.headercontainer04 .logo{
    height: 69px;
    width: 287px;;
    position: absolute;
    left: 4px;
    top: 3px; 
}
.headercontainer04 .close{
    float: right;
    position: relative;
    right: 13px;
    top: 13px;
    height: 32px;
    width: 32px;
    cursor: pointer;
}
.headercontainer04 .login_sign{
     position: absolute;
     top: 19px;
     left: 1095px;
     width: 100px;
     height: 36px;
     z-index: 200;
     border-radius: 10px;
     color: @black;
     cursor: pointer;
     background: #a8c9ed;
     border-radius: 5px;
}
.headercontainer04 .login{
    display: inline;
    position: absolute;
    top: 10px;
    left:12px;
    font-size:17px;
    color:@black;;
    cursor: pointer;
    text-decoration: none;
    font-family: 'SimHei';
}
.headercontainer04 .login01{
    display: inline;
    position: absolute;
    top: 28px;
    left:1110px;
    font-size:21px;
    color: @black;
    cursor: pointer;
    font-family: 'SimHei';
}
.headercontainer04 .login:hover{
    text-decoration: none;
    color: @black;
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
    top: 10px;
    left:55px;
    font-size:17px;
    color: @black;
    cursor: pointer;
    text-decoration: none;
    font-family: 'SimHei';
}
.headercontainer04 .sign:hover{
    text-decoration: none;
    color: @black;
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
    height: 356px;
    background: @background-color;
    border-radius: 6px;
}
.container21 .sign_logo{
    width: 55%;
    height: 23px;
    position: relative;
    top: 18px;
    padding-bottom: 18px;
    padding-left: 45%;
    color: @gray;
    font-size: 24px;
    border-bottom: 1px solid #e5e5e5;
}
.container21 .tele{
    position: absolute;
    height: 48px;
    width: 90%;
    top: 102px;
    left: 5%;
}
.container21 .iden01{
    position: absolute;
    height: 48px;
    width:90%;
    top: 166px;
    left: 5%;
}

.container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 228px;
    right: 0%;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.container21 .register{
    position: absolute;
    height: 38px;
    width: 110px;
    top: 256px;
    left: 41%;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
}
.container21 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 307px;
    left: 5%;
    font-size:@sm-size;
    color: @black;
    font-weight: 600;
}
.container21 .free_res span{
    position: absolute;
    top: 307px;
    left: 16%;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}


.container21 .threelogin .qq{
    position: absolute;
    top: 308px;
    right:42px;
    width: 50px;
    height:50px;
    cursor: pointer;
}
.container21 .threelogin .wechat{
    position: absolute;
    top: 424px;
    left: 251px;
    width: 50px;
    height:50px;
    cursor: pointer;
}

.container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 314px;
    background: @background-color;
    border-radius: 15px;
}
.container44 .sign_logo{
    position: absolute;
    height: 24px;
    width: 58%;
    padding-left: 42%;
    padding-bottom: 18px;
    top: 18px;
    color: @gray;
    font-size: 24px;
    border-bottom: 1px solid #e5e5e5;
}
.container44 .tele{
    position: absolute;
    height: 49px;
    width: 90%;
    top: 102px;
    left: 5%;
}
.container44 .iden01{
    position: absolute;
    height: 49px;
    width: 90%;
    top: 166px;
    left: 5%;
}
.container44 .register{
    position: absolute;
    height: 39px;
    width: 110px;
    top: 244px;
    left: 41%;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
}
.container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 452px;
    background: @background-color;
    border-radius: 15px;
}
.container19 .sign_logo{
    position: absolute;
    top: 28px;
    padding-left: 45%;
    padding-bottom: 28px;
    height: 24px;
    width: 55%;
    color: @gray;
    font-size: 24px;
    border-bottom: 1px solid #e5e5e5;
}
.container19 .tele{
    position: absolute;
    height: 48px;
    width: 90%;
    top: 110px;
    left: 5%;
}
.container19 .iden01{
    position: absolute;
    height: 48px;
    width: 90%;
    top: 150px;
    left: 5%;
}
.container19 .iden02{
    position: absolute;
    height: 49px;
    width: 90%;
    top: 190px;
    left: 5%;
}
.container19 .iden03{
    position: absolute;
    height: 48px;
    width: 90%;
    top: 230px;
    left: 5%;
}
.container19 .register{
    position: absolute;
    height: 39px;
    width: 101px;
    top: 384px;
    left: 41%;
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
    top: 355px;
    left: 5%;
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
    height: 314px;
    background: @background-color;
    border-radius: 15px;
}
.container46 .sign_logo{
    position: absolute;
    top: 18px;
    padding-left:42%;
    padding-bottom: 18px;
    height: 24px;
    width: 55%;
    color: @gray;
    font-size: 24px;
    height: 24px;
    border-bottom: 1px solid #e5e5e5;
}
.container46 .tele{
    position: absolute;
    height: 48px;
    width: 90%;
    top: 102px;
    left: 5%;
}
.container46 .iden01{
    position: absolute;
    height: 48px;
    width: 50%;
    top: 148px;
    left: 5%;
}
.container46 .iden0202{
    position: absolute;
    height: 36px;
    width: 35%;
    top: 172px;
    left: 60%;
    background: @main-color;
    color: @background-color;
    font-size:@xm-size;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}
.container46 .iden020202{
    position: absolute;
    height: 36px;
    width: 35%;
    top: 172px;
    left: 60%;
    background:@cancel-color;
    color: @background-color;
    font-size:@xm-size;
    border: none;
    border-radius: 4px;
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
    height: 38px;
    width: 110px;
    top: 246px;
    left: 41%;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
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