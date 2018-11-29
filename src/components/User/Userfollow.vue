<template>
    <div class="container42">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store" v-show="myfollow">我关注的人</p>
            <p class="store" v-show="shefollow">ta关注的人</p>
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="follow" v-show="nosend">
                <li v-for="(item,index) in list01" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="imgBuffer" alt="">
                        <p>{{item.username}}</p>
                    </div>
                </li>
            </ul>
            <div class="sharebg" v-show="sharebg">
                <img src="../../assets/user/bg02.png" alt="">
                <div class="makedemotext"><router-link to="Home">到首页</router-link><p>观看作品</p> <br/><span>寻找关注的人</span></div>
            </div>
            <img class="right" src="../../assets/user/right.png" alt="" @click="Pagingup">
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            myfollow:'',//加载关注我的人文字
            shefollow:'',//加载ta关注的人文字
            list:'',//负责存储数据
            list01:'',//负责展示数据
            list02:'',//负责初始化数据
            nosend:'',//是否显示列表
            sharebg:'',//没有作品时展示的背景
            i:1,//默认加载页数
            imgBuffer:''//作者关注的人的头像
        }
    },
    mounted: function () {      
        this.Getalldemo()
    },
    methods:{
        Getalldemo(){
            if(!sessionStorage.lookuserdes==''){ //加载关注其他作者的信息
            this.myfollow=false,
            this.shefollow=true,
            this.axios.post('/res/userinfo',{
                userid:sessionStorage.lookuserdes,
                state:4,
                pagenum:1,
                pagesize:10
            })
            .then(response => {     
                this.list = response.data.data
                this.list01 = response.data.data
                this.list02 = response.data.data
                this.list03 = response.data.data
                this.showuserimg()
            })
            }else{
            this.myfollow=true,
            this.shefollow=false,
            this.axios.post('/res/userinfo',{ //加载关注作者本人的信息
                    userid:sessionStorage.userid,
                    state:4,
                    pagenum:1,
                    pagesize:10
                })
                .then(response => {     
                this.list  = response.data.data
                this.list01 = response.data.data
                this.list02 = response.data.data
                this.list03 = response.data.data
                this.showuserimg()
                })
            }
        },
        //是否显示用户头像
        showuserimg(){
            if(!this.list){
                this.nosend=false,
                this.sharebg=true
            }else{
                if(!this.list.imgBuffer){
                    this.imgBuffer='static/images/localpic.png'
                }else{
                    this.imgBuffer=this.list.imgBuffer
                }
                this.nosend=true,
                this.sharebg=false
            }  
        },

        //下一页
        Pagingup(){ 
            if(!this.list){
                this.$message({
                    message:'还没有关注你的人哦~',
                    center:true
                })
            }else{
                this.i=this.i+1
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:4,
                        pagenum:this.i,
                        pagesize:10
                })
                .then(response => {  
                    this.list01 = response.data.data  
                    console.log(this.list01) 
                    this.list=this.list.concat(this.list01)
                    if(this.list01.length==0){
                        this.i=0
                        this.list=[]
                        this.list01 = this.list03
                    }
                })
                .catch(function (error) {
                    console.log(error);
                }); 
            }
        },
        //上一页
        Pagingdown(){
                --this.i
                console.log(this.i) 
                if(this.i<=1){
                this.i=1
                this.$message({
                    message:'已经到第一页了~',
                    center:true
                })
                this.list01 = this.list03 
                this.list = []      
                // console.log(this.list) 
                }else{
                this.list01 = this.list.slice(this.list.length-10,this.list.length)  
                this.list = this.list.slice(0,this.list.length-10)
                if(this.list01.length<6){
                    this.i=1
                    this.list=[]
                    this.list01 = this.list03
                }   
                }
        },



        // Pagingup(){
        //     if(!sessionStorage.lookuserdes==''){
        //         this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.lookuserdes,
        //                 state:4,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {   
        //             if(response.data.data){
        //                 this.i
        //                 this.$message({
        //                     message:'没有其他关注的人了~',
        //                     center:true
        //                 })
        //             }else{
        //                 ++this.i
        //                 this.list = response.data.data 
        //             }  
        //         })
        //     }else{
        //         this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.userid,
        //                 state:4,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {   
        //             if(response.data.data){
        //                 this.i
        //                 this.$message({
        //                     message:'没有其他关注的人了~',
        //                     center:true
        //                 })
        //             }else{
        //                 ++this.i
        //                 this.list = response.data.data 
        //             }  
        //         })
        //     }
        // },
        // Pagingdown(){
        //         --this.i
        //         if(this.i<=1){
        //         this.i=1
        //         this.$message({
        //             message:'已经到第一页了~',
        //             center:true
        //         })
        //         }else{
        //         this.i=this.i
        //         }
        //         if(!sessionStorage.lookuserdes==''){
        //             this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.lookuserdes,
        //                 state:4,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {        
        //                 this.list = response.data.data
        //             })
        //         }else{
        //         this.axios.post('/res/userinfo',{
        //             userid:sessionStorage.userid,
        //             state:4,
        //             pagenum:this.i,
        //             pagesize:8
        //         })
        //         .then(response => {        
        //             this.list = response.data.data
        //         })
        //     }

        // },
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container42{
    width:1200px;
    height: 221px;
    background: @background-color;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container42 .store{
    width:113px;
    height: 23px;
    font-weight: 600;
    color: @gray;
    position: absolute;
    top: 22px;
    left: 19px;
    font-size:@llg-size;   
}
.container42 .follow p{
    font-size:@sm-size;
    color: @delete-color;
    position: relative;
    top: 0px;
    left: 0px;   
    text-align: center;
}
.container42 .follow img{
    position: relative;
    height: 84px;
    width: 84px;
    top: 0px;
    left: 0px;   
    text-align: center;
    border-radius: 50px;
    border: 1px solid @delete-color;
}
.container42 ul{
    list-style: none;
    width: 1200px;
    position: absolute;
    top: 65px;
    left: 85px;
}
.container42 ul li{  
    float: left;
    margin-right: 22px;
    margin-bottom: 100px;
}
.container42 .star{
   position: absolute;
   left: -12px;
   top: -35px;
   width:75pox;
   height: 72px;
}
.container42 .left{
   position: absolute;
   left: 13px;
   top: 92px;
   cursor: pointer;
}
.container42 .right{
   position: absolute;
   left: 1128px;
   top: 92px;
   cursor: pointer;
}
.container42 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container42 .makedemotext a{
    position: relative;
    top: 15px;
    color: @main-color;
    font-size:@xm-size;
    display: inline-block;
}
.container42 .makedemotext p{
    position: relative;
    left: 50px;
    top: -6px;

}
.container42 .makedemotext span{
    position: relative;
    top: -10px;
    font-size:@xm-size;
    color: @delete-color;
}
.container42 .sharebg{
    position: relative;
    left: 449px;
    top: 28px;
}
</style>