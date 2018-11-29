<template>
    <div class="container34"> 
          <div class="userpic">  
          </div>
          <div class="userpiv" v-show="userpic"><img  :src="'data:image/png;base64,'+imageUrl02"></div>
          <div class="userpiv" v-show="localpic"><img  :src="imageUrl"></div>
          <div  class="two_text"><p>{{$store.state.usernamesession02}}</p></div>
          <el-form :label-position="labelPosition" class="copassword" label-width="80px" :model="formLabelAlign">
                <el-form-item class="set01" label="旧密码">
                  <input class="input01" type="password" v-model="formLabelAlign.oldpass">
                </el-form-item>
                <el-form-item class="set01" label="新密码">
                  <input class="input01" type="password" v-model="formLabelAlign.newpass">
                </el-form-item>
                <el-form-item class="set01" label="确认密码">
                  <input class="input01" type="password" v-model="formLabelAlign.conpass">
                </el-form-item>
                <el-button class="save" @click="changepassbtn">确认修改</el-button>
          </el-form>
    </div>
</template>
<script>
import NodeRSA from 'node-rsa'
  export default {
    data() {
      return {
        labelPosition: 'right',
        imageUrl:'static/images/localpic.png',//默认图片
        imageUrl02:'',//获取后台显示用户自选图片
        userpic:'',//用户
        localpic:'',//本地图片
        publicKey:'',//公钥
        errmsg:'',//错误信息
        formLabelAlign: {//修改个人密码
          oldpass: '',//旧密码
          oldpassss: '',//就、旧密码加密上传
          newpass: '',//新密码
          conpass: '',//确认新密码
          conpassss:''//新密码加密上传
        }
      };
    },
    mounted:function(){
      this.loadmessage()
      this.Getsession()
    },
    methods:{
      //下载初始化数据
            loadmessage(){
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    getinfostate:1
            })
            .then(response => {
                  this.imageUrl02 = response.data.data.imgBuffer
                  if(this.imageUrl02){
                      this.localpic = false
                      this.userpic = true
                  }else{
                      this.localpic = true
                      this.userpic = false
                  }
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      //修改密码
          changepassbtn() {
              let logintextpassword = this.publicKey;
              var privatekey = new NodeRSA(logintextpassword);
              this.formLabelAlign.conpassss = privatekey.encrypt(this.formLabelAlign.conpass, 'base64');
              this.formLabelAlign.oldpassss = privatekey.encrypt(this.formLabelAlign.oldpass, 'base64');
            //  var picsource = this.$refs.file_el.files[0]
            if(this.formLabelAlign.newpass!==this.formLabelAlign.conpass||this.formLabelAlign.newpass<6||this.formLabelAlign.conpass<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/updatepassword',{
                    oldpass:this.formLabelAlign.oldpassss,
                    newpass:this.formLabelAlign.conpassss,
                    userid:this.$store.state.userid,
                    // fiels:picsource                  
            })
            .then(response => {
              if(response.data.data){
                    this.$message({
                    message:'修改密码成功',
                    center: true
                }); 
              }else{
                this.errmsg = response.data.errmsg
                this.$message({
                    message: this.errmsg,
                    center: true
                }); 
              }

            })
            .catch(function (error) {
                console.log(error);
            });
            }     
        },
        //获取公钥
          Getsession() {  
            this.axios.get('/res/verify')
            .then(response =>{
                if(response.data.data.userid){
                    this.publicKey = response.data.data.publicKey
                    // this.dialogLogin = false;
                    this.loginsign = false;
                    sessionStorage.userid = response.data.data.userid
                    sessionStorage.usernamesession = response.data.data.username
                    this.usercenter = true; 
                    this.$store.state.usernamesession02 = sessionStorage.usernamesession
                    this.$store.state.userid = sessionStorage.userid  
                   
                }else{
                    this.dialogLogin = false;
                    this.usercenter = false;
                    this.loginsign = true;
                    this.publicKey = response.data.data.publicKey
                }
            }) 
        },
        // choise_file () {
        //     var file_info = this.$refs.file_el.files[0]
        //     var fr = new FileReader()
        //     fr.readAsDataURL(file_info)
        //     var that = this
        //     fr.onload = function () {
        //         that.imageUrl = this.result
        //     }   
        // }
    }
  }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container34{
  width: 500px;
  height: 416px;
  position: relative;
  top: 240px;
  left: 363px;
}
.container34 .input01{
  width: 360px;
  height: 43px;  
  background:@mainbg-color;
  border: none;
  padding-left: 10px;
}
.container34 .save{
  width: 370px;
  height: 43px;
  color: @background-color;
  margin-top: 20px;
  background: @main-color;
  position: relative;
  left: 80px;
}
.container34 .userpic{
  position: relative;
  height: 151px;
  width: 151px;
  left: -283px;
  top: 64px;
  border: 3px solid @background-color;
  box-shadow:0px 6px 10px @shadow-color;
  border-radius: 100px;
}
.container34 .userpic input{
  position: relative;
  left: 30px;
  top: 65px;
  z-index: 1000;
  width: 80px;
  background: red;
  opacity: 1;
}
.container34 .userpiv{
  position: relative;
  height: 151px;
  width: 151px;
  top: -50px;
  left: -280px;
  border-radius: 100px;
}
.container34 .userpiv img{
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
.container34 .two_text{
    position: absolute;
    top: 270px;
    left: -320px;
    font-size:@lllg-size;
    color: @gray;
    font:bold;
    text-align: center;
    width: 229px;
    height: 29px;
}
.container34 .copassword{
    position: absolute;
    left: 0px;
    top: 87px;
}
</style>
