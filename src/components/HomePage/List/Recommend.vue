<template>
    <div class="container01" v-show="$store.state.recommenddemo">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <div class="imgcon"><img :src="item.imgBuffer" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat" :title=item.desc>{{item.desc}}</span>
                            <div class="downbox">
                                <span class="down01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                                <span class="down02"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                                <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span>
                            </div>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
        <button class="button" v-show="load" @click="Seemorerecommend">查看更多作品</button>
        <button class="buttonloadDown" v-show="loadDown">已加载完全部作品</button>
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
                    pagesize:16
                }
                const res = await http.post(api.getDemo, params)
                this.list=res.data.data
                this.$store.state.searchdemo=false//搜索结果列表全局变量
                this.$store.state.recommenddemo=true//推荐结果列表全局变量
                this.$store.state.productiondemo=false//产品结果列表全局变量
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
                    pagesize:16
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
    width: 858px;
    height: auto;
}
.container01 .routetext{
    color:@black;
    text-decoration: none;
}
.container01 .list_pic{
    margin-top: 44px;
    height: 270px;
    width: 173px;
    cursor: pointer;
    color: @list-color;
}
/* .container01 .list_pic:hover{
    background: @list-color;
} */
.container01 .imgcon{
    height: 170px;
    width: 173px;
}
.container01 .imgcon img{
    width: 100%;
    height: 100%;
}
.container01 .imgcon img:hover{
    border: 1px solid @img-color;
}
.container01 p{
    font-size:@lg-size;
    position: relative;
    top: 15px;
    height: 24px;
    width: 151px;
    overflow: hidden;
    text-align: left;
    color:@black;
}
.container01 p:hover{
    color:@main-color;
}
.container01 .game_cat{
    display: block;
    font-size:@xm-size;
    position: relative;
    top: 22px;
    text-align: left;
    color: @list-color;
    width: 170px;
    height: 20px;
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
    top: 46px;
    left: 320px;
    width: 192px;
    height: 50px;
    background-color:@main-color;
    color:@background-color; 
    border: none;
}
.container01 .buttonloadDown{
    position: relative;
    top: 46px;
    left: 320px;
    width: 192px;
    height: 50px;
    background-color:@list-color;
    color:@background-color; 
    border: none;
}
.container01 .downbox{
    width: 172px;
    height: 16px;
    position: relative;
    top: 32px;
}
.container01 .down01{
    font-size: 13px;
    width: 80px;
    height: 14px;
    position: absolute;
    left: 0px;
    top: 0px;
}
.container01 .down02{
    font-size: 13px;
    width: 80px;
    height: 14px;
    position: absolute;
    left: 40%;
    margin: 0 auto;
}
.container01 .down03{
    font-size: 13px;
    width: 80px;
    height: 14px;
    position: absolute;
    left: 75%;
}
.container01 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:@xm-size;
    top: 0px;
}
.container01 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: @container0203-color;
    font-size:@xm-size;
    top: 0px;
}
.container01 .down03 span{
    position: relative;
    margin-left: 18px;
    font-style: normal;
    color: @container0203-color;
    font-size:@xm-size;
    top: 0px;
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
