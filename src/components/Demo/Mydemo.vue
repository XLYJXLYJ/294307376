<template>
  <div class="container26">
        <router-link to="/All"><button>全部</button></router-link>
        <router-link to="/Readysend"><button>已发布</button></router-link>
        <router-link to="/Nosend"><button>未发布</button></router-link>
        <router-view></router-view>
  </div>
</template>
<style>
.container26{
    position: absolute;
    top: 308px;
    left: 488px;
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
}
</style>
