<template>
  <div class="container64">
        <div class="sort01">
            <p class="sort01text">作品分类:</p>
            <ul>
                <li><p>我的世界</p><span>(1965)</span></li>
                <li><p>植物大战僵尸</p><span>(84)</span></li>
                <li><p>超级玛丽</p><span>(115)</span></li>
                <li><p>愤怒的小鸟</p><span>(1965)</span></li>
                <li><p>连连看</p><span>(84)</span></li>
            </ul>
        </div>
           <div class="sort03">
            <p class="sort03text">作品分类:</p>
            <ul>
                <li><p>全部</p><span>(115)</span></li>
                <li><p>角色</p><span>(1965)</span></li>
                <li><p>背景</p><span>(84)</span></li>
                <li><p>声音</p><span>(115)</span></li>
            </ul>
        </div>
            <div class="sort02">
            <ul>
                <li><p>最近更新</p></li>
                <li><p>最多使用</p></li>
            </ul>
            <el-checkbox class="nobuy" v-model="checked">仅显示未购买</el-checkbox>
            <p class="all">共有1965个素材</p>
            <span class="num01">1</span><span class="num02">/99</span>
            <button class="button01"><span>&lt;</span></button>
            <button class="button02"><span>&gt;</span></button>
        </div>
       
        <div class="first">
        <div class="line"></div>
            <ul class="role">
                <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                   <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/rolepic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
            </ul>
        </div>
         <div class="two">
        <div class="linetwo"></div>
            <ul class="role">
                <li>
                    <img src="../../../assets/source/bgpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/bgpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/bgpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/bgpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
            </ul>
        </div>
         <div class="three">
        <div class="linethree"></div>
            <ul class="role">
                <li>
                    <img src="../../../assets/source/musicpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/musicpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/musicpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                    <li>
                    <img src="../../../assets/source/musicpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
                 <li>
                    <img src="../../../assets/source/musicpic.png" alt="">
                    <div class="roleup">
                        <p class="money"><span>0</span></p><button>采集</button>
                        <p class="text">背景</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="sortnum01">
            <ul>
                <li><p>1</p></li>
                <li><p>2</p></li>
                <li><p>3</p></li>
                <li><p>4</p></li>
                <li><p>5</p></li>
                <li><p>6</p></li>
                <li><p>7</p></li>
                <li><p>8</p></li>
                <li><p>9</p></li>
                <li class="endpage"><p>尾页</p></li>
                <li class="nextpage"><p>下一页</p></li>
            </ul>
            <span>共99页</span>
        </div>
        <p class="endtext">部分素材来源自网络，版权归原作者所有。所有素材仅供个人创作娱乐使用，禁止做任何商业用途，由此产生的任何法律纠纷本网站不予承担</p>
  </div>
</template>
<script>
import Sourcehead from '@/components/Source/Sourcehead'
export default{
    data() {
      return {
        checked: true
      };
    },
    components:{
        Sourcehead
    }
}
</script>
<style scoped>
.container64{
    width: 100%;
    height: 1486px;
    z-index: 100;
    position: relative;
    top: 0px;
    left: 0px;
    background: #fffbf2;
    margin-bottom: 30px;
    border-radius: 20px;
}
.container64 .sort01 ul{
   list-style: none;
   position: relative;
   left: 120px;
   top: -20px;
}
.container64 .sort01text{
   display: inline-block;
   position: relative;
   left: -430px;
   color:#7f6b6f;
   font-size: 13px;
}
.container64 .sort01 ul p{
   display: inline-block;
   margin-top: 0px;
}
.container64 .sort01 ul li{
   float: left;
   width: 134px;
   height: 22px;
   color:#7f6b6f;
   font-size: 16px;
   border: 1px solid #dcdcdc;
   border-radius: 20px;
   margin-right: 21px;
}
.container64 .sort03 ul{
   list-style: none;
   position: absolute;
   left: 120px;
   top: 66px;
}
.container64 .sort03text{
   display: inline-block;
   position: relative;
   left: -823px;
   top: 50px;
   color:#7f6b6f;
   font-size: 13px;
}
.container64 .sort03 ul p{
   display: inline-block;
   margin-top: 0px;
}
.container64 .sort03 ul li{
   float: left;
   width: 114px;
   height: 22px;
   color:#7f6b6f;
   font-size: 16px;
   border: 1px solid #dcdcdc;
   border-radius: 20px;
   margin-right: 21px;
}
.container64 .sort02{
   width: 910px;
   height: 30px;
   background: #faf6ed;
   position: relative;
   left: 46px;
   top: 98px;
}
.container64 .sort02 ul{
   list-style: none;
   position: relative;
   left: 0px;
   top: 20px;
   width: 200px;
   height: 30px;
}
.container64 .sort02 ul li{
   float: left;
   width: 86px;
   height: 30px;
   color:#7f6b6f;
   font-size: 16px;
   margin-right: 4px;
   position: relative;
   top: -20px;
}
.container64 .sort02 .nobuy{
   float: left;
   width: 92px;
   height: 30px;
   color:#7f6b6f;
   font-size: 13px;
   margin-right: 4px;
   position: relative;
   top: -22px;
}
.container64 .sort02 .all{
   float: left;
   width: 122px;
   height: 30px;
   color:#7f6b6f;
   font-size: 16px;
   position: relative;
   top: -25px;
   left: 336px;
}
.container64 .sort02 .num01{
   float: left;
   width: 122px;
   height: 30px;
   color:#7f6b6f;
   font-size: 16px;
   position: relative;
   top: -22px;
   left: 296px;
}
.container64 .sort02 .num02{
   float: left;
   width: 122px;
   height: 30px;
   color:#7f6b6f;
   font-size: 16px;
   position: relative;
   top: -22px;
   left: 192px;
}
.container64 .sort02 .button01{
   float: left;
   width: 54px;
   height: 24px;
   color:#7f6b6f;
   font-size: 16px;
   position: relative;
   top: -27px;
   left: 172px;
   background: #faf6ed;
   border: 1px solid #d8d8d8;
    cursor: pointer;
}
.container64 .sort02 .button02{
   float: left;
   width: 54px;
   height: 24px;
   color:#7f6b6f;
   font-size: 16px;
   position: relative;
   top: -27px;
   left: 172px;
   background: #faf6ed;
   border: 1px solid #d8d8d8;
    cursor: pointer;
}

.container64 .first img{
    position: relative;
    top: 0px;
    left: 0px;
}
.container64 .first .role{
    position: absolute;
    top: 170px;
    left: 46px;  
}
.container64 .first .line{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 910px;
     z-index: 100;
}
.container64 .first .role li{
    float: left;
    width: 167px;
    height: 233px;
    margin-right: 19px;
    background: #fff;
    border-radius: 20px;
    margin-top: 21px;
    position: relative;
}
.container64 .first .roleup .money{
    position: relative;
    left: 10px;
    top: 12px;
    width: 61px;
    height: 22px;
    background: url(../../../assets/source/money.png) no-repeat;  
    padding-right: 22px; 
}
.container64 .first .roleup .money span{
    font-size: 20px;
}
.container64 .first .roleup button{
    width: 72px;
    height: 26px;
    background: #ffc04c;
    color: #fff; 
    border: none;
    font-size: 14px;
    border-radius: 20px;
    position: relative;
    left: 40px;
    top: -10px;
    cursor: pointer;
}
.container64 .first .roleup .text{
    font-size: 15px;
    position: relative;
    left: -38px;
    top: -10px;
}
.container64 .first .seeall{
    position: absolute;
    left: 40px;
    top: 840px;
    width: 920px;
    height: 32px;
    border: none;
    background: #f2efe6;
}
.container64 .first .seeall:hover{
    background: #90ddff;
}
.container64 .sortnum01{
    position: relative;
    top: 1284px;
    left:240px;
    width: 565px;
    height: 38px;
}
.container64 .sortnum01 ul li{
    float: left;
    height: 38px;
    width: 36px;
    border: 1px solid #dbdad7;
    margin-right: 5px;
    
}
.container64 .sortnum01 .endpage{
    float: left;
    height: 38px;
    width: 42px;
    border: 1px solid #dbdad7;
}
.container64 .sortnum01 .nextpage{
    float: left;
    height: 38px;
    width: 56px;
    border: 1px solid #dbdad7;
}
.container64 .sortnum01 .endpage p{
    margin-top: 8px;
}
.container64 .sortnum01 .nextpage p{
    margin-top: 8px;
}
.container64 .sortnum01 span{
    float: left;
    height: 38px;
    width: 56px;
    margin-top: 8px;
}
.container64 .sortnum01 ul li p{
    margin-top: 11px;
    
}
.container64 .endtext{
    width: 900px;
    height: 12px;
    position: relative;
    top: 1298px;
    left: 26px;
    font-size: 12px;
    display: inline-block;
}
.container64 .two img{
    position: relative;
    top: 0px;
    left: 0px;
}
.container64 .two .role{
    position: absolute;
    top: 730px;
    left: 46px;  
}
.container64 .two .linetwo{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 43px;
    top: 660px;
    width: 910px;
     z-index: 100;
}
.container64 .two .role li{
    float: left;
    width: 167px;
    height: 306px;
    margin-right: 19px;
    background: #fff;
    border-radius: 20px;
    margin-top: 21px;
    position: relative;
}
.container64 .two .roleup .money{
    position: relative;
    left: 10px;
    top: 12px;
    width: 61px;
    height: 22px;
    background: url(../../../assets/source/money.png) no-repeat;  
    padding-right: 22px; 
}
.container64 .two .roleup .money span{
    font-size: 20px;
}
.container64 .two .roleup button{
    width: 72px;
    height: 26px;
    background: #ffc04c;
    color: #fff; 
    border: none;
    font-size: 14px;
    border-radius: 20px;
    position: relative;
    left: 40px;
    top: -10px;
     cursor: pointer;
}
.container64 .two .roleup .text{
    font-size: 15px;
    position: relative;
    left: -38px;
    top: -10px;
}
.container64 .two .seeall{
    position: absolute;
    left: 40px;
    top: 840px;
    width: 920px;
    height: 32px;
    border: none;
    background: #f2efe6;
}
.container64 .two .seeall:hover{
    background: #90ddff;
}
.container64 .three img{
    position: relative;
    top: 0px;
    left: 0px;
}
.container64 .three .role{
    position: absolute;
    top: 1120px;
    left: 46px;  
}
.container64 .three .linethree{
    position: relative;
    border-bottom: 1px solid #e6e6e6;  
    position: relative;
    left: 43px;
    top: 1050px;
    width: 910px;
     z-index: 100;
}
.container64 .three .role li{
    float: left;
    width: 167px;
    height: 182px;
    margin-right: 19px;
    background: #fff;
    border-radius: 20px;
    margin-top: 21px;
    position: relative;
}
.container64 .three .roleup .money{
    position: relative;
    left: 10px;
    top: 12px;
    width: 61px;
    height: 22px;
    background: url(../../../assets/source/money.png) no-repeat;  
    padding-right: 22px; 
}
.container64 .three .roleup .money span{
    font-size: 20px;
}
.container64 .three .roleup button{
    width: 72px;
    height: 26px;
    background: #ffc04c;
    color: #fff; 
    border: none;
    font-size: 14px;
    border-radius: 20px;
    position: relative;
    left: 40px;
    top: -10px;
    cursor: pointer;
}
.container64 .three .roleup .text{
    font-size: 15px;
    position: relative;
    left: -38px;
    top: -10px;
}
.container64 .three .seeall{
    position: absolute;
    left: 40px;
    top: 840px;
    width: 920px;
    height: 32px;
    border: none;
    background: #f2efe6;
}
.container64 .three .seeall:hover{
    background: #90ddff;
}

</style>



