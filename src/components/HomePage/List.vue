<template>
  <div class="container05">
      <Search/>
      <ul>
          <li><router-link class="recommend" to="/Home/Production">推荐</router-link></li>
          <li><router-link class="production" to="/Home/recommend">作品</router-link></li>
      </ul>
      <router-view></router-view>
      <RankingList/>
  </div>
</template>
<script>
    import RankingList from '@/components/HomePage/RankingList'
    import Search from '@/components/HomePage/Search'
    export default{
        components:{
        RankingList,
        Search
        }
    }
  
</script>
<style scoped>
.container05{
    height: 1599px;
    width: 1000px;
    margin: 0 auto;
    margin-top: 152px;
    position: relative;
}
.container05 ul{
    list-style: none;
}
.container05 ul li{
    display: inline;
    position: relative;
    top: 5px;
    left: -360px;  
    font-size: 18px;
    margin-right: 44px;
}
.container05 .recommend{
    color:#5f5f5f;
    text-decoration: none;
}
.container05 .production{
    color:#5f5f5f;
    text-decoration: none;
}
.container05 .router-link-active{
    text-decoration: none;
    border-bottom: 4px solid #fff;  
    position: relative;
}
.container05 .router-link-active:before {
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
