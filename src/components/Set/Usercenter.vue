<template>
  <div class="container33">  
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules">
        <el-form-item label="名称">
          <el-input class="input01" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input class="input01" v-model="formLabelAlign.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input class="input01" v-model.number="formLabelAlign.age"></el-input>
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
        },
        rules:{
          age:[
            { required: true, message: '年龄不能为空'},
            { type: 'number', message: '年龄必须为数字值'}
          ]
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
              console.log(response)
                  this.formLabelAlign.name = this.$store.state.usernamesession02
                  this.formLabelAlign.age = response.data.data.age,
                  this.formLabelAlign.sex = response.data.data.sex
                  if(this.formLabelAlign.sex===1){
                      this.formLabelAlign.sex='男'
                  }else{
                      this.formLabelAlign.sex='女'
                  }
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      uploadmessage(){
          this.axios.post('/res/userinfo',{
                  userid:sessionStorage.userid,
                  state:1,
                  age:this.formLabelAlign.age,
                  sex:this.formLabelAlign.sex==='男'?1:2,
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
  left: 363px;
}
.container33 .input01{
  width: 370px;
  height: 43px;  
}
.container33 .el-input__inner{
  background-color: #BDBDBD!important;
}
.container33 .save{
  width: 370px;
  height: 43px;
  color: #fff;
  margin-top: 20px;
  background: #F13232;
  position: relative;
  left: 80px;
}
.el-form-item{
  margin-bottom: 15px;
}
</style>
