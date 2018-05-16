<template>
    <div class="container25">
        <Header/>
        <div class="content05">   
            <div class="container24">
                <img class="star01" src="../assets/Download/starfish.png" alt="">  
                <p>我的管理中心</p>
                <router-link to="/snap"><button @click="clearsession">新建作品</button></router-link>
                <div class="mydemo_frame">
                    <div @click="clickblock01"><router-link class="Mydemo" to="/Demo/Mydemo">作品</router-link></div>
                    <div @click="clickblock02"><router-link class="Delete" to="/Demo/Delete">废纸篓</router-link></div>
                    <div class="block01" v-show="block01"></div>
                    <div class="block02" v-show="block02"></div>
                </div>
            </div>      
            <router-view></router-view>
        </div>
        <div class="footer05">
            <Footer/>
        </div> 
    </div>   
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
export default{
    data(){
        return{
            block01:true,
            block02:false
        }
    },
    //默认跳转路由
    mounted(){
        this.demoroute()
    },
    //监控路由
    watch:{
      '$route':'isTab'
    },
    methods:{
        //控制tab
        clickblock01(){
            this.block01=true,
            this.block02=false
        },
        clickblock02(){
            this.block02=true,
            this.block01=false
        },
        //默认路由跳转
        demoroute(){
            this.$router.push({ name: 'Mydemo' })
        },
        //新建作品，清除缓存
        clearsession(){
            sessionStorage.snapdemoid = ''
        },
        //监控路由跳转
        isTab(){
            if(this.$route.path==='/Demo'){
                this.$router.push({ name: 'Alldemohaha' })
            }
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped lang="less">
@import '../assets/index.less';
.container25{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: @mainbg-color;
}
.content05{
    flex: 1;
    padding-top: 154px;
    padding-left: 5px;
}
.footer05{
    margin-top: 36px;
    flex: 0;
}
.container24{
    margin: 0 auto;
    width: 1200px;
    height: 840px;
    background:@background-color; 
    position: relative;
}
.container25 .star01{
    position: relative;
    left: -18px;
    top: -30px; 
    z-index: 50;
    opacity: 0;
}
.container24 p{
    position: relative;
    top: -62px;
    left: 38px;
    font-size:@llg-size;
    color: @gray;
    font-weight: 600;
}
.container24 button{
    position: relative;
    top: -88px;
    left: 1032px;
    height: 34px;
    width: 115px;
    font-size:@xm-size;
    color: @background-color;
    background: @gray;
    border: none;
    cursor: pointer;
}
 .container24 .mydemo_frame{
    position:relative;
    width: 643px;
    height: 28px;
    top: -60px;
    left: 0px;
    padding-bottom: 0px;
    border-bottom: 1px solid @gray;
}
.container24 .Mydemo{
    position: absolute;
    top: -10px;
    left: 24px;
    width: 101px;
    height: 38px;
    font-size:@md-size;
    color: @gray;
    text-decoration: none;
    padding-top: 8px;
    padding-left: 60px;
}
.container24 .Delete{
    position: absolute;
    top: -10px;
    left: 189px;
    width: 109px;
    height: 38px;
    font-size:@md-size;
    color: @gray;
    text-decoration: none;
    padding-top: 8px;
    padding-left: 60px;
}

.container24 .block01{
    width: 163px;
    height: 10px;
    background: @background-color;
    position: absolute;
    top: 28px;
    left: 24px;
}
.container24 .block02{
    width: 171px;
    height: 10px;
    background: @background-color;
    position: absolute;
    top: 28px;
    left: 189px;
}
.container24 .mydemo_frame .router-link-active{
   border:1px solid @gray;
   border-radius:15px 15px 0px 0px;//学习了
   border-bottom: none;
}
/* .container24 .mydemo_frame .router-link-active{
    text-decoration: none;
    border-bottom: 3px solid @background-color;  
    border-top: 2px solid @gray;
    border-left: 2px solid @gray;
    border-right: 2px solid @gray;
    color: @black;
}
.container24 .mydemo_frame .router-link-active:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 19px;
    height: 2px;
    width: 76px;
    border-radius: 2px;  
} */
</style>
