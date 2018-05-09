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
                        <img :src="item.imgBuffer" alt="">
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
            myfollow:'',
            shefollow:'',
            list:'',
            list01:'',
            list02:'',
            nosend:true,
            sharebg:'',
            i:1
        }
    },
    mounted: function () {      
        this.Getalldemo()
    },
    methods:{
        Getalldemo(){
            if(!sessionStorage.lookuserdes==''){
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
                if(!response.data.data){
                    this.nosend=false,
                    this.sharebg=true
                }else{
                    this.nosend=true,
                    this.sharebg=false
                }  
            })
            }else{
            this.myfollow=true,
            this.shefollow=false,
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    state:4,
                    pagenum:1,
                    pagesize:10
                })
                .then(response => {     
                 this.list = response.data.data
                this.list01 = response.data.data
                this.list02 = response.data.data
                    if(!response.data.data){
                        this.nosend=false,
                        this.sharebg=true
                    }else{
                        this.nosend=true,
                        this.sharebg=false
                    }  
                })
            }
        },


        
            Pagingup(){ 
                this.i=this.i+1
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:4,
                        pagenum:this.i,
                        pagesize:10
                })
                .then(response => {   
                    this.list01 = response.data.data  
                    this.list=this.list.concat(this.list01)
                    if(this.list01.length==0){
                        this.i=1
                        this.list=[]
                        this.list01 = this.list03
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });           
            },
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
<style scoped>
.container42{
    width:1200px;
    height: 221px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container42 .store{
    width:113px;
    height: 23px;
    font-weight: 600;
    color: #333;
    position: absolute;
    top: 22px;
    left: 19px;
    font-size: 22px;   
}
.container42 .follow p{
    font-size: 14px;
    color: #999;
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
    border: 1px solid #999;
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
    color: #f13232;
    font-size: 16px;
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
    font-size: 16px;
    color: #999;
}
.container42 .sharebg{
    position: relative;
    left: 449px;
    top: 28px;
}
</style>