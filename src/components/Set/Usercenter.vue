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
        <el-form-item label="QQ号">
          <el-input class="input01" v-model="formLabelAlign.qq"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input class="input01" v-model="formLabelAlign.tele"></el-input>
        </el-form-item>
        <el-button class="save">保存</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '胡歌',
          sex: '女',
          age: '18',
          name01: '李长长',
          qq: '000000',
          tele: '18818818892'
        }
      };
    }
  }
</script>
<style scoped>
.container33{
  width: 500px;
  height: 416px;
  position: absolute;
  top: 204px;
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
