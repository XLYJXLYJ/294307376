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
  export default {
    data() {
      return {
        labelPosition: 'right',
        imageUrl:'static/localpic.png',
        imageUrl02:'',
        userpic:'',
        localpic:'',
        formLabelAlign: {
          oldpass: '',
          newpass: '',
          conpass: ''
        }
      };
    },
    mounted:function(){
      this.loadmessage()
    },
    methods:{
            loadmessage(){
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    getinfostate:1
            })
            .then(response => {
                  this.imageUrl02 = response.data.data.imgBuffer
                  console.log( this.imageUrl02)
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
          changepassbtn() {
            //  var picsource = this.$refs.file_el.files[0]
            if(this.formLabelAlign.newpass!==this.formLabelAlign.conpass||this.formLabelAlign.newpass<6||this.formLabelAlign.conpass<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/setpassword',{
                    password:this.formLabelAlign.conpass,
                    userid:this.$store.state.userid,
                    // fiels:picsource
                   
            })
            .then(response => {
              console.log(response)
                // this.$message({
                //     message: '修改密码成功',
                //     center: true
                // }); 
            })
            .catch(function (error) {
                console.log(error);
            });
            }     
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
<style scoped>
.container34{
  width: 500px;
  height: 416px;
  position: relative;
  top: -40px;
  left: 363px;
}
.container34 .input01{
  width: 360px;
  height: 43px;  
  background:#F5F5F5;
  border: none;
  padding-left: 10px;
}
.container34 .save{
  width: 370px;
  height: 43px;
  color: #fff;
  margin-top: 20px;
  background: #F13232;
  position: relative;
  left: 80px;
}
.container34 .userpic{
  position: relative;
  height: 151px;
  width: 151px;
  left: -283px;
  top: 64px;
  border: 3px solid #fff;
  box-shadow:0px 6px 10px #bdbdbd;
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
  top: -90px;
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
    top: 230px;
    left: -320px;
    font-size: 28px;
    color: #91121B;
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
