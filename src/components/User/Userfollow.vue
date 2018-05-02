<template>
    <div class="container42">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store">我关注的人</p>
            <img class="left" src="../../assets/user/left.png" alt="">
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
                <div class="makedemotext"><router-link to="Home">到首页</router-link><p>观看作品</p> <br/><span>寻找关注的人</span></div>
            </div>
            <img class="right" src="../../assets/user/right.png" alt="">
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
        }
    },
    mounted: function () {      
        this.Getalldemo()
    },
    methods:{
        Getalldemo(){
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    state:4
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
        }
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
}
.container42 .right{
   position: absolute;
   left: 1128px;
   top: 92px;
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