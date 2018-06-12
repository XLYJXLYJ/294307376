<template>
  <div class="container05">
      <Search/>
      <ul>
          <li><router-link class="recommend" to="/Home/Recommend">推荐</router-link></li>
          <li><router-link class="production" to="/Home/Production">作品</router-link></li>
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
<style scoped lang="less">
@import '../../assets/index.less';
.container05{
    height: 1486px;
    width: 1200px;
    margin: 0 auto;
    margin-top: 106px;
    position: relative;
}
.container05 ul{
    list-style: none;
}
.container05 ul li{
    display: inline;
    position: relative;
    top: 5px;
    left: 0px;  
    font-size:@md-size;
    margin-right: 44px;
}
.container05 .recommend{
    font-size: 22px;
    color:@black;
    text-decoration: none;
}
.container05 .production{
    font-size: 22px;
    color:@black;
    text-decoration: none;
}
.container05 .router-link-active{
    text-decoration: none;
    border-bottom: 4px solid @background-color;  
    position: relative;
    color: @main-color;
}
.container05 .router-link-active:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 32px;
    bottom: 0;
    right: 0px;
    height: 4px;
    width: 24px;
    background-color: @main-color;
    border-radius: 2px;
}
</style>
