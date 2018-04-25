<template>
  <div class="container33">  
    <div class="userpic">
      <input type="file" ref="file_el" @change="choise_file">    
    </div>
     <div class="userpiv" v-show="userpic"><img  :src="'data:image/png;base64,'+imageUrl01"></div>
     <div class="userpiv" v-show="localpic"><img  :src="imageUrl"></div>
    
    <div  class="two_text"><p>{{$store.state.usernamesession02}}</p></div>
    <el-form :label-position="labelPosition" label-width="80px" class="usercenter" :model="formLabelAlign" :rules="rules">
        <el-form-item label="名称">
          <input class="input01" v-model="formLabelAlign.name">
        </el-form-item>
        <el-form-item label="性别">
          <input class="input01" v-model="formLabelAlign.sex">
        </el-form-item>
        <el-form-item label="年龄">
          <input class="input01" v-model.number="formLabelAlign.age">
        </el-form-item>
        <el-form-item label="真实姓名">
          <input class="input01" v-model="formLabelAlign.name01">
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
        imageUrl:'static/localpic.png',
        imageUrl01:'',
        userpic:'',
        localpic:'',
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
                  this.formLabelAlign.name01 = response.data.data.realname
                  this.imageUrl01 = response.data.data.imgBuffer
                  console.log( this.imageUrl01)
                  if(this.formLabelAlign.sex===1){
                      this.formLabelAlign.sex='男'
                  }else{
                      this.formLabelAlign.sex='女'
                  }
                  if(this.formLabelAlign.age==null){
                      this.formLabelAlign.age = ''
                  }else{
                     this.formLabelAlign.age = this.formLabelAlign.age
                  }
                  if(this.imageUrl01){
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
      uploadmessage(){
        var regage = /^[0-9]\w{1,3}$/;
        var regsex=/^(男|女)$/
        if(!regsex.test(this.formLabelAlign.sex)){
                this.$message({
                    message: '性别必须是男或者女',
                    center: true
                });  
        }else if(!regage.test(this.formLabelAlign.age)){
                this.$message({
                    message: '年龄必须是数字',
                    center: true
                }); 
        }else{
                var picsource = this.$refs.file_el.files[0]
                let formData = new FormData();
                formData.append('userid',sessionStorage.userid);
                formData.append('state',1);
                formData.append('age',this.formLabelAlign.age);
                formData.append('sex',this.formLabelAlign.sex==='男'?1:2);
                formData.append('realname',this.formLabelAlign.name01);
                formData.append('files',picsource);
                let config = {
                    headers:{
                        'Content-Type':'application/x-jpg'
                    }
                }
                this.axios.post('/res/userinfo',formData,config)
                .then(function(response){
                    console.log(response)
                })
                .catch(function (error) {
                console.log(error);
                });
                this.$message({
                    message: '上传成功',
                    center: true
                });  
        }

      },
        choise_file () {
            // this.indexdemoid=19
            // this.urllarge='static/publish/'+this.indexdemoid+'l.png'
            var file_info = this.$refs.file_el.files[0]
            // 使用FileReader对象预览
            var fr = new FileReader()
            // 通过fr.readAsDataURL文件的内容进行读取
            fr.readAsDataURL(file_info)
            var that = this
            fr.onload = function () {
                // DataUrl data? :data:image/jpeg;base64,/9j/4
                that.imageUrl = this.result

            }   
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
  width: 360px;
  height: 43px;  
  background:#F5F5F5;
  border: none;
  padding-left: 10px;
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
.container33 .userpic{
  position: relative;
  height: 151px;
  width: 151px;
  left: -280px;
  top: 60px;
}
.container33 .userpic input{
  position: relative;
  left: 30px;
  top: 65px;
  z-index: 1000;
  width: 80px;
  opacity: 0;
}
.container33 .userpiv{
  position: relative;
  height: 151px;
  width: 151px;
  top: -90px;
  left: -280px;
  border-radius: 100px;
}
.container33 .userpiv img{
  width: 100%;
  height: 100%;
  border: 1px solid #BDBDBD;
  border-radius: 100px;
}
.container33 .two_text{
    position: relative;
    top: -80px;
    left: -320px;
    font-size: 28px;
    color: #91121B;
    font:bold;
    text-align: center;
    width: 229px;
    height: 29px;
}
.container33 .usercenter{
    position: absolute;
    left: 0px;
    top: 87px;
}
</style>
