<template>
    <div class="container41">
        <div>
            <img class="star" src="../../assets/user/starfish.png" alt="">
            <p class="store">我收藏的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="">
            <ul class="block" v-show="store01">
                    <li>
                        <div class="share">
                            <img src="../../assets/user/userdemo.png" alt="">
                            <p>三只小熊</p>
                            <span>作者：哇哈哈</span>
                        </div>
                    </li>
                    <li>
                        <div class="share">
                            <img src="../../assets/user/userdemo.png" alt="">
                            <p>快乐的小青蛙</p>
                            <span>作者：：李永健</span>
                        </div>
                    </li>
                    <li>
                        <div class="share">
                            <img src="../../assets/user/userdemo.png" alt="">
                            <p>快乐的小青蛙</p>
                            <span>作者：：李永健</span>
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
          store01:true
      };
    },
    mounted:function(){
       this.loadstoremessage()
    },
    methods:{
        loadstoremessage(){
            this.axios.post('/res/userinfo',{
                    userid:this.$store.state.userid,
                    getinfostate:4,
            })
            .then(response => {
                console.log(response.data.data)
                if(response.data.data===false){
                    this.store01 = false
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  }
</script>
<style>
.container41{
    width:1000px;
    height: 263px;
    background: #fffbf2;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container41 .store{
    width:111px;
    height: 263px;
    font-weight: 600;
    color: #91121b;
    position: absolute;
    top: 19px;
    left: 59px;   
}
.container41 .block p{
    font-size: 18px;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container41 .block span{
    font-size: 14px;
    color: #999;
 
    position: relative;
    top: 0px;
    left: -14px;   
}
.container41 ul{
    list-style: none;
    width: 1000px;
    position: absolute;
    top: 55px;
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
   left: 18px;
   top: 118px;
}
.container41 .right{
   position: absolute;
   left: 948px;
   top: 118px;
}
</style>