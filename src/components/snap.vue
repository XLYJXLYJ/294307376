<template>
    <div class="snapbcw">
        <div class="snapboxhead">
            <div class="snapheader">
                <ul class="snapheaderleft">
                    <li class="bcw"><a href="./"><img src="../assets/snappic/snapb.png" alt=""></a></li>
                    <li class="borderlight01" @click="snapdropdowmcontrol" ><img src="../assets/snappic/snapn.png" alt=""></li>
                    <li class="borderlight"   @click="dialogSave = true"><img src="../assets/snappic/snaps.png" alt="" @click="handiframe"></li>
                    <li class="borderlight03"><router-link to="/Publish"><img src="../assets/snappic/snapu.png" alt=""></router-link></li>
                    <li class="borderlight04" v-show="login" @click="dialogLogin = true">登陆</li>
                    <li class="borderlight05" v-show="sign" @click="dialogRegister = true">注册</li>
                    <li class="borderlight06" v-show="user" @click="snapdemodropdowmcontrol">{{$store.state.usernamesession02}}</li>
                </ul>
                <div v-show="snapdropdowm" class="snapdropdowm">
                    <ul class="block-col-12">
                        <li><p @click="dialogNew=true">新建</p></li>
                        <li  @click="dialogExport = true"><p @click="download">保存到本地</p></li>
                        <li><p @click="dialogOpen=true">打开本地作品</p></li>    
                    </ul>
                </div>
                <div v-show="snapdemodropdowm" class="snapdemodropdowm" >
                    <ul class="block-col-12">
                        <li><router-link to="/Demo/Mydemo"><p>我的作品</p></router-link></li>
                        <li><p @click="Cancellogout">退出登录</p></li>  
                    </ul>
                </div>
            </div>
        </div>
        <!-- 参数播放 -->
        <!-- <iframe class="snap" src="static/snap/pxsnap.html" name="snap" frameborder="0"></iframe> -->

        <!-- 接口播放 -->
        <iframe class="snap" :src="'static/player/pxsnap.html#open:/codeplay/file/'+this.$store.state.demoxmlid+'.xml'" name="snap" frameborder="0"></iframe>

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogSave" :modal="false" width="420px">
                    <div class="container50">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <el-form-item class="iden01">
                                <el-input type="text" v-model="formSave.title" auto-complete="off" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item  class="iden02">
                                <textarea type="text" class="textdes" v-model="formSave.desc" auto-complete="off" placeholder="请输入项目描述"></textarea>
                            </el-form-item>
                            <el-form-item  class="iden03">
                                <el-button  @click="submitUpload()">确定保存</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogExport" :modal="false" width="420px">
                    <div class="container501">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <el-form-item class="iden01">
                                <el-input type="text" v-model="formSave.exporttitle" auto-complete="off" placeholder="请输入项目名称"></el-input>       
                            </el-form-item>
                            <el-button  class="iden02" @click="download(formSave.exporttitle)">确定下载</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        
        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogNew" :modal="false" width="420px">
                    <div class="container502">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <el-form-item class="iden01">
                                <h1>确定放弃当前项目，新建新的项目吗？</h1>      
                            </el-form-item>
                             <el-button  class="iden02"  @click="newproject">确定</el-button>
                            <el-button  class="iden03" @click="dialogNew=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

            <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogOpen" :modal="false" width="420px">
                    <div class="container503">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <!-- <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名" v-show="true"></el-input>
                            </el-form-item> -->
                            <el-form-item class="iden01">
                                <input class="iden04" type="file" ref="file" multiple/>     
                            </el-form-item>
                             <el-button  class="iden02"  @click="open">确定</el-button>
                            <el-button  class="iden03" @click="dialogOpen=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        
        <!-- 模态框 -->
    
        <!-- 注册模块 -->
        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogRegister" :modal="false" width="420px">
                    <div class="container1901">
                        <el-form :model="formRegister" :rules="rules">
                            <p class="sign_logo">注册</p>
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
                            <span class="free_res">已有账号?<span @click="dialogLogin = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                </el-dialog>
            </div>
        </transition>
         <!-- 账号密码登陆 -->
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin" class="dialog_login" width="420px" :modal="false">
                <div>
                    <div class="container2101">
                        <form action="">
                            <p class="sign_logo">登录</p>
                            <input type="text" v-model="formLogin.username" class="tele" placeholder="请输入手机号码/账号">
                            <input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码">
                            <p class="ap_text" @click="dialogLogin = false,dialogForgetpass = true">忘记密码?</p>
                            <button class="register" @click="Loginbtn">登录</button>
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
                <div class="container4601">
                    <el-form action="" :rules="rules">
                        <p class="sign_logo">忘记密码</p>
                         <el-form-item  class="tele">
                                <el-input type="email" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                        <el-form-item prop="code" class="iden01">
                                <el-input v-model="formReset.code" auto-complete="off"  placeholder="验证码"></el-input>
                        </el-form-item>
                        <button class="iden02" @click="Getcodebtn">获取验证码</button>
                        <button class="register"  @click="Getusercodebtn">下一步</button>
                    </el-form>
                </div>
            </div>    
        </el-dialog>  
        </transition>
          <!-- 重置密码 -->
        <transition name="el-fade-in-linear">
        <el-dialog :visible.sync="dialogPassSure" class="dialog_login" width="420px" :modal="false">
            <div>
                <div class="container4401">
                    <form action="">
                        <p class="sign_logo">确认密码</p>
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
import { mapGetters,mapActions} from 'vuex'
import axios from 'axios'

export default{
    data(){
        return{
            dialogSave: false,
            dialogExport: false,
            dialogNew: false,
            dialogOpen: false,
            snapdropdowm:false,
            snapdemodropdowm:false,
            login:true,
            sign:true,
            down:false,
            user:false,
            // 登录注册变量
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
            formSave: {
                userid:this.$store.state.userid,
                title: '',
                exporttitle: '',
                desc: '',
                file: '',
                files: '',
                filexml: '',
                filebir: '',
                filebinary: '',
                readfilebinary: '',
                demoxml:'',
                sign:'',
                login:'',
                user:'',
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
        }
    },
    mounted(){
        this.loadproject()
        this.Getsession()
    },
    methods: {
        snapdropdowmcontrol(e){
            this.snapdropdowm = !this.snapdropdowm
        },
        snapdemodropdowmcontrol(e){
            this.snapdemodropdowm = !this.snapdemodropdowm
        },
        loadproject(){
             this.axios.post('/res/getfile',{
                id:this.$store.state.demoxmlid,
            })
            .then(response => {                          
               this.demoxml = response.data  
               console.log(this.demoxml)
               console.log(this.$store.state.demoxmlid)
            })
            window.frames["snap"].ide.droppedText(this.demoxml,'HHH') 
            // window.frames["snap"].ide.droppedText(this.$store.state.demoxml,'HHH') 
        },

        // 打来文件
        open() {
            this.dialogOpen=false
             var reader = new FileReader();
             reader.readAsText(this.$refs.file.files[0]);
             reader.onload = function () {    
                this.readfilebinary=this.result
                console.log(this.readfilebinary)
                window.frames["snap"].ide.droppedText(this.readfilebinary,'HHH')   
             }         
        },

        // 新建文件
        newproject() {
            window.frames["snap"].ide.newProject()
            this.dialogNew=false
        },

         // 下载文件
        download(name) {
            this.formSave.file = window.frames["snap"].ide.exportProject (name)
            this.dialogExport=false
        },

        // 保存文件
        handiframe() {
            this.formSave.file = window.frames["snap"].ide.exportProject_MANYKIT('whatever')
            let filebir = this.formSave.file
            this.filebinary = new Blob([filebir]);
        },
        submitUpload() {
             let formData = new FormData();
             formData.append('userid',this.formSave.userid);
             formData.append('title',this.formSave.title);
             formData.append('desc',this.formSave.desc);
             formData.append('files',this.filebinary);

             let config = {
                 headers:{
                     'Content-Type':'multipart/form-data'
                 }
             }
             this.axios.post('/res/upload',formData,config)
             .then(function(response){
                 console.log(response)
             })
             this.dialogSave = false;
            this.$message({
                message: '上传成功',
                center: true
            });
        },
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
                    this.sign = false,
                    this.login = false,
                    this.user = true,
                    this.down = true,
                    this.dialogLogin = false;
                    this.Getsession()
                    this.$message({
                        message: '登陆成功',
                        center: true,
                    });  
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
                    console.log(response)
                    this.$store.state.usernamesession02=response.data.data.username
                    this.$store.state.userid=response.data.data.userid
                    sessionStorage.userid = response.data.data.userid
                    sessionStorage.username = response.data.data.username
                }else{
                    this.dialogLogin = false;
                    this.loginsign = true;
                    this.usercenter = false;
                }
            }) 
        },
        Cancellogout() {
            // 退出登陆
            this.axios.get('/res/logout')
            .then(response =>{  
                this.sign = true;
                this.login = true;
                this.user = false;
                this.snapdemodropdowm = false;     
            }) 
        }
    },
}

</script>
<style scoped>
.snapbcw{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.snap {
    flex: 1;
}
.snap{
    width: 100%;
    height: 542px;
    margin-top: 40px;
}
.snapboxhead{
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0px;
    left: 0px;
}
.snapboxhead .header01 a{
	z-index: 10!important;
	color: #fff;
}
.snapboxhead .snapheaderleft{
	width:100%;
	height: 40px;
	background: #333;
	list-style: none;
	position: fixed;
	top: 0px;
	left: 0px;
	color: #fff;
    font-size: 16px;
}
.snapboxhead .snapheaderleft img{
    position: relative;
    top: 12px;
}
.snapboxhead .borderlight img{
    position: fixed;
    left: 220px;
    top: 14px;
}
.snapboxhead .borderlight01 img{
    position: fixed;
    left: 120px;
    top: 15px;
}
.snapboxhead .borderlight03 img{
    position: fixed;
    left: 320px;
    top: 13px;
}
.snapboxhead .borderlight04{
    position: fixed;
    right:-33px;
    top: 12px;
    font-size: 14px;
}
.snapboxhead .borderlight05{
    position: fixed;
    right:-70px;
    top: 12px;
    font-size: 14px;
}
.snapboxhead .borderlight06{
    position: fixed;
    right: -40px;
    top: 12px;
    font-size: 14px;
}


.snapboxhead .bcw a{
    color: #ffffff; 
    position: fixed;
    width: 60px;
    height: 20px;
    left: 40px;
    top: 10px;
    font-size: 12px;
}
.snapboxhead .bcw img{
    position: fixed;
    left: 14px;
}
.snapboxhead .snapheaderleft li{
	float: left;
	height: 20px;
	width: 160px;
	cursor: pointer;
	opacity: 1;
}
.snapboxhead .snapheaderleft li p{
	position: relative;
	top: -15px;
}
.snapboxhead .snapheaderleft li:hover{	
	opacity: 0.7;
}

.snapboxhead .snapdropdowm .block-col-12{
    position:relative;
    left:100px;
    top: 40px;
    color: #333;
    width: 94px;
    height: 72px;
    font-size: 14px;
    z-index: 1000;
    background: #fff;
    display: inline-block;
    border: 1px solid #333333;
}
.snapboxhead .snapdropdowm .block-col-12 a{
    color: #333;
}
.snapboxhead .snapdropdowm .block-col-12 li{
    padding-top: 0px;
    padding-left: 5px;
    height: 24px;
    width: 90px;
}
.snapboxhead .snapdropdowm .block-col-12 li:hover{
    background:#000;
    color: #fff;
}


.snapboxhead .snapdemodropdowm .block-col-12{
    position:fixed;
    right: 65px;
    top: 40px;
    color: #333;
    width: 74px;
    height: 48px;
    font-size: 14px;
    z-index: 1000;
    background: #fff;
    display: inline-block;
    border: 1px solid #333333;
}
.snapboxhead .snapdemodropdowm .block-col-12 a{
    color: #333;
}
.snapboxhead .snapdemodropdowm .block-col-12 li{
    padding-top: 0px;
    padding-left: 5px;
    height: 24px;
    width: 70px;
}
.snapboxhead .snapdemodropdowm .block-col-12 li:hover{
    background:#000;
    color: #fff;
}


.container50{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 426px;
    background: #fff;
}
.container50 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container50 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container50 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container50 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 108px;
    left: 60px;
    padding-left: 10px;
}
.container50 .iden02{
    position: absolute;
    height: 147px;
    width: 297px;
    top: 156px;
    left: 60px;
    padding-left: 10px;
}
.container50 .iden03{
    position: absolute;
    height: 29px;
    width: 297px;
    top: 364px;
    left: 160px;
    padding-left: 10px;
}
.container50 .textdes{
    height: 170px;
    width: 278px;
    padding: 8px;
    border: 1px solid #dcdfe6;
    color: #dcdfe6;
}
.container50 .register{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 366px;
    left: 68px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.borderlighttest{
    position: relative;
    top: 18px;
}

.container501{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 266px;
    background: #fff;
}
.container501 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container501 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container501 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container501 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 118px;
    left: 60px;
    padding-left: 10px;
}
.container501 .iden02{
    position: absolute;
    height: 39px;
    width: 197px;
    top: 188px;
    left: 125px;
}
.container502{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 266px;
    background: #fff;
}
.container502 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container502 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container502 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container502 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 118px;
    left: 90px;
    padding-left: 10px;
}
.container502 .iden02{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 178px;
    left: 115px;
}
.container502 .iden03{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 178px;
    left: 225px;
}


.container503{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 266px;
    background: #fff;
}
.container503 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container503 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
}
.container503 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container503 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 118px;
    left: 60px;
    padding-left: 10px;
}
.container503 .iden02{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 178px;
    left: 115px;
}
.container503 .iden03{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 178px;
    left: 225px;
}
.container503 .iden04{
    position: absolute;
    height: 39px;
    width: 187px;
    top: 8px;
    left: 55px;
}

.container1901{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 476px;
    background: #fff;
}
.container1901 .sign_logo{
    position: absolute;
    top: 44px;
    left: 184px;
    color: #333;
    font-size: 24px;
}
.container1901 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 168px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden02{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 226px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden03{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 284px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .register{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 366px;
    left: 68px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
}
.container1901 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 338px;
    left: 73px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.container1901 .free_res span{
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

.container2101{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container2101 .sign_logo{
    width: 50px;
    height: 23px;
    position: relative;
    top: 44px;
    left: 184px;
    color: #333;
    font-size: 24px;
    margin-left: 30px;
}
.container2101 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container2101 .iden01{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}

.container2101 .ap_text{
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
.container2101 .register{
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
}
.container2101 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 317px;
    left: 137px;
    font-size: 14px;
    color: #000;
    font-weight: 600;
}
.container2101 .free_res span{
    position: absolute;
    top: 317px;
    left: 216px;
    color: #F13232;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
}

.container4601{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container4601 .sign_logo{
    position: absolute;
    top: 44px;
    left: 159px;
    color: #333;
    font-size: 24px;
}
.container4601 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 130px;
    left: 60px;
    padding-left: 10px;
}
.container4601 .iden01{
    position: absolute;
    height: 49px;
    width: 180px;
    top: 195px;
    left: 70px;
    padding-left: 0px;
    margin: 0px!important;
}
.container4601 .iden02{
    position: absolute;
    height: 40px;
    width: 111px;
    top: 195px;
    left: 260px;
    background: #F13232;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: none;
}
.container4601 .setpass{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 220px;
    left: 70px;
    padding-left: 10px;
}
.container4601 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 274px;
    left: 70px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: none;
}
.container4601 .back_login{
    position: absolute;
    height: 16px;
    width: 289px;
    top: 345px;
    left: 332px;
    color: #44878D;
    font-size: 15px;
    cursor: pointer;
}

.container44{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: #fff;
}
.container21 .sign_logo{
    position: absolute;
    top: 44px;
    left: 155px;
    color: #333;
    font-size: 24px;
}
.container4401 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 130px;
    left: 60px;
    padding-left: 10px;
}
.container4401 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 195px;
    left: 60px;
    padding-left: 10px;
}
.container4401 .register{
    position: absolute;
    height: 49px;
    width: 310px;
    top: 284px;
    left: 60px;
    background: #F13232;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
</style>
