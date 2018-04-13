<template>
    <div>
        <div class="snapboxhead">
            <div class="snapheader">
                <ul class="snapheaderleft">
                    <li class="bcw"><img src="../assets/snappic/home.png" alt=""><p><a href="/"> 编程玩</a></p></li>
                    <li class="borderlight"><img src="../assets/snappic/new.png" alt=""><p @click="dialogNew=true">新建</p></li>
                    <li class="borderlight01"><img src="../assets/snappic/save.png" alt=""><p @click="dialogOpen=true"> 打开本地文件</p></li>
                    <li class="borderlight02" @click="dialogExport = true"><img src="../assets/snappic/download.png" alt=""><p @click="download">下载到本地</p></li>
                    <li class="borderlight03"  @click="dialogSave = true"><img src="../assets/snappic/upload.png" alt=""><p @click="handiframe">保存项目</p></li>
                    <li class="borderlight"><p>{{formSave.title}}</p></li>
                    <!-- <li class="borderlight" ><img src="../assets/snappic/upload.png" alt=""><p >保存</p></li> -->
                </ul>
            </div>
        </div>
        <!-- <Header/> -->
        <!-- 参数播放 -->
        <!-- <iframe class="snap" src="static/snap/pxsnap.html" name="snap" frameborder="0"></iframe> -->

        <!-- 接口播放 -->
        <iframe class="snap" :src="'static/js/snap.html#open:/codeplay/file/'+this.$store.state.demoxmlid+'.xml'" name="snap" frameborder="0"></iframe>

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogSave" :modal="false" width="420px">
                    <div class="container50">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <!-- <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名" v-show="true"></el-input>
                            </el-form-item> -->
                            <el-form-item class="iden01">
                                <el-input type="text" v-model="formSave.title" auto-complete="off" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item  class="iden02">
                                <textarea type="text" class="textdes" v-model="formSave.desc" auto-complete="off" placeholder="请输入项目描述"></textarea>
                            </el-form-item>
                            <el-form-item  class="iden03">
                                <!-- <el-upload
                                class="upload-demo"
                                ref="upload"
                                :data="formSave"
                                action="/res/upload"
                       
                                :auto-upload="false">
                              
                                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定保存</el-button>
                                <div slot="tip" class="el-upload__tip">上传文件到服务器，文件大侠不得超过10M</div>
                                </el-upload> -->
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
                            <!-- <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名" v-show="true"></el-input>
                            </el-form-item> -->
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
                            <!-- <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名" v-show="true"></el-input>
                            </el-form-item> -->
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
   </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters,mapActions} from 'vuex'
import axios from 'axios'

export default{
    data(){
        return{
            // userid:,
            dialogSave: false,
            dialogExport: false,
            dialogNew: false,
            dialogOpen: false,
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
                demoxml:''
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
            //  file:[
            //     { required: true, message: '上传文件', trigger: 'blur' },
            //     { type:'xml', message: '', trigger: 'blur' }
            // ],
            },
        }
    },
    mounted(){
        this.loadproject()
    },
    methods: {
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

    //    async loadproject(){
    //         let dataxml = await this.axios.post('/res/getfile',{
    //             id:this.$store.state.demoxmlid,
    //         })
    //         .then(response => {                          
    //            this.demoxml = response.data  
    //            return  this.demoxml
    //         //    console.log(this.demoxml)
    //         //    console.log(this.$store.state.demoxmlid)
               
    //         })
    //         console.log(this.demoxml+1111)
    //          window.frames["snap"].ide.droppedText(this.demoxml,'H')  
    //         // window.frames["snap"].ide.droppedText(this.$store.state.demoxml,'HHH') 
    //     },


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
             
            //  console.log(reader.readAsDataURL(this.$refs.file.files[0]))
             
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
            // this.createXml(this.formSave.file)
            console.log(this.formSave.file)
            let filebir = this.formSave.file
            console.log(filebir)
            this.filebinary = new Blob([filebir]);
            console.log(this.filebinary);
            // this.filebinary = Array.prototype.map.call( filebir, function( c ) { return c.charCodeAt(0); } );
            // console.log(this.filebinary)
            console.log(this.$store.state.userid)
            // console.log(ConvertStrToBin())

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
        }
    },
}

</script>
<style scoped>
.snap{
    width: 100%;
    height: 942px;
    margin-top: 28px;
}
.snapboxhead{
    width: 500px;
    height: 28px;
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
	height: 28px;
	background: #0078D7;
	list-style: none;
	position: fixed;
	top: 0px;
	left: 0px;
	color: #000;
    font-weight: 600;
}
.snapboxhead .snapheaderleft img{
    position: relative;
    top: 7px;
    margin-right:64px;
}
.snapboxhead .bcw{
    color: #000; 
    margin-top: -1px;
}
.snapboxhead .bcw p{
    color: #000; 
    padding-left: 8px;
}
.snapboxhead .borderlight01{
    color: #000; 
    margin-top: 1px;
}
.snapboxhead .borderlight{
    margin-left: -20px;
}
.snapboxhead .borderlight01{
    margin-left: -30px;
}
.snapboxhead .borderlight p{
    padding-top: 1px;
}
.snapboxhead .borderlight01 p{
    padding-left: 56px;
}
.snapboxhead .borderlight02 p{
    padding-left: 38px;
}
.snapboxhead .borderlight03 p{
    padding-left: 30px;
}
.snapboxhead .bcw a{
    color: #000; 
    margin-left: 4px;
}
.snapboxhead .snapheaderleft li{
	float: left;
	height: 20px;
	width: 160px;
	cursor: pointer;
	opacity: 0.7;
}
.snapboxhead .snapheaderleft li p{
	position: relative;
	top: -15px;
}
.snapboxhead .snapheaderleft li:hover{	
	opacity: 1;
}
.container50{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 426px;
    background: #9cf7ff;
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
    left: 60px;
    padding-left: 10px;
}
.container50 .textdes{
    height: 170px;
    width: 278px;
    padding: 8px;
    border-radius: 20px;
}
.container50 .register{
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

.borderlighttest{
    position: relative;
    top: 18px;
}

.container501{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 266px;
    background: #9cf7ff;
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
    top: 108px;
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
    background: #9cf7ff;
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
    top: 108px;
    left: 60px;
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
    background: #9cf7ff;
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
    top: 108px;
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
</style>
