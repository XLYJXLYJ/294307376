
<template>
    <div class="container70">
        <ul class="tab_choice">
            <router-link to="/source/mysourceshop/MyRole"><li><p>素材</p></li></router-link>
            <router-link to="/source/mysourceshop/Mybg"><li><p>场景</p></li></router-link>
            <router-link to="/source/mysourceshop/Mystudy"><li><p>学习</p></li></router-link>
            <router-link to="/source/mysourceshop/Mygame"><li><p>游戏</p></li></router-link>
            <router-link to="/source/mysourceshop/Mymusic"><li><p>音乐</p></li></router-link>
            <!-- <router-link to="/source/mysourceshop/Mysourcelesson"><li><p>课程</p></li></router-link> -->
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
<style scoped lang="less">
@import '../../assets/index.less';
.container70{
    width: 100%;  
}
.container70 .tab_choice{
    list-style: none;
    position: relative;
    top: -56px;
    z-index: 100;
    left: 0px;
    width: 1170px;
    padding-top: 35px;
    padding-left: 30px;
    height: 92px;
    background: @background-color;
}
.container70 .tab_choice li{
    float: left;
    width: 98px;
    height: 42px;
    background: #FFE0E0;
    border:1px solid @main-color;
    color: @main-color;
    margin-right: 10px;
    text-align: center;
}
.container70 .tab_choice li p{
    font-size:@xm-size;
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
.container70 .router-link-active li{
    background: @background-color;
    border-bottom: 1px solid @background-color;
    position: relative;
    z-index: 1000;
}
.container70 .line{
    width: 1140px;
    height: 1px;
    background-color: @main-color;
    position: relative;
    top: 43px;
    left: 0px;
} 
</style>
