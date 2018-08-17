<template>
    <div class="container25">
        <Header/>
        <div class="content05">   
            <div class="container24">
                <img class="star01" src="../assets/all/starall.png" alt="">  
                <!-- <p>我的管理中心</p> -->
                <router-link to="/snap"><button @click="clearsession">新建作品</button></router-link>
                <div class="mydemo_frame">
                    <div @click="clickblock01"><router-link class="Mydemo" v-bind:class="{ blockblue: isblue, blockblack: !isblack}" to="/Demo/Mydemo">我的管理中心</router-link></div>
                    <div @click="clickblock02"><router-link class="Delete" v-bind:class="{ blockblue: !isblue, blockblack: isblack }" to="/Demo/Delete">废纸篓</router-link></div>
                    <!-- <div class="block01" v-show="block01"></div>
                    <div class="block02" v-show="block02"></div> -->
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
            isblue:true,
            isblack:true,
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
            this.isblue=true
            this.isblack=true
        },
        clickblock02(){
            this.isblue=false
            this.isblack=false
        },
        //默认路由跳转
        demoroute(){
            this.$router.push({ name: 'Mydemo' })
        },
        //新建作品，清除缓存
        clearsession(){
            sessionStorage.snapdemoid = ''
            this.$store.state.demoxmlid = ''
            this.$store.state.coverid=0
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
    height: auto;
    display: inline-block;
}
.footer05{
    flex: 0;
}
.container24{
    margin: 0 auto;
    width: 1200px;
    min-height:374px;
    background:@background-color; 
    position: relative;
}
.container25 .container24 .star01{
    position: absolute;
    left: 38px;
    top: 8px; 
    width: auto;
    height: 200px;
}
.container24 p{
    position: relative;
    top: -62px;
    left: 38px;
    font-size:@llg-size;
    color: @gray;
    font-weight: 600;
}
.container25 .container24 button{
    position: absolute;
    top: 149px;
    left: 859px;
    height: 45px;
    width: 144px;
    font-size:24px;
    color: @background-color;
    background: #c51d4a;
    border: none;
    cursor: pointer;
}
.container25 .container24 .mydemo_frame{
    position:absolute;
    width: 1136px;
    height: 28px;
    top: 171px;
    left: 35px;
    padding-bottom: 0px;
    border-bottom: 3px solid #1969c7;
}
.container25 .container24 .Mydemo{
    position: absolute;
    top: -26px;
    left: 367px;
    width: 159px;
    height: 44px;
    font-size:24px;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
}
.container25 .container24 .Delete{
    position: absolute;
    top: -26px;
    left: 547px;
    width: 159px;
    height: 44px;
    font-size:24px;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
}
.blockblue{
    background: #1969c7;
    color: #fff;
}
.blockblack{
    color: #000;
}
// .container24 .mydemo_frame .router-link-active{
//    border:1px solid @gray;
//    border-radius:15px 15px 0px 0px;//学习了
//    border-bottom: none;
// }
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
