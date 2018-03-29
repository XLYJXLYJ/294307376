<template>
    <div>
        <div class="snapboxhead">
            <div class="snapheader">
                <!-- <ul class="snapheaderleft">
                    <li class="bcw"><img src="../assets/snappic/home.png" alt=""><p><a href="/"> 编程玩</a></p></li>
                    <li class="borderlight"><img src="../assets/snappic/new.png" alt=""><p onclick="ide.createNewProject()">新建</p></li>
                    <li class="borderlight"  @click="dialogSave = true"><img src="../assets/snappic/save.png" alt="" ><p>保存</p></li>
                    <li class="borderlight" ><img src="../assets/snappic/upload.png" alt="" ><p>发布</p></li>
                </ul> -->
            </div>
        </div>
        <!-- <Header/> -->
        <iframe class="snap" src="./static/snap/index.html" frameborder="0"></iframe>

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogSave" :modal="false" width="420px">
                    <div class="container50">
                        <el-form :model="formSave" :rules="rules" enctype="multipart/form-data">
                            <img class="welcome" src="../assets/login/welcome.png" alt="">
                            <img class="sign_logo" src="../assets/login/login_logo.png" alt="">
                            <el-form-item class="tele">
                                <el-input type="text" v-model="formSave.userid" auto-complete="off" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item class="iden01">
                                <el-input type="text" v-model="formSave.filename" auto-complete="off" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item  class="iden02">
                                <el-input type="text" v-model="formSave.filedesc" auto-complete="off" placeholder="请输入项目描述"></el-input>
                            </el-form-item>
                            <el-form-item  class="iden03">
                                <el-upload
                                class="upload-demo"
                                ref="upload"
                                :data="formSave"
                                action="/res/upload"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :onSuccess="uploadSuccess"
                                :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传xml文件，且不超过10M</div>
                                </el-upload>
                                <!-- <el-input type="file" v-model="formSave.file" auto-complete="off" @change="getFile($event)" placeholder="请选择需要保存的文件"></el-input> -->
                            </el-form-item>
                            <!-- <el-button type="primary" class="register" @click="submitForm">保存</el-button> -->
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>
   </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default{
    data(){
        return{
            dialogSave: false,
            formSave: {
                userid:'',
                filename: '',
                filedesc: '',
                file: '',
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
   
    methods: {
    submitUpload() {
        this.$refs.upload.submit();
    },
    uploadSuccess (response, file, fileList) {
            console.log('上传文件', response)
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    }
},
        // Savebtn() {
        //     this.axios.post('/res/upload', {
        //         userid:this.formSave.userid,
        //         name:this.formSave.filename,
        //         desc:this.formSave.filedesc,
        //         file:this.formSave.file,
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // }
     }

</script>
<style scoped>
.snap{
    width: 100%;
    height: 970px;
    margin: 0px;
    padding: 0px;
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
	width:400px;
	height: 27px;
	background: linear-gradient(to right,#0078D7, rgb(0, 215, 215));
	list-style: none;
	position: fixed;
	top: 0px;
	left: 0px;
	color: #fff;
}
.snapboxhead .snapheaderleft img{
    position: relative;
    top: 7px;
    margin-right:64px;
}
.snapboxhead .bcw a{
    color: #fff; 
    margin-left: 4px;
}
.snapboxhead .snapheaderleft li{
	float: left;
	height: 20px;
	width: 100px;
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
    height: 476px;
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
/* .container19 .el-form-item__error{
    position: absolute;
    top: 110px;
    left: 60px;
} */
.container50 .iden01{
    position: absolute;
    height: 49px;
    width: 297px;
    top: 168px;
    left: 60px;
    padding-left: 10px;
}
.container50 .iden02{
    position: absolute;
    height: 147px;
    width: 297px;
    top: 226px;
    left: 60px;
    padding-left: 10px;
}
.container50 .iden03{
    position: absolute;
    height: 29px;
    width: 297px;
    top: 284px;
    left: 60px;
    padding-left: 10px;
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
</style>
