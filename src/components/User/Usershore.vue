<template>
    <div class="container41">
        <div>
            <!-- <img class="star" src="../../assets/user/starfish.png" alt=""> -->
            <p class="store">我收藏的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="">
            <ul class="block" v-show="nosend">
                <li v-for="(item,index) in list" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="item.imgBuffer" alt="">
                        <p>{{item.title}}</p>
                        <span>作者：{{$store.state.usernamesession02}}</span>
                    </div>
                </li>
            </ul>
             <div class="sharebg" v-show="sharebg">
                <img src="../../assets/user/bg02.png" alt="">
                <div class="makedemotext"><router-link to="Home">到首页</router-link><p>收藏作品</p> <br/><span>还没有收藏作品</span></div>
            </div>
            <img class="right" src="../../assets/user/right.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            store01:true,
            nosend:false,
            sharebg:true,
            list:'',
        };
    },
    mounted:function(){
        this.loadstoremessage()
    },
    methods:{
        loadstoremessage(){
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    state:3,
            })
            .then(response => {
                 this.list = response.data.data
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
        },
        Pagingup(){
            this.i = this.i+6
            this.axios.post('/res/filelist',{
                    userid:sessionStorage.userid,
                    state:1
                })
                .then(response => {       
                    this.list = response.data.data.slice(this.i,this.i+6)
            })
        },
        Pagingdown(){
            this.i = this.i-6
            this.axios.post('/res/filelist',{
                    userid:sessionStorage.userid,
                    state:1
                })
                .then(response => {    
                    this.list = response.data.data.slice(this.i,this.i+6)
            })
        },
    }
  }
</script>
<style scoped>
.container41{
    width:1200px;
    height: 316px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container41 .store{
    width:154px;
    height: 24px;
    font-weight: 600;
    color: #333;
    position: absolute;
    top: 19px;
    left: 19px;
    font-size: 22px;   
}
.container41 .block p{
    font-size: 22px;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container41 .block span{
    font-size: 16px;
    color: #999;
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
}
.container41 .right{
    position: absolute;
    left: 1128px;
    top: 142px;
}
.container41 .makedemotext{
    position: relative;
    top: -170px;
    left: 20px;
}
.container41 .makedemotext a{
    position: relative;
    top: 15px;
    color: #f13232;
    font-size: 16px;
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
    font-size: 16px;
    color: #999;
}
.container41 .sharebg{
    position: relative;
    left: 449px;
    top: 58px;
}
</style>