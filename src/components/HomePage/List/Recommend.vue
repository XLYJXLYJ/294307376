<template>
    <div class="container01" v-show="$store.state.recommenddemo">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in list" :key='item.id'> 
                    <router-link to="/Video">
                        <div class="grid-content bg-purple list_pic" @click="edit01(item.id)">
                            <div class="imgcon"><img :src="item.imgBuffer" alt=""></div>
                            <p>{{item.title}}</p>
                            <span class="game_cat">{{item.desc}}</span>
                            <span class="down01"><i class="icon_see"><span>{{item.looktotal}}</span></i></span>
                            <span class="down02"><i class="icon_love"><span>{{item.praisetotal}}</span></i></span>
                            <span class="down03"><i class="icon_star"><span>{{item.collecttotal}}</span></i></span>
                        </div>
                    </router-link>
            </el-col>         
        </el-row>
        <button class="button" v-show="load" @click="Seemorerecommend">查看更多作品</button>
        <button class="buttonloaddown" v-show="loaddown">已加载完全部作品</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                i:1,
                load:true,
                loaddown:false
            }
        },
        mounted: function () {      
            this.getdemo01()
        },
        methods:{
            getdemo01(){
                this.axios.post('/res/filelist',{
                    state:4,
                    sortstate:2,
                    pagesize:4
                })
                .then(response => {   
                    this.list=response.data.data
                    this.$store.state.searchdemo=false
                    this.$store.state.recommenddemo=true
                    this.$store.state.productiondemo=false
                })
            },
            edit01(id){                 
                sessionStorage.id = id
                this.$store.state.shareid=id
            },
            Seemorerecommend(){
                this.i = this.i+1
                this.axios.post('/res/filelist',{
                    state:1,
                    pagenum:this.i,
                    pagesize:4
                })
                .then(response => {  
                if(response.data.data.msg =="这回真的没有了~"){
                    this.load = false,
                    this.loaddown = true
                }else{
                    this.listnum = response.data.data   
                    this.list = this.list.concat(this.listnum)
                }
                }) 
            },
        }
    }
</script>
<style scoped>
.container01{
    width: 858px;
    height: auto;
}
.container01 .routetext{
    color:#000;
    text-decoration: none;
}
.container01 .list_pic{
    margin-top: 44px;
    height: 270px;
    width: 173px;
    cursor: pointer;
    color: #707070;
}
/* .container01 .list_pic:hover{
    background: #707070;
} */
.container01 .imgcon{
    height: 170px;
    width: 173px;
}
.container01 .imgcon img{
    width: 100%;
    height: 100%;
}
.container01 .imgcon img:hover{
    border: 1px solid #d0d0d0;
}
.container01 p{
    font-size: 20px;
    position: relative;
    top: 15px;
    text-align: left;
    color:#000;
}
.container01 p:hover{
    color:#F13232;
}
.container01 .game_cat{
    display: block;
    font-size: 16px;
    position: relative;
    top: 22px;
    text-align: left;
    color: #707070;
    width: 170px;
    height: 20px;
    overflow: hidden;
}
.container01 .icon_see{
    background:url(../../../assets/home/icon_see.png) no-repeat;
}
.container01 .icon_love{
    background:url(../../../assets/home/icon_love.png) no-repeat;
}
.container01 .icon_star{
    background:url(../../../assets/home/icon_star.png) no-repeat;
}
.container01 .button{
    position: relative;
    top: 46px;
    left: 284px;
    width: 192px;
    height: 50px;
    background-color:#F13232;
    color:#fff; 
    border: none;
}
.container01 .buttonloaddown{
    position: relative;
    top: 46px;
    left: 284px;
    width: 192px;
    height: 50px;
    background-color:#707070;
    color:#fff; 
    border: none;
}
.container01 .down01{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: -9px;
    top: 36px;
}
.container01 .down02{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 12px;
    top: 36px;
}
.container01 .down03{
    font-size: 13px;
    width: 80px;
    height: 14px;
    margin: 10px;
    position: relative;
    left: 34px;
    top: 35px;
}
.container01 .down01 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container01 .down02 span{
    position: relative;
    left: 10px;
    margin-left: 10px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container01 .down03 span{
    position: relative;
    margin-left: 15px;
    font-style: normal;
    color: #959595;
    font-size: 16px;
    top: 0px;
}
.container01 .button:hover{
    background-color: #dd2e2e;
    color:#fff;
    cursor: pointer;
}
.container01 a{
    text-decoration: none;
}
</style>
