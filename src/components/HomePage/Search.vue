<template>
<div class="searchDemo">
        <div class="container07">
            <!-- <input class="search_input" placeholder="搜索作品" v-model="searchName" @keyup.enter="searchDemo">
            <i slot="prefix" class="el-input__icon el-icon-search" @click="searchDemo"></i> -->
        </div>
        <div class="search01"  v-show="$store.state.searchdemo">
        <el-row :gutter="10" class="el-row">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id' class="el-col"> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <!-- <div class="imgcon"><img :src="'static/publish/'+item.surfaceplot+'l.png'" alt=""></div> -->
                            <div class="imgcon"><img :src="item.imgBuffer" alt=""></div>
                            <p class="item-title">{{item.title}}</p>
                            <!-- <span class="game_cat">{{item.desc}}</span> -->
                            <div class="downbox">
                                <span class="down01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                                <span class="down02"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                                <!-- <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span> -->
                            </div>
                            <!-- <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span> -->
                            <div class="author">
                                <img :src="item.imgBuffer" alt="">
                                <p>manykit</p>
                            </div>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
    </div>
</div>

</template>

<script>
import { looksum } from '../../public/seesum.js'
    export default{
        filters: {//数字过滤器
            looksums(n) {
                var n = n;
                return looksum(n);
            }
        },
    data(){
        return{
            searchName:'',//搜索名字参数
            list:''//数据列表
        }
    },
    mounted: function () {      
    },
    methods:{
        searchDemo(){//搜索函数
            this.axios.post('/res/filelist',{
                sortstate:3,
                searchname:this.searchName
            })
            .then(response => {  
                if(this.searchName ==''){
                    this.$message({
                        message:'搜索内容不能为空',
                        center:true
                    })
                }
                else if(response.data.data.msg == "这回真的没有了~"){
                    this.$store.state.searchdemo=false
                    this.$message({
                        message:'没有找到相关的作品',
                        center:true
                    })
                }else{
                this.list=response.data.data
                this.$store.state.searchdemo=true
                this.$store.state.recommenddemo=false
                this.$store.state.productiondemo=false
                }
            })
        },
        edit01(id){//观看函数             
            sessionStorage.id = id
            this.$store.state.shareid=id
        },
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.search01{
    width: 766px;
    height: auto;
    position: absolute;
    padding-left: 20px;
    margin-left: 19px;
}
.search01 .el-row{
    margin-top: 48px;
}
.search01 .el-col{
    background: #f9f9f9;
    margin-bottom: 59px;
    padding-bottom: 31px;
}
.search01 .list_pic{
    margin-top: 25px;
    height: 254px;
    width: 173px;
    cursor: pointer;
    background:@background-color;
    border-radius: 10px;
    position: relative;
}
.search01 .imgcon{
    height: 170px;
    width: 173px;
}
.search01 .imgcon img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.search01 .imgcon img:hover{
    border: 1px solid @img-color;
}
.search01 .item-title{
    font-size:16px;
    position: relative;
    top: 10px;
    left: 9px;
    height: 20px;
    width: 151px;
    overflow: hidden;
    text-align: left;
    color:@black;
    font-weight: 400;
    // font-family: '黑体';
}
.search01 .game_cat{
    display: block;
    font-size:12px;
    position: relative;
    top: 18px;
    text-align: left;
    color: @list-color;
    width: 170px;
    height: 18px;
    overflow: hidden;
}
.search01 .game_cat:hover{
    color:@main-color;
}
.search01 p:hover{
    color: @main-color;
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
.search01 .downbox{
    width: 162px;
    height: 13px;
    position: relative;
    top: 20px;
    left: 9px;
}
.search01 .down01{
    font-size: 10px;
    width: 80px;
    height: 13px;
    position: absolute;
    left: 0px;
    top: 0px;
}
.search01 .down02{
    font-size: 10px;
    width: 80px;
    height: 13px;
    position: absolute;
    left: 81px;
    top: 0px;
    margin: 0 auto;
}
// .search01 .down03{
//     font-size: 13px;
//     width: 80px;
//     height: 14px;
//     margin: 10px;
//     position: relative;
//     left: 34px;
//     top: 35px;
// }
.search01 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:10px;
    top: -2px;
}
.search01 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:10px;
    top: -1px;
}
// .search01 .down03 span{
//     position: relative;
//     margin-left: 15px;
//     font-style: normal;
//     color: @container0203-color;
//     font-size:@xm-size;
//     top: 0px;
// }
.search01 .list_pic .author{
    height: 18px;
    width: 400px;
    position: absolute;
    top: 230px;
    left: 9px;
}
.search01 .list_pic .author img{
    width: 17px;
    height: 17px;
    border-radius: 8px;
}
.search01 .list_pic .author p{
    width: 200px;
    height: 14px;
    font-size: 10px;
    position: absolute;
    left: 22px;
    top: 0px;
    color: #757575;
}
.container07{
    height: 46px;
    width: 334px;
    border-radius: 15px;
    position: relative;
    left: 573px;
    top:40px;
    z-index: 1;
}
.container07 .search_input{
    width:199px;
    height: 36px;
    background: @searchbg-color;
    border: 1px solid @search-border-color;
    padding-left: 15px;
    position: relative;
    left: 20px;
    outline:none;
}
// .container07 .search_input:focus{
//     border: 1px solid @main-color;
// }
.container07 .el-icon-search{
    position: relative;
    left: -20px;
    top:0px;
    cursor: pointer;
}
.searchDemo a{
    text-decoration: none;
}
</style>