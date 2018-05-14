<template>
    <div class="container41">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store" v-show="myfollow">我收藏的作品</p>
            <p class="store" v-show="shefollow">ta收藏的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="block" v-show="nosend">
                <li v-for="(item,index) in list01" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="item.imgBuffer" alt="">
                        <p>{{item.title}}</p>
                        <span>作者：{{item.auth}}</span>
                    </div>
                </li>
            </ul>
             <div class="sharebg" v-show="sharebg">
                <img src="../../assets/user/bg02.png" alt="">
                <div class="makedemotext"><router-link to="Home">到首页</router-link><p>收藏作品</p> <br/><span>还没有收藏作品</span></div>
            </div>
            <img class="right" src="../../assets/user/right.png" alt="" @click="Pagingup">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myfollow:'',
            shefollow:'',
            store01:true,
            nosend:false,
            sharebg:true,
            list:'',
            list01:'',
            list02:'',
            i:1
        };
    },
    mounted:function(){
        this.loadstoremessage()
    },
    methods:{
        loadstoremessage(){
            if(!sessionStorage.lookuserdes==''){
                this.myfollow=false,
                this.shefollow=true,
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:3,
                        pagesize:6
                })
                .then(response => {
                    this.list = response.data.data    
                    this.list01 = response.data.data 
                    this.list03 = response.data.data      
                    if(!response.data.data){
                        this.nosend=false,
                        this.sharebg=true
                    }else{
                        this.nosend=true,
                        this.sharebg=false
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                }
            else{
                this.myfollow=true,
                this.shefollow=false,
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:3,
                        pagenum:1,
                        pagesize:6
                })
                .then(response => {
                    this.list = response.data.data
                    this.list01 = response.data.data
                    this.list03 = response.data.data 
                    if(!response.data.data){
                        this.nosend=false,
                        this.sharebg=true
                    }else{
                        this.nosend=true,
                        this.sharebg=false
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },


            Pagingup(){ 
                this.i=this.i+1
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:3,
                        pagenum:this.i,
                        pagesize:6
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
                    this.list01 = this.list.slice(this.list.length-6,this.list.length)  
                    this.list = this.list.slice(0,this.list.length-6)
                    if(this.list01.length<6){
                        this.i=1
                        this.list=[]
                        this.list01 = this.list03
                    }   
                 }
            },


            // Pagingup(){    
            //     if(this.list01.length<6){
            //         this.i=1
            //     }else{
            //         ++this.i
            //     }
            //     this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
            // },
            // Pagingdown(){
            //      --this.i
            //      if(this.i<=1){
            //         this.i=1
            //         this.$message({
            //             message:'已经到第一页了~',
            //             center:true
            //         })
            //         this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
            //         console.log(this.list)
            //      }else{
            //         this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
            //      }
            // },


        //     Pagingup(){
        //         if(!sessionStorage.lookuserdes==''){
        //         this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.lookuserdes,
        //                 state:3,
        //                 pagenum:this.i,
        //                 pagesize:6
        //             })
        //             .then(response => {   
        //                 if(response.data.data){
        //                     this.i=this.i
        //                     this.$message({
        //                         message:'没有其他作品了~',
        //                         center:true
        //                     })
        //                 }else{
        //                    ++this.i
        //                    this.list = response.data.data 
        //                 }  
        //         })
        //         }else{
        //         this.axios.post('/res/userinfo',{
        //                 userid:sessionStorage.userid,
        //                 state:3,
        //                 pagenum:this.i,
        //                 pagesize:6
        //             })
        //             .then(response => {   
        //                 if(response.data.data){
        //                     this.i
        //                     this.$message({
        //                         message:'没有其他作品了~',
        //                         center:true
        //                     })
        //                 }else{
        //                    ++this.i
        //                    this.list = response.data.data 
        //                 }  
        //             })
        //         }
        //     },
        //     Pagingdown(){
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
        //     if(!sessionStorage.lookuserdes==''){
        //         this.axios.post('/res/userinfo',{
        //             userid:sessionStorage.lookuserdes,
        //             state:3,
        //             pagenum:this.i,
        //             pagesize:6
        //         })
        //         .then(response => {        
        //             this.list = response.data.data
        //         })
        //     }else{
        //         this.axios.post('/res/userinfo',{
        //             userid:sessionStorage.userid,
        //             state:3,
        //             pagenum:this.i,
        //             pagesize:6
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
.container41{
    width:1200px;
    height: 316px;
    background: @background-color;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container41 .store{
    width:154px;
    height: 24px;
    font-weight: 600;
    color: @gray;
    position: absolute;
    top: 19px;
    left: 19px;
    font-size:@llg-size;   
}
.container41 .block p{
    font-size:@llg-size;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container41 .block span{
    font-size:@xm-size;
    color: @delete-color;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container41 .block img{
    width: 154px;
    height: 153px;  
}
.container41 ul{
    list-style: none;
    width: 1200px;
    position: absolute;
    top: 65px;
    left: 67px;
}
.container41 ul li{  
    float: left;
    margin-right: 22px;
}
.container41 .star{
    position: absolute;
    left: -12px;
    top: -35px;
}
.container41 .left{
    position: absolute;
    left: 13px;
    top: 142px;
    cursor: pointer;
}
.container41 .right{
    position: absolute;
    left: 1128px;
    top: 142px;
    cursor: pointer;
}
.container41 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container41 .makedemotext a{
    position: relative;
    top: 15px;
    color: @main-color;
    font-size:@xm-size;
    display: inline-block;
}
.container41 .makedemotext p{
    position: relative;
    left: 50px;
    top: -6px;

}
.container41 .makedemotext span{
    position: relative;
    top: -10px;
    font-size:@xm-size;
    color: @delete-color;
}
.container41 .sharebg{
    position: relative;
    left: 449px;
    top: 58px;
}
</style>