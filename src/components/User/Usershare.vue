<template>
    <div class="container40">
        <div>
            <img class="star" src="../../assets/user/starfish.png" alt="">
            <p class="store">我分享的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="">
            <ul class="block" v-show="nosend">
                <li v-for="item in list" :key='item.id'>
                    <div class="share">
                        <img src="../../assets/user/userdemo.png" alt="">
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
    export default{
        data(){
            return{
                list:'',
                nosend:true
            }
        },
        mounted: function () {      
            this.Getalldemo()
            console.log('share')
        },
        methods:{
            Getalldemo(){
                this.axios.post('/res/filelist',{
                        userid:sessionStorage.userid,
                        state:1
                    })
                    .then(response => {           
                        this.list = response.data.data
                        console.log(12345)
                })
            }
        }
    }
</script>
<style>
.container40{
    width:1000px;
    height: 263px;
    background: #fffbf2;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.container40 .store{
    width:111px;
    height: 263px;
    font-weight: 600;
    color: #91121b;
    position: absolute;
    top: 19px;
    left: 59px;   
}
.container40 .block p{
    font-size: 18px;
    color: #555;
    text-align: left;
    position: relative;
    top: 0px;
    left: 0px;   
}
.container40 .block span{
    font-size: 14px;
    color: #999;
    position: relative;
    top: 0px;
    left: -24px;   
}
.container40 ul{
    list-style: none;
    width: 1000px;
    position: absolute;
    top: 55px;
    left: 67px;
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
   left: 18px;
   top: 118px;
}
.container40 .right{
   position: absolute;
   left: 948px;
   top: 118px;
}
</style>