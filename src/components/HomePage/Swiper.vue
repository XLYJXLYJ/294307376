<template>
    <div class="contain08">
        <div class="container09">
            <el-carousel :interval="3000" type="card" height="300px">
                <el-carousel-item v-for="(item,index) in DataImg" :key="index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="create">
            <div>
                <router-link to="/snap"><div class="creat_snap"><p class="creat_stories_one">积木式编程</p><p class="creat_stories_two">Snap</p></div></router-link>
                <!-- <a href="static/snap/index.html" target="_blank"><div class="creat_snap"><p class="creat_stories_one">积木式编程</p><p class="creat_stories_two">Snap</p></div></a> -->
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat_blocky"><p class="box_games_one">硬件编程</p><p class="box_games_two">Blockly</p></div></a>  
                <a href="static/logo.png" download="logo.png"><div class="creat_phoneix"><p class="creat_phoneix_one">开发引擎</p><p class="creat_phoneix_two">PHONEIX</p></div></a>
                <a href="http://www.manykit.com/blockly" target="_blank"><div class="creat_manykit"><p class="creat_manykit_one">01机器人</p><p class="creat_manykit_two">Manykit</p></div></a>    
            </div>        
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    const DataImg =[
        {url: 'https://static.codemao.cn/whitepaw/scrollpic/2018031401.jpg'},
        {url: 'https://static.codemao.cn/whitepaw/scrollpic/noc.jpg'},
        {url: 'https://static.codemao.cn/whitepaw/scrollpic/hardware_banner.png'}   
    ]
export default{
    data(){
        return{
            DataImg:DataImg,
            index: 0
        }
    }
}
</script>
<style scoped>
.contain08{
    width: 100%;
    height: 553px;
    background-image: url(../../assets/home/bg.png);
    background-repeat: no-repeat;
    background-size:100% 553px;
    position: relative;
    top: 0px;
    margin-top: 60px;
}
.container09{
    height: 300px;
    width: 1000px; 
    margin: 0 auto;
    position: relative;
    top: 30px;
}
.container09 img{
    height: 100%;
    width: 100%; 
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    width:580px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    width:500px;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    width:500px;
}
.el-carousel__item{
    border-radius: 20px;
}
.create{
    height: 300px;
    width: 1000px;
    background: #fff;
    position: relative;
    top: 51px;
    margin: 0 auto;
    border-radius: 12px;
}
.creat_snap{
    height: 216px;
    width: 223px;
    background:url(../../assets/home/Snap.png) no-repeat;
    display: inline-block;
    position: absolute;
    left: 24px;
    top:16px;
    margin: 0 auto;
}
.creat_blocky{
    height: 216px;
    width: 223px;
    background:url(../../assets/home/Blockly.png) no-repeat;
    display: inline-block;
    position: absolute;
    left: 268px;
    top:16px;
}
.creat_phoneix{
    height: 216px;
    width: 223px;
    background:url(../../assets/home/PHOENIXEngine.png) no-repeat;
    display: inline-block;
    position: absolute;
    left: 510px;
    top:16px;
}
.creat_manykit{
    height: 216px;
    width: 223px;
    background:url(../../assets/home/Manykit.png) no-repeat;
    display: inline-block;
    position: absolute;
    left: 754px;
    top:16px;
}
.create .creat_stories_one{
    position: absolute;
    top:230px;
    left: 58px;
    font-size: 22px;
    color: #0e0e0e;
}
.create .creat_stories_two{
    position: absolute;
    top:265px;
    left: 95px;
    color: #0e0e0e;
}
.box_games_one{
    position: absolute;
    top:230px;
    left: 71px;
    font-size: 22px;
    color: #0e0e0e;
}
.box_games_two{
    position: absolute;
    top:265px;
    left: 90px;
    color: #0e0e0e;
}
.creat_phoneix_one{
    position: absolute;
    top:230px;
    left: 80px;
    font-size: 22px;
    color: #0e0e0e;
}
.creat_phoneix_two{
    position: absolute;
    top:265px;
    left: 88px;
    color: #0e0e0e;
}
.creat_manykit_one{
    position: absolute;
    top:230px;
    left: 80px;
    font-size: 22px;
    color: #0e0e0e;
}
.creat_manykit_two{
    position: absolute;
    top:265px;
    left: 94px;
    color: #0e0e0e;
}
.expe_img{
    height: 17px;
    width: 175px;
    position: absolute;
    top:-50px;
    left: 76px;;
}
</style>