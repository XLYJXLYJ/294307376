<template>
    <div class="container34">  
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item class="set01" label="旧密码">
                  <el-input class="input01" type="password" v-model="formLabelAlign.oldpass"></el-input>
                </el-form-item>
                <el-form-item class="set01" label="新密码">
                  <el-input class="input01" type="password" v-model="formLabelAlign.newpass"></el-input>
                </el-form-item>
                <el-form-item class="set01" label="确认密码">
                  <el-input class="input01" type="password" v-model="formLabelAlign.conpass"></el-input>
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
        formLabelAlign: {
          oldpass: '',
          newpass: '',
          conpass: ''
        }
      };
    },
    methods:{
          changepassbtn() {
            if(this.formLabelAlign.newpass!==this.formLabelAlign.conpass||this.formLabelAlign.newpass<6||this.formLabelAlign.conpass<6){
                this.$message({
                message: '两次输入的密码不一致或密码长度不足6位',
                center: true
                });
            }else{
                this.axios.post('/res/setpassword',{
                    password:this.formLabelAlign.conpass,
                    userid:this.$store.state.userid
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
  width: 370px;
  height: 40px;
  background-color: #BDBDBD;
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
.container34 .el-form-item__label{
  font-size: 18px;
}
</style>
