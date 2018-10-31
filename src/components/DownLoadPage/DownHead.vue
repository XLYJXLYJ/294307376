<template>
    <div>
        <div class="lesson_bg">
            <div class="container17">
                <div class="starfish"><p>下载</p></div>
                <div class="container18">
                    <img class="logo_02" src="../../assets/Lesson/logo_02.png" alt="">
                    <p class="download_text">手机APP端Phoneix</p>
                    <span class="download_version">随时随地在线学编程，快速成为编程小达人~</span>
                    <div>
                        <button class="an_download">Android下载</button>
                        <button class="ios_download">App Store下载</button>
                        <button class="snapdownload">SNAP下载</button>
                    </div>
                    <div class="qr"><img src="../../assets/download/qr_download.png" alt=""><p>ios/android扫码下载</p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@import '../../assets/index.less';
.lesson_bg{
    position: relative;
    left: 0px;
    top: 114px;
    height: 635px;
    width: 100%;
    background: @mainbg-color;
    z-index: 1;
}
.container17{
    height: 520px;
    width: 1200px;
    margin: 0 auto;
    background: @background-color;
    position: relative;
    top: 100px;
    z-index: 10;  
}
.container18{
    height: 340px;
    width: 1061px;
    position: relative;
    left: 60px;
    top: 67px;
    background: @mainbg-color;
    z-index: 10; 
}
.container17 .starfish p{
    position: relative;
    left:60px;
    top:29px;
    color: @gray;
    font-size: 29px;
}
.logo_02{
    position: absolute;
    left: 36px;
    top: 80px;
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
    color: @gray;
}
.container18 .download_version{
    position: absolute;
    left: 264px;
    top: 79px;
    height: 15px;
    width: 340px;
    font-size:@xm-size;
    color: @cancel-color;
}
.an_download{
    position: absolute;
    left: 264px;
    top: 154px;
    height: 48px;
    width: 176px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    background:@main-color;
    border: none;
    border-radius: 40px;
}
.ios_download{
    position: absolute;
    left: 467px;
    top: 154px;
    height: 48px;
    width: 196px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    background:@main-color;
    border: none;
    border-radius: 40px;

}
.snapdownload{
    position: absolute;
    left: 264px;
    top: 254px;
    height: 48px;
    width: 176px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    background:@main-color;
    border: none;
    border-radius: 40px;
}
.qr{
    position: absolute;
    left: 864px;
    top: 80px;
    height: 148px;
    width: 144px;
}
.qr p{
    height: 14px;
    width: 154px;
    color: @qr-color;
    font-size: 15px;
    float: left;
}
</style>
