<template>
    <div class="snapbcw" @click="issnapdropdowncontrol">
        <div class="snapboxhead" @click="issnapuserdropdowncontrol">
            <div class="snapheader">
                <ul class="snapheaderleft">
                    <li class="bcw"><a href="http://www.manykit.com/codeplay" target="_blank"><img src="../assets/snappic/snapb.png" alt=""></a></li>
                    <li class="borderlight01" @click.stop="snapdropdowmcontrol" id="sanpPanel"><img src="../assets/snappic/snapn.png" alt=""></li>
                    <li class="borderlight"><img src="../assets/snappic/snaps.png" alt="" @click="handiframe"></li>
                    <!-- <li class="borderlight07"><input type="text" placeholder="" v-model="snapshow" @blur="focusState = false" v-focus="focusState" disabled="disabled"></li> -->
                    <!-- <li class="borderlight07"><input type="text" placeholder="" v-model="snapshow" @blur="focusState = false" v-focus="focusState"></li> -->
                    <li class="borderlight03"><img src="../assets/snappic/snapu.png" alt="" @click="handiframepublish"></li>
                    <li><div @keyup.alt="handiframepublish"></div></li>
                    <li class="borderlight04" v-show="login"
                    @click="dialogLogin = true, 
                    dialogLoginshow = true, 
                    dialogRegister = false, 
                    dialogForgetpass= false, 
                    dialogPassSure=false">登陆</li>
                    <li class="borderlight05" v-show="sign"  
                    @click="dialogLogin = true, 
                    dialogLoginshow = false, 
                    dialogRegister = true, 
                    dialogForgetpass= false, 
                    dialogPassSure=false">注册</li>
                    <li class="borderlight06" v-show="user" @click="snapdemodropdowmcontrol" id="sanpuserPanel">{{$store.state.usernamesession02}}</li>
                </ul>
                <div class="snapedit" @click="snapedit"></div>
                <div v-if="snapdropdown01" class="snapdropdowm">
                    <ul class="block-col-12">
                        <li><p @click.stop.prevent="dialogNew=true,snapdropdown01=false">新建</p></li>
                        <li><p @click.stop.prevent="anothersave">另存为</p></li>
                        <li  @click.stop.prevent="dialogExport = true,snapdropdown01=false"><p @click.prevent="download">保存到本地</p></li>
                        <li><p @click.stop.prevent="dialogOpen=true,snapdropdown01=false">打开本地作品</p></li>    
                    </ul>
                </div>
                <div v-show="snapdemodropdowm" class="snapdemodropdowm" >
                    <ul class="block-col-12">
                        <li><a href="http://www.manykit.com/codeplay/#/Demo/Mydemo" target="_blank"><p>我的作品</p></a></li>
                        <li><p @click.prevent="Cancellogout">退出登录</p></li>  
                    </ul>
                </div>
            </div>
        </div>
        <!-- 参数播放 -->

            <iframe class="snap" v-show="snap01" src="static/snap/pxsnap.html" name="snap01" id="myFrameId01" frameborder="0" ></iframe>


            <iframe class="snap" frameborder="0" v-show="snap02" :src="'static/snap/pxsnap.html#present:Username=lynn&ProjectName='+snapdemoid" id="myFrameId02"  name="snap02"></iframe>


        <!-- 接口播放 -->
        <!-- <iframe class="snap" :src="'static/player/pxsnap.html#open:/codeplay/file/'+this.$store.state.demoxmlid+'.xml'" name="snap" frameborder="0"></iframe> -->

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogSave" :modal="false" width="420px" :show-close="false">
                    <div class="container50">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <!-- <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt=""> -->
                            <img class="sign_logo" @click="dialogSave=false" src="../assets/snappic/close.png" alt=""> 
                            <el-form-item class="iden01">
                                <el-input type="text" class="texttitle" v-model="formSave.title" auto-complete="off" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item  class="iden02">
                                <textarea type="text" class="textdes" v-model="formSave.desc" auto-complete="off" placeholder="请输入项目描述"></textarea>
                            </el-form-item>
                            <el-form-item>
                                <el-button  class="iden03" @click.stop.prevent="submitUpload()">确定保存</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogExport" :modal="false" width="420px" :show-close="false">
                    <div class="container501">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <!-- <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt=""> -->
                            <img class="sign_logo" @click="dialogExport=false" src="../assets/snappic/close.png" alt=""> 
                            <el-form-item class="iden01">
                                <el-input type="text" v-model="formSave.exporttitle" auto-complete="off" placeholder="请输入项目名称"></el-input>       
                            </el-form-item>
                            <el-button  class="iden02" @click.stop.prevent="download(formSave.exporttitle)">确定下载</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        
        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogNew" :modal="false" width="420px" :show-close="false">
                    <div class="container502">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <!-- <img class="welcome" src="../assets/login/welcome.png" alt="">-->
                            <img class="sign_logo" @click="dialogNew=false" src="../assets/snappic/close.png" alt=""> 
                            <el-form-item class="iden01">
                                <p>确定新建新的项目吗？</p>      
                            </el-form-item>
                             <el-button  class="iden02"  @click="newproject">确定</el-button>
                            <el-button  class="iden03" @click.stop.prevent="dialogNew=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>


        <!-- <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogUpload" :modal="false" width="420px">
                    <div class="container5020">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <el-form-item class="iden01">
                                <h1>确定发布吗？</h1>      
                            </el-form-item>
                             <el-button  class="iden02"  @click="getdemopublish"><router-link to="/Publish">确定</router-link></el-button>
                            <el-button  class="iden03" @click="dialogUpload=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition> -->

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogOpen" :modal="false" width="420px" :show-close="false">
                    <div class="container503">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <!-- <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt=""> -->
                            <!-- <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名" v-show="true"></el-input>
                            </el-form-item> -->
                            <!-- <img class="sign_logo" @click="dialogOpen=false" src="../assets/snappic/close.png" alt="">  -->
                            <img class="sign_logo" @click="dialogOpen=false" src="../assets/snappic/close.png" alt="">
                            <el-form-item class="iden01">
                                <!-- <input class="iden04" type="file" ref="file" id='xml_seq' multiple/>   -->
                                <a href="javascript:;" class="file">选择文件
                                    <input class="iden04" type="file" ref="file" id='xml_seq' multiple/> 
                                </a>
                            </el-form-item>
                             <!-- <p>{{inputtext}}</p> -->
                             <el-button  class="iden02"  @click.stop.prevent="open">确定</el-button>
                            <el-button  class="iden03" @click.stop.prevent="dialogOpen=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>

        
         <!-- 模态框 -->      
        <transition name="el-fade-in-linear">
            <el-dialog :visible.sync="dialogLogin"  width="420px" :modal="true" :modal-append-to-body="false">
                <img class="close" @click="close" src="../assets/login/close.png" alt="">
                <div>
                    <div class="container2101" v-show="dialogLoginshow">
                        <form action="">
                            <p class="sign_logo">登录</p>
                            <input type="text" v-model="formLogin.username" class="tele" placeholder="请输入用户名">
                            <input type="password" v-model="formLogin.password" class="iden01" placeholder="请输入密码">
                            <p class="ap_text" @click.stop.prevent="dialogLoginshow= false,dialogForgetpass = true">忘记密码?</p>
                            <button class="register" @click.stop="Loginbtn">登录</button>
                            <div class="free_res"><p>没有账号?</p><span @click.stop.prevent="dialogLoginshow = false,dialogRegister = true">免费注册</span></div>    
                        </form> 
                    </div>
                    <div class="container1901" v-show="dialogRegister">
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
                            <el-button type="primary" class="register" @click.stop.prevent="Registerbtn">注册</el-button>
                        </el-form>
                        <div>
                            <span class="free_res">已有账号?<span @click.stop.prevent="dialogLoginshow = true,dialogRegister = false">点击登录</span></span>
                        </div>
                    </div>
                <div class="container4601" v-show="dialogForgetpass">
                    <el-form action="" :rules="rules">
                        <p class="sign_logo">忘记密码</p>
                         <el-form-item >
                                <input type="email"  class="tele" v-model="formReset.mail" auto-complete="off" placeholder="请输入邮箱">
                            </el-form-item>
                        <el-form-item prop="code">
                                <input v-model="formReset.code"  class="iden01" auto-complete="off"  placeholder="验证码">
                        </el-form-item>
                            <button v-bind:class="{iden0202:btntxtcolor01 , iden020202:btntxtcolor02}" @click.prevent="Getcodebtn" :disabled="disabled">{{btntxt}}</button>
                        <button class="register"  @click.stop="Getusercodebtn">下一步</button>
                    </el-form>
                </div>
                <div v-show="dialogPassSure">
                    <div class="container4401">
                        <form action="">
                            <p class="sign_logo">确认密码</p>
                            <input type="password" v-model="formReset.password" class="tele" placeholder="输入密码">
                            <input type="password" v-model="formReset.checkpassword" class="iden01" placeholder="再次确认密码">                  
                            <button class="register" @click.stop.prevent="Getuserpassbtn">确认</button>
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
import { mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import NodeRSA from 'node-rsa'

export default{
    
    data(){
        return{
            dialogSave: false,//模态框显示控制隐藏
            dialogExport: false,//控制输出文件模态框显示隐藏
            dialogNew: false,//控制新建模态框显示隐藏
            dialogOpen: false,//控制打开模态框显示隐藏
            dialogUpload:false,//控制上传模态框显示隐藏
            snapdropdown01:false,//控制左侧下拉框显示隐藏
            snapdemodropdowm:false,//控制右侧下拉框显示隐藏
            login:true,//控制登录
            sign:true,//控制注册
            user:false,//控制用户名
            savestate:'',//是否保存
            edittittle:'',//作品title
            editdes:'',//作品描述
            // snapshow:'作品名称',输入框默认
            // focusState:'',输入框是否聚焦
            snapdemoid:'',//作品id
            snap01:'',//没有作品的snap
            snap02:'',//有作品的snap
            // 登录注册变量
            dialogRegister: false,//注册模态框
            dialogLoginshow:false,//登录模态框
            dialogSetpass:false,//重置密码模态框
            dialogLogin: false,//模态框
            dialogForgetpass: false,//忘记密码模态框
            dialogPassSure:false,//确认密码
            publicKey:'',//公钥
            disabled:false,//获取验证码按钮不可点击
            time:0,//获取验证码默认时间
            btntxt:'获取验证码',//获取验证码默认文字
            btntxtcolor01:true,//验证码按钮的颜色
            btntxtcolor02:false,//验证码按钮的颜色
            inputtext:'文件名称',//input选择的文件名
            formLogin: {//登录
                username: '',
                password: '',
                passwordrsc:''
            },
            formRegister: {//注册
                username: '',
                password: '',
                checkpassword: '',
                formRegisterpasswordrsc:'',
                mail:'',
            },
            formReset: {//重置密码
                password: '',
                ckeckpassword: '',
                formResetpasswordrsc:'',
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
            //element验证规则，已弃用
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
        this.Getsession()
        this.loadprojectxml()
        this.loadprojectdes()
        this.formSave.userid = sessionStorage.userid
        //作品是否存在，如果存在，则使用snap02，如果不存在，则使用snap01
        this.snapdemoid= sessionStorage.snapdemoid
        if(sessionStorage.snapdemoid == undefined||sessionStorage.snapdemoid == ''){
            this.snap02=false
            this.snap01=true
        }else{
            this.snap02=true
            this.snap01=false
        }
        // window.frames["snap"].ide.droppedText(this.demoxml,'OPEN') 
        // window.frames["snap"].ide.haha()
    },
    directives: {
        focus: {
            update: function (el, {value}) {
                if (value) {
                el.focus()
                }
            }
        }
    },

    methods: {
        // downDisappear01(){
        //     console.log(123)
        //     document.getElementById("myFrameId01").onclick=function(){
        //         this.snapdropdown01 = false
        //         this.snapdemodropdowm = false
        //     }
        // },
        // downDisappear02(){
        //     console.log(456)
        //     document.getElementById("myFrameId02").onclick=function(){
        //         this.snapdropdown01 = false
        //         this.snapdemodropdowm = false
        //     }
        // },
        //另存为  
        anothersave(){
            this.snap02=true
            this.snap01=false
            if(this.snapshow||this.$store.state.demoxmlid){
                this.snapshow = this.snapshow + '-1'
                this.snapdropdown01 = false
                this.savestate=1
                this.formSave.userid = sessionStorage.userid
                this.formSave.title=this.snapshow
                this.formSave.desc=this.editdes
                this.formSave.file = window.frames["snap02"].ide.exportProject_MANYKIT(' ')
                let filebir = this.formSave.file
                this.filebinary = new Blob([filebir]);
                this.submitUpload()
            }else{
                this.$message({
                    message: '请先保存作品',
                    center: true
                });
            }
        },
        //输入框聚焦，已删除
        snapedit(){
            this.focusState = true
        },
        //模态框中的关闭按钮
        close(){
            this.dialogLogin = false
        },
        //左侧下拉框
        snapdropdowmcontrol(){
            this.snapdropdown01 = !this.snapdropdown01          
        },
        issnapdropdowncontrol(event){
            if(!document.getElementById("sanpPanel").contains(event.target)){ 
                this.snapdropdowm = false
          }
        },
         //右侧下拉框
        snapdemodropdowmcontrol(){
            this.snapdemodropdowm = !this.snapdemodropdowm
        },
        issnapuserdropdowncontrol(event){
            if(!document.getElementById("sanpuserPanel").contains(event.target)){ 
                this.snapdemodropdowm  = false
          }
        },
        // 编辑文件
        loadprojectxml(){
             this.axios.post('/res/getfile',{
                id:this.$store.state.demoxmlid,
            })
            .then(response => {      
                // this.snapdemoid= this.$store.state.demoxmlid 
                // console.log(this.snapdemoid+'zuopin')                 
               this.demoxml = response.data  
                //console.log(this.$store.state.demoxmlid)
                //  window.frames["snap"].ide.openProjectString(this.demoxml)
                //window.frames["snap"].ide.rawOpenProjectString(this.demoxml,'OPEN')   
            })   
        },
        //获取保存过文件的数据
        loadprojectdes(){
            // if(sessionStorage.userid!=='unfined')
            this.axios.post('/res/getfile',{
                userid:sessionStorage.userid,
                id:this.$store.state.demoxmlid,
                state:1
            })
            .then(response => {                      
                this.list = response.data.data
                this.edittittle = response.data.data.title
                this.editdes = response.data.data.desc
                this.snapshow = response.data.data.title
            }) 
        },
        // 打开文件
        open() {
            this.snap02=false
            this.snap01=true
            this.snapdemoid = ''
            var seq_id =document.getElementById('xml_seq').value; //根据id得到值
            var index= seq_id.indexOf("."); //得到"."在第几位
            seq_id=seq_id.substring(index);  //截断"."之前的，得到后缀
            if(seq_id!=".xml"){                         //根据后缀，判断是否符合格式
                this.$message({
                    message: '文件格式不正确',
                    center: true
                });
                document.getElementById('movie_seq').value="";  // 不符合，就清除，重新选择
            }else{
                this.dialogOpen=false
                var reader = new FileReader();
                reader.readAsText(this.$refs.file.files[0]);
                reader.onload = function () {    
                    this.readfilebinary=this.result
                    window.frames["snap01"].ide.droppedText(this.readfilebinary,'HHH')   
                } 
            }
        },

        // 新建文件
        newproject() {
            this.snap02=false
            this.snap01=true
            window.frames["snap02"].ide.newProject()
            window.frames["snap01"].ide.newProject()
            this.dialogNew=false
            sessionStorage.snapdemoid = ''
            this.$store.state.demoxmlid = ''
        },

         // 下载文件
        download(name) {
            // this.snap02=false
            // this.snap01=true
            if(this.snap02){
                this.formSave.file = window.frames["snap02"].ide.exportProject (name)
            }else{
                this.formSave.file = window.frames["snap01"].ide.exportProject (name)
            }    
            this.dialogExport=false
        },

        // 保存文件第一步
        handiframe() {
            this.snapdropdown01=false
        　　if(window.navigator.onLine==true) {　
                if(sessionStorage.userid){              //已保存再保存(编辑)
                    if(this.$store.state.demoxmlid){
                        this.savestate=2
                        this.dialogSave = true
                        this.formSave.title=this.edittittle
                        this.formSave.desc=this.editdes
                        this.formSave.file = window.frames["snap02"].ide.exportProject_MANYKIT(' ')
                        let filebir = this.formSave.file
                        this.filebinary = new Blob([filebir]);
                    }else{                             //未保存保存
                        this.savestate=1
                        this.dialogSave = true
                        this.formSave.title=this.edittittle//赋值上一次保存的值
                        this.formSave.desc=this.editdes//赋值上一次保存的值
                        this.formSave.file = window.frames["snap01"].ide.exportProject_MANYKIT(' ')
                        let filebir = this.formSave.file
                        this.filebinary = new Blob([filebir]);
                    }
                }else{
                    this.$message({
                        message: '请先登录',
                        center: true
                    });
                }
        　　}else {　
　　　　         this.$message({
                    message: '上传失败，请检查网络',
                    center: true
                });
        　　}

        },
        // 保存文件第二步
        submitUpload() {
            if(this.savestate==1){
                if(this.formSave.title==''||this.formSave.desc==''){//检测项目名和文件名不能为空
                    this.$message({
                        message: '项目名和文件名不能为空',
                        center: true
                    });
                }else{
                    let formData = new FormData();
                    formData.append('userid',this.formSave.userid);
                    formData.append('title',this.formSave.title);
                    formData.append('desc',this.formSave.desc);
                    formData.append('files',this.filebinary);
                    formData.append('state',1);
                    let config = {
                        headers:{
                            'Content-Type':'multipart/form-data'
                        }
                    }
                    this.axios.post('/res/upload',formData,config)
                    .then( res => {
                        this.snapshow = this.formSave.title//另存为title
                        this.edittittle = this.formSave.title
                        this.editdes = this.formSave.desc
                        this.$store.state.demoxmlid = res.data.data.id//保存后赋值作品值，这样会覆盖之前保存的项目，如果要新建项目，必须要按新建按钮
                        this.$store.state.publicstate==0
                    }).catch( res => {
                        console.log(res)
                    })
                    // {
                    //     console.log(response)
                    //     this.$store.state.demoxmlid = response.data.data.id//保存后赋值作品值，这样会覆盖之前保存的项目，如果要新建项目，必须要按新建按钮
                    //     // location.reload()
                    //     this.$store.state.publicstate==0
                        
                    //     // console.log(response.data.data.id)
                    //     // console.log(this.$store.state.demoxmlid)
                    // }
                    

                    this.dialogSave = false;
                    this.$message({
                        message: '上传成功',
                        center: true
                    });
                }
            }else{
                let formData = new FormData();
                formData.append('userid',this.formSave.userid);
                formData.append('id',this.$store.state.demoxmlid);
                formData.append('title',this.formSave.title);
                formData.append('desc',this.formSave.desc);
                formData.append('files',this.filebinary);
                formData.append('state',2);
                let config = {
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }
                this.axios.post('/res/upload',formData,config)
                .then(function(response){
                })
                this.dialogSave = false;
                this.$message({
                    message: '上传成功',
                    center: true
                });
            }
        },
        // 发布文件
        handiframepublish() {
        　　if(window.navigator.onLine==true) {                     //是否联网　
                if(sessionStorage.userid){                          //是否登录
                    if(this.$store.state.demoxmlid){                //是否是发布和未发布状态
                        if(this.$store.state.publicstate==0){       //未发布已保存
                            this.$store.state.demoxmlid = this.$store.state.demoxmlid
                            // window.open('/#/Publish'); 
                            this.$router.push({name:'Publish'})
                        }else{                                      //已发布
                                this.$message({
                                message: '该作品已经发布，请重新保存',
                                center: true
                            });
                        }
                    }else{
                        this.dialogUpload = true
                        this.formSave.file = window.frames["snap01"].ide.exportProject_MANYKIT('o')
                        let filebir = this.formSave.file
                        this.filebinary = new Blob([filebir]);
                        let formData = new FormData();
                        formData.append('userid',this.formSave.userid);
                        formData.append('state',1);
                        formData.append('title','未发布成功的作品');
                        formData.append('desc','未发布成功的作品');
                        formData.append('files',this.filebinary);
                        let config = {
                            headers:{
                                'Content-Type':'multipart/form-data'
                            }
                        }
                        this.axios.post('/res/upload',formData,config)
                        .then(response => {
                            this.$store.state.demoxmlid=response.data.data.id
                            console.log(response.data.data.id)
                            // window.open('http://www.manykit.com/codeplay/#/Publish','_blank'); 
                            // window.open('/#/Publish'); 
                             this.$router.push({name:'Publish'})
                        })                      
                        }
                }else{
                    this.$message(
                        {
                            message: '请先登录',
                            center: true
                        }
                    )
                }
        　　}else {　
　　　　         this.$message({
                    message: '发布失败，请检查网络',
                    center: true
                });
        　　}
        },
        // getdemopublish(){
        //         this.axios.post('/res/filelist',{
        //             userid:this.$store.state.userid,
        //             state:0
        //         })
        //         .then(response => {
        //             this.$store.state.demoxmlid = response.data.data[response.data.data.length - 1].id    
        //         })
        //     },

          //登陆
        Loginbtn() {
            var reguserpassword = /^[a-zA-Z0-9]\w{4,16}$/;
            let logintextpassword = this.publicKey;
            var privatekey = new NodeRSA(logintextpassword);
            this.formLogin.passwordrsc = privatekey.encrypt(this.formLogin.password, 'base64');
            if(this.formLogin.username == ''){
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
                username:this.formLogin.username,
                password:this.formLogin.passwordrsc,
            })
            .then(response => {
                var datamsg = response.data
                // this.msg = response.data.errmsg
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
            var regusername = /^[a-zA-Z0-9]\w{3,16}$/;
            var reguserpassword = /^[a-zA-Z0-9]\w{4,16}$/;
            var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            let logintextpassword = this.publicKey;
            var privatekey = new NodeRSA(logintextpassword);
            this.formRegister.formRegisterpasswordrsc = privatekey.encrypt(this.formRegister.password, 'base64');
            if(!regusername.test(this.formRegister.username)){
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
            else if( this.formRegister.password!==this.formRegister.checkpassword){
                this.$message({
                message: '密码输入不一致',
                center: true
                });
            }
            else
            {    
                this.axios.post('/res/signup', {
                    username:this.formRegister.username,
                    password:this.formRegister.formRegisterpasswordrsc,
                    mail:this.formRegister.mail
                })
                .then(response => {
                    this.registermsg = response.data.data.msg;
                    this.$message({
                    message: this.registermsg,
                    center: true
                    });  
                    this.dialogLogin = false  
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        //验证60s
        timer() {
            if (this.time > 0) {
                    this.time--;
                    this.btntxt=this.time+"s";
                    setTimeout(this.timer, 1000);
                    this.btntxtcolor01=false
                    this.btntxtcolor02=true
            } else{
                    this.time=0;
                    this.btntxt="获取验证码";
                    this.disabled=false;
                    this.btntxtcolor01=true
                    this.btntxtcolor02=false
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
                    this.timer();
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
                if( response.data.data.msg =="验证成功"){
                this.$message({
                message: '验证成功',
                center: true
                });
                this.dialogPassSure = true
                this.dialogForgetpass = false
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
            this.formReset.formResetpasswordrsc = privatekey.encrypt(this.formReset.password, 'base64');
            if(this.formReset.password!==this.formReset.checkpassword||this.formReset.password<6||this.formReset.checkpassword<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/setpassword',{
                    password:this.formReset.formResetpasswordrsc,
                    mail:this.formReset.mail
            })
            .then(response => {
                this.dialogLogin = false
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
                    this.dialogLogin =false
                    this.publicKey = response.data.data.publicKey
                    this.login = false;
                    this.sign = false;
                    sessionStorage.userid = response.data.data.userid
                    sessionStorage.usernamesession = response.data.data.username
                    this.$store.state.usernamesession02 = sessionStorage.usernamesession
                    this.$store.state.userid = sessionStorage.userid
                    this.user = true;
                }else{
                    this.login = true;
                    this.sign = true;
                    this.user = false;
                    this.publicKey = response.data.data.publicKey
                }
            }) 
        },
        // Getsessionname(){
        //     if(sessionStorage.userid){
        //         this.user = true;
        //         this.login = false;
        //         this.sign = false;
        //         this.$store.state.usernamesession02 = sessionStorage.usernamesession
        //         this.$store.state.userid = sessionStorage.userid
        //     }
        // },
        // Homepass(){
        //     this.$router.push({name:'Home'})
        // },
        // 退出登陆
        Cancellogout() {
            this.axios.get('/res/logout')
            .then(response =>{  
                this.snapdemodropdowm=false;
                this.login = true;
                this.sign = true;
                this.user = false;
                sessionStorage.usernamesession =''  
                this.$store.state.userid = '' 
                sessionStorage.userid = ''  
            }) 
        }
    },
}

</script>
<style scoped lang="less">
@import '../assets/index.less';
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
/* .snapboxhead .header01 a{
	z-index: 10!important;
	color: @background-color;
} */
.snapboxhead .snapheaderleft{
	width:100%;
	height: 40px;
	background: @gray;
	list-style: none;
	position: fixed;
	top: 0px;
	left: 0px;
	color: @background-color;
    font-size:@xm-size;
}
.snapboxhead .snapheaderleft img{
    position: relative;
    top: 12px;
}
.snapboxhead .borderlight img{
    position: fixed;
    left: 210px;
    top: 14px;
}
.snapboxhead .borderlight01 img{
    position: fixed;
    left: 120px;
    top: 15px;
}
.snapboxhead .borderlight03 img{
    position: fixed;
    left: 290px;
    top: 13px;
}
.snapboxhead .borderlight04{
    position: fixed;
    right:-33px;
    top: 12px;
    font-size:@sm-size;
}
.snapboxhead .borderlight05{
    position: fixed;
    right:-70px;
    top: 12px;
    font-size:@sm-size;
}
.snapboxhead .borderlight06{
    position: fixed;
    right: -40px;
    top: 12px;
    font-size:@sm-size;
}
.snapboxhead .borderlight07{
    position: fixed;
    left: 288px;
    top: 7px;
    font-size:@sm-size;
}
.snapedit{
    height: 10px;
    width: 10px;
    position: relative;
    top: 16px;
    left: 430px;
    z-index: 1000;
    cursor: pointer;
    /* background: url(../assets/snappic/snapedit.png) no-repeat; */
}
.snapboxhead .borderlight07 input{
    height: 26px;
    width: 160px;
    font-size:@sm-size;
    background-color: #4D4D4D;
    color: #C2C2C2;
    padding-left: 5px;
    border: 1px dashed #c2c2c2;
}


.snapboxhead .bcw a{
    color: @background-color; 
    position: fixed;
    width: 60px;
    height: 20px;
    left: 40px;
    top: 10px;
    font-size:@ss-size;
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
    z-index: 1000;
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
    top: 30px;
    color: @gray;
    width: 94px;
    height: 94px;
    font-size:@sm-size;
    /* z-index: 1000; */
    background: @background-color;
    /* display: inline-block; */
    border: 1px solid @gray;

}
.snapboxhead .snapdropdowm .block-col-12 a{
    color: @gray;
    text-decoration: none;
}
.snapboxhead .snapdropdowm .block-col-12 li{
    padding-top: 0px;
    padding-left: 5px;
    height: 24px;
    width: 90px;
    cursor: pointer;
}
.snapboxhead .snapdropdowm .block-col-12 li:hover{
    background:@black;
    color: @background-color;
}


.snapboxhead .snapdemodropdowm .block-col-12{
    position:fixed;
    right: 65px;
    top: 40px;
    color: @gray;
    width: 74px;
    height: 48px;
    font-size:@sm-size;
    /* z-index: 1000; */
    background: @background-color;
    display: inline-block;
    border: 1px solid @gray;
}
.snapboxhead .snapdemodropdowm .block-col-12 a{
    color: @gray;
    text-decoration: none;
}
.snapboxhead .snapdemodropdowm .block-col-12 li{
    padding-top: 0px;
    padding-left: 5px;
    height: 24px;
    width: 70px;
    cursor: pointer;
}
.snapboxhead .snapdemodropdowm .block-col-12 li:hover{
    background:@black;
    color: @background-color;
}
.snapboxhead .snapdemodropdowm .block-col-12 li p:hover{
    color: @background-color;
}


.container50{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 336px;
    background: @background-color;
    border-radius: 5px;
}
/* .container50 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container50 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
} */
.container50 .sign_logo{
    position: absolute;
    top: 8px;
    left: 394px;
    cursor: pointer;
} 
.container50 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 10px;
    left: 60px;
    padding-left: 8px;
}
.container50 .iden01{
    position: absolute;
    height: 49px;
    width: 296px;
    top: 58px;
    left: 70px;
    padding-left: 0px;
}
.container50 .iden02{
    position: absolute;
    height: 97px;
    width: 297px;
    top: 116px;
    left: 60px;
    padding-left: 10px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #C8C8C8;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #C8C8C8;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #C8C8C8;
}
.container50 .iden03{
    position: absolute;
    height: 38px;
    width: 107px;
    top: 274px;
    left: 160px;
    padding-left: 16px;
}
.container50 .iden03:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}
.container50 .texttitle{
    color: @gray;
}
.container50 .textdes{
    height: 110px;
    width: 266px;
    padding: 14px;
    border: 1px solid #dcdfe6;
    color: @gray;
}
.container50 .register{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 246px;
    left: 68px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
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
    height: 226px;
    background: @background-color;
    border-radius: 5px;
}
.container501 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container501 .sign_logo{
    position: absolute;
    top: 8px;
    left: 394px;
    cursor: pointer;
} 
.container501 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 70px;
    left: 60px;
    padding-left: 10px;
}
.container501 .iden01{
    position: absolute;
    height: 40px;
    width: 297px;
    top: 59px;
    left: 62px;
    padding-left: 10px;
}
.container501 .iden02{
    position: absolute;
    height: 38px;
    width: 107px;
    top: 135px;
    left: 157px;
}
.container501 .iden02:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}
.container502{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 226px;
    background: @background-color;
    border-radius: 5px;
}
/* .container502 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
*/
.container502 .sign_logo{
    position: absolute;
    top: 8px;
    left: 394px;
    cursor: pointer;
} 
.container502 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container502 .iden01 p{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 68px;
    left: 90px;
    font-size: 18px;
    padding-left: 10px;
}
.container502 .iden02{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 135px;
    left: 101px;
}
.container502 .iden03{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 135px;
    left: 234px;
}
.container502 .iden02:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}
.container502 .iden03:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}


.container5020{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 226px;
    background: @background-color;
}
/* .container5020 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container5020 .sign_logo{
    position: absolute;
    top: 56px;
    left: 266px;
} */
.container5020 .tele{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 110px;
    left: 60px;
    padding-left: 10px;
}
.container5020 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 78px;
    left: 160px;
    padding-left: 10px;
}
.container5020 .iden02{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 138px;
    left: 115px;
}
.container5020 .iden03{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 138px;
    left: 225px;
}


.container503{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 266px;
    background: @background-color;
    border-radius: 5px;
}
.container503 .welcome{
    position: absolute;
    top: 56px;
    left: 60px;
}
.container503 .sign_logo{
    position: absolute;
    top: 8px;
    left: 394px;
    cursor: pointer;
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
    top: 88px;
    left: 60px;
    padding-left: 10px;
}
.container503 .iden02{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 158px;
    left: 115px;
}
.container503 .iden03{
    position: absolute;
    height: 39px;
    width: 77px;
    top: 158px;
    left: 225px;
}
.container503 .iden02:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}
.container503 .iden03:hover{
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    cursor: pointer;
}
// .container503 .iden04{
//     border:1px solid #ff7979;
//     background: #ffe7e7;
//     color: #f13232;
// }

.container503 .file {
    position: relative;
    left: 100px;
    display: inline-block;
    background: #fff;
    border: 1px solid #6a6f77;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #333;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
}
.container503 .file input {
    position: absolute;
    font-size: 100px;
    width: 80px;
    height: 30px;
    right: 0;
    left: 0px;
    top: 0;
    opacity: 0;
}
.container503 .file:hover {
    border:1px solid #ff7979;
    background: #ffe7e7;
    color: #f13232;
    text-decoration: none;
}



.container2101{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.container2101 .sign_logo{
    width: 50px;
    height: 23px;
    position: relative;
    top: 44px;
    left: 162px;
    color: @gray;
    font-size: 24px;
    margin-left: 30px;
}
.container2101 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 102px;
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
    top: 238px;
    left: 291px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.container2101 .register{
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
.container2101 .free_res p{
    position: absolute;
    height: 14px;
    width: 142px;
    top: 317px;
    left: 137px;
    font-size:@sm-size;
    color: @black;
    font-weight: 600;
}
.container2101 .free_res span{
    position: absolute;
    top: 317px;
    left: 216px;
    color: @main-color;
    font-size:@sm-size;
    cursor: pointer;
    font-weight: 600;
}
.container4401{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.container4401 .sign_logo{
    position: absolute;
    height: 24px;
    width: 106px;
    top: 44px;
    left: 155px;
    color: @gray;
    font-size: 24px;
}
.container4401 .tele{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container4401 .iden01{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 166px;
    left: 60px;
    padding-left: 10px;
}
.container4401 .register{
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
.container1901{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 492px;
    background: @background-color;
}
.container1901 .sign_logo{
    position: absolute;
    top: 44px;
    left: 184px;
    color: @gray;
    font-size: 24px;
}
.container1901 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden01{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 122px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden02{
    position: absolute;
    height: 49px;
    width: 287px;
    top: 164px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .iden03{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 206px;
    left: 60px;
    padding-left: 10px;
}
.container1901 .register{
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
.container1901 .free_res{
    position: absolute;
    height: 14px;
    width: 141px;
    top: 365px;
    left: 60px;
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
    color: @main-color;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
}
.container4601{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.container4601 .sign_logo{
    position: absolute;
    top: 44px;
    left: 159px;
    color: @gray;
    font-size: 24px;
}
.container4601 .tele{
    position: absolute;
    height: 48px;
    width: 287px;
    top: 102px;
    left: 60px;
    padding-left: 10px;
}
.container4601 .iden01{
    position: absolute;
    height: 48px;
    width: 170px;
    top: 126px;
    left: 60px;
    padding-left: 10px;
    margin: 0px!important;
}
.container4601 .iden0202{
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
.container4601 .iden020202{
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
    top: 256px;
    left: 60px;
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
    border: none;
    outline: none;
}
.container4601 .back_login{
    position: absolute;
    height: 16px;
    width: 289px;
    top: 345px;
    left: 332px;
    color: @back-color;
    font-size: 15px;
    cursor: pointer;
}

.container4401{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 364px;
    background: @background-color;
}
.snapbcw .close{
    float: right;
    position: relative;
    right: 13px;
    top: 13px;
    cursor: pointer;
}
/* .container21 .sign_logo{
    position: absolute;
    top: 44px;
    left: 155px;
    color: @gray;
    font-size: 24px;
} */
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
    background: @main-color;
    color: @background-color;
    font-size:@md-size;
    cursor: pointer;
}
</style>
