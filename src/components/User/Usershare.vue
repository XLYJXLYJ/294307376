<template>
    <div class="container40">
        <div>
            <img class="star" src="../../assets/user/starfish.png" alt="">
            <p class="store">我分享的作品</p>
            <img class="left" src="../../assets/user/left.png" alt="" @click="Pagingdown">
            <ul class="block" v-show="nosend">
                <li v-for="(item,index) in list" :key='item.id' v-if="index<6">
                    <div class="share">
                        <img :src="item.imgBuffer" alt="">
                        <p>{{item.title}}</p>
                        <span>作者：{{$store.state.usernamesession02}}</span>
                    </div>
                </li>
            </ul>
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
                i:0,
            }
        },
        mounted: function () {      
            this.Getalldemo()
        },
        methods:{
            Getalldemo(){
                this.axios.post('/res/filelist',{
                        userid:sessionStorage.userid,
                        state:1
                    })
                    .then(response => {           
                        this.list = response.data.data
                })
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
<style>
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
    left: 59px;  
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
    width: 1200px;
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
</style>