<template>
    <div class="container43">
        <div>
            <img class="star" src="../../assets/user/starfish.png" alt="">
            <p class="store">关注我的人</p>
             <!-- <img class="bg02" src="../../assets/user/bg02.png" alt=""> -->
            <img class="left" src="../../assets/user/left.png" alt="">
            <ul class="follow" v-show="nosend">
            
            </ul>
            <img class="right" src="../../assets/user/right.png" alt="">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:'',
                nosend:true
            }
        },
        mounted: function () {      
            this.Getalldemo()
        },
        methods:{
            Getalldemo(){
                this.axios.post('/res/filelist',{
                        userid:sessionStorage.userid,
                        state:5
                    })
                    .then(response => {     
                    if(response.data.data.msg==="这回真的没有了~"){
                        this.nosend = false
                        console.log(response)
                    } else{
                        this.list = response.data.data
                        console.log(this.list)
                    }    

                })
            }
        }
    }
</script>
<style>
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
    left: 71px;
    font-size: 22px;   
}
.container43 .follow p{
    font-size: 14px;
    color: #999;
    position: relative;
    top: 0px;
    left: 0px;   
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
</style>
