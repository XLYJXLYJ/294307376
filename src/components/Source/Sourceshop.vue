<template>
  <div class="container61">
     <ul class="tab_choice">
         <router-link to="/source/sourceshop/Gsource"><li><p>推荐素材</p></li></router-link>
         <router-link to="/source/sourceshop/Role"><li><p>角色</p></li></router-link>
         <router-link to="/source/sourceshop/Backg"><li><p>背景</p></li></router-link>
         <router-link to="/source/sourceshop/Voice"><li><p>声音</p></li></router-link>
         <router-link to="/source/sourceshop/Game"><li><p>主题游戏</p></li></router-link>
         <div class="mymoney"><p>金币:</p><span>500</span><i class="what"></i></div> 
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
    top: 19px;
    z-index: 100;
    left: 0px;
    width: 980px;
    padding-top: 30px;
    padding-left: 20px;
    height: 92px;
    background: #fffbf2;
}
.container61 .tab_choice li{
    float: left;
    width: 80px;
    height: 35px;
    background: #f1f9ff;
    border:1px solid #b6dbff;
    color: #6582cf;
    margin-right: 9px;
}
.container61 .tab_choice li p{
    line-height: 38px;
}
.container61 .mymoney{
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
}
/* .container61 .router-link-active{
    background: #fffbf2!important;
} */
.container61 .router-link-active li{
     color: red;
     background: #fffbf2;
     border-bottom: none;
}
</style>
