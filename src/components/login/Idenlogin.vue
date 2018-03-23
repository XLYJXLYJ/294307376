<template>
    <div>
        <div class="container21">
            <form action="">
                <img class="welcome" src="../../assets/login/welcome.png" alt="">
                <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                <input type="text" class="tele" placeholder="请输入手机号码/账号">
                 <input type="text" class="iden01" placeholder="请输入密码">
                <p class="ap_text">忘记密码</p>
                <button class="register">登陆</button>
                <div class="free_res"><p>没有账号?</p><span>免费注册</span></div>    
            </form> 
        </div>
        <div class="container22">
            <p class="three_login">第三方登陆</p>
            <div class="three_qq"> <img src="../../assets/login/qq.png" alt=""><p>QQ</p></div>
            <div class="three_wechat"><img src="../../assets/login/wechat.png" alt=""><P>微信</P></div>   
        </div> 
    </div>   
</template>
<script>
import Register from '@/components/Login/Register'
    export default{
    data() {
      return {
        dialogRegister02: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    components:{
        Register
    }
    }
</script>
<style scoped>
.container21{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 407px;
    background: url(../../assets/login/login01_bg.png) no-repeat;
}
.container22{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 95px;
    background: #d87632;
}
.container21 .welcome{
    position: absolute;
    top: 85px;
    left: 316px;
}
.container21 .sign_logo{
    position: absolute;
    top: 85px;
    left: 520px;
}
.container21 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 130px;
    left: 316px;
    padding-left: 10px;
}
.container21 .iden01{
    position: absolute;
    height: 48px;
    width: 191px;
    top: 195px;
    left: 316px;
    padding-left: 10px;
}
.container21 .ap_text{
    position: absolute;
    height: 14px;
    width: 95px;
    top: 255px;
    left: 314px;
    color: #3399CC;
    font-size: 14px;
    cursor: pointer;
}
.container21 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 284px;
    left: 316px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.container21 .free_res p{
    position: absolute;
    top: 345px;
    left: 400px;
    font-size: 16px;
     color: #000;
}
.container21 .free_res span{
    position: absolute;
    top: 345px;
    left: 480px;
    color: #0078d7;
    font-size: 16px;
    cursor: pointer;
}
.container22 .three_login{
    position: absolute; 
    top: 413px;
    left: 312px;
    font-size: 16px;
    color: #fff;
}
.container22 .three_qq{
    position: absolute; 
    top: 440px;
    left: 277px;
    cursor: pointer;
}
.container22 .three_wechat{
    position: absolute; 
    top: 440px;
    left: 390px;
    cursor: pointer;
}
.container22 .three_qq p{
    line-height: 10px;
}
.container22 .three_wechat p{
    line-height: 10px;
}


</style>
