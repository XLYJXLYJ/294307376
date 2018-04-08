<template>
<div class="container64">
    <div class="container63">
        <div class="source_header01">
            <ul class="sourceshop">
                <router-link to="/source/sourceshop"><li>素材商城</li></router-link> 
                <router-link to="/source/mysourceshop"><li>我的素材</li></router-link> 
            </ul>
            <input class="source_search" type="text" placeholder="搜索作品">
        </div>
        <router-view></router-view>
         <!-- <el-input class="search_input" placeholder="搜索作品">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input> -->
    </div>
</div>
</template>
<script>
    
</script>
<style scoped>
.container64{
    width: 100%;
    height: 100%;
    background: #90ddff;
}
.container63{
    width: 1000px;
    margin: 0 auto;
    height: auto;
    padding-top: 256px;
    background: #90ddff;
}
.source_header01{
    width: 1000px;
    height: 80px;
    background: #4aaaff;
}
.container63 .sourceshop{
    list-style: none;
    width: 320px;
    height: 45px;
    position: relative;
    top:15px;
    left: 50px;
}
.container63 .sourceshop li{
    float: left;
    width: 132px;
    height: 45px;
    font-size: 30px;
    position: relative;
    left: 0px;
    top: 0px;
}
.source_search{
    width: 173px;
    height: 40px;
    border-radius: 20px;
    padding-left: 15px;
    position:relative;
    left: 220px;
    top: -25px;
}
.container63 .router-link-active li{
     color: #fffbf2;
}
</style>
