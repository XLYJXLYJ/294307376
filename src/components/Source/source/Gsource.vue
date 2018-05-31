<template>
    <div class="container65" v-show="$store.state.sourcegsource">
        <div class="first">
            <img class="firstlogo" src="../../../assets/source/role.png" alt=""><p class="rolemain">素材</p>
            <div class="line"></div>
            <ul class="role">
                <li v-for="item in list01" :key="item.id">
                    <div class="roleimg">
                         <div class="roleimgbox">
                             <img :src="'/codeplay/'+item.content" alt="">
                         </div>
                    </div>
                    <div class="roleup">
                        <a :href="'/codeplay'+item.content" download @click="collectmaster01(item.id)"><button>下载</button></a>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>  
            </ul>
            <router-link to="/source/sourceshop/Source01"><button class="seeall">查看全部 ></button></router-link>
        </div>
        <div class="second">
            <img class="secondlogo" src="../../../assets/source/bg.png" alt=""><p class="rolemain">背景</p>
            <div class="line"></div>
            <ul class="role">
                <li v-for="(item,index) in list02" :key="item.id" v-if='index<10'>
                    <div class="roleimg"><img :src="'/codeplay/'+item.content" alt=""></div>
                    <div class="roleup">
                       <a :href="'/codeplay'+item.content" download @click="collectmaster02(item.id)"><button>下载</button></a>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>  
            </ul>
            <router-link to="/source/sourceshop/Backg"><button class="seeall">查看全部 ></button></router-link>
        </div>
        <div class="three">
            <img class="threelogo" src="../../../assets/source/music.png" alt=""><p class="rolemain">音乐</p>
            <div class="line"></div>
            <ul class="role"> 
                <li v-for="(item,index) in list03" :key="item.index" v-if="index<15">
                    <div class="roleimg" v-bind:style="{background:isbgcolor(index)}"> 
                    <!-- v-on:mouseleave='musicendbutton(index)' -->
                    <!-- <img class="musicbg" v-show="musicbg!==index?true:false||musicstart01==item.id" src="../../../assets/source/musicbg.png" v-on:mouseenter='musicstartbutton(index)'> -->
                     <div class="musicbg" v-on:mouseenter='musicstartbutton(index)' v-show="!(musicbg==index||musicstart001==index)"><img src="../../../assets/source/musicbg.png" ></div>
                    <!-- 三角形图标 -->
                    <div @click="musicplay01(index,item.id)"><img v-show="musicstart01==index||musicstart0001==item.id" src="../../../assets/source/end.png"></div>
                    <!-- 这里是个坑 -->
                    <div @click="musicstop(index,item.id)"><img v-show="musicend==index||musicend01==item.id" src="../../../assets/source/start.png"></div>
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
            <router-link to="/source/sourceshop/Music"><button class="seeall">查看全部 ></button></router-link>
        </div>
        <p class="endtext">部分素材来源自网络，版权归原作者所有。所有素材仅供个人创作娱乐使用，禁止做任何商业用途，由此产生的任何法律纠纷本网站不予承担</p>
    </div>
</template>
<script>
export default{
    data() {
      return {
        list01:'',
        list02:'',
        list03:'',//展示音乐数据
        iscolor:'',//音乐背景颜色
        progressbg:-1,//是否显示进度条
        musicbg:-1,//是否显示音乐背景
        musicstart01:-1,//音乐开始图标（hover）
        musicstart001:-1,//音乐开始图标(点击和背景相关联)
        musicstart0001:-1,//音乐开始图标（点击）
        musicend:-1,//音乐结束图标（hover）
        musicend01:-1,//音乐结束图标（点击）
        musicplace:'',//音乐播放地址
        duration01:'',//播放时长(进度条)
        duration02:'',//播放时长(展示)
        currentTime:'',//当前播放时间
        scale:0,//比例
        isduration:-1,//是否显示播放时长
        isplay:[ ],//播放数组，为了记录上一次的播放的记录
      }
    },
    mounted(){
        this.Getsource01()
        this.select01()
        this.Getsource03()
        this.$store.state.sourcesearch=false,
        this.$store.state.sourcebackg=false,
        this.$store.state.sourcegame=false,
        this.$store.state.sourcegsource=true,
        this.$store.state.sourcemusic=false,
        this.$store.state.sourcesource01=false,
        this.$store.state.sourcelesson=false,
        this.$store.state.sourcestudy=false
    },
    methods:{
        // 加载素材
        select01(){
            this.axios.post('/res/resourcelist',{
                onenav:1,
                pagesize:15
            })
            .then(response => {   
                this.list01=response.data.data
            })
        },
        // 加载场景
        Getsource01(){
            this.axios.post('/res/resourcelist',{
                onenav:2,
                pagesize:15
            })
            .then(response => {   
                this.list02=response.data.data
            })
        },
         // 加载音乐
        Getsource03(){
            this.axios.post('/res/resourcelist',{
                onenav:5,
                pagesize:15
            })
            .then(response => {   
                this.list03 = response.data.data
            })
        },
        //采集函数01
        collectmaster01(id){
                this.axios.post('/res/collectmaterial',{
                userid:sessionStorage.userid,
                id:id,
                // type:4,
                state:1
            })
            .then(response => {   
            })
        },
         //采集函数02
        collectmaster02(id){
                this.axios.post('/res/collectmaterial',{
                userid:sessionStorage.userid,
                id:id,
                // type:4,
                state:2
            })
            .then(response => {   

            })
        },
         //采集函数03
        collectmaster03(id){
                this.axios.post('/res/collectmaterial',{
                userid:sessionStorage.userid,
                id:id,
                // type:4,
                state:3
            })
            .then(response => {   
   
            })
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
        musicplay01(j,i){
            this.musicend=-1//移动竖形消失
            this.musicend01=i//点击竖形显示
            this.musicstart001=j//点击音乐背景消失
            this.musicstart0001=-1//点击三角形消失
            this.musicstart01=-1//移动三角形消失
            this.progressbg=j//进度条
            this.musicbg=-1//背景还原
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
        musicstop(i,j){
            // this.musicstart01=i
            this.musicend=-1
            this.musicend01=-1
            this.musicstart0001=j//点击三角形显示
            // this.progressbg=i
            this.isplay.push['i']
            // var audio02 = document.getElementById("bgmusic");
            var audio02 = this.$refs.audio[i];
            audio02.pause();
        },
        // //鼠标进入是背景的变化
        musicstartbutton(i){
            // this.progressbg=-1
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
}
</script>
<style scoped lang="less">
@import '../../../assets/index.less';
.container65{
    width: 1200px;
    height: 3045px;
    position: relative;
    top: -86px;
    left: 0px;
    background: @background-color;
}
.container65 .first .firstlogo{
    position: relative;
    height: 29px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container65 .first .rolemain{
    position: relative;
    top: -28px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container65 .first .role{
    position: relative;
    top: -18px;
    left: 57px;  
}
.container65 .first .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -20px;
    width: 1086px;
    z-index: 100;
}
.container65 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container65 .first .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container65 .first .roleup button{
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
.container65 .first .roleup button:hover{
    color: @background-color; 
    background: @main-color;
}
.container65 .first .roleimg{
    height: 198px;
    width: 198px;
    background: url(../../../assets/source/bg1.png) no-repeat;
    text-align: center;
}
.container65 .first .roleimg  .roleimgbox{
    height: 163px;
    width: 170px;
    text-align: center;
    margin: 0 auto;
}
.container65 .first .roleimg .roleimgbox img{
    height: 100%;
    width: 100%;
    margin-top: 20px;   
}
.container65 .first .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container65 .first .seeall{
    position: absolute;
    left: 57px;
    top: 1010px;
    width: 1086px;
    height: 40px;
    border: none;
    background: @mainbg-color;
}
.container65 .first .seeall:hover{
    background: @main-color;
    color: @background-color;
}
.container65 .second{
    position: absolute;
    top: 1095px;
    left: 0px;
}
.container65 .second .secondlogo{
    position: relative;
    height: 28px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container65 .second .rolemain{
    position: relative;
    top: -28px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container65 .second .role{
    position: relative;
    top: -18px;
    left: 57px;  
}
.container65 .second .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -20px;
    width: 1086px;
    z-index: 100;
}
.container65 .second .role li{
    float: left;
    width: 198px;
    height: 367px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container65 .second .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container65 .second .roleup button{
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
.container65 .second .roleup button:hover{
    color: @background-color; 
    background: @main-color;
}
.container65 .second .roleimg{
    height: 288px;
    width: 198px;
}
.container65 .second .roleimg img{
    height: 100%;
    width: 100%;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container65 .second .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container65 .second .seeall{
    position: relative;
    left: 57px;
    top: 39px;
    width: 1086px;
    height: 40px;
    border: none;
    background: f5f5f5;
}
.container65 .second .seeall:hover{
    background: @main-color;
    color: @background-color;
}
.container65 .three{
    position: absolute;
    top: 2080px;
}
.container65 .three .threelogo{
    position: relative;
    height: 28px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container65 .three .rolemain{
    position: relative;
    top: -28px;
    left: 92px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: @gray;
    z-index: 100;
}
.container65 .three .role{
    position: relative;
    top: -18px;
    left: 57px;
}
.container65 .three .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 57px;
    top: -20px;
    width: 1086px;
    z-index: 100;
}
.container65 .three .role li{
    float: left;
    width: 198px;
    height: 219px;
    margin-right: 24px;
    background: @mainbg-color;
    margin-top: 30px;
    position: relative;
}
.container65 .three .roleup a{
    color: @main-color;
    text-decoration: none; 

}
.container65 .three .roleup button{
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
.container65 .three .roleup button:hover{
    color: @background-color; 
    background: @main-color;
}
.container65 .three .roleimg{
    height: 140px;
    width: 198px;
    text-align: center;
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container65 .three .roleimg  .roleimgbox{
    height: 103px;
    width: 150px;
    text-align: center;
    margin: 0 auto;
}
// .container65 .three .roleimg img{
//     height: 75px;
//     width: 75px;
//     margin-top: 30px;
//     margin-left: -2px;
// }
.container65 .three .musicbg{
    height: 100%;
    width: 100%;
    position: relative;
    left: -2px;
}
.container65 .three  img{
    height: 75px;
    width: 75px;
    margin-top: 30px;
    margin-left: -2px;
}

.container65 .three .clock{
    margin-left: 10px;
}
.container65 .three .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container65 .three .seeall{
    position: relative;
    left: 57px;
    top: 39px;
    width: 1086px;
    height: 40px;
    border: none;
    background: f5f5f5;
}
.container65 .three .seeall:hover{
    background: @main-color;
    color: @background-color;
}
.container65 .endtext{
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
</style>
