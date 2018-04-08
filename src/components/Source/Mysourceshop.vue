<template>
  <div class="container70">
     <ul class="tab_choice">
         <router-link to="/source/mysourceshop/MyRole"><li><p>角色</p></li></router-link>
         <router-link to="/source/mysourceshop/Mybg"><li><p>背景</p></li></router-link>
         <router-link to="/source/mysourceshop/Myvoice"><li><p>声音</p></li></router-link>
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
.container70{
    width: 100%;  
}
.container70 .tab_choice{
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
.container70 .tab_choice li{
    float: left;
    width: 80px;
    height: 35px;
    background: #f1f9ff;
    border:1px solid #b6dbff;
    color: #6582cf;
    margin-right: 9px;
}
.container70 .tab_choice li p{
    line-height: 38px;
}
/* .container61 .router-link-active{
    background: #fffbf2!important;
} */
.container70 .router-link-active li{
     color: red;
     background: #fffbf2;
     border-bottom: none;
}
</style>

