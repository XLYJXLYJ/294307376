<template>
    <div class="container33">  
        <div class="userpic">
            <input type="file" ref="file_el" @change="choise_file">    
        </div>
        <div class="userpiv" v-show="userpic"><img  :src="'data:image/png;base64,'+imageUrl01"></div>
        <div class="userpiv" v-show="localpic"><img  :src="imageUrl"></div> 
        <div  class="two_text"><p>{{$store.state.usernamesession02}}</p></div>
        <button :class='{"attenbutton01":true}' v-show="buttoncolor" @click.stop="Untieqq"><p>解绑QQ</p></button>
        <!-- <button :class='{"attenbutton01":buttoncolor,"attenbutton02":!buttoncolor}' id="qqLoginBtn" @click.prevent.stop="Untieqq"><p>{{ buttoncolor?'解绑QQ':'绑定QQ' }}</p></button> -->
         <button id="qqLoginBtn" :class='{"attenbuttonqq":true}' v-show="!buttoncolor" @click.stop="tieqq"></button>
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
                <input class="input01" v-model="formLabelAlign.realName">
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
        imageUrl:'static/images/localpic.png',//静态图片
        imageUrl01:'',//用户自选的图片
        userpic:'',//是否显示用户选择的图片
        localpic:'',//是否选择本地图片
        buttoncolor:'',//是否绑定QQ
        formLabelAlign: {//个人信息表单
          name: '',//姓名
          sex: '',//性别
          age: '',//年龄
          realName: '',//真实姓名
        },
        rules:{//验证规则
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
    updated:function(){
        QC.Login({
            btnId: "qqLoginBtn" //插入按钮的节点id
        })
    },
    methods:{
      loadmessage(){
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    getinfostate:1
            })
            .then(response => {
                  this.formLabelAlign.name = this.$store.state.usernamesession02
                  this.formLabelAlign.age = response.data.data.age,
                  this.formLabelAlign.sex = response.data.data.sex
                  this.formLabelAlign.realName = response.data.data.realname
                  this.imageUrl01 = response.data.data.imgBuffer
                  if(response.data.data.isband==1){
                    this.buttoncolor=true
                  }else{
                    this.buttoncolor=false
                  }
                  if(this.formLabelAlign.sex===1){
                      this.formLabelAlign.sex='男'
                  }else{
                      this.formLabelAlign.sex='女'
                  }
                  if(this.formLabelAlign.age=='null'){
                      this.formLabelAlign.age = ''
                  }else{
                     this.formLabelAlign.age = this.formLabelAlign.age
                  }
                  if(this.formLabelAlign.realName=='null'){
                      this.formLabelAlign.realName = ''
                  }else{
                     this.formLabelAlign.age = this.formLabelAlign.age
                  }
                  if(this.imageUrl01.length){
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
                formData.append('realname',this.formLabelAlign.realName);
                formData.append('files',picsource);
                let config = {
                    headers:{
                        'Content-Type':'application/x-jpg'
                    }
                }
                this.axios.post('/res/userinfo',formData,config)
                .then(function(response){
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
        Untieqq(){
            QC.Login.signOut()
            this.buttoncolor = false
            if(this.buttoncolor==false){
                this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    Untieqq:0
                })
                .then(response => {
                    that.msg = response.data.data
                        this.$message({
                        message: '解绑成功',
                        center: true
                    });  
                    location.reload() 
                })
                .catch(function (error) {
                    console.log(error);
                });
            }else{
 
            }
            this.axios.post('/res/userinfo',{
                userid:sessionStorage.userid,
                Untieqq:0
            })
            .then(response => {

            })
            .catch(function (error) {
                console.log(error);
            });
        },
        tieqq(){

                let that = this
                QC.Login({
                        btnId: "qqLoginBtn" //插入按钮的节点id
                    },function(oInfo, oOpts) {
                        let nickname=oInfo.nickname
                        sessionStorage.info= oInfo.nickname
                        QC.Login.getMe(function(openId, accessToken) {
                        sessionStorage.openid=openId;
                        sessionStorage.accessToken=accessToken;
                        that.axios.post('/res/thirdlogin', {
                            openid:openId,
                            accesstoken:accessToken, 
                            info:nickname,
                            type:1,
                            userid:sessionStorage.userid
                        })
                        .then(response => {
                            that.buttoncolor = true
                            that.msg = response.data.data
                                this.$message({
                                message: '绑定成功',
                                center: true
                            });  
                        })      
                    })
                }); 
        },
        choise_file () {
            this.imageUrl01 = ''
            this.userpic = false
            this.localpic = true
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
<style scoped lang="less">
@import '../../assets/index.less';
.container33{
  width: 500px;
  height: 416px;
  position: relative;
  top: 240px;
  left: 363px;
}
.container33 .input01{
  width: 360px;
  height: 43px;  
  background:@mainbg-color;
  border: none;
  padding-left: 10px;
}
.container33 .save{
  width: 370px;
  height: 43px;
  color: @background-color;
  margin-top: 20px;
  background: @main-color;
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
  top: -50px;
  left: -280px;
  border-radius: 100px;
}
.container33 .userpiv img{
  width: 100%;
  height: 100%;
  border: 3px solid @background-color;
  box-shadow:0px 6px 10px @shadow-color;
  border-radius: 100px;
}
.container33 .two_text{
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
.container33 .usercenter{
    position: absolute;
    left: 0px;
    top: 87px;
}
.container33 .attenbutton01{
    position: relative;
    left: -265px;
    top: 37px;
    height: 40px;
    width: 130px;
    background: #c51d4a;
    cursor: pointer;
    border: none;
}
.container33 .attenbutton02{
    position: relative;
    left: -265px;
    top: 37px;
    height: 40px;
    width: 130px;
    cursor: pointer;
}
.container33 .attenbuttonqq{
    position: relative;
    left: -238px;
    top: 37px;
    background: #fff;
    cursor: pointer;
    border: none;
}
</style>
