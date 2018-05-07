<template>
    <div class="container40">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store" v-show="myfollow">我分享的作品</p>
            <p class="store" v-show="shefollow">ta分享的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="block" v-show="nosend">
                <li v-for="(item,index) in list01" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="item.imgBuffer" alt="">
                        <p>{{item.title}}</p>
                        <span>作者：{{name}}</span>
                    </div>
                </li>
            </ul>
            <div class="sharebg" v-show="sharebg">
                <img src="../../assets/user/bg02.png" alt="">
                <div class="makedemotext"><router-link to="snap">创作</router-link><p>作品分享它到发现</p> <br/><span>还没有封面作品</span></div>
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
                nosend:false,
                sharebg:true,
                i:1,
                name:''
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
                    this.axios.post('/res/filelist',{//
                        userid:sessionStorage.lookuserdes,
                        state:1,
                    })
                    .then(response => {  
                        this.list = response.data.data
                        this.list01 = response.data.data
                        this.name = response.data.auth
                        if(response.data.data.msg == "这回真的没有了~"){
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
                    this.axios.post('/res/filelist',{
                        userid:sessionStorage.userid,
                        state:1,
                    })
                    .then(response => {           
                        this.list = response.data.data
                        this.list01 = response.data.data
                        if(response.data.data.msg == "这回真的没有了~"){
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
                if(this.list01.length<6){
                    this.i=1
                }else{
                    ++this.i
                }
                this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
            },
            Pagingdown(){
                 --this.i
                 if(this.i<=1){
                    this.i=1
                    this.$message({
                        message:'已经到第一页了~',
                        center:true
                    })
                    this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
                    console.log(this.list)
                 }else{
                    this.list01 = this.list.slice(6*(this.i-1),6*this.i)           
                 }
            },


            // Pagingup(){               
            //     if(!sessionStorage.lookuserdes==''){
            //         this.axios.post('/res/filelist',{
            //             userid:sessionStorage.lookuserdes,
            //             state:1,
            //         })
            //         .then(response => {   
            //             if(response.data.data){
            //                 this.i
            //                 this.$message({
            //                     message:'没有其他作品了~',
            //                     center:true
            //                 })
            //             }else{

            //                ++this.i
            //                this.list = response.data.data 
            //                 console.log(this.list)
            //             }  
            //         })
            //     }else{
            //         this.axios.post('/res/filelist',{
            //             userid:sessionStorage.userid,
            //             state:1,
            //         })
            //         .then(response => {   
            //             if(response.data.data){
            //                 this.i
            //                 this.$message({
            //                     message:'没有其他作品了~',
            //                     center:true
            //                 })
            //             }else{
            //                 ++this.i
            //                this.list = response.data.data 
            //             }  
            //         })
            //     }
            // },
            // Pagingdown(){
            //      --this.i
            //      if(this.i<=1){
            //         this.i=1
            //         this.$message({
            //             message:'已经到第一页了~',
            //             center:true
            //         })
            //      }else{
            //         this.i=this.i
            //      }
            //      if(!sessionStorage.lookuserdes==''){
            //         this.axios.post('/res/filelist',{
            //             userid:sessionStorage.lookuserdes,
            //             state:1,
            //         })
            //         .then(response => {        
            //             this.list = response.data.data
            //         })
            //      }else{
            //         this.axios.post('/res/filelist',{
            //             userid:sessionStorage.userid,
            //             state:1,
            //         })
            //         .then(response => {        
            //             this.list = response.data.data
            //         })
            //      }
            // },
        }
    }
</script>
<style scoped>
.container40{
    width:1200px;
    height: 316px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container40 .store{
    width:154px;
    height: 24px;
    font-weight: 600;
    color: #333;
    position: absolute;
    top: 19px;
    left: 19px;  
    font-size: 22px; 
}
.container40 .block p{
    font-size: 22px;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container40 .block span{
    font-size: 16px;
    color: #999;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container40 .block img{
    width: 154px;
    height: 153px;  
}
.container40 ul{
    list-style: none;
    width: 1060px;
    height: 400px!important;
    position: absolute;
    top: 65px;
    left: 76px;
}
.container40 ul li{  
    float: left;
    margin-right: 22px;
}
.container40 .star{
    position: absolute;
    left: -12px;
    top: -35px;
}
.container40 .left{
    position: absolute;
    left: 13px;
    top: 142px;
}
.container40 .right{
    position: absolute;
    left: 1128px;
    top: 142px;
}
.container40 .sharebg{
    position: relative;
    left: 449px;
    top: 58px;
}
.container40 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container40 .makedemotext a{
    position: relative;
    top: 15px;
    color: #f13232;
    font-size: 16px;
    display: inline-block;
}
.container40 .makedemotext p{
    position: relative;
    left: 34px;
    top: -6px;

}
.container40 .makedemotext span{
    position: relative;
    top: -10px;
    font-size: 16px;
    color: #999;
}
</style>