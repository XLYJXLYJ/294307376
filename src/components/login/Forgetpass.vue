<template>
    <div>
        <div class="container46">
            <form action="">
                <img class="welcome" src="../../assets/login/welcome.png" alt="">
                <img class="sign_logo" src="../../assets/login/login_logo.png" alt="">
                <input type="text" class="tele" placeholder="手机号码">
                <input type="text" class="iden01" placeholder="验证码">
                <button class="iden02">获取验证码</button>
                <button class="register">重置密码</button>
                <p class="back_login">如果你没有绑定过邮箱，请点击返回登陆</p>
            </form>
        </div>
        <div class="container47">
            <p class="three_login">第三方登陆</p>
            <div class="three_qq"> <img src="../../assets/login/qq.png" alt=""><p>QQ</p></div>
            <div class="three_wechat"><img src="../../assets/login/wechat.png" alt=""><P>微信</P></div>   
        </div>
    </div>
</template>
<style scoped>
.container46{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 407px;
    background: url(../../assets/login/login01_bg.png) no-repeat;
}
.container47{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 95px;
    background: #d87632;
}
.container46 .welcome{
    position: absolute;
    top: 45px;
    left: 316px;
}
.container46 .sign_logo{
    position: absolute;
    top: 45px;
    left: 520px;
}
.container46 .tele{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 90px;
    left: 316px;
    padding-left: 10px;
}
.container46 .iden01{
    position: absolute;
    height: 48px;
    width: 191px;
    top: 155px;
    left: 316px;
    padding-left: 10px;
}
.container46 .iden02{
    position: absolute;
    height: 52px;
    width: 111px;
    top: 155px;
    left: 516px;
    background: #68c5f5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.container46 .setpass{
    position: absolute;
    height: 48px;
    width: 297px;
    top: 220px;
    left: 316px;
    padding-left: 10px;
}
.container46 .register{
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
.container46 .back_login{
    position: absolute;
    height: 16px;
    width: 67px;
    top: 345px;
    left: 440px;
    color: #0078d7;
    font-size: 16px;
    cursor: pointer;
}
.container47 .three_login{
    position: absolute; 
    top: 413px;
    left: 312px;
    font-size: 16px;
    color: #fff;
}
.container47 .three_qq{
    position: absolute; 
    top: 440px;
    left: 287px;
    cursor: pointer;
}
.container47 .three_wechat{
    position: absolute; 
    top: 440px;
    left: 385px;
    cursor: pointer;
}
.container47 .three_qq p{
    line-height: 10px;
}
.container47 .three_wechat p{
    line-height: 10px;
}
</style>

