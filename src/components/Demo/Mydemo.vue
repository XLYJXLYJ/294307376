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
        this.Mydemoroute()
    },
    methods:{
        Mydemoroute(){
            this.$router.push({ name: 'Alldemohaha' })
        }
    }
}
</script>
<style scoped>
.container26{
    position: relative;
    top: -687px;
    left: 24px;
}
.container24{
    height: 0px;
}
.container26 button{
    position: relative;
    width: 115px;
    height: 34px;
    background: #FFF;
    color: #000;
    font-size: 16px;
    margin:0px;
    padding: 0px;
    cursor: pointer;
    border: none;
}
.container26 .router-link-active button{
    background-color: #F13232;
    border:none;
}
</style>
