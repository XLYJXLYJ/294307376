<template>
    <div class="container01" v-show="$store.state.recommenddemo">
        <el-row :gutter="10" class="el-row">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id' class="el-col"> 
                    <!-- <a :href="'http://www.manykit.com/codeplay/#/Video?='+item.id"> -->
                    <router-link :to="'/video?='+item.id">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <div class="imgcon"><img :src="item.imgBuffer" alt=""></div>
                            <p class="item-title" :title="item.title">{{item.title}}</p>
                            <span class="game_cat" :title=item.desc>{{item.desc}}</span>
                            <div class="downbox">
                                <span class="down01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                                <span class="down02"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                                <!-- <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span> -->
                            </div>
                            <div class="author">
                                <img :src="item.imgBuffer" alt="">
                                <p>manykit</p>
                            </div>
                        </div>
                    </router-link>
                    <!-- </a> -->
            </el-col>         
        </el-row>
        <!-- <button class="button" v-show="load" @click="Seemorerecommend">查看更多作品</button>
        <button class="buttonloaddown" v-show="loadDown">已加载完全部作品</button> -->
    </div>
</template>
<script>
import { looksum } from '../../../public/seesum.js'
import api from '../../../ajax/getData.js'//引入路径
import http from '../../../ajax/fetch.js'//引入封装的axios
    export default{
        filters: {
            looksums(n) {
                var n = n;
                return looksum(n);
            }
        },
        data(){
            return{
                list:[],//初始化列表
                listNum:[],//查看更多列表数据
                i:1,//查看更多定义初始化第一页
                load:true,//查看更多作品按钮红色样式
                loadDown:false//查看更多作品按钮红色样式
            }
        },
        mounted: function () {      
            // this.Getdemo01()//初始化数据
            this.getProduct()//获取初始化数据
        },
        methods:{
 
            async getProduct() {//初始化函数
                let params = {
                    state:4,
                    sortstate:2,
                    pagesize:12
                }
                const res = await http.post(api.getDemo, params)
                this.list=res.data.data
                if(this.list.msg=='这回真的没有了~'){
                    this.$store.state.recommenddemo=false
                }else{
                    this.$store.state.searchdemo=false//搜索结果列表全局变量
                    this.$store.state.recommenddemo=true//推荐结果列表全局变量
                    this.$store.state.productiondemo=false//产品结果列表全局变量
                }

            },
            // Getdemo01(){//初始化函数
            //     this.axios.post('/res/filelist',{
            //         state:4,
            //         sortstate:2,
            //         pagesize:16
            //     })
            //     .then(response => {   
            //         this.list=response.data.data
            //         this.$store.state.searchdemo=false//搜索结果列表全局变量
            //         this.$store.state.recommenddemo=true//推荐结果列表全局变量
            //         this.$store.state.productiondemo=false//产品结果列表全局变量
            //     })
            // },
            edit01(id){   //编辑              
                sessionStorage.id = id
                this.$store.state.shareid=id
            },
            Seemorerecommend(){//查看更多
                this.i = this.i+1
                this.axios.post('/res/filelist',{
                    state:4,
                    sortstate:2,
                    pagenum:this.i,
                    pagesize:12
                })
                .then(response => {  
                if(response.data.data.msg =="这回真的没有了~"){
                    this.load = false,
                    this.loadDown = true
                }else{
                this.listLength=response.data.data.length
                this.listNum = response.data.data  
                 if(this.listLength<16){
                    this.list = this.list.concat(this.listNum)
                    this.load = false,
                    this.loadDown = true 
                }
                else{
                    this.listNum = response.data.data   
                    this.list = this.list.concat(this.listnum)  
                }
                }
                }) 
            },
        }
    }
</script>
<style scoped lang="less">
@import '../../../assets/index.less';
.container01{
    width: 766px;
    height: auto;
    position: relative;
    padding-left: 20px;
    margin-left: 19px;
}
.container01 .el-row{
    margin-top: 22px;
}
.container01 .el-col{
    background: #f9f9f9;
    margin-bottom: 49px;
    padding-bottom: 21px;
}
.container01 .list_pic{
    margin-top: 25px;
    height: 274px;
    width: 173px;
    cursor: pointer;
    background:@background-color;
    border-radius: 10px;
    position: relative;
}
 .container01 .list_pic:hover{
    background: #f3f3f3;
} 
.container01 .imgcon{
    height: 170px;
    width: 173px;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
}
.container01 .imgcon img{
    width: 100%;
    height:auto;
    border-radius: 4px;
    overflow: hidden;
}
// .container01 .imgcon img:hover{

// }
.container01 .item-title{
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
.container01 .item-title:hover{
    color:@main-color;
}
.container01 .game_cat{
    display: block;
    font-size:12px;
    position: relative;
    top: 18px;
    left: 9px;
    color: @list-color;
    width: 160px;
    height: 18px;
    overflow: hidden;
}
.container01 .game_cat:hover{
    color: @main-color;
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
    top: 0px;
    left: 320px;
    width: 192px;
    height: 50px;
    background-color:@main-color;
    color:@background-color; 
    border: none;
}
.container01 .buttonloaddown{
    position: relative;
    top: 0px;
    left: 320px;
    width: 192px;
    height: 50px;
    background-color:@list-color;
    color:@background-color; 
    border: none;
}
.container01 .downbox{
    width: 162px;
    height: 13px;
    position: relative;
    top: 23px;
    left: 9px;
}
.container01 .down01{
    font-size: 10px;
    width: 80px;
    height: 13px;
    position: absolute;
    left: 0px;
    top: 0px;
}
.container01 .down02{
    font-size: 10px;
    width: 80px;
    height: 13px;
    position: absolute;
    left: 81px;
    top: 0px;
    margin: 0 auto;
}
// .container01 .down03{
//     font-size: 13px;
//     width: 80px;
//     height: 14px;
//     position: absolute;
//     left: 75%;
// }
.container01 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:10px;
    top: -2px;
}
.container01 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:10px;
    top: -1px;
}
// .container01 .down03 span{
//     position: relative;
//     margin-left: 18px;
//     font-style: normal;
//     color: @container0203-color;
//     font-size:@xm-size;
//     top: 0px;
// }
.container01 .list_pic .author{
    height: 18px;
    width: 400px;
    position: absolute;
    top: 250px;
    left: 9px;
}
.container01 .list_pic .author img{
    width: 17px;
    height: 17px;
    border-radius: 8px;
}
.container01 .list_pic .author p{
    width: 200px;
    height: 14px;
    font-size: 10px;
    position: absolute;
    left: 22px;
    top: 0px;
    color: #757575;
}
.container01 .button:hover{
    background-color: @main-color;
    color:@background-color;
    cursor: pointer;
}
.container01 a{
    text-decoration: none;
}
</style>
