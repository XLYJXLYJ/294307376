<template>
<div class="searchdemo" v-show="true">
        <div class="container07">
            <input class="search_input" placeholder="搜索作品" v-model="searchname" @keyup.enter="searchdemo">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </div>
        <div class="search01">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jens&ProjectName=tree%20animation">
                            <div class="imgcon"><img src="../../assets/gif/animated-tree.gif" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat">tree</span>
                            <span class="down01"><i class="icon_see"><span>4k</span></i></span>
                            <span class="down02"><i class="icon_love"><span>200</span></i></span>
                            <span class="down03"><i class="icon_star"><span>70</span></i></span>
                            </a>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
        <button class="button">查看全部作品</button>
    </div>
</div>

</template>

<script>
    export default{
        data(){
            return{
                searchname:'',
                list:''
            }
        },
        mounted: function () {      
        },
        methods:{
            searchdemo(){
                console.log(123)
                this.axios.post('/res/filelist',{
                    sortstate:3,
                    searchname:this.searchname
                })
                .then(response => {   
                    this.list=response.data.data
                    console.log(response)
                })
            }
        }
    }
</script>
<style scoped>
.search01{
    width: 804px;
    height: auto;
    position:absolute;
    margin-top: 40px;
}
.search01 .routetext{
    color:#000;
    text-decoration: none;
}
.search01 .list_pic{
    margin-top: 44px;
    height: 270px;
    width: 140px;
    cursor: pointer;
    color: #707070;
}
.search01 .imgcon{
    height: 170px;
    width: 173px;
}
.search01 .imgcon img{
    width: 100%;
    height: 100%;
}
.search01 p{
    font-size: 20px;
    position: relative;
    top: 15px;
    text-align: left;
    color:#000;
    }
.search01 .game_cat{
    display: block;
    font-size: 16px;
    position: relative;
    top: 22px;
    text-align: left;
    color: #707070;
}
.search01 .icon_see{
    background:url(../../assets/home/icon_see.png) no-repeat;
}
.search01 .icon_love{
    background:url(../../assets/home/icon_love.png) no-repeat;
}
.search01 .icon_star{
    background:url(../../assets/home/icon_star.png) no-repeat;
}
.search01 .button{
    position: relative;
    top: 46px;
    left: 284px;
    width: 192px;
    height: 50px;
    background-color:#F13232;
    color:#fff; 
    border: none;
}
.search01 .down01{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: -9px;
    top: 36px;
}
.search01 .down02{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: -9px;
    top: 36px;
}
.search01 .down03{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 99px;
    top: 16px;
}
.search01 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.search01 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.search01 .down03 span{
    position: relative;
    margin-left: 15px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.search01 .button:hover{
    background-color: #5bc4ea;
    color:#fff;
    cursor: pointer;
}
.container07{
    height: 46px;
    width: 334px;
    border-radius: 15px;
    position: relative;
    left: 845px;
    top:44px;
    z-index: 1;
}
.el-input__icon{
    position: absolute;
    left: 275px;
}
</style>