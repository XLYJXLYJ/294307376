<template>
<div class="container64">
    <div class="container63">
        <div class="backsource"></div>
        <div class="source_header01">
            <ul class="sourceshop">
                <router-link to="/source/sourceshop"><li><img src="../../assets/source/source01.png" alt=""></li></router-link> 
                <router-link to="/source/mysourceshop"><li><img src="../../assets/source/source02.png" alt=""></li></router-link> 
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
    export default{
        watch:{
            '$route':'islogin'
         },
        methods:{
            islogin(){
                if(this.$route.path==='/source/mysourceshop'){
                    if(this.$store.state.userid){
                        this.$router.push({ name: 'Myrole' })
                    }else{
                        this.$message({
                             message: '请先登录',
                             center: true,
                        })
                        this.$router.push({ name: 'Home' })
                    }
                }
            }
        }
    }
</script>
<style scoped>
.container64{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}
.container63{
    width: 1200px;
    margin: 0 auto;
    height: auto;
    padding-top: 136px;
    background: #f5f5f5;
    position: relative;
}
.container63 .source_header01{
    width: 1200px;
    height: 196px;
    background: url(../../assets/source/sourcehead.png) no-repeat;
    position: relative;
    top: -38px;
}
.container63 .backsource{
    width: 876px;
    height: 199px;
    background: url(../../assets/source/backsource.png) no-repeat;
    margin: 0 auto;
}
.container63 .sourceshop{
    list-style: none;
    width: 420px;
    height: 56px;
    position: relative;
    top:76px;
    left: 72px;
}
.container63 .sourceshop li{
    float: left;
    width: 161px;
    height: 56px;
    position: relative;
    left: 0px;
    top: 0px;
}
.container63 .sourceshop li img{
    position: relative;
    left: 17px;
    top: 12px;
}
.container63 .source_search{
    width: 324px;
    height: 48px;
    border-radius: 20px;
    padding-left: 15px;
    position:relative;
    left: 830px;
    top: 20px;
    border: none;
}
.container63 .router-link-active li{
     background: url(../../assets/source/xuanzhong.png)
}
</style>
