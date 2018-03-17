<template>
  <div class="container40">
      <div>
          <img class="star" src="../../assets/user/starfish.png" alt="">
          <p class="store">我分享的作品</p>
          <img class="left" src="../../assets/user/left.png" alt="">
          <ul class="block">
                <li>
                    <div class="share">
                        <img src="../../assets/user/userdemo.png" alt="">
                        <p>三只小熊</p>
                        <span>作者：哇哈哈</span>
                    </div>
                </li>
          </ul>
          <img class="right" src="../../assets/user/right.png" alt="">
      </div>
  </div>
</template>
<style>
.container40{
    width:1000px;
    height: 263px;
    background: #fffbf2;
    position: absolute;
    top: 645px;
    left: 460px;   
}
.container40 .store{
    width:111px;
    height: 263px;
    font-weight: 600;
    color: #91121b;
    position: absolute;
    top: 19px;
    left: 59px;   
}
.container40 .block p{
    font-size: 18px;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container40 .block span{
    font-size: 14px;
    color: #999;
 
    position: relative;
    top: 0px;
    left: -14px;   
}
.container40 ul{
    list-style: none;
    width: 1000px;
    position: absolute;
    top: 55px;
    left: 67px;
}
.container40 ul li{  
    float: left;
    margin-right: 22px;
}
.container40 .star{
   position: absolute;
   left: -12px;
   top: -35px;
}
.container40 .left{
   position: absolute;
   left: 18px;
   top: 118px;
}
.container40 .right{
   position: absolute;
   left: 948px;
   top: 118px;
}
</style>