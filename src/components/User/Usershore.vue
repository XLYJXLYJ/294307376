<template>
    <div class="container41">
        <div>
            <img class="star" src="../../assets/user/starfish.png" alt="">
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
            <img class="right" src="../../assets/user/right.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
          store01:true,
          nosend:true,
          list:'',
      };
    },
    mounted:function(){
       this.loadstoremessage()
    },
    methods:{
        loadstoremessage(){
            console.log(123)
            this.axios.post('/res/userinfo',{
                    userid:sessionStorage.userid,
                    state:3,
            })
            .then(response => {
                console.log(response.data.data)
                 this.list = response.data.data
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
                    console.log(response.data.data.slice(this.i,this.i+6))     
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
                    console.log(response.data.data.slice(this.i,this.i+6))     
                    this.list = response.data.data.slice(this.i,this.i+6)
            })
        },
    }
  }
</script>
<style>
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
    left: 59px;
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
</style>