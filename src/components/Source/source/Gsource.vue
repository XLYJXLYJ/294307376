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
                <li v-for="(item,index) in list03" :key="item.id" v-if='index<10'>
                    <div class="roleimg">
                        <div class="roleimgbox">
                             <img :src="'/codeplay/'+item.content" alt="">
                        </div>
                    </div>
                    <div class="roleup">
                        <a :href="'/codeplay'+item.content" download @click="collectmaster03(item.id)"><button>下载</button></a>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>
            </ul>
            <router-link to="/source/sourceshop/Music"><button class="seeall">查看全部 ></button></router-link>
        </div>
    </div>
</template>
<script>
export default{
    data() {
      return {
        list01:'',
        list02:'',
        list03:'',
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
                onenav:3,
                pagesize:15
            })
            .then(response => {   
                this.list03=response.data.data
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
    },
}
</script>
<style scoped lang="less">
@import '../../../assets/index.less';
.container65{
    width: 1200px;
    height: 2805px;
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
    left: 47px;
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
    left: 44px;  
}
.container65 .first .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 46px;
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
    left: 40px;
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
    left: 47px;
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
    left: 44px;  
}
.container65 .second .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 46px;
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
    left: 40px;
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
    left: 47px;
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
    left: 44px;  
}
.container65 .three .line{
    position: relative;
    border-bottom: 1px solid @gray;  
    position: relative;
    left: 46px;
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
    background: url(../../../assets/source/bg1.png) no-repeat;
}
.container65 .three .roleimg  .roleimgbox{
    height: 103px;
    width: 150px;
    text-align: center;
    margin: 0 auto;
}
.container65 .three .roleimg img{
    height: 100%;
    width: 100%;
    margin-top: 20px;
}
.container65 .three .roleup .text{
    font-size:@md-size;
    position: relative;
    left: 10px;
    top: -13px;
}
.container65 .three .seeall{
    position: relative;
    left: 40px;
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
</style>
