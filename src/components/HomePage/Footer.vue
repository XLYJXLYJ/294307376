<template>
    <div class="container003">
      <div class="container03">
         <div class="imgfoot"><img src="../../assets/home/qr_code.png" alt=""></div>
         <div class="foot_list_one">
          <ul>
            <!-- <li class="big">联系我们</li> -->
            <li class="small">商务合作与课程咨询：133 8230 4658</li>
            <li class="small">微信号：Manykits</li>
            <!-- <li class="small">QQ群：398680146</li> -->
          </ul>
        </div>
          <!-- <div class="foot_list_two">
          <ul>
            <li class="big">合作方式</li>
            <li class="small">商务/投资：133 8230 4658</li>
          </ul>
        </div>
         <div class="foot_list_three">
          <ul>
            <li class="big">链接</li>
            <li class="small">新闻中心</li>
            <li class="small">加入我们</li>
            <li class="small">关于我们</li>
          </ul>
        </div>
            <div class="foot_list_four">
          <ul>
            <li class="big">设备检测</li>
            <li class="small">电脑设备检测</li>
          </ul>
        </div> -->
          <div class="foot_list_five">
          <ul>
            <li class="small1">许多米创造社区@2018</li>
            <li class="small">深圳许多米科技有限公司/粤ICP备17130138号-1</li>    
          </ul>
        </div>
        <!-- <img class="music" @click="playClick" src="../../assets/home/music.gif" alt="">
          <audio autoplay="autoplay" id="music">   
              <source src="horse.ogg" type="audio/ogg">
              <source src="static/storms.mp3" type="audio/mpeg">
          </audio> -->
        <img class="gov_icon" src="../../assets/home/govIcon.png" alt=""> 
      </div>
    </div>
</template>

<style scoped lang="less">
@import '../../assets/index.less';
.container003{
  width: 100%!important;
  min-width: 1300px;
  height: 164px;
  position: relative;
  background-color: @foot-color;
}
.container003 .container03{
  width: 1200px;
  margin: 0 auto;
  position:relative;
  height: 164px;
  background-color: @foot-color;
}
.container003 .container03 .imgfoot{
  position:absolute;
  top:39px;
  left: 0px;
  width: 87px;
  height: 86px;
}
.container003 .container03 .imgfoot img{
  width: 100%;
  height: 100%;
}
.container003 .container03 .foot_list_one{
  position: relative;
  left: 113px;
  width: 283px;
  top: 69px;
}
.container003 .container03 .foot_list_two{
  position: absolute;
  left: 498px;
  top: 42px;
}
.container003 .container03 .foot_list_three{
  position: relative;
  width: 152px;
  height: 120px;
  left: 764px;
  top: -84px;
}
.container003 .container03 .foot_list_four{
  position: absolute;
  left: 899px;
  top: 43px;
}
.container003 .container03 .big{
  font-size:@md-size;
  color:@background-color;
  margin-bottom: 20px;
  text-align: left;
  font-family: “Microsoft YaHei” !important; 
}
.container003 .container03 .small{
  font-size:@sm-size;
  color: #949494;
  margin-top: 20px;
  text-align: left;
}
.container003 .container03 .spacial{
  margin-top: 20px;
}
.container003 .container03 .foot_list_five{
  position: absolute;
  left: 523px;
  top: 68px;
}
.container003 .container03 .small1{
  font-size: 13px;
  color: #7c7c7c;
  position: relative;
  left: 0px;
  top:10px;
  text-align: center;
}
.container003 .container03 .foot_list_five .small{
  position: relative;
  left: 0px;
  top: 4px;
}
.container003 .container03 .beizhu{
  position: absolute;
  
}
.container003 .container03 .gov_icon{
   position: absolute;
   left: 450px;
   top:61px;
}
/* .container003 .container03 .music{
   position: absolute;
   left: 790px;
   top:254px;
   border: 2px ridge @gray;
   box-shadow:0px 2px 2px @gray; 
} */
</style>
