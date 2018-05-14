<template>
    <div class="container16">
        <div class="container016">
            <div class="logo04_p"><p>Snap课程</p></div>
            <div class="cut_off"></div>
            <div class="container_up02">
                <img class="video" src="../../assets/Lesson/video.png" alt="">
                <p class="snap">01 Snap课程</p>
                <span class="snap_detail">阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木阿Snap课程飞第三方的萨达是的撒打萨达的萨吉继木</span>
            </div>
            <div class="block">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@import '../../assets/index.less';
 .container16{
     width: 1200px;
     height: 651px;
     z-index: 100;
     background: @background-color;
     margin: 0 auto;
     z-index: -1;
     margin-top: 26px;
 }
.container016{
     position: relative;
 }
 .container16 .logo04_p p{
     position: absolute;
     width: 102px;
     height: 24px;
     left: 60px;
     top: 26px;
     font-size:@llg-size;
 }
 .container16 .cut_off{
    position: absolute;
    left: 0px;
    top: 64px;
    height: 4px;
    z-index: 100;
    width: 1200px;
    background: @cut-color;
}
 .container16 .container_up02{
    position: absolute;
    left: 0px;
    top: 68px;
    height:574px;
    z-index: 100;
    width: 1200px;
    background: @background-color;
}
 .container16 .video{
    position: absolute;
    left: 63px;
    top: 83px;
    height: 373px;
    z-index: 100;
    width: 568px;
}
 .container16 .snap{
    position: absolute;
    left: 700px;
    top: 83px;
    height: 25px;
    z-index: 100;
    width: 131px;
    font-size:@llg-size;
    color: @black;
}
 .container16 .snap_detail{
    position: absolute;
    left: 697px;
    top: 128px;
    height: 49px;
    z-index: 100;
    width: 433px;
    font-size:@md-size;
    color: @container0203-color;
    text-align:left;
    text-indent:2em;
}
 .container16 .block ul{
    position: absolute;
    left: 698px;
    top: 304px;
    height: 185px;
    z-index: 100;
    width: 452px;
    font-size: 0px;
    text-align:left;
}
 .container16 .block li{
    position: relative;
    left: 0px; 
    height: 71px;
    z-index: 100;
    width: 68px;
    border: 1px solid red;
    display: inline-block;
}
</style>
