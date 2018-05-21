<template>
    <div class="container43">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store" v-show="myfollow">关注我的人</p>
            <p class="store" v-show="shefollow">关注ta的人</p>
             <!-- <img class="bg02" src="../../assets/user/bg02.png" alt=""> -->
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="follow" v-show="nosend">
                <li v-for="(item,index) in list01" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="item.imgBuffer" alt="">
                        <p>{{item.username}}</p>
                    </div>
                </li>
            </ul>
            <div class="sharebg" v-show="sharebg">
                <img src="../../assets/user/bg02.png" alt="">
                <div class="makedemotext"><router-link to="snap">去snap</router-link><p>创造作品</p> <br/><span>让人关注</span></div>
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
                shefollow:'',//加载关注ta的人文字
                list:'',//负责存储数据
                list01:'',//负责展示数据
                list02:'',//负责初始化数据
                nosend:'',//是否显示列表
                sharebg:'',//没有作品时展示的背景
                i:1//默认加载页数
            }
        },
        mounted: function () {      
            this.Getalldemo()
        },
        methods:{
        //加载默认数据
        Getalldemo(){
            if(!sessionStorage.lookuserdes==''){//加载其他作者关注的信息
            this.myfollow=false,
            this.shefollow=true,
            this.axios.post('/res/userinfo',{
                userid:sessionStorage.lookuserdes,
                state:5,
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
            }else{                      //加载作者本人关注的信息
            this.myfollow=true,
            this.shefollow=false,
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    state:5,
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
            }
        },
        //是否显示用户头像
        showuserimg(){
            if(!this.list){
                this.nosend=false,
                this.sharebg=true
            }else{
                if(!this.list.imgBuffer){
                    this.imgBuffer='static/localpic.png'
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
                        state:5,
                        pagenum:this.i,
                        pagesize:10
                })
                .then(response => {   
                    this.list01 = response.data.data  
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
        //                 state:5,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {   
        //             if(response.data.data){
        //                  this.i
        //                 this.$message({
        //                     message:'没有其他关注的人了~',
        //                     center:true
        //                 })
        //             }else{
        //                  ++this.i
        //                 this.list = response.data.data 
        //             }  
        //         })
        //     }else{
        //         this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.userid,
        //                 state:5,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {   
        //             if(response.data.data){
        //                  this.i
        //                 this.$message({
        //                     message:'没有其他关注的人了~',
        //                     center:true
        //                 })
        //             }else{
        //                  ++this.i
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
        //                 state:5,
        //                 pagenum:this.i,
        //                 pagesize:8
        //             })
        //             .then(response => {        
        //                 this.list = response.data.data
        //             })
        //         }else{
        //         this.axios.post('/res/userinfo',{
        //             userid:sessionStorage.userid,
        //             state:5,
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
.container43{
    width:1200px;
    height: 221px;
    background: @background-color;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container43 .store{
    width:113px;
    height: 23px;
    font-weight: 600;
    color: @gray;
    position: absolute;
    top: 22px;
    left: 19px;
    font-size:@llg-size;   
}
.container43 .follow p{
    font-size:@sm-size;
    color: @delete-color;
    position: relative;
    top: 0px;
    left: 0px;   
    text-align: center;
}
.container43 .follow img{
    position: relative;
    height: 84px;
    width: 84px;
    top: 0px;
    left: 0px;   
    text-align: center;
    border-radius: 50px;
    border: 1px solid @delete-color;
}
.container43 ul{
    list-style: none;
    width: 1200px;
    position: absolute;
    top: 65px;
    left: 85px;
}
.container43 ul li{  
    float: left;
    margin-right: 22px;
    margin-bottom: 100px;
}
.container43 .star{
    position: absolute;
    left: -12px;
    top: -35px;
    width:75pox;
    height: 72px;
}
.container43 .left{
    position: absolute;
    left: 13px;
    top: 92px;
    cursor: pointer;
}
.container43 .right{
    position: absolute;
    left: 1128px;
    top: 92px;
    cursor: pointer;
}
.container43 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container43 .makedemotext a{
    position: relative;
    top: 15px;
    color: @main-color;
    font-size:@xm-size;
    display: inline-block;
}
.container43 .makedemotext p{
    position: relative;
    left: 54px;
    top: -6px;

}
.container43 .makedemotext span{
    position: relative;
    top: -10px;
    font-size:@xm-size;
    color: @delete-color;
}
.container43 .sharebg{
    position: relative;
    left: 449px;
    top: 28px;
}
</style>
