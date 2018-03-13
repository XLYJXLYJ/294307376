<template>
    <div>
        <div class="lesson_bg">

        </div>
        <div class="container17">
            <div class="starfish"><img src="../../assets/download/starfish.png" alt=""><p>下载</p></div>
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
 
</template>
<style scoped>
.lesson_bg{
    position: absolute;
    left: 0px;
    top: 60px;
    height: 822px;
    width: 100%;
    background: url(../../assets/Lesson/Lesson_bg.png) no-repeat;
    z-index: -1;
}
.container17{
    height: 350px;
    width: 1000px;
    position: absolute;
    left: 460px;
    top: 120px;
    background: #fffbf2;
    z-index: 1;  
    border-radius: 10px;
}
.container18{
    height: 200px;
    width: 884px;
    position: absolute;
    left: 50px;
    top: 80px;
    background: #f3efe6;
    z-index: 1;  
    border-radius: 4px;
}
.starfish img{
    position: absolute;
    left: -12px;
    top: -36px;
}
.starfish p{
    position: absolute;
    left: 65px;
    top: 4px;
    color: #91121b;
    font-size: 24px;
}
.logo_02{
    position: absolute;
    left: 26px;
    top: 30px;
    height: 150px;
    width: 150px;
}
.container18 .download_text{
    position: absolute;
    left: 220px;
    top: 29px;
    height: 24px;
    width: 210px;
    font-size: 24px;
}
.container18 .download_version{
    position: absolute;
    left: 220px;
    top: 66px;
    height: 15px;
    width: 275px;
    font-size: 14px;
    color: #666666;
}
.an_download{
    position: absolute;
    left: 220px;
    top: 128px;
    height: 40px;
    width: 147px;
}
.ios_download{
    position: absolute;
    left: 389px;
    top: 128px;
    height: 40px;
    width: 147px;
}
.qr{
    position: absolute;
    left: 715px;
    top: 25px;
    height: 148px;
    width: 133px;
}
.qr p{
    height: 14px;
    width: 133px;
    color: #0e0e0e;
    font-size: 13px;
    float: left;
}
.qr .what{
    position: relative;
    top: 5px;
}
</style>
