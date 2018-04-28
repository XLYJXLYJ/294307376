<template>
    <div class="container61">
        <ul class="tab_choice">
            <router-link to="/source/sourceshop/Gsource"><li><p>推荐素材</p></li></router-link>
            <router-link to="/source/sourceshop/Source01"><li><p>素材</p></li></router-link>
            <router-link to="/source/sourceshop/Backg"><li><p>场景</p></li></router-link>
            <router-link to="/source/sourceshop/Study"><li><p>学习</p></li></router-link>
            <router-link to="/source/sourceshop/Game"><li><p>游戏</p></li></router-link>
            <router-link to="/source/sourceshop/Music"><li><p>音乐</p></li></router-link>
            <router-link to="/source/sourceshop/Sourcelesson"><li><p>课程</p></li></router-link>
            <!-- <div class="mymoney"><p>金币:</p><span>500</span><i class="what"></i></div>  -->
            <div class="line"></div>       
        </ul>  
        <router-view></router-view>
    </div>
</template>
<script>

export default{
    components:{
        
    }
}
</script>
<style scoped>
.container61{
    width: 100%;  
}
.container61 .tab_choice{
    list-style: none;
    position: relative;
    top: -70px;
    z-index: 100;
    left: 0px;
    width: 1170px;
    padding-top: 35px;
    padding-left: 30px;
    height: 92px;
    background: #fff;
}
.container61 .tab_choice li{
    float: left;
    width: 98px;
    height: 42px;
    background: #FFE0E0;
    border:1px solid #F13232;
    color: #F13232;
    margin-right: 10px;
    text-align: center;
}
.container61 .tab_choice li p{
    font-size: 16px;
    position: relative;
    top: 12px;
    font-weight: 600;
}
/* .container61 .mymoney{
    width: 159px;
    height: 24px;
    position: relative;
    left: 794px;
}
.container61 .mymoney p{
   display: inline;
}
.container61 .mymoney span{
    background: url(../../assets/source/money.png) no-repeat;
    width: 97px;
    height: 22px;
    padding-left: 24px;
}
.container61 .what{
    background: url(../../assets/source/what.png) no-repeat; 
    width: 20px;
    height: 20px;
    z-index: 100;
} */
.container61 .router-link-active li{
    background: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    z-index: 1000;
}
.container61 .line{
    width: 1140px;
    height: 1px;
    background-color: #F13232;
    position: relative;
    top: 43px;
    left: 0px;
} 
</style>
