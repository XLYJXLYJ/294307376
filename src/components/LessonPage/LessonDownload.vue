<template>
    <div>
        <div class="lesson_bg">
        </div>
        <div class="container10">
            <img class="logo_02" src="../../assets/Lesson/logo_02.png" alt="">
            <p class="download_text">下载电脑客户端，上课、创作更方便</p>
            <span class="download_version">最新版本：v1.3.1 31.4M 2018.03.05</span>
            <div>
                <img class="WindowsDownload" src="../../assets/Lesson/WindowsDownload.png" alt="">
                <p class="trouble_text_01"><a href="">如何咋电脑客户端上课?</a></p>
                <span class="trouble_text_02"><a href="">安装遇到问题?</a></span>
            </div>
            <div class="qr"><img src="../../assets/Lesson/download.png" alt=""><p>扫码购买课程</p><div><img class="what" src="../../assets/Lesson/what.png" alt=""></div></div>
            <div class="cut_off"></div>
            <p class="Lesson_01">你暂时还没有要上的课程</p>
        </div>
    </div>
</template>
<style scoped>
.lesson_bg{
    position: absolute;
    left: 0px;
    top: 60px;
    height: 1434px;
    width: 100%;
    background: url(../../assets/Lesson/Lesson_bg.png) no-repeat;
    z-index: -1;
}
.container10{
    height: 255px;
    width: 1000px;
    position: absolute;
    left: 460px;
    top: 81px;
    background: #fff;
    z-index: 1;  
    border-radius: 10px;
}
.logo_02{
    position: absolute;
    left: 64px;
    top: 46px;
    height: 86px;
    width: 86px;
}
.download_text{
    position: absolute;
    left: 203px;
    top: 46px;
    height: 21px;
    width: 327px;
    font-size: 20px;
}
.download_version{
    position: absolute;
    left: 260px;
    top: 81px;
    height: 15px;
    width: 233px;
    font-size: 14px;
    color: #c5c5d3;
}
.WindowsDownload{
    position: absolute;
    left: 260px;
    top: 109px;
    height: 32px;
    width: 120px;
}
.trouble_text_01{
    position: absolute;
    left: 403px;
    top: 119px;
    height: 15px;
    width: 150px;
    color: #71cef8;
    font-size: 14px;
}
.trouble_text_01 a{
    color: #71cef8;
}
.trouble_text_02{
    position: absolute;
    left: 557px;
    top: 119px;
    height: 15px;
    width: 97px;
    color: #c5c5d3;
    font-size: 14px;
}
.trouble_text_02 a{
    color: #c5c5d3;
}
.qr{
    position: absolute;
    left: 821px;
    top: 32px;
    height: 113px;
    width: 112px;
    color: #c5c5d3;
    font-size: 14px;
}
.qr p{
    color: #595959;
    font-size: 16px;
    float: left;
}
.qr .what{
    position: relative;
    top: 5px;
}
.cut_off{
    position: absolute;
    left: 0px;
    top: 175px;
    height: 2px;
    width: 1000px;
    background: #f1f1f1;
}
.Lesson_01{
    position: absolute;
    left: 100px;
    top: 205px;
    height: 16px;
    width: 182px;
    color: #000;
}
</style>
