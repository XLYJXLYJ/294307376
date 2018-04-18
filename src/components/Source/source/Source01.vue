<template>
  <div class="container66">
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
            <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox>
            <p class="all">共有1965个素材</p>
        </div>
        <div class="first">
            <ul class="role">
                <li v-for="item in list" :key="item.id">
                    <div class="roleimg"><img :src="'/codeplay/'+item.content"></div>
                    <div class="roleup">
                        <button>采集</button>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="sortnum01">
            <ul>
                <li v-for="(item,index) in pageitem" :key="item.pageid" @click="Selectpage(item.pageid)" :class="{demohover:index==isdemohover03}"><p>{{item.pageid+1}}</p></li>
            </ul>
            <div>
                <p>...</p>
                <p class="night">9</p>
                <p class="endpage">上一页</p>
                <p class="nextpage">下一页</p>
            </div>

            <div class="sortfly">
                <p class="one">到第</p>
                <div>
                    <input type="text">
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
        id02:'',
        checked: true,
        sort0101:false,
        sort0102:false,
        sort0103:false,
        isdemohover01:'',
        isdemohover02:'',
        isdemohover03:'',
        oneidbox:[
            {oneid:0,name:"全部"},
            {oneid:1,name:"动物"},
            {oneid:2,name:"工具"},
            {oneid:3,name:"人物"},
            {oneid:4,name:"图标"}
        ],
        twoidbox01:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"大象"},
            {twoid:2,name:"猴子"},
            {twoid:3,name:"家禽"},
            {twoid:4,name:"猫"},
            {twoid:5,name:"鸟"},
            {twoid:6,name:"其他"},
            {twoid:7,name:"狮子"},
            {twoid:8,name:"水生动物"},
            {twoid:9,name:"小狗"},
            {twoid:10,name:"鹦鹉"}
        ],
        twoidbox02:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"交通工具"},
            {twoid:2,name:"生活工具"},
        ],
        twoidbox03:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"机甲"},
            {twoid:2,name:"经典卡通"},
            {twoid:3,name:"龙珠"},
            {twoid:4,name:"冒险"},
            {twoid:5,name:"其他"},
        ],
        pageitem:[
            {pageid:0},
            {pageid:1},
            {pageid:2},
            {pageid:3},
            {pageid:4},
            {pageid:5},
        ],
      };
    },
    mounted(){
        this.Getsource()
    },
    methods:{
        select01(id){
            this.isdemohover01 = id
            this.id02 = id;
            switch(id){
                
                case id=0:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:1,
                    })
                    .then(response => {   
                        this.list=response.data.data
                        console.log(response)
                    })
                break
                case id=1:
                    this.sort0101=true;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:1,
                        twonav:1,
                    })
                    .then(response => {   
                        this.list=response.data.data
                        console.log(response.data.data)
                    })
                break;
                case id=2:
                    this.sort0101=false;
                    this.sort0102=true;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:1,
                        twonav:2,
                    })
                    .then(response => {   
                        this.list=response.data.data
                        console.log(response)
                    })
                break;
                case id=3:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=true;
                    this.axios.post('/res/resourcelist',{
                        onenav:1,
                        twonav:3,
                    })
                    .then(response => {   
                        this.list=response.data.data
                        console.log(response)
                    })
                break;
                case id=4:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:1,
                        twonav:4,
                    })
                    .then(response => {   
                        this.list=response.data.data
                        console.log(response)
                    })
                break;
            }

        },
        select0101(id){
            this.isdemohover02 = id
            this.axios.post('/res/resourcelist',{
                onenav:1,
                twonav:this.id02,
                threenav:id
            })
            .then(response => {   
                this.list=response.data.data
                console.log(response)
            })
        },
        Getsource(){
            this.axios.post('/res/resourcelist',{
                onenav:2,
            })
            .then(response => {   
                this.list=response.data.data
                console.log(response)
            })
        },
        Selectpage(id){
            this.isdemohover03 = id
            this.axios.post('/res/resourcelist',{
                onenav:1,
                // twonav:this.id02,
                // threenav:id,
                // pagenum:this.isdemohover03
            })
            .then(response => {   
                this.list=response.data.data
                console.log(response)
            })
        },
    },

        components:{
            Sourcehead
        }
}
</script>
<style scoped>
.container66{
    width: 100%;
    height: 1286px;
    z-index: 100;
    position: relative;
    top: -56px;
    left: 0px;
    background: #fff;
    margin-bottom: 30px;
}
.container66 .sort01 ul{
   list-style: none;
   position: relative;
   left: 122px;
   top: -20px;
   width: 1040px;
   height: 24px;;
}
.container66 .sort01text{
   display: inline-block;
   position: relative;
   left: 46px;
   color:#333;
   font-size: 14px;
}
.container66 .sort01 ul p{
   display: inline-block;
   padding-left: 15px;
   position: relative;
   top: 2px;
}
.container66 .sort01 ul li{
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
.container66 .sort01 ul li:hover{
   color:#fff;
   background: #F13232;
}
.container66 .sort0101 ul{
   list-style: none;
   position: absolute;
   left: 122px;
   top: 60px;
   width: 1040px;
   height: auto;
   padding-left:0;
}
.container66 .sort0101text{
   display: inline-block;
   position: relative;
   left: -326px;
   top: 12px;
   color:#333;
   font-size: 14px;
}
.container66 .sort0101 ul p{
   display: inline-block;
   margin-top: 0px;
   position: relative;
   top: 2px;
}
.container66 .sort0101 ul li{
   float: left;
   width: auto;
   height: 24px;
   color:#F13232;
   font-size: 14px;
   border:1px solid red;
   text-align:center;
   margin-right: 14px;
   margin-bottom: 14px;
   padding-left: 14px;
   padding-right: 14px;
   font-weight: 600;
}
.container66 .sort0101 ul li:hover{
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


.container66 .sort02{
   width: 1086px;
   height: 30px;
   background: #f5f5f5;
   position: relative;
   left: 57px;
   top: 58px;
}
.container66 .sort02 ul{
   list-style: none;
   left: 0px;
   top: 0px;
   width: 170px;
   height: 30px;
}
.container66 .sort02 .more{
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
.container66 .sort02 .new{
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
.container66 .sort02 ul li:hover{
   color:#FFF;
   background: #F13232;
}
.container66 .sort02 .nobuy{
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -28px;
   left: 80px;
}

.container66 .sort02 .all{
   float: left;
   width: 122px;
   height: 30px;
   color:#F13232;
   font-size: 16px;
   position: relative;
   top: -28px;
   left: 886px;
}


.container66 .first .role{
    position: absolute;
    top: 150px;
    left: 46px;  
    margin-top: 10px;
}
.container66 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container66 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: #f5f5f5;
    margin-top: 30px;
    position: relative;
}
.container66 .first .roleup button:hover{
    background: #F13232;
    color: #fff;
}
.container66 .first .roleup button{
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
.container66 .first .roleimg{
    height: 198px;
    width: 198px;
}
.container66 .first .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container66 .first .roleup .text{
    font-size: 18px;
    position: relative;
    left: 10px;
    top: -13px;
}

.container66 .sortnum01{
    position: relative;
    top: 1104px;
    left:120px;
    width: 995px;
    height: 32px;
}
.container66 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid #dbdad7;
    text-align: center;
    margin-right: 10px;
}
.container66 .sortnum01 ul li:hover{
    background: #F13232;
    color: #fff;
}
.container66 .sortnum01 .endpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 34px;
    top: -21px;
    border: 1px solid #dbdad7;
    text-align: center;
}
.container66 .sortnum01 .nextpage{
    float: left;
    height: 25px;
    width: 70px;
    position: relative;
    left: 48px;
    top: -21px;
    border: 1px solid #dbdad7;text-align: center;
}
.container66 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container66 .sortnum01 .endpage:hover{
    background: #F13232;
    color: #fff;
}
.container66 .sortnum01 .night{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid #dbdad7;
    text-align: center;
    position: relative;
    left: 20px;
    top: -21px;
}
.container66 .sortnum01 .night:hover{
    background: #F13232;
    color: #fff;
}
.container66 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container66 .sortnum01 .nextpage:hover{
    background: #F13232;
    color: #fff;
}
.container66 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container66 .sortnum01 .sortfly .one{
    position: relative;
    left: 682px;
    top: -42px;
    width: 30px;
    height: 14px;
    font-size: 12px;
    color: #333;
}
.container66 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 752px;
    top: -56px;
    font-size: 12px;
    color: #333;
}
.container66 .sortnum01 .sortfly input{
    position: relative;
    left: 100px;
    top: -35px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container66 .sortnum01 .sortfly input:focus{
   border: 1px solid #F13232;
   padding-left: 4px;
}
.container66 .sortnum01 .sortfly button{
    position: relative;
    left: 772px;
    top: -75px;
    width: 53px;
    height: 25px;
    font-size: 12px;
    color: #818181;
}
.container66 .sortnum01 .sortfly button:hover{
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

.demohover{
   background:#F13232;
}
.demohover p{
   color: #fff;
}
</style>
