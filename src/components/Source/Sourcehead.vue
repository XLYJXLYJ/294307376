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
            <div class="first" v-show="$store.state.sourcesearch">
                <ul class="role">
                    <li v-for="(item,index) in listnew" :key="item.id" v-if="index<15">
                        <div class="roleimg"><img :src="'/codeplay/'+item.content"></div>
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
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                sourcename:'',
                list:'',
                listnew:''
            }
        },
        watch:{
            '$route':'islogin'
         },
        methods:{
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
            Getsearch(){
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
                                this.$message({
                                message: '没有搜索到相关素材',
                                center: true,
                        })
                        }else{
                            this.list=response.data.data
                            this.listnew=response.data.data
                            console.log(response)
                        }
                    })
                }
            },
        }
    }
</script>
<style scoped>
.container64{
    width: 100%;
    height: auto;
    z-index: 100;
    position: relative;
    top: -56px;
    left: 0px;
    background: #f5f5f5;
}
.container631{
    width: 1200px;
    margin: 0 auto;
    height: auto;
    padding-top: 136px;
    background: #f5f5f5;
    position: relative;
    top: 65px;
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
    height: 1056px;
    top: -70px;
    left: 0px; 
    padding-left: 57px; 
    background: #fff;
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
    background: #f5f5f5;
    margin-top: 30px;
    position: relative;
}
.container64 .first .roleup button:hover{
    background: #F13232;
    color: #fff;
}
.container64 .first .roleup a{
    text-decoration: none;
    color: #F13232;
}
.container64 .first .roleup a:hover{
    text-decoration: none;
    color: #fff;
}
.container64 .first .roleup button{
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
    font-size: 18px;
    position: relative;
    left: 10px;
    top: -13px;
}
</style>
