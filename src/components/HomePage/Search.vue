<template>
<div class="searchDemo">
    <Header/>
    <!-- <div class="search01"  v-show="$store.state.searchdemo"> -->
    <div class="search01">
        <div class="mainNav-middle">
            <ul>
                <li @click="snap" :class="[{active:defalutColor}]">SNAP</li>
                <li @click="engine" :class="[{active:!defalutColor}]">引擎</li>
            </ul>
        </div>
        <div class="search">
        <input class="search_input" placeholder="搜索作品" v-model="searchName" @keyup.enter="searchDemo">
        <i slot="prefix" class="el-input__icon el-icon-search" @click="searchDemo"></i>
        </div>
        <div class="sort02">
            <ul v-show="isdown">
                <li class="more" :class="{active01:isdownshow}" @click="mostuse">最多点击</li>
                <li class="new" :class="{active01:isresentshow}" @click="resentchange">最近更新</li>
            </ul>
            <!-- <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox> -->
            <p class="all">共有{{listnewlength}}个素材</p>
        </div>
        <img class="demoimg" src="../../assets/home/header.jpg" alt="">
        <p class="alldemo" ><img src="../../assets/home/title_s.png" alt=""> <span>全部作品</span> </p>
        <el-row :gutter="10" class="el-row">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" v-for="item in list" :key='item.id' class="el-col"> 
                 <router-link :to="'/video?='+item.id" v-show="isdown">
                    <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                        <!-- <div class="imgcon"><img :src="'static/publish/'+item.surfaceplot+'l.png'" alt=""></div> -->
                        <div class="imgcon" v-show="isdown"><img :src="item.imgBuffer" alt=""></div>
                        <div class="imgcon" v-show="!isdown"><img src="../../assets/home/engine.jpg" alt=""></div>
                        <p class="item-title" :title=item.title>{{item.title}}</p>
                        <!-- <span class="game_cat">{{item.desc}}</span> -->
                        <div class="downbox" v-show="isdown">
                            <span class="down01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                            <span class="down02"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                            <!-- <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span> -->
                        </div>
                        <button class="download" v-show="!isdown"><a :href="'http://www.manykit.com/'+item.address" download>下载</a></button>
                        <div class="author">
                            <img :src="item.imgBuffer" alt="">
                            <p>manykit</p>
                        </div>
                    </div>
                </router-link>
                <div class="grid-content bg-purple list_pic" @click="edit01(item.id)" v-show="!isdown">
                    <!-- <div class="imgcon"><img :src="'static/publish/'+item.surfaceplot+'l.png'" alt=""></div> -->
                    <div class="imgcon" v-show="isdown"><img :src="item.imgBuffer" alt=""></div>
                    <div class="imgcon" v-show="!isdown"><img src="../../assets/home/engine.jpg" alt=""></div>
                    <p class="item-title" :title=item.title>{{item.title}}</p>
                    <!-- <span class="game_cat">{{item.desc}}</span> -->
                    <div class="downbox" v-show="isdown">
                        <span class="down01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                        <span class="down02"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                        <!-- <span class="down03"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span> -->
                    </div>
                    <a :href="'http://www.manykit.com/codeplay/file/'+item.address" download><button class="download" v-show="!isdown">下载</button></a>
                    <div class="author">
                        <img :src="item.imgBuffer" alt="">
                        <p>manykit</p>
                    </div>
                </div>
            </el-col>         
        </el-row>
        <div class="sortpagenum">
            <div class="sortpagenumcenter">
                <el-pagination
                :current-page.sync="currentPage3"
                background
                @current-change ="handleCurrentChange"
                @prev-click="Selectpagebefore"
                @next-click="Selectpageafter"
                layout="prev, pager, next, jumper"
                :total.sync="listnumtotal"
                prev-text='上一页'
                next-text='下一页'>
                </el-pagination>
            </div>
        </div>
    </div>
    <div class="footersearch">
        <Footer/>
    </div> 
</div>

</template>

<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import { looksum } from '../../public/seesum.js'
import api from '../../ajax/getData.js'//引入路径
import http from '../../ajax/fetch.js'//引入封装的axios
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
            list:'',//数据列表
            isresentshow:'',//最近更新
            isdownshow:true,//最多下载
            listnewlength:'',
            listnumtotal:0,//请求的总页数
            cur_page:'',//当前页数
            j:'',
            i:'',
            currentPage3:1,//初始化当前页数
            isrecent:'',//是否是最近更新
            defalutColor:true,
            isdown:true,//是否显示观看数和点赞数
            isengine:''//是否是引擎项目
        }
    },
    mounted: function () {   
        this.getProduct()//获取初始化数据   
    },
    methods:{
        async getProduct() {//初始化函数
        this.isdown=true
            let params = {
                state:4,
                sortstate:2,
                pagesize:30
            }
            const res = await http.post(api.getDemo, params)
            this.list=res.data.data
            if(this.list.msg=='这回真的没有了~'){
                this.$store.state.recommenddemo=true
            }else{
                this.list=res.data.data
                this.listnewlength=res.data.data.length
                this.listnumtotal = Math.ceil(this.listnewlength/30)*10  
                this.$store.state.searchdemo=true//搜索结果列表全局变量
                this.$store.state.recommenddemo=true//推荐结果列表全局变量
                this.$store.state.productiondemo=false//产品结果列表全局变量
            }

        },
        snap(){
            this.isengine=0
            this.defalutColor=true
            this.getProduct()
        },

        engine(){
            this.isengine=1
            this.isdown=false
            this.defalutColor=false
            this.axios.post('/res/filelist',{
                type:1,
                pagenum:this.cur_page,
                pagesize:30
            }).then(response=>{
                this.list=response.data.data
                this.listnewlength=response.data.data[0].total
                this.listnumtotal = Math.ceil(this.listnewlength/30)*10  
            })
        },
         //最近更新
        resentchange(){
            this.isresentshow=true
            this.isdownshow=false
            this.isrecent=1//用于判断是否是最近更新模块
            if(this.isengine==1){

            }else{
                this.axios.post('/res/filelist',{
                    state:1,
                    pagenum:this.cur_page,
                    pagesize:30
                })
                .then(response => { 
                    this.list = response.data.data 
                    // if(this.listLength<16){
                    //     this.list = this.list.concat(this.listNum)
                    //     this.load = false,
                    //     this.loadDown = true 
                    // }
                    // else{
                    //     this.listNum = response.data.data   
                    //     this.list = this.list.concat(this.listnum)  
                    // }
                }) 
            }
        },
        //最多使用
        mostuse(){
            this.isdownshow=true
            this.isresentshow=false
            if(this.isengine==1){

            }else{
                this.axios.post('/res/filelist',{
                    state:4,
                    sortstate:2,
                    pagenum:this.cur_page,
                    pagesize:30
                })
                    .then(response => {  
                        if(response.data.data.msg =="这回真的没有了~"){

                        }else{
                        this.list = response.data.data  
                        // if(this.listLength<16){
                        //     this.list = this.list.concat(this.listNum)
                        //     this.load = false,
                        //     this.loadDown = true 
                        // }
                        // else{
                        //     this.listNum = response.data.data   
                        //     this.list = this.list.concat(this.listnum)  
                        // }
                    }
                }) 
            }
        },
                //获取当前页数
        handleCurrentChange(val){
            this.cur_page = val;
            this.currentPage3=val;
            if(this.isrecent==1){
                this.resentchange()
            }else if(this.isengine==1){
                this.engine()
            }else{
                this.mostuse()
            }
        },

        // 前页数
        Selectpagebefore(){
            this.cur_page = this.cur_page-1
            if(this.isrecent==1){
                this.resentchange()
            }else if(this.isengine==1){
                this.engine()
            }else{
                this.mostuse()
            }
        },
        // 后页数
        Selectpageafter(){
            this.cur_page = this.cur_page+1
            if(this.isrecent==1){
                this.resentchange()
            }else if(this.isengine==1){
                this.engine()
            }else{
                this.mostuse()
            }
        },
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
                    this.$store.state.searchdemo=true
                    this.$message({
                        message:'没有找到相关的作品',
                        center:true
                    })
                }else{
                this.list=response.data.data
                this.listnewlength=res.data.data.length
                this.listnumtotal = Math.ceil(this.listnewlength/30)*10 
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
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.search01{
    width: 1200px;
    height: auto;
    padding-left: 20px;
    margin-left: 19px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
}
.search01 .mainNav-middle{
    position: relative;
    top: 366px;
}
.search01 .mainNav-middle ul{
    width: 240px;
    height: 30px;
    margin: 0 auto;
}
.search01 .mainNav-middle ul li{
    float: left;
    font-size: 24px;
    width: 120px;
    height: 30px;
    text-align: center;
    color: #999;
    cursor: pointer;
    
}
.defalutColor{
    color: #c51d4a;
}
.search01 .alldemo{
    position: relative;
    left: 0px;
    top: -58px;
    font-size: 20px;
    width: 200px;
}
.search01 .alldemo span{
    position: relative;
    left: -16px;
    top: -15px;
    font-size: 24px;
}
.search01 .demoimg{
   position: relative;
   left: 0px;
   top: -108px;
}
.search01 .sort02{
   width: 1200px;
   height: 30px;
   background: @mainbg-color;
   position: relative;
   left: 0px;
   top: 348px;
   margin-bottom: 40px;
   display: block;
}
.search01 .sort02 ul{
   list-style: none;
   left: 0px;
   top: 0px;
   width: 170px;
   height: 30px;
}
.search01 .sort02 .more{
   width: 86px;
   height: 26px;
   color:#999;
   font-size:@xm-size;
   margin-right: 14px; 
   text-align: center;
   position: absolute;
   top: 0px;
   left: 0px;
   padding-top: 4px;
   cursor: pointer;
}
.search01 .active{
   color:#c51d4a!important;
   width: 60px;
   height: 30px!important;
   padding-bottom: 10px;
   border-bottom:2px solid #c51d4a;
   position: relative;
}
.search01 .active p{
   color:@background-color;
    background: #c51d4a;
    position: relative;
    top: 30px;
}
.search01 .active01{
   color:#c51d4a!important;
}
.search01 .active01 p{
   color:#c51d4a;
}
.search01 .sort02 .new{
   width: 86px;
   height: 26px;
   color:#999;
   font-size:@xm-size;
   margin-right: 14px; 
   text-align: center;
   position: absolute;
   top: 0px;
   left: 86px;
   padding-top: 4px;
   cursor: pointer;
}
.search01 .sort02 ul li:hover{
   color:#c51d4a;
}
.search01 .sort02 .nobuy{
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -28px;
   left: 80px;
}

.search01 .sort02 .all{
   float: left;
   width: 162px;
   height: 30px;
   color:@main-color;
   font-size:@xm-size;
   position: absolute;
   top: 3px;
   left: 986px;
}
.search01 .el-row{
    margin-top: 0px;

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
    margin-left: 10px;
}
.search01 .list_pic:hover{
    background: #F9F9F9;
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
.search01 .download{
    position: relative;
    font-size:14px;
    top: 32px;
    left: 130px;
    padding: 2px;
    z-index: 1000;
    border: none;
    cursor: pointer;
}
.search01 .download:hover{
    background: #c51d4a;
    color: #fff;
}
.search01 .download a{
    color: #c51d4a!important;
}
.search01 .download a:hover{
    color: #fff!important;
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
.search01 .search{
    height: 46px;
    width: 334px;
    border-radius: 15px;
    position: relative;
    left: 883px;
    top:330px;
    z-index: 1;
}
.search01 .search .search_input{
    width:299px;
    height: 36px;
    background: @searchbg-color;
    border: 1px solid @search-border-color;
    padding-left: 15px;
    position: relative;
    left:0px;
    top: 0px;
    outline:none;
    border-radius: 10px;
}
// .container07 .search_input:focus{
//     border: 1px solid @main-color;
// }
.search01 .search .el-icon-search{
    position: relative;
    left: 280px;
    top:-42px;
    cursor: pointer;
}
.searchDemo a{
    text-decoration: none;
}
.search01 .sortpagenum{
    margin: 0 auto;
    text-align: center;
    display: block;
    position: relative;
    top: -40px;
}
.search01 .sortpagenumcenter{
    margin: 0 auto;
    width: 575px;
}
</style>