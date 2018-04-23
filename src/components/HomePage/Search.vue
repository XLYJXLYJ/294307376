<template>
<div class="searchdemo">
        <div class="container07">
            <input class="search_input" placeholder="搜索作品" v-model="searchname" @keyup.enter="searchdemo">
                <i slot="prefix" class="el-input__icon el-icon-search" @click="searchdemo"></i>
        </div>
        <div class="search01"  v-show="$store.state.searchdemo">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jens&ProjectName=tree%20animation">
                            <div class="imgcon"><img :src="'static/publish/'+item.surfaceplot+'l.png'" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat">{{item.desc}}</span>
                            <span class="down01"><i class="icon_see"><span>4k</span></i></span>
                            <span class="down02"><i class="icon_love"><span>{{item.praisetotal}}</span></i></span>
                            <span class="down03"><i class="icon_star"><span>{{item.collecttotal}}</span></i></span>
                            </a>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
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
                this.axios.post('/res/filelist',{
                    sortstate:3,
                    searchname:this.searchname
                })
                .then(response => {  
                    if(response.data.data.msg == "这回真的没有了~"){
                        this.$store.state.searchdemo=false
                        this.$message({
                            message:'没有找到相关的作品',
                            center:true
                        })
                    }else{
                    this.list=response.data.data
                    console.log(response)
                    this.$store.state.searchdemo=true
                    this.$store.state.recommenddemo=false
                    this.$store.state.productiondemo=false
                    }
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
    margin-top: 24px;
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
    width: 170px;
    height: 20px;
    overflow: hidden;
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
    left: 9px;
    top: 36px;
}
.search01 .down03{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 34px;
    top: 35px;
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
.container07{
    height: 46px;
    width: 334px;
    border-radius: 15px;
    position: relative;
    left: 845px;
    top:44px;
    z-index: 1;
}
.container07 .search_input{
    width: 299px;
    height: 46px;
    background: #F8F8F8;
    border: 1px solid #B5B5B5;
    padding-left: 35px;
    position: relative;
    left: 20px;
    outline:none;
}
.container07 .search_input:focus{
    border: 1px solid #F13232;
}
.container07 .el-icon-search{
    position: relative;
    left: 300px;
    top:-46px;
    cursor: pointer;
}
</style>