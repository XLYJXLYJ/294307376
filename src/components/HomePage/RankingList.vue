<template>
  <div class="container06">
      <div class="rank_list_top"><img src="../../assets/rank_list.png" alt=""><p>排行版</p></div>
      <div class="rank_up">
        <ul>
            <li>
                <span class="sort_num">1</span>
                <img src="../../assets/fight.png" alt="">
                <p>精灵战争</p>
                <span class="icon_see_box"><i class="icon_see"><span>32225</span></i></span>
                <span class="icon_see_love"><i class="icon_love"><span>6828</span></i></span>
            </li>
             <li>
                <span class="sort_num">2</span>
                <img src="../../assets/fight.png" alt="">
                <p>王者荣耀</p>
                <span class="icon_see_box"><i class="icon_see"><span>32222</span></i></span>
                <span class="icon_see_love"><i class="icon_love"><span>7428</span></i></span>
            </li>
             <li>
                <span class="sort_num">3</span>
                <img src="../../assets/fight.png" alt="">
                <p>吃鸡吃鸡</p>
                <span class="icon_see_box"><i class="icon_see" style="background: url(../../assets/icon_see.png) no-repeat;"><span>21225</span></i></span>
                <span class="icon_see_love"><i class="icon_love" style=" background: url(../../assets/icon_love.png) no-repeat;"><span>8229</span></i></span>
            </li>
        </ul>
      </div>
      <div class="rank_down">
          <ul>
              <li><span class="sort_num">4</span><p>猛龙过江</p></li>
              <li><span class="sort_num">5</span><p>QQ堂</p></li>
              <li><span class="sort_num">6</span><p>神奇女侠</p></li>
              <li><span class="sort_num">7</span><p>QQ飞车</p></li>
              <li><span class="sort_num">8</span><p>英雄联盟</p></li>
              <li><span class="sort_num">9</span><p>三国演义</p></li>
              <li><span class="sort_num">10</span><p>神雕侠侣</p></li>
          </ul>
      </div>
  </div>
</template>
<style scoped>
.container06{
    height: 800px;
    width: 270px;
    position: absolute;
    left: 1198px;
    top: 788px;
}
.rank_list_top{
    float: left;
    height: auto;
    width: 90px;
    position: absolute;
    top: 25px;
}
.rank_up p{
   font-size: 15px;
   text-align: left;
}
.rank_up img{
    margin-right: 12px;
}
.rank_list_top img{ 
    float: left;
    border-radius: 3px;
}
.rank_list_top p{ 
    font-size: 18px;
}
.icon_see{
    
    width: 15px;
    height: 14px;
    position: relative;
    left: 20px;
}
.icon_see span{
    position: relative;
    left: 6px;
    margin-left: 14px;
}
.icon_love{
   
    width: 15px;
    height: 14px;
    position: relative;
    left: 16px;
}
.icon_love span{
    position: relative;
    left: 6px;
    margin-left: 14px;
}
.icon_see_box{
    height: 12px;
    width: 65px;
    font-size: 15px;
    position: relative;
    left: -38px;
    top: 20px;
}
.icon_see_love{
    height: 12px;
    width: 65px;
    font-size: 15px;
    position: relative;
    left: -8px;
    top: 20px;
}
.sort_num{
    width: 20px;
    height: 20px;
    background: #5bc4ea;
    float: left;
    border-radius: 10px;
    line-height: 22px;
}
.rank_up ul{
   width: 100%;
   height: 210px;
   list-style: none;
   margin-top: 60px;
}
.rank_up img{
   width: 56px;
   height: 56px;
   float: left;
   margin-left: 36px;
}
.rank_up ul li{
   width: 100%;
   height: 56px;
   margin-top: 20px;
}
.rank_down{
    position: absolute;
    top: 300px;
    left: 0px;
    width: 100%;
    height: auto;
}
.rank_down ul{
    position: absolute;
    top: -25px;
    left: 0px;
    width: 100%;
    height: auto;
}
.rank_down ul li{
    margin-top: 24px;
    width: 100%;
    height: auto;
}
.rank_down p{
    text-align: left;
    margin-left: 37px;
    font-size: 15px;
}
</style>

