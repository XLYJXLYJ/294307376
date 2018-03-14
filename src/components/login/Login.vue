<template>
    <div>
        <div class="container19">
            <form action="">
                <img class="welcome" src="../../assets/login/welcome.png" alt="">
                <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                <input type="text" class="tele" placeholder="手机号码">
                 <input type="text" class="iden01" placeholder="验证码">
                <button class="iden02">获取验证码</button>
                <input type="text" class="setpass" placeholder="设置密码">
                <button class="register">注册</button>
                <p class="back_login">返回登陆</p>
            </form>
        </div>
        <div class="container20">
            <p class="three_login">第三方登陆</p>
            <div class="three_qq"> <img src="../../assets/login/qq.png" alt=""><p>QQ</p></div>
            <div class="three_wechat"><img src="../../assets/login/wechat.png" alt=""><P>微信</P></div>   
        </div>
    </div>
</template>
<style scoped>
.container19{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 407px;
    background: url(../../assets/login/login01_bg.png);
}
.container20{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 95px;
    background: #d87632;
}
.container19 .welcome{
    position: absolute;
    top: 100px;
    left: 500px;
}
.container19 .sign_logo{
    position: absolute;
    top: 100px;
    left: 700px;
}
.container19 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 150px;
    left: 500px;
    padding-left: 10px;
}
.container19 .iden01{
    position: absolute;
    height: 48px;
    width: 191px;
    top: 220px;
    left: 500px;
    padding-left: 10px;
}
.container19 .iden02{
    position: absolute;
    height: 52px;
    width: 111px;
    top: 220px;
    left: 700px;
    background: #68c5f5;
    color: #fff;
    font-size: 16px;
}
.container19 .setpass{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 290px;
    left: 500px;
    padding-left: 10px;
}
.container19 .register{
    position: absolute;
    height: 48px;
    width: 310px;
    top: 360px;
    left: 500px;
    background: #fed000;
    color: #fff;
    font-size: 18px;
}
.container19 .back_login{
    position: absolute;
    height: 16px;
    width: 67px;
    top: 420px;
    left: 620px;
    color: #0078d7;
    font-size: 16px;
}
.three_qq{
    position: absolute; 
    top: 500px;
    left: 420px;
}
.three_wechat{
    position: absolute; 
    top: 500px;
    left: 510px;
}
</style>
