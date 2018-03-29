<template>
  <div class="container26">
        <router-link to="/Demo/Mydemo/All"><button>全部</button></router-link>
        <router-link to="/Demo/Mydemo/Readysend"><button>已发布</button></router-link>
        <router-link to="/Demo/Mydemo/Nosend"><button>未发布</button></router-link>
        <router-view></router-view>
  </div>
</template>
<style scoped>
.container26{
    position: relative;
    top: -600px;
    left: -320px;
}
.container26 button{
    position: relative;
    width: 98px;
    height: 28px;
    background: #4C9EE6;
    color: #fff;
    font-size: 14px;
    margin:0px;
    padding: 0px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
}
</style>
