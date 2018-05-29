<template>
    <div class="container64">
        <div class="container631">
            <!-- <div class="backsource"></div> -->
            <div class="source_header01">
                <ul class="sourceshop">
                    <router-link to="/source/sourceshop"><li><img src="../../assets/source/source01.png" alt=""></li></router-link> 
                    <!-- <router-link to="/source/mysourceshop"><li><img src="../../assets/source/source02.png" alt=""></li></router-link>  -->
                </ul>
                <input class="source_search" type="text" @keyup.enter="Getsearch" placeholder="搜索素材" v-model="sourcename"><div class="searchicon" @click="Getsearch"></div>
            </div>
            <router-view></router-view>
            <!-- <Sourceshop/> -->
            <div class="first" v-show="$store.state.sourcesearch">
                <p class="rolemain">素材</p>
                <div class="line"></div>
                <ul class="role">
                    <li v-for="(item,index) in list01" :key="item.id" v-if="index<15">
                        <!-- <div class="roleimg"><img :src="'/codeplay/'+item.content"></div> -->
                        <div class="roleimg"><img src="static/11.png" alt=""></div>
                        <div class="roleup">
                        <button><a :href="'/codeplay/'+item.content" download>下载</a></button>
                            <p class="text">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="second" v-show="$store.state.sourcesearch">
            <p class="rolemain">背景</p>
            <div class="line"></div>
            <ul class="role">
                <li v-for="(item,index) in list02" :key="item.id" v-if='index<10'>
                    <!-- <div class="roleimg"><img :src="'/codeplay/'+item.content" alt=""></div> -->
                    <div class="roleimg"><img src="static/12.png" alt=""></div>
                    <div class="roleup">
                       <a :href="'/codeplay'+item.content" download @click="collectmaster02(item.id)"><button>下载</button></a>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>  
            </ul>
            </div>

            <div class="three" v-show="$store.state.sourcesearch">
                <p class="rolemain">学习</p>
                <div class="line"></div>
                <ul class="role">
                    <li v-for="(item,index) in list03" :key="item.id" v-if="index<15">
                        <!-- <div class="roleimg"><img :src="'/codeplay/'+item.content"></div> -->
                        <div class="roleimg"><img src="static/11.png" alt=""></div>
                        <div class="roleup">
                        <button><a :href="'/codeplay/'+item.content" download>下载</a></button>
                            <p class="text">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="four" v-show="$store.state.sourcesearch">
                <p class="rolemain">游戏</p>
                <div class="line"></div>
                <ul class="role">
                    <li v-for="(item,index) in list04" :key="item.id" v-if="index<15">
                        <!-- <div class="roleimg"><img :src="'/codeplay/'+item.content"></div> -->
                        <div class="roleimg"><img src="static/11.png" alt=""></div>
                        <div class="roleup">
                        <button><a :href="'/codeplay/'+item.content" download>下载</a></button>
                            <p class="text">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="five" v-show="$store.state.sourcesearch">
                <p class="rolemain">音乐</p>
                <div class="line"></div>
                <ul class="role"> 
                    <li v-for="(item,index) in list05" :key="item.index" v-if="index<15">
                        <div class="roleimg" v-bind:style="{background:isbgcolor(index)}"  v-on:mouseleave='musicendbutton(index)'> 
                            <img class="musicbg" v-show="musicbg!==index?true:false" src="../../assets/source/musicbg.png" v-on:mouseenter='musicstartbutton(index)'>
                            <div @click="musicplay01(index)"><img v-show="musicstart01==index" src="../../assets/source/end.png"></div>
                            <!-- 这里是个坑 -->
                            <div @click="musicstop(index)"><img v-show="musicend==index" src="../../assets/source/start.png"></div>
                            <audio :src="'/codeplay'+item.content" ref="audio" v-show="false" id="bgmusic" @timeupdate="updateTime(index)" controls="controls" preload="metadata"></audio>
                            <!-- <audio src="static/1.mp3" ref="audio" v-show="false" id="bgmusic" @timeupdate="updateTime" controls="controls" preload="metadata"></audio> -->
                            <el-progress class="progress" :text-inside="false" v-show="progressbg==index" :stroke-width="4" :percentage="scale"></el-progress>
                            <!-- <el-progress class="progress" v-show="progressbg==index?true:false" type="circle" :percentage="scale" :width="75" :show-text="false"></el-progress> -->
                        </div>
                        <div class="roleup">

                        <a :href="'/codeplay'+item.content" download><button @click="collectmaster(item.id)">下载</button></a>
                            <p class="text">{{item.name}}</p>
                            <p class="clock" v-show="isduration==index">{{duration02}}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="six" v-show="$store.state.sourcesearch">
                <p class="rolemain">课程</p>
                <div class="line"></div>
                <ul class="role">
                    <li v-for="(item,index) in list01" :key="item.id" v-if="index<15">
                        <!-- <div class="roleimg"><img :src="'/codeplay/'+item.content"></div> -->
                        <div class="roleimg"><img src="static/11.png" alt=""></div>
                        <div class="roleup">
                        <button><a :href="'/codeplay/'+item.content" download>下载</a></button>
                            <p class="text">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- <el-input class="search_input" placeholder="搜索作品">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input> -->
        <!-- <router-view></router-view> -->
        </div>

    </div>
</template>
<script>
import Sourceshop from '@/components/Source/Sourceshop'
    export default{
        data(){
            return{
                sourcename:'',//搜索名称
                list:'',//数据
                list01:'',//展示素材数据
                list02:'',//展示背景数据
                list03:'',//展示学习数据
                list04:'',//展示游戏数据
                list05:'',//展示音乐数据
                list06:'',//展示课程数据
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
                isplay:[ ],//播放数组，为了记录上一次的播放的记录
                type:''
            }
        },
        watch:{
            '$route':'islogin'
         },
        methods:{
            //检测是否登录，如果登录，才可以跳转我的素材，该功能已删除
            islogin(){
                if(this.$route.path==='/source/mysourceshop'){
                    if(this.$store.state.userid){
                        this.$router.push({ name: 'Myrole' })
                    }else{
                        this.$message({
                             message: '请先登录',
                             center: true,
                        })
                        this.$router.push({ name: 'Home' })
                    }
                }
            },
            //获取默认数据
            Getsearch(){
                this.$router.push({name:'sourceshop'})
                this.$store.state.sourcesearch=true,
                this.$store.state.sourcebackg=false,
                this.$store.state.sourcegame=false,
                this.$store.state.sourcegsource=false,
                this.$store.state.sourcemusic=false,
                this.$store.state.sourcesource01=false,
                this.$store.state.sourcelesson=false,
                this.$store.state.sourcestudy=false
                if(this.sourcename==''){
                    this.$message({
                            message: '搜索内容不能为空',
                            center: true,
                    })
                }else{
                    this.axios.post('/res/resourcelist',{
                    searchname:this.sourcename,
                    pagesize:15
                })
                .then(response => {  
                    var searchresult = response.data.data.msg
                    if(searchresult=="这回真的没有了~"){
                            this.list=response.data.data
                            this.list01=response.data.data
                            this.$message({
                            message: '没有搜索到相关素材',
                            center: true,
                    })
                    }else{
                        this.list=response.data.data
                        this.list01=response.data.data
                        this.list02=response.data.data
                        this.list03=response.data.data
                        this.list04=response.data.data
                        this.list05=response.data.data
                        this.list06=response.data.data
                        this.type=response.data.data.type
                        console.log(response)
                    }
                })
                }
            },
            //进度条函数
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
            musicplay01(j){
                this.musicend=j
                this.musicstart01=-1
                this.progressbg=j
                this.progressbg=j
                this.isplay.push(j)
                // var audio01 = document.getElementById("bgmusic");
                // var audio01 = this.$refs.audio[j];
                if(this.isplay.length==1){
                    var audio01 = this.$refs.audio[j];
                    audio01.play();
                }else{
                    var audio001 = this.$refs.audio[j];
                    var beforej = this.isplay[this.isplay.length-2]
                    var audiobefore = this.$refs.audio[beforej];
                    audiobefore.pause();
                    audio001.play();
                }
                // var audio01 = this.$refs.audio[j];
                // let beforej = this.isplay[this.isplay.length-2]
                // var audiobefore = this.$refs.audio[beforej];
                // audiobefore.pause();
                // audio01.play();
                // console.log(beforej)
                // console.log(j)
                // console.log(audio01)
                // console.log(this.isplay)  
            },
            //点击暂停
            musicstop(i){
                this.musicstart01=i
                this.musicend=-1
                this.progressbg=i
                this.isplay.push['i']
                // var audio02 = document.getElementById("bgmusic");
                var audio02 = this.$refs.audio[i];
                audio02.pause();
            },
            //鼠标进入是背景的变化
            musicstartbutton(i){
                this.progressbg=-1
                this.musicbg=i
                this.musicstart01=i
                this.musicend=-1
                this.isduration=i
                var audiotime = this.$refs.audio[i];
                this.duration02 = Math.ceil(audiotime.duration)
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
                // var audio03 = this.$refs.audio[i];
                // audio03.pause();
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
        },
        components:{
            Sourceshop
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container64{
    width: 100%;
    min-height: 234px;
    z-index: 100;
    margin-top: -30px;
    position: relative;
    top: 0px;
    left: 0px;
    display: inline-block;
    background: @mainbg-color;
}
.container631{
    width: 1200px;
    margin: 0 auto;
    height: auto;
    padding-top: 166px;
    background: @background-color;
    position: relative;
    top: 35px;
    z-index: 1000;
}
.container631 .source_header01{
    width: 1200px;
    height: 196px;
    background: url(../../assets/source/sourcehead.png) no-repeat;
    position: relative;
    top: 0px;
}
/* .container63 .backsource{
    width: 876px;
    height: 199px;
    background: url(../../assets/source/backsource.png) no-repeat;
    margin: 0 auto;
} */
.container631 .sourceshop{
    list-style: none;
    width: 420px;
    height: 56px;
    position: relative;
    top:19px;
    left: 72px;
}
.container631 .sourceshop li{
    float: left;
    width: 161px;
    height: 56px;
    position: relative;
    left: 0px;
    top: 0px;
}
.container631 .sourceshop li img{
    position: relative;
    left: 17px;
    top: 12px;
}
.container631 .source_search{
    width: 324px;
    height: 48px;
    border-radius: 20px;
    padding-left: 15px;
    position:relative;
    left: 830px;
    top:-30px;
    border: none;
}
.container631 .searchicon{
    height: 21px;
    width: 21px;
    background: url(../../assets/source/searchicon.png) no-repeat;
    position: relative;
    left: 1118px;
    top: -62px;
    cursor: pointer;
    
}
.container631 .router-link-active li{
    background: url(../../assets/source/xuanzhong.png);
}

.container64 .container631 .first .role{
    position: relative;
    width: 1143px;
    min-height: 234px;
    top: -70px;
    left: 0px; 
    padding-left: 57px; 
    background: @background-color;
}
.container64 .first .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -70px;
    width: 1086px;
    z-index: 100;
}
.container64 .first .rolemain{
    position: relative;
    top: -78px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
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
.container64 .first .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .first .roleup a{
    text-decoration: none;
    color: @main-color;
}
.container64 .first .roleup a:hover{
    text-decoration: none;
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
    height: 198px!important;
    width: 198px!important;
    overflow: hidden;
}
.container64 .first .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}



.container64 .second{
    display: inline-block;
    margin-bottom: 60px;
}
.container64 .second .secondlogo{
    position: relative;
    height: 28px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container64 .second .rolemain{
    position: relative;
    top: -28px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container64 .second .role{
    position: relative;
    top: -18px;
    left: 57px;  
}
.container64 .second .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -20px;
    width: 1086px;
    z-index: 100;
}
.container64 .second .role li{
    float: left;
    width: 198px;
    height: 367px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .second .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container64 .second .roleup button{
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
.container64 .second .roleup button:hover{
    color: @background-color; 
    background: @main-color;
}
.container64 .second .roleimg{
    height: 288px;
    width: 198px;
}
.container64 .second .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .second .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container64 .second .seeall{
    position: relative;
    left: 57px;
    top: 39px;
    width: 1086px;
    height: 40px;
    border: none;
    background: f5f5f5;
}
.container64 .second .seeall:hover{
    background: @main-color;
    color: @background-color;
}

.container64 .container631 .three .role{
    position: relative;
    width: 1143px;
    min-height: 0px;
    top: -30px;
    left: 0px; 
    padding-left: 57px; 
    background: @background-color;
    display: inline-block;
    margin-bottom: 50px;
}
.container64 .three .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -30px;
    width: 1086px;
    z-index: 100;
}
.container64 .three .rolemain{
    position: relative;
    top: -38px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container64 .three .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .three .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .three .roleup a{
    text-decoration: none;
    color: @main-color;
}
.container64 .three .roleup a:hover{
    text-decoration: none;
    color: @background-color;
}
.container64 .three .roleup button{
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
.container64 .three .roleimg{
    height: 198px!important;
    width: 198px!important;
    overflow: hidden;
}
.container64 .three .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .three .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}


.container64 .container631 .four .role{
    position: relative;
    width: 1143px;
    min-height: 0px;
    top: -30px;
    left: 0px; 
    padding-left: 57px; 
    background: @background-color;
    margin-bottom: 50px;
}
.container64 .four .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -30px;
    width: 1086px;
    z-index: 100;
}
.container64 .four .rolemain{
    position: relative;
    top: -38px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container64 .four .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .four .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .four .roleup a{
    text-decoration: none;
    color: @main-color;
}
.container64 .four .roleup a:hover{
    text-decoration: none;
    color: @background-color;
}
.container64 .four .roleup button{
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
.container64 .four .roleimg{
    height: 198px!important;
    width: 198px!important;
    overflow: hidden;
}
.container64 .four .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .four .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}


.container64 .five{
    margin-top: 40px;
    display: inline-block;
    margin-bottom: 120px;
}
.container64 .five .fivelogo{
    position: relative;
    height: 28px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container64 .five .rolemain{
    position: relative;
    top: -28px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container64 .five .role{
    position: relative;
    top: -18px;
    left: 57px;
}
.container64 .five .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -20px;
    width: 1086px;
    z-index: 100;
}
.container64 .five .role li{
    float: left;
    width: 198px;
    height: 219px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .five .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container64 .five .roleup button{
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
.container64 .five .roleup button:hover{
    color: @background-color; 
    background: @main-color;
}
.container64 .five .roleimg{
    height: 140px;
    width: 198px;
    text-align: center;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .five .roleimg  .roleimgbox{
    height: 103px;
    width: 150px;
    text-align: center;
    margin: 0 auto;
}
.container64 .five .roleimg img{
    height: 75px;
    width: 75px;
    margin-top: 30px;
    margin-left: -2px;
}
.container64 .five .clock{
    margin-left: 10px;
}
.container64 .five .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container64 .five .seeall{
    position: relative;
    left: 57px;
    top: 39px;
    width: 1086px;
    height: 40px;
    border: none;
    background: f5f5f5;
}
.container64 .five .seeall:hover{
    background: @main-color;
    color: @background-color;
}



.container64 .container631 .six .role{
    position: relative;
    width: 1143px;
    min-height: 234px;
    top: -90px;
    left: 0px; 
    padding-left: 57px; 
    background: @background-color;
}
.container64 .six .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -90px;
    width: 1086px;
    z-index: 100;
}
.container64 .six .rolemain{
    position: relative;
    top: -98px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container64 .six .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container64 .six .roleup button:hover{
    background: @main-color;
    color: @background-color;
}
.container64 .six .roleup a{
    text-decoration: none;
    color: @main-color;
}
.container64 .six .roleup a:hover{
    text-decoration: none;
    color: @background-color;
}
.container64 .six .roleup button{
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
.container64 .six .roleimg{
    height: 198px!important;
    width: 198px!important;
    overflow: hidden;
}
.container64 .six .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../assets/source/bg1.png) no-repeat;
}
.container64 .six .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
</style>
