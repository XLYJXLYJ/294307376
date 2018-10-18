<template>
    <div class="container24">
        <div class="container26">
            <div class="snapengine">
                <ul>
                    <router-link to="/Demo/Mydemo/All"><li @click="snap" :class="[{active:!defalutColor}]">SNAP</li></router-link>
                    <router-link to="/Demo/Mydemo/Engine"><li @click="engine" :class="[{active:defalutColor}]">引擎</li></router-link>
                </ul>
            </div>
            <div v-show="!defalutColor">
                <router-link to="/Demo/Mydemo/All"><button>全部</button></router-link>
                <router-link to="/Demo/Mydemo/Readysend"><button>已发布</button></router-link>
                <router-link to="/Demo/Mydemo/Nosend"><button>未发布</button></router-link>
            </div>
            <!-- <router-link to="/Demo/Mydemo/Engine"><button>引擎</button></router-link> -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            defalutColor:''
        }
    },
    mounted(){
        this.Mydemoroute()//路由跳转
    },
    watch:{//路由监控
      '$route':'isTab'
    },
    methods:{
        snap(){
            this.defalutColor=false
        },

        engine(){
            this.defalutColor=true
        },
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
.container26 .snapengine{
    width: 220px;
    height: 32px;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.container26 .snapengine ul li{
    float: left;
    width: 110px;
    height: 30px;
    text-align: center;
    padding-top: 5px;
    color: #000;
}
.container24{
    height: 0px;
}
 .active{
   color:#fff!important;
   background: #c51d4a;
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
    // background-color: @main-color;
    color: #c51d4a;
    border:none;
}
</style>
