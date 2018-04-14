<template>
    <div class="contain08">
        <div class="container09">
            <el-carousel :interval="3000">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="create">
            <div>
                <router-link to="/snap"><div class="creat01"><img src="../../assets/home/s.png" alt=""></div></router-link>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat02"><img src="../../assets/home/p.png" alt=""></div></a>  
                <a href="static/logo.png" download="logo.png"><div class="creat03"><img src="../../assets/home/g.png" alt=""></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat04"><img src="../../assets/home/b.png" alt=""></div></a> 
                <a href="static/logo.png" download="logo.png"><div class="creat05"><img src="../../assets/home/m.png" alt=""></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat06"><img src="../../assets/home/p1.png" alt=""></div></a>       
            </div> 
            <div id="videobox">
                 <video id="video" src="http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ"  :autoplay="playStatus" @click="playClick" height="224px" width="100%">

                </video> 
            </div>
               
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    const DataImg =[
        {url: 'static/1.jpg'},
        {url: 'static/2.jpg'},
        {url: 'static/3.jpg'}, 
    ]
export default{
    data(){
        return{
            DataImg:DataImg,
            index: 0,
            playStatus:true
        }
    },
    methods:{
        playClick(){
            this._dom = document.getElementById('video');
            this._dom.play(); 
        }
    }
}
</script>
<style scoped>
.contain08{
    width: 100%;
    height: 640px;
    position: relative;
    top: 60px;
    margin-top: 0px;
}
.contain08 .container09{
    height: 380px;
    width: 1200px; 
    margin: 0 auto;
    position: relative;
    top: 54px;
}
.contain08 .container09 img{
    height: 100%;
    width: 100%; 
}
.contain08 .create{
    height: 221px;
    width: 1200px;
    background: #fff;
    position: relative;
    top: 0px;
    margin: 0 auto;
}
.contain08 .creat01{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: relative;
    left: 0px;
    top:0px;
}
.contain08 .creat01 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat02{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 282px;
}
.contain08 .creat02 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat03{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 561px;
}
.contain08 .creat03 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat04{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top:117px;
}
.contain08 .creat04 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat05{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 282px;
    top:117px;
}
.contain08 .creat05 img{
    width: 100%;
    height: 100%;
}
.contain08 .creat06{
    height: 104px;
    width: 266px;
    display: inline-block;
    position: absolute;
    left: 561px;
    top:117px;
}
.contain08 .creat06 img{
    width: 100%;
    height: 100%;
}
#videobox{
    width: 328px;
    height: 224px;
    position: relative;
    left: 869px;
    top: -108px;
    background: #000;
}

</style>