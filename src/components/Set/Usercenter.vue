<template>
  <div class="container33">  
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input class="input01" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input class="input01" v-model="formLabelAlign.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input class="input01" v-model="formLabelAlign.age"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input class="input01" v-model="formLabelAlign.name01"></el-input>
        </el-form-item>
        <el-button class="save" @click="uploadmessage">保存</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          sex: '',
          age: '',
          name01: '',
        }
      };
    },
    mounted:function(){
      // this.loadmessage()
    },
    methods:{
      // loadmessage(){
      //       this.axios.post('/res/userinfo',{
      //               userid:this.$store.state.userid,
      //               getinfostate:1
      //       })
      //       .then(response => {
      //         console.log(response)
      //       })
      //       .catch(function (error) {
      //           console.log(error);
      //       });
      // },
      uploadmessage(){
          this.axios.post('/res/userinfo',{
                  userid:this.$store.state.userid,
                  getinfostate:1,
                  age:this.formLabelAlign.age,
                  sex:this.formLabelAlign.sex,
          })
          .then(response => {
            console.log(response)
          })
          .catch(function (error) {
              console.log(error);
          });
    }
    }
  }
</script>
<style scoped>
.container33{
  width: 500px;
  height: 416px;
  position: relative;
  top: -40px;
  left: 320px;
}
.container33 .input01{
  width: 308px;
  height: 36px;

  margin-left: -80px;  
}
.container33 .el-input__inner{
  background-color: #f2efe6!important;
}
.container33 .save{
  width: 309px;
  height: 36px;
  color: #fff;
  margin-top: 20px;
  background: #f9b242;
}
.el-form-item{
  margin-bottom: 15px;
}
</style>
