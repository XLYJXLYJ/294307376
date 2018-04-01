<template>
    <div class="container34">  
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="旧密码">
                  <el-input class="input01" v-model="formLabelAlign.oldpass"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                  <el-input class="input01" v-model="formLabelAlign.newpass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input class="input01" v-model="formLabelAlign.conpass"></el-input>
                </el-form-item>
                <el-button class="save">确认修改</el-button>
          </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          oldpass: '旧密码',
          newpass: '新密码',
          conpass: '确认密码'
        }
      };
    }
  }
</script>
<style scoped>
.container34{
  width: 500px;
  height: 416px;
  position: relative;
  top: -40px;
  left: 320px;
}
.container34 .input01{
  width: 308px;
  height: 36px;
  background-color: #f2efe6;
  margin-left: -80px;  
}
.container34 .save{
  width: 309px;
  height: 36px;
  color: #fff;
  margin-top: 20px;
  background: #f9b242;
}
</style>
