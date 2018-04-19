<template>
    <div class="container02" v-show="$store.state.productiondemo">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit02(item.id)">
                            <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jens&ProjectName=tree%20animation">
                            <div class="imgcon"><img :src="'static/publish/'+item.surfaceplot+'l.png'" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat">tree</span>
                            <span class="down01"><i class="icon_see"><span>4k</span></i></span>
                            <span class="down02"><i class="icon_love"><span>20</span></i></span>
                            <span class="down03"><i class="icon_star"><span>70</span></i></span>
                            </a>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
        <button class="button">查看全部作品</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
            }
        },
        mounted: function () {      
            this.getdemo02()
        },
        methods:{
            getdemo02(){
                this.axios.post('/res/filelist',{
                    state:1
                })
                .then(response => {   
                    this.list=response.data.data
                    this.$store.state.searchdemo=false
                    this.$store.state.recommenddemo=false
                    this.$store.state.productiondemo=true
                })
            },
            edit02(id){                 
                sessionStorage.id = id
            },
        }
    }
</script>
<style scoped>
.container02{
    width: 858px;
    height: auto;
}
.container02 .routetext{
    color:#000;
    text-decoration: none;
}
.container02 .list_pic{
    margin-top: 44px;
    height: 270px;
    width: 140px;
    cursor: pointer;
    color: #707070;
}
.container02 .imgcon{
    height: 170px;
    width: 173px;
}
.container02 .imgcon img{
    width: 100%;
    height: 100%;
}
.container02 p{
    font-size: 20px;
    position: relative;
    top: 15px;
    text-align: left;
    color:#000;
    }
.container02 .game_cat{
    display: block;
    font-size: 16px;
    position: relative;
    top: 22px;
    text-align: left;
    color: #707070;
}
.container02 .icon_see{
    background:url(../../../assets/home/icon_see.png) no-repeat;
}
.container02 .icon_love{
    background:url(../../../assets/home/icon_love.png) no-repeat;
}
.container02 .icon_star{
    background:url(../../../assets/home/icon_star.png) no-repeat;
}
.container02 .button{
    position: relative;
    top: 46px;
    left: 284px;
    width: 192px;
    height: 50px;
    background-color:#F13232;
    color:#fff; 
    border: none;
}
.container02 .down01{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: -9px;
    top: 36px;
}
.container02 .down02{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 9px;
    top: 36px;
}
.container02 .down03{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 124px;
    top: 15px;
}
.container02 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container02 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container02 .down03 span{
    position: relative;
    margin-left: 15px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container02 .button:hover{
    background-color: #dd2e2e;
    color:#fff;
    cursor: pointer;
}
</style>
