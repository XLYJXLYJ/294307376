<template>
    <div class="container43">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store">关注我的人</p>
             <!-- <img class="bg02" src="../../assets/user/bg02.png" alt=""> -->
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="follow" v-show="nosend">
                <li v-for="(item,index) in list" :key='item.id' v-if="index<6">
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
                list:'',
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
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:5,
                        pagesize:8
                    })
                    .then(response => {     
                    this.list = response.data.data
                    console.log(this.list)
                    if(!response.data.data){
                        this.nosend=false,
                        this.sharebg=true
                    }else{
                        this.nosend=true,
                        this.sharebg=false
                    }    
                })
            },
            Pagingup(){
                ++this.i
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:5,
                        pagenum:this.i,
                        pagesize:8
                    })
                    .then(response => {   
                        if(response.data.data){
                            this.$message({
                                message:'没有其他关注我的人了~',
                                center:true
                            })
                        }else{
                            this.list = response.data.data 
                        }  
                })
            },
            Pagingdown(){
                    --this.i
                    if(this.i<=1){
                    this.i=1
                    this.$message({
                        message:'已经到第一页了~',
                        center:true
                    })
                    }else{
                    this.i=this.i
                    }
                this.axios.post('/res/userinfo',{
                        userid:sessionStorage.userid,
                        state:5,
                        pagenum:this.i,
                        pagesize:8
                    })
                    .then(response => {        
                        this.list = response.data.data
                })
            },
        }
    }
</script>
<style scoped>
.container43{
    width:1200px;
    height: 221px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container43 .store{
    width:113px;
    height: 23px;
    font-weight: 600;
    color: #333;
    position: absolute;
    top: 22px;
    left: 19px;
    font-size: 22px;   
}
.container43 .follow p{
    font-size: 14px;
    color: #999;
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
    border: 1px solid #999;
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
}
.container43 .right{
    position: absolute;
    left: 1128px;
    top: 92px;
}
.container43 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container43 .makedemotext a{
    position: relative;
    top: 15px;
    color: #f13232;
    font-size: 16px;
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
    font-size: 16px;
    color: #999;
}
.container43 .sharebg{
    position: relative;
    left: 449px;
    top: 28px;
}
</style>
