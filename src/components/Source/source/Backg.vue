<template>
  <div class="container63" v-show="$store.state.sourcebackg">
    <div class="baozhu">
    <div class="sort01">
        <p class="sort01text">作品分类:</p>
        <ul>
            <li v-for="(item,index) in oneidbox" :key="item.oneid" @click="select01(item.oneid)" :class="{demohover:index==isdemohover01}"><p>{{item.name}}</p></li>
        </ul>
    </div>
    <div class="sort0101" v-show="sort0101">
    <p class="sort0101text">作品分类:</p>
        <ul>
            <li v-for="(item,index) in twoidbox01" :key="item.twoid"  @click="select0101(item.twoid)" :class="{demohover:index==isdemohover02}"><p>{{item.name}}</p></li>
        </ul>
    </div>
    <div class="sort0101" v-show="sort0102">
        <p class="sort0101text">作品分类:</p>
        <ul>
            <li v-for="(item,index) in twoidbox02" :key="item.twoid" @click="select0101(item.twoid)" :class="{demohover:index==isdemohover02}"><p>{{item.name}}</p></li>
        </ul>
    </div>
    <div class="sort0101" v-show="sort0103">
        <p class="sort0101text">作品分类:</p>
        <ul>
            <li v-for="(item,index) in twoidbox03" :key="item.twoid" @click="select0101(item.twoid)" :class="{demohover:index==isdemohover02}"><p>{{item.name}}</p></li>
        </ul>
    </div>
    </div>
    <!-- <div class="sort010101">
        <p class="sort010101text">作品分类:</p>
        <ul>
            <li><p>大象</p><span>(1965)</span></li>
            <li><p>大象1</p><span>(1965)</span></li>
            <li><p>大象2</p><span>(1965)</span></li>
            <li><p>大象3</p><span>(1965)</span></li>
        </ul>
    </div> -->
    <div class="sort02">
        <ul>
            <li class="more" :class="{active:isresentshow}"><p @click="resentchange">最近更新</p></li>
            <li class="new" :class="{active:isdownshow}"><p @click="mostuse">最多下载</p></li>
        </ul>
        <!-- <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox> -->
        <p class="all">共有{{listnewlength}}个素材</p>
    </div>
    <div class="first">
        <ul class="role">
            <li v-for="(item,index) in listnew" :key="item.id" v-if="index<15">
                <div class="roleimg"><img :src="'/zeronerobot/'+item.content"></div>
                <div class="roleup">
                <a :href="'/zeronerobot/'+item.content" download><button @click="collectmaster(item.id)">下载</button></a>
                    <p class="text">{{item.name}}</p>
                </div>
            </li>
        </ul>
    </div>

    <!-- element分页 -->
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
    <!-- <div class="sortnum01" v-show="numpage">
        <ul>
            <li v-for="(item,index) in pageitem" :key="item.pageid" v-if="index<6" @click="Selectpage(item.pageid)" :class="{demohover:index+1==isdemohover03}"><p>{{item.pageid}}</p></li>
        </ul>
        <div> -->
            <!-- <p>...</p> -->
            <!-- <p class="night" @click="Selectpage(4)">4</p> -->
            <!-- <p class="endpage" @click="Selectpagebefore">上一页</p>
            <p class="nextpage" @click="Selectpageafter">下一页</p>
        </div>

        <div class="sortfly">
            <p class="one">到第</p>
            <div>
                <input type="text" v-model="pageuser">
            </div>
            <p class="two">页</p>
            <button @click="Selectpageuser">确定</button>
        </div>
    </div> -->
    <p class="endtext">部分素材来源自网络，版权归原作者所有。所有素材仅供个人创作娱乐使用，禁止做任何商业用途，由此产生的任何法律纠纷本网站不予承担</p>
  </div>
</template>
<script>
import Sourcehead from '@/components/Source/Sourcehead'
export default{
    data() {
      return {
        list:'',
        listnew:'',//展示数据
        sort0101:false,//第二级作品分类
        sort0102:false,//第二级作品分类
        sort0103:false,//第二级作品分类
        isdemohover01:'',//第二级分类数据
        isdemohover02:0,//第三级分类数据
        listnewlength:'',//请求数据的长度
        listnumtotal:0,//请求的总页数
        cur_page:'',//当前页数
        isresentshow:'',//最近更新背景
        isdownshow:'',//最多下载背景
        currentPage3:1,//初始化当前页数
        oneidbox:[
            {oneid:0,name:"全部"},
            {oneid:1,name:"卡通场景"},
            {oneid:2,name:"生活场景"},
            {oneid:3,name:"游戏场景"}
        ],
        twoidbox01:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"名胜古迹"},
            {twoid:2,name:"乡间风格"},
            {twoid:3,name:"自然风格"},
        ],
        twoidbox02:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"草地"},
            {twoid:2,name:"海边"},
            {twoid:3,name:"街道"},
            {twoid:4,name:"学校"},
        ],
        twoidbox03:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"节日风"},
            {twoid:2,name:"名胜古迹"},
        ],
        // pageitem:[
        //     {pageid:1},
        //     {pageid:2},
        //     {pageid:3},
        //     {pageid:4},
        // ],
      };
    },
    mounted(){
        this.Getsource()
    },
    methods:{
        select01(id){
            // this.handleCurrentChange(1)
            this.currentPage3=1
            this.isresentshow=false
            this.isdownshow=false
            this.isdemohover01 = id
            this.isdemohover02 = 0
            switch(id){               
                case id=0:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:2,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = true  
                    this.listnewlength = response.data.total
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10  
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break
                case id=1:
                    this.sort0101=true;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:2,
                        twonav:1,
                        pagesize:15
                    })
                    .then(response => {  
                    this.listnewlength = response.data.total
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10  
                    this.numpage = false     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break;
                case id=2:
                    this.sort0101=false;
                    this.sort0102=true;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:2,
                        twonav:2,
                        pagesize:15
                    })
                    .then(response => { 
                    this.numpage = false  
                    this.listnewlength = response.data.total  
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break;
                case id=3:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=true;
                    this.axios.post('/res/resourcelist',{
                        onenav:2,
                        twonav:3,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = false  
                    this.listnewlength = response.data.total 
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break;
            }

        },
            // 第二级选择
        select0101(id){
            // this.handleCurrentChange(1)
            this.currentPage3=1
            this.isresentshow=false
            this.isdownshow=false
            this.isdemohover02 = id
            if(id==0){
                this.isdemohover03=1
                this.axios.post('/res/resourcelist',{
                onenav:2,
                twonav:this.isdemohover01,
                threenav:0,
                pagesize:15
            })
            .then(response => { 
                this.listnewlength = response.data.total 
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.listnew=response.data.data  
                this.numpage = true

                })
            }else{
            this.axios.post('/res/resourcelist',{
                onenav:2,
                twonav:this.isdemohover01,
                threenav:id,
                pagesize:15
            })
            .then(response => { 
                this.listnewlength = response.data.total 
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.listnew=response.data.data  
                this.numpage = false
                })
            }
            
        },

        //最近更新
        resentchange(){
            // this.handleCurrentChange(1)
            this.currentPage3=1
            this.isresentshow=true
            this.isdownshow=false
            this.isdemohover03 = 1
            this.axios.post('/res/resourcelist',{
                onenav:2,
                state:1,
                pagenum:this.cur_page,
                pagesize:15
            })
            .then(response => {   
                this.listnewlength = response.data.total
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.list=response.data.data
                this.listnew=response.data.data     
            })
        },
        //最多使用
        mostuse(){
            // this.handleCurrentChange(1)
            this.currentPage3=1
            this.isresentshow=false
            this.isdownshow=true
            this.axios.post('/res/resourcelist',{
                onenav:2,
                state:2,
                pagenum:this.cur_page,
                pagesize:15
            })
            .then(response => {   
                this.listnewlength = response.data.total
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.list=response.data.data
                this.listnew=response.data.data     
            })
        },

        // 默认加载的数据
        Getsource(){
                // this.handleCurrentChange(1)
                this.currentPage3=1
                this.$store.state.sourcesearch=false,
                this.$store.state.sourcebackg=true,
                this.$store.state.sourcegame=false,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=false,
                this.$store.state.sourcestudy=false,
            this.axios.post('/res/resourcelist',{
                onenav:2,
                pagesize:15
            })
            .then(response => {   
                this.list = response.data.data
                this.listnew = response.data.data
                this.listnewlength = response.data.total
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10

            })
        },
        // 采集函数
        collectmaster(id){
            this.axios.post('/res/collectmaterial',{
                id:id,
            })
            .then(response => {   
 
            })
        },
        // // 选择页数
        // Selectpage(id){
        //     this.isdemohover03 = id
        //     this.axios.post('/res/resourcelist',{
        //         onenav:1,
        //         twonav:this.isdemohover01,
        //         threenav:this.isdemohover02,
        //         pagenum:id,
        //         pagesize:15
        //     })
        //     .then(response => {  
        //         this.listnew=response.data.data  
        //         if(this.listnew.length<15){
        //             this.numpage = false
        //         }else{
        //             this.numpage = true
        //         }
        //         this.listnew=response.data.data
        //     })
        // },
        // // 选择跳转页数
        // Selectpageuser(){
        //     if(this.pageuser<1||this.pageuser>4){
        //         this.$message({
        //             message:'已经超过页数限制'
        //         })
        //     }else{
        //         this.isdemohover03 = this.pageuser
        //         this.axios.post('/res/resourcelist',{
        //             onenav:1,
        //             twonav:this.isdemohover01,
        //             threenav:this.isdemohover02,
        //             pagenum:this.pageuser,
        //             pagesize:15
        //         })
        //         .then(response => {  
        //             this.listnew=response.data.data  
        //             if(this.listnew.length<15){
        //                 this.numpage = true
        //             }else{
        //                 this.numpage = true
        //             }
        //             this.listnew=response.data.data
        //         })
        //     }
        // },
        // // 前页数
        // Selectpagebefore(){
        //     if(this.isdemohover03<=1){
        //         this.isdemohover03=1
        //     }
        //     this.axios.post('/res/resourcelist',{
        //         onenav:2,
        //         twonav:this.isdemohover01,
        //         threenav:this.isdemohover02,
        //         pagenum:--this.isdemohover03,
        //         pagesize:15
        //     })
        //     .then(response => {  
        //         this.listnew=response.data.data  
        //         if(this.listnew.length<15){
        //             this.numpage = true
        //         }else{
        //             this.numpage = true
        //         }
        //         this.listnew=response.data.data
        //     })
        // },
        // // 后页数
        // Selectpageafter(){
        //     if(this.isdemohover03>=4){
        //         this.isdemohover03=4
        //     }
        //     this.axios.post('/res/resourcelist',{
        //         onenav:2,
        //         twonav:this.isdemohover01,
        //         threenav:this.isdemohover02,
        //         pagenum:++this.isdemohover03,
        //         pagesize:15
        //     })
        //     .then(response => {  
        //         this.listnew=response.data.data  
        //         if(this.listnew.length<15){
        //             this.numpage = true
        //         }else{
        //             this.numpage = true
        //         }
        //         this.listnew=response.data.data
        //     })
        // }


        //获取当前页数
        handleCurrentChange(val){
            this.cur_page = val;
            this.currentPage3=val;
            this.getData()
        },

        // 前页数
        Selectpagebefore(){
            this.cur_page = this.cur_page-1
            this.getData()
        },
        // 后页数
        Selectpageafter(){
            this.cur_page = this.cur_page+1
            this.getData()
        },
        //根据页数获取数据
        getData(){
            this.axios.post('/res/resourcelist',{
                onenav:2,
                twonav:this.isdemohover01,
                threenav:this.isdemohover02,
                pagenum:this.cur_page,
                pagesize:15
            })
            .then(response => {  
                this.listnew=response.data.data  
                this.listnew=response.data.data
            })
        }
    },
    components:{
        Sourcehead
    }
}
</script>
<style scoped lang="less">
@import '../../../assets/index.less';
.container63{
    width: 100%;
    min-height: 456px;
    z-index: 100;
    position: relative;
    top: -70px;
    left: 0px;
    display: inline-block;
    background: @background-color;
    padding-bottom: 140px;
}
.container63 .baozhu{
    width: 100%;
    height: auto;
}
.container63 .sort01 ul{
    list-style: none;
    position: relative;
    left: 132px;
    top: -20px;
    width: 1040px;
    height: 24px;
}
.container63 .sort01text{
    display: inline-block;
    position: relative;
    left: 57px;
    color:@gray;
    font-size:@sm-size;
}
.container63 .sort01 ul p{
    display: inline-block;
    padding-left: 15px;
    position: relative;
    top: 2px;
}
.container63 .sort01 ul li{
    float: left;
    width: auto;
    height: 24px;
    color:@main-color;
    font-size:@sm-size;
    border: 1px solid @main-color;
    margin-right: 14px;
    font-weight: 600;
    padding-right: 15px;
    cursor: pointer;
}
.container63 .sort01 ul li:hover{
    color:@background-color;
    background: @main-color;
}

.container63 .sort0101{
    height: 50px;
    width: 1000px;
    display: block;
}
.container63 .sort0101 ul{
    list-style: none;
    position: absolute;
    left: 132px;
    top: 60px;
    width: 1040px;
    height: auto;
    padding-left:0;
}
.container63 .sort0101text{
    display: inline-block;
    position: relative;
    left: -325px;
    top: 14px;
    color:@gray;
    font-size:@sm-size;
}
.container63 .sort0101 ul p{
    display: inline-block;
    margin-top: 0px;
    position: relative;
    top: 2px;
    }
.container63 .sort0101 ul li{
    float: left;
    width: auto;
    height: 24px;
    color:@main-color;
    font-size:@sm-size;
    border:1px solid red;
    text-align:center;
    margin-right: 14px;
    margin-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    font-weight: 600;
    cursor: pointer;
}
.container63 .sort0101 ul li:hover{
    color: @background-color;
    background: @main-color;
}


/* .container66 .sort010101 ul{
   list-style: none;
   position:absolute;
   left: 120px;
   top: 90px;
}
.container66 .sort010101text{
   display: inline-block;
   position: relative;
   left: -650px;
   top: 50px;
   color:#7f6b6f;
   font-size: 13px;
}
.container66 .sort010101 ul p{
   display: inline-block;
   margin-top: 0px;
}
.container66 .sort010101 ul li{
   float: left;
   width: 114px;
   height: 22px;
   color:#7f6b6f;
   font-size:@xm-size;
   border: 1px solid #dcdcdc;
   border-radius: 20px;
   margin-right: 21px;
} */


.container63 .sort02{
   width: 1086px;
   height: 30px;
   background: @mainbg-color;
   position: relative;
   left: 57px;
   top: 28px;
   margin-bottom: 40px;
   display: block;
}
.container63 .sort02 ul{
   list-style: none;
   left: 0px;
   top: 0px;
   width: 170px;
   height: 30px;
}
.container63 .sort02 .more{
   width: 86px;
   height: 26px;
   color:@main-color;
   font-size:@xm-size;
   margin-right: 14px; 
   text-align: center;
   position: absolute;
   top: 0px;
   left: 0px;
   padding-top: 4px;
   cursor: pointer;
}
.container63 .active{
   color:@background-color;
   background: @main-color;
}
.container63 .active p{
   color:@background-color;
}
.container63 .sort02 .new{
   width: 86px;
   height: 26px;
   color:@main-color;
   font-size:@xm-size;
   margin-right: 14px; 
   text-align: center;
   position: absolute;
   top: 0px;
   left: 86px;
   padding-top: 4px;
   cursor: pointer;
}
.container63 .sort02 ul li:hover{
   color:@background-color;
   background: @main-color;
}
.container63 .sort02 .nobuy{
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -28px;
   left: 80px;
}

.container63 .sort02 .all{
   float: left;
   width: 122px;
   height: 30px;
   color:@main-color;
   font-size:@xm-size;
   position: relative;
   top: -26px;
   left: 966px;
}

.container63 .first {
    width: 1200px;
    height: 3px;
    margin-top:60px;
}
.container63 .first .role{
    position: relative;
    top: -20px;
    left: 57px;  
    margin-top: 10px;
    display: block;
}
.container63 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
    z-index: 100;
}
.container63 .first .role li{
    float: left;
    width: 198px;
    height: 367px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container63 .first .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container63 .first .roleup a:hover{
    color: @background-color; 
}

.container63 .first .roleup button{
    width: 60px;
    height: 26px;
    color: @main-color; 
    border: 1px solid @main-color;
    font-size:@sm-size;
    position: relative;
    background: @mainbg-color;
    left: 120px;
    top: 44px;
    cursor: pointer;
}
.container63 .first .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container63 .first .roleimg{
    height: 288px;
    width: 198px;
}
.container63 .first .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container63 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container63 .sortpagenum{
    float: left;
    position: absolute;
    bottom:60px;
    left: 260px;
    width: 675px;
    height: 32px;
    text-align: center;
    display: block;
}
.container63 .sortpagenumcenter{
    margin: 0 auto;
    width: 575px;
}

.container63 .sortnum01{
    position: absolute;
    top: 1374px;
    left:320px;
    width: 995px;
    height: 32px;
}
.container63 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
}
.container63 .sortnum01 ul li:hover{
    background: @main-color;
    color: @background-color;
}
.container63 .sortnum01 .endpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 0px;
    top: 0px;
    border: 1px solid @border-color;
    text-align: center;
    cursor: pointer;
}
.container63 .sortnum01 .nextpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 14px;
    top: 0px;
    border: 1px solid @border-color;
    text-align: center;
    cursor: pointer;
}
.container63 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container63 .sortnum01 .endpage:hover{
    background: @main-color;
    color: @background-color;
}
/* .container63 .sortnum01 .night{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    position: relative;
    left: 20px;
    top: -21px;
} */
/* .container63 .sortnum01 .night:hover{
    background: @main-color;
    color: @background-color;
} */
.container63 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container63 .sortnum01 .nextpage:hover{
    background: @main-color;
    color: @background-color;
}
.container63 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container63 .sortnum01 .sortfly .one{
    position: relative;
    left: 370px;
    top: -20px;
    width: 30px;
    height: 14px;
    font-size:@ss-size;
    color: @gray;
}
.container63 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 452px;
    top: -32px;
    font-size:@ss-size;
    color: @gray;
}
.container63 .sortnum01 .sortfly input{
    position: relative;
    left: 85px;
    top: -12px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container63 .sortnum01 .sortfly input:focus{
   border: 1px solid @main-color;
   padding-left: 4px;
}
.container63 .sortnum01 .sortfly button{
    position: relative;
    left: 478px;
    top: -52px;
    width: 53px;
    height: 25px;
    font-size:@ss-size;
    color: #818181;
    background: @background-color;
    border: 1px solid #D2D2D2;
}
.container63 .sortnum01 .sortfly button:hover{
    background: @main-color;
    color: @background-color;
    border: none;
}
.container63 .endtext{
    float: left;
    position: absolute;
    bottom:-60px;
    left: 100px;
    width: 1000px;
    height: 32px;
    text-align: center;
    display: block;
    color: #999;
    font-size: @ss-size;
} 

.container63 .demohover{
   background:@main-color;
}
.container63 .demohover p{
   color: @background-color;
}
</style>
