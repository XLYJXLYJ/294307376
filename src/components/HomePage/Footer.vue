<template>
    <div class="container003">
      <div class="container03">
         <!-- <div class="imgfoot"><img src="../../assets/home/qr_code.png" alt=""></div> -->
         <div class="foot_list_one">
          <ul>
            <li class="small">关于我们</li>   
            <li class="small">我们的老师</li>  
            <li class="small">报名课程</li>  
            <li class="small">相关问题</li>  
            <li class="small">许多米科技</li> 
          </ul>
        </div>
          <img class="imgfoot01" src="../../assets/home/qr_code01.jpg" alt="">
          <img class="imgfoot02" src="../../assets/home/qr_code02.jpg" alt="">
      </div>
    </div>
</template>

<style scoped lang="less">
@import '../../assets/index.less';
.container003{
  width: 100%!important;
  min-width: 1200px;
  height: 101px;
  position: relative;
}
.container003 .container03{
  width: 1200px;
  margin: 0 auto;
  position:relative;
  height: 101px;
  background-color: @foot-color;
}
.container003 .container03 .imgfoot{
  position:absolute;
  top:14px;
  right: 50px;
  width: 60px;
  height: 60px;
}
.container003 .container03 .foot_list_one ul{
  position:absolute;
  top: 42px;
  left: 37px;
  width: auto;
  height: 16px;
}
.container003 .container03 .foot_list_one ul li{
  position:relative;
  top: 0px;
  left: 0px;
  float: left;
  margin-right: 50px;
  color: #fff;
  font-size: 15px;
  font-family: 'SimHei';
}
.container003 .container03 .imgfoot01{
  position:absolute;
  top: 7px;
  left: 977px;
  width: 86px;
  height: 86px;
}
.container003 .container03 .imgfoot02{
  position:absolute;
  top: 7px;
  left: 1084px;
  width: 86px;
  height: 86px;
}
</style>
