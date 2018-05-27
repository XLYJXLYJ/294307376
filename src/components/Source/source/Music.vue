<template>
  <div class="container80" v-show="$store.state.sourcebackg">
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
            <li v-for="(item,index) in listnew" :key="item.index" v-if="index<15">
                <div class="roleimg" v-bind:style="{background:isbgcolor(index)}"  v-on:mouseleave='musicendbutton(index)'> 
                    <img class="musicbg" v-show="musicbg!==index?true:false" src="../../../assets/source/musicbg.png" v-on:mouseenter='musicstartbutton(index)'>
                    <div @click="musicplay01(index)"><img v-show="musicstart01==index" src="../../../assets/source/end.png"></div>
                    <!-- 这里是个坑 -->
                    <div @click="musicstop(index)"><img v-show="musicend==index" src="../../../assets/source/start.png"></div>
                    <audio :src="'/codeplay'+item.content" ref="audio" v-show="false" id="bgmusic" @timeupdate="updateTime(index)" controls="controls" preload="metadata"></audio>
                    <!-- <audio src="static/1.mp3" ref="audio" v-show="false" id="bgmusic" @timeupdate="updateTime" controls="controls" preload="metadata"></audio> -->
                    <el-progress class="progress" :text-inside="false" v-show="progressbg==index" :stroke-width="4" :percentage="scale"></el-progress>
                    <!-- <el-progress class="progress" v-show="progressbg==index?true:false" type="circle" :percentage="scale" :width="75" :show-text="false"></el-progress> -->
                </div>
                <div class="roleup">

                <a :href="'/codeplay/'+item.content" download><button @click="collectmaster(item.id)">下载</button></a>
                    <p class="text">{{item.name}}</p>
                    <p class="clock" v-show="isduration==index">{{duration02}}</p>
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
        currentPage3:1,//当前页数
        iscolor:'',//音乐背景颜色
        progressbg:'',//是否显示进度条
        musicbg:'',//是否显示音乐背景
        musicstart01:'',//音乐开始图标
        musicend:'',//音乐结束图标
        musicplace:'',//音乐播放地址
        duration01:'',//播放时长(进度条)
        duration02:'',//播放时长(展示)
        currentTime:'',//当前播放时间
        scale:0,//比例
        isduration:false,//是否显示播放时长
        oneidbox:[
            {oneid:0,name:"全部"},
            {oneid:1,name:"流行"},
            {oneid:2,name:"音效"}
        ],
        twoidbox01:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"经典"},
            {twoid:2,name:"情绪"},
        ],
        twoidbox02:[
            {twoid:0,name:"全部"},
            {twoid:1,name:"环境"},
            {twoid:2,name:"技能"},
            {twoid:3,name:"交通"},
            {twoid:4,name:"乐器声"},
            {twoid:5,name:"生活"},
            {twoid:6,name:"小动物"},
            {twoid:7,name:"游戏"},
            {twoid:8,name:"其他"},
        ]
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
        this.isbgcolor()
        // setTimeout(this.time,3000)
        // this.time()
    },
    computed:{

    },
    methods:{
        updateTime(j) {
            // this.currentTime = document.getElementById('bgmusic').currentTime
            // this.duration01 = document.getElementById('bgmusic').duration
            this.currentTime = this.$refs.audio[j].currentTime
            this.duration01 = this.$refs.audio[j].duration
            // console.log(this.currentTime)
            // console.log(this.duration01)
            this.scale=parseInt(this.currentTime/this.duration01*100)
        },
        //获取播放时长
        // time(index){
        //     var audiotime =  this.$refs.audio[index];
        //     this.duration02 = parseInt(audiotime.duration)
        // },
        //点击播放
        musicplay01(j,item){
            this.musicend=j
            this.musicstart01=-1
            this.progressbg=j
            // var audio01 = document.getElementById("bgmusic");
            var audio01 = this.$refs.audio[j];
            // console.log(j)
            // console.log(item)
            // console.log(audio01)
            audio01.play();
        },
        //点击暂停
        musicstop(i){
            this.musicstart01=i
            this.musicend=-1
            this.progressbg=i
            // var audio02 = document.getElementById("bgmusic");
            var audio02 = this.$refs.audio[i];
            audio02.pause();
        },
        //鼠标进入是背景的变化
        musicstartbutton(i){
            this.progressbg=i
            this.musicbg=i
            this.musicstart01=i
            this.musicend=-1
            this.isduration=i
            var audiotime = this.$refs.audio[i];
            this.duration02 = parseInt(audiotime.duration)
            let s = this.duration02%60
            let m = (this.duration02-s)/60
            if(s>9){
                s=s
            }else{
                s='0'+s
            }
            this.duration02=m+':'+s
        },
        //鼠标离开是背景的变化
        musicendbutton(i){
            this.progressbg=-1
            this.musicbg=-1
            this.musicstart01=-1
            this.musicend=-1
            this.isduration=-1
            var audio03 = this.$refs.audio[i];
            audio03.pause();
            this.scale=0;
        },
        //背景颜色选择
        isbgcolor(i){
            if(i%5==1){
                return this.iscolor='#f13232';
            }else if(i%5==2){
                return this.iscolor='#0e74be';
            }else if(i%5==3){
                return this.iscolor='#00BC59';
            }else if(i%5==4){
                return this.iscolor='#FF9C00';
            }else{
                return this.iscolor='#C711DD';
            }
        },
        //第二级获取数据
        select01(id){
            this.handleCurrentChange(1)
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
                        onenav:5,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = true  
                    this.listnewlength = response.data.total
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10  
                    this.list=response.data.data
                    this.listnew=response.data.data
                    this.musicplace=response.data.data.content
                    })
                break
                case id=1:
                    this.sort0101=true;
                    this.sort0102=false;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:5,
                        twonav:1,
                        pagesize:15
                    })
                    .then(response => {  
                    this.listnewlength = response.data.total
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10  
                    this.numpage = false     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    this.musicplace=response.data.data.content
                    })
                break;
                case id=2:
                    this.sort0101=false;
                    this.sort0102=true;
                    this.sort0103=false;
                    this.axios.post('/res/resourcelist',{
                        onenav:5,
                        twonav:2,
                        pagesize:15
                    })
                    .then(response => { 
                    this.numpage = false  
                    this.listnewlength = response.data.total  
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    this.musicplace=response.data.data.content
                    })
                break;
                case id=3:
                    this.sort0101=false;
                    this.sort0102=false;
                    this.sort0103=true;
                    this.axios.post('/res/resourcelist',{
                        onenav:5,
                        twonav:3,
                        pagesize:15
                    })
                    .then(response => {  
                    this.numpage = false  
                    this.listnewlength = response.data.total 
                    this.listnumtotal = Math.ceil(this.listnewlength/15)*10     
                    this.list=response.data.data
                    this.listnew=response.data.data
                    this.musicplace=response.data.data.content
                    })
                break;
            }

        },
            // 第二级选择
        select0101(id){
            this.handleCurrentChange(1)
            this.isresentshow=false
            this.isdownshow=false
            this.isdemohover02 = id
            if(id==0){
                this.isdemohover03=1
                this.axios.post('/res/resourcelist',{
                onenav:5,
                twonav:this.isdemohover01,
                threenav:0,
                pagesize:15
            })
            .then(response => { 
                this.musicplace=response.data.data.content
                this.listnewlength = response.data.total 
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.listnew=response.data.data  
                this.numpage = true

                })
            }else{
            this.axios.post('/res/resourcelist',{
                onenav:5,
                twonav:this.isdemohover01,
                threenav:id,
                pagesize:15
            })
            .then(response => { 
                this.musicplace=response.data.data.content
                this.listnewlength = response.data.total 
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.listnew=response.data.data  
                this.numpage = false
                })
            }
            
        },

        //最近更新
        resentchange(){
            this.handleCurrentChange(1)
            this.isresentshow=true
            this.isdownshow=false
            this.isdemohover03 = 1
            this.axios.post('/res/resourcelist',{
                onenav:5,
                state:1,
                pagenum:this.cur_page,
                pagesize:15
            })
            .then(response => {   
                this.listnewlength = response.data.total
                this.listnumtotal = Math.ceil(this.listnewlength/15)*10
                this.list=response.data.data
                this.listnew=response.data.data 
                this.time()    
            })
        },
        //最多使用
        mostuse(){
            this.handleCurrentChange(1)
            this.isresentshow=false
            this.isdownshow=true
            this.axios.post('/res/resourcelist',{
                onenav:5,
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
                this.$store.state.sourcesearch=false,
                this.$store.state.sourcebackg=true,
                this.$store.state.sourcegame=false,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=false,
                this.$store.state.sourcestudy=false,
            this.axios.post('/res/resourcelist',{
                onenav:5,
                pagesize:15
            })
            .then(response => {   
                // this.musicplace=response.data.data[content]
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
        //         onenav:5,
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
        //         onenav:5,
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
                onenav:5,
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
.container80{
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
.container80 .baozhu{
    width: 100%;
    height: auto;
}
.container80 .sort01 ul{
    list-style: none;
    position: relative;
    left: 122px;
    top: -20px;
    width: 1040px;
    height: 24px;
}
.container80 .sort01text{
    display: inline-block;
    position: relative;
    left: 46px;
    color:@gray;
    font-size:@sm-size;
}
.container80 .sort01 ul p{
    display: inline-block;
    padding-left: 15px;
    position: relative;
    top: 2px;
}
.container80 .sort01 ul li{
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
.container80 .sort01 ul li:hover{
    color:@background-color;
    background: @main-color;
}

.container80 .sort0101{
    height: 50px;
    width: 1000px;
    display: block;
}
.container80 .sort0101 ul{
    list-style: none;
    position: absolute;
    left: 122px;
    top: 60px;
    width: 1040px;
    height: auto;
    padding-left:0;
}
.container80 .sort0101text{
    display: inline-block;
    position: relative;
    left: -177px;
    top: 14px;
    color:@gray;
    font-size:@sm-size;
}
.container80 .sort0101 ul p{
    display: inline-block;
    margin-top: 0px;
    position: relative;
    top: 2px;
    }
.container80 .sort0101 ul li{
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
.container80 .sort0101 ul li:hover{
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


.container80 .sort02{
   width: 1086px;
   height: 30px;
   background: @mainbg-color;
   position: relative;
   left: 47px;
   top: 28px;
   margin-bottom: 40px;
   display: block;
}
.container80 .sort02 ul{
   list-style: none;
   left: 0px;
   top: 0px;
   width: 170px;
   height: 30px;
}
.container80 .sort02 .more{
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
.container80 .active{
   color:@background-color;
   background: @main-color;
}
.container80 .active p{
   color:@background-color;
}
.container80 .sort02 .new{
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
.container80 .sort02 ul li:hover{
   color:@background-color;
   background: @main-color;
}
.container80 .sort02 .nobuy{
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -28px;
   left: 80px;
}

.container80 .sort02 .all{
   float: left;
   width: 122px;
   height: 30px;
   color:@main-color;
   font-size:@xm-size;
   position: relative;
   top: -26px;
   left: 886px;
}

.container80 .first {
    width: 1200px;
    height: 3px;
    margin-top:60px;
}
.container80 .first .role{
    position: relative;
    top: -20px;
    left: 46px;  
    margin-top: 10px;
    display: block;
}
.container80 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container80 .first .role li{
    float: left;
    width: 198px;
    height: 219px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container80 .first .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container80 .first .roleup a:hover{
    color: @background-color; 
}

.container80 .first .roleup button{
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
.container80 .first .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container80 .first .roleimg{
    height: 140px;
    width: 198px;
    text-align: center;
}
.container80 .first .roleimg img{
    height: 75px;
    width: 75px;
    margin-top: 30px;
    display: inline-block;
}
.container80 .first .roleimg .progress{
    margin-top: 14px;
}
.container80 .first .roleimg .musicbg{
    position: relative;
    left: -2px;
}
.container80 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container80 .first .roleup .clock{
    font-size:@sm-size;
    color: #bebebe;
    position: relative;
    left: 10px;
    top: 0px;
    height: 18px;
    width:32px;
    padding-left: 20px;
    background:url(../../../assets/source/clock.png) no-repeat;
}

.container80 .sortpagenum{
    float: left;
    position: absolute;
    bottom:60px;
    left: 260px;
    width: 675px;
    height: 32px;
    text-align: center;
    display: block;
}
.container80 .sortpagenumcenter{
    margin: 0 auto;
    width: 575px;
}

.container80 .sortnum01{
    position: absolute;
    top: 1374px;
    left:320px;
    width: 995px;
    height: 32px;
}
.container80 .sortnum01 ul li{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
}
.container80 .sortnum01 ul li:hover{
    background: @main-color;
    color: @background-color;
}
.container80 .sortnum01 .endpage{
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
.container80 .sortnum01 .nextpage{
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
.container80 .sortnum01 .endpage p{
    margin-top: 2px;
}
.container80 .sortnum01 .endpage:hover{
    background: @main-color;
    color: @background-color;
}
/* .container80 .sortnum01 .night{
    float: left;
    height: 25px;
    width: 32px;
    border: 1px solid @border-color;
    text-align: center;
    position: relative;
    left: 20px;
    top: -21px;
} */
/* .container80 .sortnum01 .night:hover{
    background: @main-color;
    color: @background-color;
} */
.container80 .sortnum01 .nextpage p{
    margin-top: 2px;
}
.container80 .sortnum01 .nextpage:hover{
    background: @main-color;
    color: @background-color;
}
.container80 .sortnum01 ul li p{
    margin-top: 2px;   
}
.container80 .sortnum01 .sortfly .one{
    position: relative;
    left: 370px;
    top: -20px;
    width: 30px;
    height: 14px;
    font-size:@ss-size;
    color: @gray;
}
.container80 .sortnum01 .sortfly .two{
    position: relative;
    width: 30px;
    height: 14px;
    left: 452px;
    top: -32px;
    font-size:@ss-size;
    color: @gray;
}
.container80 .sortnum01 .sortfly input{
    position: relative;
    left: 85px;
    top: -12px;
    width: 32px;
    height: 22px;
    outline: none;
    padding-left: 4px;
}
.container80 .sortnum01 .sortfly input:focus{
   border: 1px solid @main-color;
   padding-left: 4px;
}
.container80 .sortnum01 .sortfly button{
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
.container80 .sortnum01 .sortfly button:hover{
    background: @main-color;
    color: @background-color;
    border: none;
}
.container80 .endtext{
    float: left;
    position: absolute;
    bottom:10px;
    left: 100px;
    width: 1000px;
    height: 32px;
    text-align: center;
    display: block;
    color: #999;
    font-size: @ss-size;
} 

.container80 .demohover{
   background:@main-color;
}
.container80 .demohover p{
   color: @background-color;
}
</style>
