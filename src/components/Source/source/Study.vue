<template>
    <div class="container67" v-show="$store.state.sourcestudy">
        <div class="sort01">
            <p class="sort01text">作品分类:</p>
            <ul>
                <li v-for="(item,index) in oneidbox" :key="item.oneid" @click="select01(item.oneid)" :class="{demohover:index==isdemohover01}"><p>{{item.name}}</p></li>
            </ul>
        </div>
        <!-- <div class="sort0101" v-show="sort0101">
        <p class="sort0101text">作品分类:</p>
            <ul>
                <li   v-for="item in twoidbox01" :key="item.twoid"><p>{{item.name}}</p></li>
            </ul>
        </div>
        <div class="sort0101" v-show="sort0102">
            <p class="sort0101text">作品分类:</p>
            <ul>
                <li   v-for="item in twoidbox02" :key="item.twoid"><p>{{item.name}}</p></li>
            </ul>
        </div> -->
        <!-- <div class="sort0101" v-show="sort0103">
            <p class="sort0101text">作品分类:</p>
            <ul>
                <li   v-for="item in twoidbox03" :key="item.twoid"><p>{{item.name}}</p></li>
            </ul>
        </div> -->
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
                <li class="more"><p>最近更新</p></li>
                <li class="new"><p>最多使用</p></li>
            </ul>
            <!-- <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox> -->
            <p class="all">共有{{listnew.length}}个素材</p>
        </div>
        <div class="first">
            <ul class="role">
                <li v-for="(item,index) in listnew" :key="item.id" v-if="index<15">
                    <div class="roleimg"><img :src="'/codeplay/'+item.content"></div>
                    <div class="roleup">
                    <button><a :href="'/codeplay/'+item.content" download="素材.png">下载</a></button>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="sortnum01" v-show="numpage">
            <ul>
                <li v-for="(item,index) in pageitem" :key="item.pageid" v-if="index<6" @click="Selectpage(item.pageid)" :class="{demohover:index+1==isdemohover03}"><p>{{item.pageid}}</p></li>
            </ul>
            <div>
                <!-- <p>...</p>
                <p class="night" @click="Selectpage(2)">2</p> -->
                <p class="endpage" @click="Selectpagebefore">上一页</p>
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
        </div>
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
        oneidbox:[
            {oneid:0,name:"全部"},
            {oneid:1,name:"其他"},
            {oneid:2,name:"学习用品"},
        ],
        pageitem:[
            {pageid:1},
            {pageid:2},
        ],
      };
    },
    mounted(){
        this.Getsource()
    },
    methods:{
        select01(id){
            this.isdemohover01 = id
            this.isdemohover02 = 0
            switch(id){                
                case id=0:
                    this.axios.post('/res/resourcelist',{
                        onenav:3,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = true     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break
                case id=1:
                    this.axios.post('/res/resourcelist',{
                        onenav:3,
                        twonav:1,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = false     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break;
                case id=2:
                    this.axios.post('/res/resourcelist',{
                        onenav:3,
                        twonav:2,
                        pagesize:15
                    })
                    .then(response => { 
                    this.numpage = false       
                    this.list=response.data.data
                    this.listnew=response.data.data
                    })
                break;
            }

        },
        // 加载默认数据
        Getsource(){
                this.$store.state.sourcesearch=false,
                this.$store.state.sourcebackg=false,
                this.$store.state.sourcegame=false,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=false,
                this.$store.state.sourcestudy=true,
            this.axios.post('/res/resourcelist',{
                onenav:3,
                pagesize:15
            })
            .then(response => {   
                this.list=response.data.data
                this.listnew=response.data.data
                console.log(response)
            })
        },
        // 二级菜单
        Getsourcetwo(id){
            this.isdemohover01 = id
            this.isdemohover02 = 0
            this.axios.post('/res/resourcelist',{
                onenav:1,
                twonav:id
            })
            .then(response => {   
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
                console.log(response)
            })
        },
        // 选择页数
        Selectpage(id){
            this.isdemohover03 = id
            this.axios.post('/res/resourcelist',{
                onenav:3,
                twonav:this.isdemohover01,
                pagenum:id,
                pagesize:15
            })
            .then(response => {  
                this.listnew=response.data.data  
                if(this.listnew.length<15){
                    this.numpage = false
                }else{
                    this.numpage = true
                }
                this.listnew=response.data.data
            })
        },
        // 选择跳转页数
        Selectpageuser(){
            if(this.pageuser<1||this.pageuser>2){
                this.$message({
                    message:'已经超过页数限制',
                    center:true
                })
            }else{
                this.isdemohover03 = this.pageuser
                this.axios.post('/res/resourcelist',{
                    onenav:3,
                    twonav:this.isdemohover01,
                    pagenum:this.pageuser,
                    pagesize:15
                })
                .then(response => {  
                    this.listnew=response.data.data  
                    if(this.listnew.length<15){
                        this.numpage = true
                    }else{
                        this.numpage = true
                    }
                    this.listnew=response.data.data
                })
            }
        },
        // 前页数
        Selectpagebefore(){
            if(this.isdemohover03<=1){
                this.isdemohover03=1
            }
            this.axios.post('/res/resourcelist',{
                onenav:3,
                twonav:this.isdemohover01,
                pagenum:--this.isdemohover03,
                pagesize:15
            })
            .then(response => {  
                this.listnew=response.data.data  
                if(this.listnew.length<15){
                    this.numpage = true
                }else{
                    this.numpage = true
                }
                this.listnew=response.data.data
            })
        },
        // 后页数
        Selectpageafter(){
            if(this.isdemohover03>=2){
                this.isdemohover03=2
            }
            this.axios.post('/res/resourcelist',{
                onenav:3,
                twonav:this.isdemohover01,
                pagenum:++this.isdemohover03,
                pagesize:15
            })
            .then(response => {  
                this.listnew=response.data.data  
                if(this.listnew.length<15){
                    this.numpage = true
                }else{
                    this.numpage = true
                }
                this.listnew=response.data.data
            })
        }
    },
    components:{
        Sourcehead
    }
}
</script>
<style scoped>
.container67{
    width: 100%;
    height: 1286px;
    z-index: 100;
    position: relative;
    top: -70px;
    left: 0px;
    background: #fff;
    margin-bottom: 30px;
}
.container67 .sort01 ul{
    list-style: none;
    position: relative;
    left: 122px;
    top: -20px;
    width: 1040px;
    height: 24px;
}
.container67 .sort01text{
    display: inline-block;
    position: relative;
    left: 46px;
    color:#333;
    font-size: 14px;
}
.container67 .sort01 ul p{
    display: inline-block;
    padding-left: 15px;
    position: relative;
    top: 2px;
}
.container67 .sort01 ul li{
    float: left;
    width: auto;
    height: 24px;
    color:#F13232;
    font-size: 14px;
    border: 1px solid #F13232;
    margin-right: 14px;
    font-weight: 600;
    padding-right: 15px;
}
.container67 .sort01 ul li:hover{
    color:#fff;
    background: #F13232;
}
.container67 .sort0101 ul{
    list-style: none;
    position: absolute;
    left: 122px;
    top: 60px;
    width: 1040px;
    height: auto;
    padding-left:0;
}
.container67 .sort0101text{
    display: inline-block;
    position: relative;
    left: 46px;
    top: 12px;
    color:#333;
    font-size: 14px;
}
.container67 .sort0101 ul p{
    display: inline-block;
    margin-top: 0px;
}
.container67 .sort0101 ul li{
    float: left;
    width: auto;
    height: 24px;
    color:#F13232;
    font-size: 16px;
    border:1px solid red;
    text-align:center;
    margin-right: 14px;
    margin-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    font-weight: 600;
}
.container67 .sort0101 ul li:hover{
    color: #fff;
    background: #F13232;
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
   font-size: 16px;
   border: 1px solid #dcdcdc;
   border-radius: 20px;
   margin-right: 21px;
} */


.container67 .sort02{
    width: 1086px;
    height: 30px;
    background: #f5f5f5;
    position: relative;
    left: 57px;
    top: 28px;
}
.container67 .sort02 ul{
    list-style: none;
    left: 0px;
    top: 0px;
    width: 170px;
    height: 30px;
}
.container67 .sort02 .more{
    width: 86px;
    height: 26px;
    color:#F13232;
    font-size: 16px;
    margin-right: 14px; 
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: 4px;
}
.container67 .sort02 .new{
    width: 86px;
    height: 26px;
    color:#F13232;
    font-size: 16px;
    margin-right: 14px; 
    text-align: center;
    position: absolute;
    top: 0px;
    left: 86px;
    padding-top: 4px;
}
.container67 .sort02 ul li:hover{
    color:#FFF;
    background: #F13232;
}
.container67 .sort02 .nobuy{
    width: 92px;
    height: 30px;
    color:#7f6b6f;
    font-size: 13px;
    margin-right: 4px;
    position: relative;
    top: -28px;
    left: 80px;
}

.container67 .sort02 .all{
    float: left;
    width: 122px;
    height: 30px;
    color:#F13232;
    font-size: 16px;
    position: relative;
    top: -26px;
    left: 886px;
}


.container67 .first .role{
    position: absolute;
    top: 150px;
    left: 46px;  
    margin-top: -40px;
}
.container67 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container67 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: #f5f5f5;
    margin-top: 30px;
    position: relative;
}
.container67 .first .roleup a{
    color: #F13232;
    text-decoration: none; 

}
.container67 .first .roleup a:hover{
    color: #fff; 
    background: #F13232;
}
.container67 .first .roleup button:hover{
    background: #F13232;
    color: #fff;
}
.container67 .first .roleup button{
    width: 60px;
    height: 26px;
    color: #F13232; 
    border: 1px solid #F13232;
    font-size: 14px;
    position: relative;
    background: #f5f5f5;
    left: 120px;
    top: 44px;
    cursor: pointer;
}
.container67 .first .roleimg{
    height: 198px;
    width: 198px;
}
.container67 .first .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container67 .first .roleup .text{
    font-size: 18px;
    position: relative;
    left: 10px;
    top: -13px;
}

.container67 .sortnum01{
    position: absolute;
    top: 1104px;
    left:370px;
    width: 995px;
    height: 32px;
}
.container67 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid #dbdad7;
    text-align: center;
    margin-right: 10px;
}
.container67 .sortnum01 ul li:hover{
    background: #F13232;
    color: #fff;
}
.container67 .sortnum01 .endpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 0px;
    top: 0px;
    border: 1px solid #dbdad7;
    text-align: center;
}
.container67 .sortnum01 .nextpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 14px;
    top: 0px;
    border: 1px solid #dbdad7;text-align: center;
}
.container67 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container67 .sortnum01 .endpage:hover{
    background: #F13232;
    color: #fff;
}
/* .container63 .sortnum01 .night{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid #dbdad7;
    text-align: center;
    position: relative;
    left: 20px;
    top: -21px;
} */
/* .container63 .sortnum01 .night:hover{
    background: #F13232;
    color: #fff;
} */
.container67 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container67 .sortnum01 .nextpage:hover{
    background: #F13232;
    color: #fff;
}
.container67 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container67 .sortnum01 .sortfly .one{
    position: relative;
    left: 285px;
    top: -20px;
    width: 30px;
    height: 14px;
    font-size: 12px;
    color: #333;
}
.container67 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 364px;
    top: -32px;
    font-size: 12px;
    color: #333;
}
.container67 .sortnum01 .sortfly input{
    position: relative;
    left: 85px;
    top: -12px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container67 .sortnum01 .sortfly input:focus{
   border: 1px solid #F13232;
   padding-left: 4px;
}
.container67 .sortnum01 .sortfly button{
    position: relative;
    left: 388px;
    top: -52px;
    width: 53px;
    height: 25px;
    font-size: 12px;
    color: #818181;
}
.container67 .sortnum01 .sortfly button:hover{
    background: #F13232;
    color: #fff;
    border: none;
}
/* .container66 .endtext{
    width: 900px;
    height: 12px;
    position: relative;
    top: 1128px;
    left: 26px;
    font-size: 12px;
    display: inline-block;
} */
.container67 .demohover{
    background:#F13232;
}
.container67 .demohover p{
    color: #fff;
}
</style>
