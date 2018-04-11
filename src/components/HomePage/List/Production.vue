<template>
    <div class="container01">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jens&ProjectName=tree%20animation">
                            <div class="imgcon"><img src="../../../assets/gif/animated-tree.gif" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat">tree</span>
                            <span class="down"><i class="icon_see"><span>4k</span></i></span>
                            <span class="down"><i class="icon_love"><span>20</span></i></span>
                            <span class="down"><i class="icon_star"><span>70</span></i></span>
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
            this.getdemo()
        },
        methods:{
            getdemo(){
                this.axios.post('/res/filelist',{
                    state:1
                })
                .then(response => {   
                        this.list=response.data.data
                        console.log(this.list)
                })
            },
            edit01(id){                 
                this.$store.state.demoxmlid = id
                console.log(this.$store.state.demoxmlid)
            },
        }
    }
</script>
<style scoped>
.container01{
    width: 672px;
    height: auto;
}
.container01 .routetext{
    color:#000;
    text-decoration: none;
}
.container01 .list_pic{
    margin-top: 44px;
    height: 220px;
    width: 140px;
    cursor: pointer;
    color: #707070;
}
.container01 .imgcon{
    height: 136px;
    width: 136px;
}
.container01 .imgcon img{
    border-radius: 8px;
    width: 100%;
    height: 100%;
}
.container01 p{
    font-size: 15px;
    position: relative;
    top: 5px;
    text-align: left;
    color:#000;
    }
.container01 .game_cat{
    display: block;
    font-size: 13px;
    position: relative;
    top: 8px;
    text-align: left;
    color: #707070;
}
.container01 .icon_see{
    background:url(../../../assets/home/icon_see.png) no-repeat;
}
.container01 .icon_love{
    background:url(../../../assets/home/icon_love.png) no-repeat;
}
.container01 .icon_star{
    background:url(../../../assets/home/icon_star.png) no-repeat;
}
.container01 .button{
    position: relative;
    top: 46px;
    width: 192px;
    height: 50px;
    background-color:#fff;
    color:#5bc4ea;
    border: 1px solid #5bc4ea;  
    border-radius: 8px;
}
.container01 .down{
    font-size: 13px;
    width: 40px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: -9px;
    top: 20px;
}
.container01 .down span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
}
.container01 .button:hover{
    background-color: #5bc4ea;
    color:#fff;
    cursor: pointer;
}
</style>
