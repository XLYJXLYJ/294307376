<template>
    <div>
        <div class="lesson_bg">
            <div class="container17">
                <div class="starfish"><img src="../../assets/download/starfish1.png" alt=""><p>下载</p></div>
                <div class="container18">
                    <img class="logo_02" src="../../assets/Lesson/logo_02.png" alt="">
                    <p class="download_text">手机APP端Phoneix</p>
                    <span class="download_version">随时随地在线学编程，快速成为编程小达人~</span>
                    <div>
                        <img class="an_download" src="../../assets/download/an_download.png" alt="">
                        <img class="ios_download" src="../../assets/download/ios_download.png" alt=""> 
                    </div>
                    <div class="qr"><img src="../../assets/download/qr_download.png" alt=""><p>ios/android扫码下载</p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.lesson_bg{
    position: relative;
    left: 0px;
    top: 114px;
    height: 635px;
    width: 100%;
    background: #F5F5F5;
    z-index: 1;
}
.container17{
    height: 420px;
    width: 1200px;
    margin: 0 auto;
    background: #fffbf2;
    position: relative;
    top: 100px;
    z-index: 10;  
    border-radius: 10px;
}
.container18{
    height: 240px;
    width: 1061px;
    position: relative;
    left: 60px;
    top: -40px;
    background: #f5f5f5;
    z-index: 10; 
}
.starfish img{
    position: relative;
    width: 90px;
    height: 86px;
    left: -20px;
    top: -34px;
}
.starfish p{
    position: relative;
    left:77px;
    top:-80px;
    color: #333333;
    font-size: 29px;
}
.logo_02{
    position: absolute;
    left: 36px;
    top: 30px;
    height: 180px;
    width: 180px;
}
.container18 .download_text{
    position: absolute;
    left: 264px;
    top: 29px;
    height: 24px;
    width: 352px;
    font-size: 29px;
    color: #333333;
}
.container18 .download_version{
    position: absolute;
    left: 264px;
    top: 79px;
    height: 15px;
    width: 340px;
    font-size: 16px;
    color: #666666;
}
.an_download{
    position: absolute;
    left: 264px;
    top: 154px;
    height: 48px;
    width: 176px;
    cursor: pointer;
}
.ios_download{
    position: absolute;
    left: 467px;
    top: 154px;
    height: 48px;
    width: 196px;
    cursor: pointer;
}
.qr{
    position: absolute;
    left: 864px;
    top: 30px;
    height: 148px;
    width: 144px;
}
.qr p{
    height: 14px;
    width: 154px;
    color: #0e0e0e;
    font-size: 15px;
    float: left;
}
</style>
