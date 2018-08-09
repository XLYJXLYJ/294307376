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
            <!-- <div class="qr"><img src="../../assets/Lesson/download.png" alt=""><p>扫码购买课程</p><div><img class="what" src="../../assets/Lesson/what.png" alt=""></div></div> -->
            <div class="cut_off"></div>
            <p class="Lesson_01">你暂时还没有要上的课程</p>
        </div>
    </div>
</template>
<style scoped lang="less">
@import '../../assets/index.less';
.lesson_bg{
    position: absolute;
    left: 0px;
    top: 0px;
    height: 1752px;
    width: 100%;
    background: @mainbg-color;
    z-index: -1;
}
.container10{
    height: 306px;
    width: 1200px;
    margin: 0 auto;
    background: @background-color;
    z-index: 1;  
    margin-top: 138px;
}
.logo_02{
    position: relative;
    left: 77px;
    top: 55px;
    height: 103px;
    width: 103px;
}
.download_text{
    position: relative;
    left: 244px;
    top: -50px;
    height: 21px;
    width: 392px;
    font-size: 24px;
}
.download_version{
    position: relative;
    left: 240px;
    top: -37px;
    height: 15px;
    width: 266px;
    font-size:@xm-size;
    color: @lesson-color;
}
.WindowsDownload{
    position: relative;
    left: 240px;
    top: -25px;
    height: 38px;
    width: 144px;
}
.trouble_text_01{
    position: relative;
    left: 411px;
    top: -56px;
    height: 17px;
    width: 169px;
    color: @main-color;
    font-size:@xm-size;
}
.trouble_text_01 a{
    color: @main-color;
}
.trouble_text_02{
    position: relative;
    left: 589px;
    top: -71px;
    height: 15px;
    width: 105px;
    color: @lesson-color;
    font-size:@xm-size;
}
.trouble_text_02 a{
    color: @lesson-color;
}
/* .qr{
    position: relative;
    left: 1000px;
    top: -182px;
    height: 106px;
    width: 126px;
    color: @lesson-color;
    font-size:@sm-size;
}
.qr p{
    color: #595959;
    font-size:@md-size;
    float: left;
}
.qr .what{
    position: relative;
    top: 5px;
} */
.cut_off{
    position: relative;
    left: 0px;
    top: -20px;
    height: 2px;
    width: 1200px;
    background: #f1f1f1;
}
.Lesson_01{
    position: relative;
    left: 60px;
    top: 15px;
    height: 21px;
    width: 367px;
    font-size:@lg-size;
    color: @black;
}
</style>
