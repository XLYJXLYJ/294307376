<template>
    <div class="container24">
        <div class="container26">
            <router-link to="/Demo/Mydemo/All"><button>全部</button></router-link>
            <router-link to="/Demo/Mydemo/Readysend"><button>已发布</button></router-link>
            <router-link to="/Demo/Mydemo/Nosend"><button>未发布</button></router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default{
    mounted(){
        this.Mydemoroute()//路由跳转
    },
    watch:{//路由监控
      '$route':'isTab'
    },
    methods:{
        Mydemoroute(){//路由跳转函数
            this.$router.push({ name: 'Alldemohaha' })
        },
        isTab(){//路由监控函数
            if(this.$route.path==='/Demo/Mydemo'){
                this.$router.push({ name: 'Alldemohaha' })
            }
        }
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container26{
    position: relative;
    top: -207px;
    left: 24px;
}
.container24{
    height: 0px;
}
.container26 button{
    position: relative;
    width: 115px;
    height: 34px;
    background: @background-color;
    color: @black;
    font-size:@xm-size;
    margin:0px;
    padding: 0px;
    cursor: pointer;
    border: none;
}
.container26 .router-link-active button{
    background-color: @main-color;
    color: @background-color;
    border:none;
}
</style>
