<template>
  <div class="container42">
      <div>
          <img class="star" src="../../assets/user/starfish.png" alt="">
          <p class="store">我关注的人</p>
          <img class="left" src="../../assets/user/left.png" alt="">
          <ul class="follow">
                <li>
                    <div class="share">
                        <img src="../../assets/user/user.png" alt="">
                        <p>三只小熊</p>
                    </div>
                </li>
                <li>
                    <div class="share">
                        <img src="../../assets/user/user.png" alt="">
                        <p>三只小熊</p>
                    </div>
                </li>
          </ul>
          <img class="right" src="../../assets/user/right.png" alt="">
      </div>
  </div>
</template>
<style>
.container42{
    width:1000px;
    height: 184px;
    background: #fffbf2;
    position: absolute;
    top: 1251px;
    left: 460px; 
}
.container42 .store{
    width:111px;
    height: 263px;
    font-weight: 600;
    color: #91121b;
    position: absolute;
    top: 19px;
    left: 59px;   
}
.container42 .follow p{
    font-size: 14px;
    color: #999;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container42 ul{
    list-style: none;
    width: 1000px;
    position: absolute;
    top: 53px;
    left: 70px;
}
.container42 ul li{  
    float: left;
    margin-right: 22px;
    margin-bottom: 100px;
}
.container42 .star{
   position: absolute;
   left: -12px;
   top: -35px;
   width:75pox;
   height: 72px;
}
.container42 .left{
   position: absolute;
   left: 18px;
   top: 76px;
}
.container42 .right{
   position: absolute;
   left: 948px;
   top: 76px;
}
</style>