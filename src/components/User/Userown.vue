<template>
    <div class="container39">
        <div>
            <div>
                <img class="head" src="../../assets/user/head.png" alt="">
                <p class="name">XLYJ</p>
                <p class="atten">编程达人</p>
            </div>
            <div>
                <button :class='{"attenbutton01":buttoncolor,"attenbutton02":!buttoncolor}' @click="attenbutton"><p>{{ atten?'关注':'取消关注' }}</p></button>
            </div>
        </div>
        <div class="aboutbox">
            <p class="aboutme">关于我</p>
            <textarea class="aboutmetext" name="" id="" cols="30" rows="10" placeholder="简单介绍你自己"></textarea>
        </div>
         <div class="doing">
            <p class="medoing">我正在做什么</p>
            <textarea class="medoingtext" name="" id="" cols="30" rows="10" placeholder="描述一下你正在做什么"></textarea>
        </div>
        <div>
            <div>
                <img class="userdemo" src="../../assets/user/bg01.png" alt="">
                <div class="makedemotext"><a href="">创作</a><p>你的封面作品</p> <br/><span>还没有封面作品</span></div>
            </div>
            
            <p class="name01">封面作品</p>
            <p class="atten01">暂无作品</p>
        </div>
        <div class="sum">
            <p class="sum01">你的作品已经累积获得了:</p>
            <div class="good"><p>100</p><span>个赞</span></div>
            <div class="store"><p>100</p><span>个收藏</span></div>
            <div class="make"><p>100</p><span>次再创作</span></div>
            <div class="see"><p>100</p><span>次浏览</span></div>
        </div>
        <div class="mydy">我的动态</div>
  </div>
</template>
<script>
import Vue from 'vue'
    export default{
        data(){
            return{
                 atten:true,
                 buttoncolor:true
            }
           
        },
        methods:{
            attenbutton(atten){
                this.buttoncolor=!this.buttoncolor
                this.atten=!this.atten;
            }
        }
    }
</script>
<style>
.container39{
    width:1000px;
    height: 546px;
    background: #fffbf2;
    position: absolute;
    top: 60px;
    left: 460px;   
}
.container39 .head{
    width:60px;
    height: 60px;
    position: absolute;
    top: 10px;
    left: 11px;   
}
.container39 .name{
    width:108px;
    height: 25px;
    position: absolute;
    top: 14px;
    left: 82px; 
    color: #91121b;
    font-size: 24px;  
    font-weight: 600;
}
.container39 .atten{
    width:86px;
    height: 19px;
    position: absolute;
    top: 46px;
    left: 90px; 
    color: #fff;
    font-size: 14px;  
    font-weight: 600;
    background: url(../../assets/user/rectan02.png)  
}
.container39 .attenbutton01{
    width:108px;
    height: 36px;
    position: absolute;
    top: 24px;
    left: 872px; 
    color: #fff;
    font-size: 16px;  
    font-weight: 600;
    border: none;
    background: #0078d7;
    cursor: pointer;
}
.container39 .attenbutton02{
    width:108px;
    height: 36px;
    position: absolute;
    top: 24px;
    left: 872px; 
    color: #fff;
    font-size: 16px;  
    font-weight: 600;
    border: none;
    background: #EFC355;
    cursor: pointer;
}
.container39 .aboutbox{
    position: absolute;
    top: 104px;
    left: 39px;
}
.container39 .aboutme{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 56px;
    height: 18px;
    color: #333;
    font-size: 18px;
}
.container39 .aboutmetext{
    position: absolute;
    top: 29px;
    left: 0px;
    width: 287px;
    height: 150px;
    color: #A9A9A9;
    font-size: 16px;
    background: #f2efe6; 
    border: 2px dashed #d5d3cd;
    border-radius: 20px;
    text-indent: 1rem;
}
.container39 .doing{
    position: absolute;
    top: 311px;
    left: 39px;
}
.container39 .medoing{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 111px;
    height: 18px;
    color: #333;
    font-size: 18px;
}
.container39 .medoingtext{
    position: absolute;
    top: 29px;
    left: 0px;
    width: 287px;
    height: 150px;
    color: #A9A9A9;
    font-size: 16px;
    background: #f2efe6; 
    border: 2px dashed #d5d3cd;
    border-radius: 20px;
    text-indent: 1rem;
}
.container39 .userdemo{
    position: absolute;
    top: 135px;
    left: 359px;
}
.container39 .makedemotext{
    position: absolute;
    width: 187px;
    top: 287px;
    left: 369px;
    color: #3D4245;
}
.container39 .makedemotext a{
    position: absolute;
    left: 45px;
    font-size: 14px;
    color: #0078d7;  
}
.container39 .makedemotext p{
    position: absolute;
    font-size: 14px;
    left: 74px;
    color: #3d4245;  
}
.container39 .makedemotext span{
    color: #999;
    font-size: 14px;
    position: absolute;
    font-size: 14px;
    left: 54px;
}
.container39 .name01{
    position: absolute;
    top: 103px;
    left: 364px;
    color: #333;
    font-size: 18px;
}
.container39 .atten01{
    position: absolute;
    top: 357px;
    left: 444px;
    color: #000;
    font-size: 14px;
}
.container39 .sum{
    position: absolute;
    width: 209px;
    height: 114px;
    left: 357px;
    top: 384px;
    border: 1px solid #e5e1d9;
}
.container39 .mydy{
    position: absolute;
    width: 74px;
    height: 18px;
    left: 637px;
    top: 104px;
    color: #333;
    font-size: 18px;
}
.container39 .sum .sum01{
    position: absolute;
    width: 164px;
    height: 15px;
    left: 14px;
    top: 18px;
    color: #ccc;
    font-size: 14px;
}
.container39 .sum .good{
    position: absolute;
    width: 164px;
    height: 18px;
    left: 15px;
    top: 49px;
    color: #ccc;
    font-size: 14px;
}
.container39 .sum .good p{
    position: absolute;
    width: auto;
    color: #000;
    font-size: 18px;
}
.container39 .sum .good span{
    position: absolute;
    left: 29px;
    color: #ccc;
    font-size: 14px;
}
.container39 .sum .store p{
    position: absolute;
    top: 49px;
    left: 109px;
    width: auto;
    color: #000;
    font-size: 18px;
}
.container39 .sum .store span{
    position: absolute;
    top: 49px;
    left: 141px;
    color: #ccc;
    font-size: 14px;
}
.container39 .sum .make p{
    position: absolute;
    top: 83px;
    left: 16px;
    color: #000;
    font-size: 18px;
}
.container39 .sum .make span{
    position: absolute;
    top: 85px;
    left: 48px;
    color: #ccc;
    font-size: 14px;
}
.container39 .sum .see p{
    position: absolute;
    top: 83px;
    left: 109px;
    color: #000;
    font-size: 18px;
}
.container39 .sum .see span{
    position: absolute;
    top: 85px;
    left: 141px;
    color: #ccc;
    font-size: 14px;
}
</style>
