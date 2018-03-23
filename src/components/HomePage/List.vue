<template>
  <div class="container05">
      <ul>
          <li><router-link class="recommend" to="/Home/Production">推荐</router-link></li>
          <li><router-link class="production" to="/Home/recommend">作品</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>
<style scoped>
.container05{
    height: auto;
    width: 1000px;
    position: absolute;
    top: 745px; 
    left: 24.6%; 
}
ul{
    list-style: none;
    position: absolute;
    top: 15px;
    left: 386px; 
 
}
ul li{
    display: inline;
    position: relative;
    top: 5px;
    left: -360px;  
    font-size: 18px;
    margin-right: 44px;
}
.recommend{
    color:#5f5f5f;
    text-decoration: none;
}
.production{
    color:#5f5f5f;
    text-decoration: none;
}
.router-link-active{
    text-decoration: none;
    border-bottom: 4px solid #fff;  
    position: relative;
}
.router-link-active:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 29px;
    bottom: 0;
    right: 0px;
    height: 4px;
    width: 20px;
    background-color: #0078d7;
    border-radius: 2px;
}
</style>
