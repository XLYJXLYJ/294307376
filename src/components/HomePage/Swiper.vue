<template>
    <div class="contain08">
        <div class="container09">
            <el-carousel :interval="3000" type="card" height="300px" width="580px">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="create">
            <div>
                <a href="www.manykit.com/snap" target="_blank"><div class="creat_stories"><p class="creat_stories_one">创作</p><p class="creat_stories_two">creat_stories</p></div></a>
                <a href="www.manykit.com/blockly" target="_blank"><div class="box_games"><p class="box_games_one">代码</p><p class="box_games_two">BOX Games</p></div></a>
                
                
            </div>
            <img class='bg_01' src="../../assets/bg_01.png" alt="">
            <div class="edit">
                <img class="expe_img" src="../../assets/experiment.png" alt="">
                <ul>
                    <li><img src="../../assets/edit_wood.png" class='wood_img'  alt=""> <p class="big">Wood编辑器</p> <p class="small">强大的Python在线编辑器，一键云端运行，让编程更简单！</p></li>
                    <li><img src="../../assets/edit_mod.png" class='mod_img' alt=""><p class="big">编程玩Mod编辑器</p><p class="small">动动手指，直达《我的世界》，让编程玩入住多玩盒子，打架能在手机上编程做mod啦</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    const DataImg =[
        {url: '../../assets/img1.png'},
        {url: '../../assets/img2.png'},
        {url: '../../assets/img3.png'}   
    ]
export default{
    data(){
        return{
            DataImg:DataImg,
            index: 0
        }
    }
}
</script>
<style scoped>
.contain08{
    width: 100%;
    height: 553px;
    background-image: url(../../assets/bg.png);
    background-repeat: no-repeat;
    background-size:1920px 553px;
}
  .container09{
    height: 300px;
    width: 1000px; 
    position: absolute;
    left: 24.6%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    margin-top: 25px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    margin-top: 25px;
  }
  .el-carousel__item{
      border-radius: 20px;
  }
  .create{
      height: 300px;
      width: 1000px;
      background: #fff;
      position: absolute;
      top: 410px;
      left: 24.6%;
      border-radius: 12px;
  }
  .creat_stories{
      height: 216px;
      width: 223px;
      background-color: #ffca32;
      display: inline-block;
      position: absolute;
      left: 24px;
      top:16px;
  }
  .box_games{
      height: 216px;
      width: 223px;
      background-color: #ffca32;
      display: inline-block;
      position: absolute;
      left: 277px;
      top:16px;
  }
  .create .creat_stories_one{
      position: absolute;
      top:230px;
      left: 100px;
      font-size: 22px;
  }
  .create .creat_stories_two{
      position: absolute;
      top:265px;
      left: 75px;
  }
 .box_games_one{
      position: absolute;
      top:230px;
      left: 80px;
      font-size: 22px;
 }
   .box_games_two{
      position: absolute;
      top:265px;
      left: 60px;
  }
  .expe_img{
      height: 17px;
      width: 175px;
      position: absolute;
      top:-50px;
      left: 76px;;
  }
  .bg_01{
      position: relative;
      left: 45px;
  }
  .edit{
      position: absolute;
      top:67px;
      left: 604px;
  }
  .edit ul{
      list-style: none;
      position: absolute;
      top: -25px;
      left: 0px;
  }
   .edit ul li{
       height: 72px;
       margin-top: 33px;
       height: 72px;
       width: 355px;
  }
  .edit img{
      float: left;
      margin-right: 15px;
  }
  
   .edit .big{
      font-size: 18px;
      text-align: left;
      margin-bottom: 13px;
  }
  .edit .small{
      font-size: 14px;
      text-align: left;
  }
</style>