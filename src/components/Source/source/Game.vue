<template>
  <div class="container64" v-show="$store.state.sourcegame">
    <div class="sort01">
        <p class="sort01text">作品分类:</p>
        <ul>
            <li v-for="(item,index) in oneidbox" :key="item.oneid" @click="Getsourcetwo(item.oneid)" :class="{demohover:index==isdemohover01}"><p>{{item.name}}</p></li>
        </ul>
    </div>
    <div class="sort02">
        <ul>
            <li class="more"><p @click="resentchange">最近更新</p></li>
            <li class="new"><p @click="mostuse">最多下载</p></li>
        </ul>
        <!-- <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox> -->
        <p class="all">共有{{listnewlength}}个素材</p>
    </div>
    <div class="first">
        <ul class="role">
            <li v-for="(item,index) in listnew" :key="item.id" v-if="index<15">
                <div class="roleimg">
                    <div class="roleimgbox">
                            <img :src="'/codeplay/'+item.content" alt="">
                    </div>
                </div>
                <div class="roleup">
                <a :href="'/codeplay/'+item.content" download><button @click="collectmaster(item.id)">下载</button></a>
                    <p class="text">{{item.name}}</p>
                </div>
            </li>
        </ul>
    </div>

        <!-- element分页 -->
        <div class="sortpagenum" v-show="numpage">
            <div class="sortpagenumcenter">
                <el-pagination
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
            <li v-for="(item,index) in pageitem" :key="item.pageid" v-if="index<10" @click="Selectpage(item.pageid)" :class="{demohover:index+1==isdemohover03}"><p>{{item.pageid}}</p></li>
        </ul>
        <div> -->
            <!-- <p>...</p>
            <p class="night" @click="Selectpage(2)">2</p> -->
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
    <!-- <p class="endtext">部分素材来源自网络，版权归原作者所有。所有素材仅供个人创作娱乐使用，禁止做任何商业用途，由此产生的任何法律纠纷本网站不予承担</p> -->
  </div>
</template>
<script>
import Sourcehead from '@/components/Source/Sourcehead'
export default{
    data() {
      return {
        numpage:true,
        list:'',
        listnew:'',
        nowid:1,
        pageuser:'',
        checked: true,
        sort0101:false,
        sort0102:false,
        sort0103:false,
        isdemohover01:'',
        isdemohover02:0,
        isdemohover03:1,
        pagesum:'',//页面的页数
        listnewlength:'',//请求数据的长度
        listnumtotal:0,//请求的总页数
        cur_page:'',//当前页数
        oneidbox:[
            {oneid:0,name:"全部"},
            {oneid:1,name:"NPC"},
            {oneid:2,name:"宝石"},
            {oneid:3,name:"穿戴"},
            {oneid:4,name:"道具"},
            {oneid:5,name:"技能"},
            {oneid:6,name:"角色"},
            {oneid:7,name:"特技"},
            {oneid:8,name:"武器"},
            {oneid:9,name:"药水"},
        ],
        pageitem:[
            {pageid:1},
            {pageid:2},
            {pageid:3},
            {pageid:4},
            {pageid:5},
            {pageid:6},
            {pageid:7},
            {pageid:8},
            {pageid:9},
            {pageid:10},
        ],
      };
    },
    mounted(){
        this.Getsource()
    },
    methods:{
        // select01(id){
        //     this.isdemohover01 = id
        //     this.isdemohover02 = 0
        //     switch(id){                
        //         case id=0:
        //             this.axios.post('/res/resourcelist',{
        //                 onenav:4,
        //                 pagesize:15
        //             })
        //             .then(response => {  
        //             this.numpage = true     
        //             this.list=response.data.data
        //             this.listnew=response.data.data
        //             })
        //         break
        //         case id=1:
        //             this.axios.post('/res/resourcelist',{
        //                 onenav:4,
        //                 twonav:1,
        //                 pagesize:15
        //             })
        //             .then(response => {  
        //             this.numpage = false     
        //             this.list=response.data.data
        //             this.listnew=response.data.data
        //             })
        //         break;
        //         case id=2:
        //             this.axios.post('/res/resourcelist',{
        //                 onenav:4,
        //                 twonav:2,
        //                 pagesize:15
        //             })
        //             .then(response => { 
        //             this.numpage = false       
        //             this.list=response.data.data
        //             this.listnew=response.data.data
        //             })
        //         break;
        //     }

        // },
        // 加载默认数据
        Getsource(){
                this.$store.state.sourcesearch=false,
                this.$store.state.sourcebackg=false,
                this.$store.state.sourcegame=true,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=false,
                this.$store.state.sourcestudy=false,
            this.axios.post('/res/resourcelist',{
                onenav:4,
                pagesize:15
            })
            .then(response => {   
                this.listnewlength = response.data.total
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10   
                this.list=response.data.data
                this.listnew=response.data.data

            })
        },
        // 二级菜单
        Getsourcetwo(id){
            this.isdemohover01 = id
            this.isdemohover02 = 0
            if(id!=0){
                this.axios.post('/res/resourcelist',{
                    onenav:4,
                    twonav:id
                })
                .then(response => {  
                    this.listnewlength = response.data.total 
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10   
                    this.list=response.data.data
                    this.listnew=response.data.data
                })
            }else{
                this.numpage=true
                this.axios.post('/res/resourcelist',{
                    onenav:4,
                })
                .then(response => {  
                    this.listnewlength = response.data.total 
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10   
                    this.list=response.data.data
                    this.listnew=response.data.data
                })
            }
        },

          //最近更新
        resentchange(){
            this.axios.post('/res/resourcelist',{
                onenav:4,
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
            this.axios.post('/res/resourcelist',{
                onenav:4,
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


        // 采集
        collectmaster(id){
                this.axios.post('/res/collectmaterial',{
                userid:sessionStorage.userid,
                id:id,
                // type:4,
                state:1
            })
            .then(response => {   
            })
        },
        // // 选择页数
        // Selectpage(id){
        //     this.isdemohover03 = id
        //     this.axios.post('/res/resourcelist',{
        //         onenav:4,
        //         twonav:this.isdemohover01,
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
        //     if(this.pageuser<1||this.pageuser>10){
        //         this.$message({
        //             message:'已经超过页数限制',
        //             center:true
        //         })
        //     }else{
        //         this.isdemohover03 = this.pageuser
        //         this.axios.post('/res/resourcelist',{
        //             onenav:4,
        //             twonav:this.isdemohover01,
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
        //         onenav:4,
        //         twonav:this.isdemohover01,
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
        //     if(this.isdemohover03>=10){
        //         this.isdemohover03=10
        //     }
        //     this.axios.post('/res/resourcelist',{
        //         onenav:4,
        //         twonav:this.isdemohover01,
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
                onenav:4,
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
.container64{
    width: 100%;
    height: 1286px;
    z-index: 100;
    position: relative;
    top: -70px;
    left: 0px;
    background: @background-color;
}
.container64 .sort01 ul{
    list-style: none;
    position: relative;
    left: 122px;
    top: -20px;
    width: 1040px;
    height: 24px;
}
.container64 .sort01text{
    display: inline-block;
    position: relative;
    left: 46px;
    color:@gray;
    font-size:@sm-size;
}
.container64 .sort01 ul p{
    display: inline-block;
    padding-left: 15px;
    position: relative;
    top: 2px;
}
.container64 .sort01 ul li{
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
.container64 .sort01 ul li:hover{
    color:@background-color;
    background: @main-color;
}
.container64 .sort0101 ul{
    list-style: none;
    position: absolute;
    left: 122px;
    top: 60px;
    width: 1040px;
    height: auto;
    padding-left:0;
}
.container64 .sort0101text{
    display: inline-block;
    position: relative;
    left: 46px;
    top: 12px;
    color:@gray;
    font-size:@sm-size;
}
.container64 .sort0101 ul p{
    display: inline-block;
    margin-top: 0px;
}
.container64 .sort0101 ul li{
    float: left;
    width: auto;
    height: 24px;
    color:@main-color;
    font-size:@xm-size;
    border:1px solid red;
    text-align:center;
    margin-right: 14px;
    margin-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    font-weight: 600;
}
.container64 .sort0101 ul li:hover{
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


.container64 .sort02{
    width: 1086px;
    height: 30px;
    background: @mainbg-color;
    position: relative;
    left: 47px;
    top: 28px;
}
.container64 .sort02 ul{
    list-style: none;
    left: 0px;
    top: 0px;
    width: 170px;
    height: 30px;
}
.container64 .sort02 .more{
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
.container64 .sort02 .new{
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
.container64 .sort02 ul li:hover{
    color:@background-color;
    background: @main-color;
}
.container64 .sort02 .nobuy{
    width: 92px;
    height: 30px;
    color:#7f6b6f;
    font-size: 13px;
    margin-right: 4px;
    position: relative;
    top: -28px;
    left: 80px;
}

.container64 .sort02 .all{
    float: left;
    width: 122px;
    height: 30px;
    color:@main-color;
    font-size:@xm-size;
    position: relative;
    top: -26px;
    left: 886px;
}


.container64 .first .role{
    position: absolute;
    top: 150px;
    left: 46px;  
    margin-top: -40px;
}
.container64 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container64 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .first .roleup a{
    color: @main-color;
    text-decoration: none; 

}
/* .container64 .first .roleup a:hover{
    color: @background-color; 
    background: @main-color;
} */
.container64 .first .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .first .roleup button{
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
.container64 .first .roleimg{
    height: 198px;
    width: 198px;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container64 .first .roleimg .roleimgbox{
    height: 163px;
    width: 170px;
    text-align: center;
    margin: 0 auto;
}
.container64 .first .roleimg img{
    height: 100%;
    width: 100%;
    margin-top: 20px;
}
.container64 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container64 .sortpagenum{
    position: absolute;
    top: 1104px;
    left: 260px;
    width: 675px;
    height: 32px;
    text-align: center;
}
.container64 .sortpagenumcenter{
    margin: 0 auto;
    width: 575px;
}

.container64 .sortnum01{
    position: absolute;
    top: 1104px;
    left:200px;
    width: 995px;
    height: 32px;
}
.container64 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
}
.container64 .sortnum01 ul li:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .sortnum01 .endpage{
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
.container64 .sortnum01 .nextpage{
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
.container64 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container64 .sortnum01 .endpage:hover{
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
.container64 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container64 .sortnum01 .nextpage:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container64 .sortnum01 .sortfly .one{
    position: relative;
    left: 620px;
    top: -20px;
    width: 30px;
    height: 14px;
    font-size:@ss-size;
    color: @gray;
}
.container64 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 702px;
    top: -32px;
    font-size:@ss-size;
    color: @gray;
}
.container64 .sortnum01 .sortfly input{
    position: relative;
    left: 75px;
    top: -12px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container64 .sortnum01 .sortfly input:focus{
    border: 1px solid @main-color;
    padding-left: 4px;
}
.container64 .sortnum01 .sortfly button{
    position: relative;
    left: 718px;
    top: -52px;
    width: 53px;
    height: 25px;
    font-size:@ss-size;
    color: #818181;
    background: @background-color;
    border: 1px solid #D2D2D2;
}
.container64 .sortnum01 .sortfly button:hover{
    background: @main-color;
    color: @background-color;
    border: none;
}
/* .container66 .endtext{
    width: 900px;
    height: 12px;
    position: relative;
    top: 1128px;
    left: 26px;
    font-size:@ss-size;
    display: inline-block;
} */
.container64 .demohover{
    background:@main-color;
}
.container64 .demohover p{
    color: @background-color;
}
</style>
