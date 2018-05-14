<template>
    <div class="container6400" v-show="$store.state.sourcelesson">
        <div class="sort01">
        </div>
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
                    <div class="roleimg"><img class="imglesson" :src="'/codeplay'+item.content"></div>
                    <div class="roleup">
                        <!-- <button @click="collectmaster(item.id)">采集</button> -->
                        <a :href="'/codeplay'+item.content" download><button @click="downloadmaster(item.id)">下载</button></a>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="sortnum01">
            <ul>
                <li v-for="(item,index) in pageitem" :key="item.pageid" @click="Selectpage(item.pageid)" :class="{demohover:index==isdemohover03-1}"><p>{{item.pageid}}</p></li>
            </ul>
            <div>
                <p>...</p>
                <p class="night" @click="Selectpage(9)">9</p>
                <p class="endpage" @click="Selectpagebefore">上一页</p>
                <p class="nextpage" @click="Selectpageafter">下一页</p>
            </div>

            <div class="sortfly">
                <p class="one">到第</p>
                <div>
                    <input type="text" v-model="pageuser">
                </div>
                <p class="two">页</p>
                <button>确定</button>
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
        list:'',
        listnew:'',
        nowid:1,
        pageuser:'',
        oneselectid:'',
        checked: true,
        sort0101:false,
        sort0102:false,
        sort0103:false,
        isdemohover03:'',
        // oneidbox:[
        //     {oneid:0,name:"全部"},
        //     {oneid:1,name:"NPC"},
        //     {oneid:2,name:"宝石"},
        //     {oneid:3,name:"穿戴"},
        //     {oneid:4,name:"道具"},
        //     {oneid:5,name:"技能"},
        //     {oneid:6,name:"人物"},
        //     {oneid:7,name:"特技"},
        //     {oneid:8,name:"武器"},
        //     {oneid:9,name:"药水"},
        // ],
        pageitem:[
            {pageid:1},
            {pageid:2},
            {pageid:3},
            {pageid:4},
            {pageid:5},
            {pageid:6},
        ],
      };
    },
    mounted(){
        this.Getsource()
    },
    methods:{
        // select01(id){
        //     this.oneselectid = id
        //     if(this.oneselectid = 0){
        //         this.axios.post('/res/resourcelist',{
        //             onenav:6,
        //         })
        //         .then(response => {   
        //             this.listnew=response.data.data
        //             console.log(response)
        //         })
        //     }else{
        //         this.axios.post('/res/resourcelist',{
        //             onenav:6,
        //             twonav:id
        //         })
        //         .then(response => {   
        //             this.listnew=response.data.data
        //             console.log(id)
        //             console.log(response)
        //         })
        //     }
        // },
        Getsource(){
                this.$store.state.sourcesearch=false,
                this.$store.state.sourcebackg=false,
                this.$store.state.sourcegame=false,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=true,
                this.$store.state.sourcestudy=false,
            this.axios.post('/res/resourcelist',{
                onenav:6,
                pagesize:15
            })
            .then(response => {   
                // this.list=response.data.data
                // this.listnew=response.data.data
       
            })
        },
        // Getsourcetwo(id){
        //     this.axios.post('/res/resourcelist',{
        //         onenav:1,
        //         twonav:id
        //     })
        //     .then(response => {   
        //         this.list=response.data.data
        //         this.listnew=response.data.data
        //     })
        // },
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
        Selectpage(id){
            this.nowid = id?id:1
            var head01 = 16*(id-1)
            var foot01 = 16*id-1
     
            this.listnew=this.list.slice(head01,foot01)
        },
        Selectpageuser(id){
            var head01 = 16*(this.pageuser-1)
            var foot01 = 16*this.pageuser-1
           
            this.listnew=this.list.slice(head01,foot01)
        },
        Selectpagebefore(){
            var id =this.nowid
            var head01 = 16*(id-2)
            var foot01 = 16*(id-1)-1
            this.nowid=this.nowid-1
          
            this.listnew=this.list.slice(head01,foot01)
        },
        Selectpageafter(){
            var id =this.nowid
            var head01 = 16*(id)
            var foot01 = 16*(id+1)-1
            this.nowid=this.nowid+1
          
            this.listnew=this.list.slice(head01,foot01)
        }
    },
    components:{
        Sourcehead
    }
}
</script>
<style scoped lang="less">
@import '../../../assets/index.less';
.container6400{
    width: 100%;
    height: 1286px;
    z-index: 100;
    position: relative;
    top: -86px;
    left: 0px;
    background: @background-color;
}
.container6400 .sort01 ul{
    list-style: none;
    position: relative;
    left: 122px;
    top: -60px;
    width: 1040px;
    height: 24px;
}
.container6400 .sort01text{
    display: inline-block;
    position: relative;
    left: 46px;
    color:@gray;
    font-size:@sm-size;
}
.container6400 .sort01 ul p{
    display: inline-block;
    padding-left: 15px;
    position: relative;
    top: 2px;
}
.container6400 .sort01 ul li{
    float: left;
    width: 60px;
    height: 24px;
    color:@main-color;
    font-size:@sm-size;
    border: 1px solid @main-color;
    margin-right: 14px;
    font-weight: 600;
    cursor: pointer;
}
.container6400 .sort01 ul li:hover{
    color:@background-color;
    background: @main-color;
    position: relative;
    top: 2px;
}
.container6400 .sort0101 ul{
    list-style: none;
    position: absolute;
    left: 122px;
    top: 60px;
    width: 1040px;
    height: auto;
    padding-left:0;
}
.container6400 .sort0101text{
    display: inline-block;
    position: relative;
    left: -406px;
    top: 12px;
    color:@gray;
    font-size:@sm-size;
}
.container6400 .sort0101 ul p{
    display: inline-block;
    margin-top: 0px;
}
.container6400 .sort0101 ul li{
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
}
.container6400 .sort0101 ul li:hover{
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


.container6400 .sort02{
   width: 1086px;
   height: 30px;
   background: @mainbg-color;
   position: relative;
   left: 57px;
   top: 28px;
}
.container6400 .sort02 ul{
   list-style: none;
   left: 0px;
   top: 0px;
   width: 170px;
   height: 30px;
}
.container6400 .sort02 .more{
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
}
.container6400 .sort02 .new{
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
}
.container6400 .sort02 ul li:hover{
   color:@background-color;
   background: @main-color;
}
.container6400 .sort02 .nobuy{
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -28px;
   left: 80px;
}

.container6400 .sort02 .all{
   float: left;
   width: 122px;
   height: 30px;
   color:@main-color;
   font-size:@xm-size;
   position: relative;
   top: -26px;
   left: 886px;
}
.container6400 .first .role{
    position: absolute;
    top: 110px;
    left: 46px;  
    margin-top: -40px;
}
.container6400 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container6400 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container6400 .first .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
/* .container6400 .first .roleup a{
    text-decoration: none;
    color: @main-color;
} */
.container6400 .first .roleup a:hover{
    text-decoration: none;
    color: @background-color;
}
.container6400 .first .roleup button{
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
.container6400 .first .roleimg{
    height: 198px!important;
    width: 198px!important;
    overflow: hidden;
}
.container6400 .first .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container6400 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}

.container6400 .sortnum01{
    position: relative;
    top: 1104px;
    left:120px;
    width: 995px;
    height: 32px;
}
.container6400 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
}
.container6400 .sortnum01 ul li:hover{
    background: @main-color;
    color: @background-color;
}
.container6400 .sortnum01 .endpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 34px;
    top: -21px;
    border: 1px solid @border-color;
    text-align: center;
    cursor: pointer;
}
.container6400 .sortnum01 .nextpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 48px;
    top: -21px;
    border: 1px solid @border-color;
    text-align: center;
    cursor: pointer;
}
.container6400 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container6400 .sortnum01 .endpage:hover{
    background: @main-color;
    color: @background-color;
}
.container6400 .sortnum01 .night{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    position: relative;
    left: 20px;
    top: -21px;
}
.container6400 .sortnum01 .night:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container6400 .sortnum01 .nextpage:hover{
    background: @main-color;
    color: @background-color;
}
.container6400 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container640 .sortnum01 .sortfly .one{
    position: relative;
    left: 682px;
    top: -42px;
    width: 30px;
    height: 14px;
    font-size:@ss-size;
    color: @gray;
}
.container6400 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 752px;
    top: -56px;
    font-size:@ss-size;
    color: @gray;
}
.container6400 .sortnum01 .sortfly input{
    position: relative;
    left: 100px;
    top: -35px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container6400 .sortnum01 .sortfly input:focus{
    border: 1px solid @main-color;
    padding-left: 4px;
}
.container6400 .sortnum01 .sortfly button{
    position: relative;
    left: 772px;
    top: -75px;
    width: 53px;
    height: 25px;
    font-size:@ss-size;
    color: #818181;
    cursor: pointer;
}
.container6400 .sortnum01 .sortfly button:hover{
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
</style>
