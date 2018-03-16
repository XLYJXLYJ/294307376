<template>
  <div class="container30">
       <ul>
         <li>
             <div class="all_up">
                   <img src="../../assets/all/allpic.png" alt="">
                   <p>春节快乐</p>
                   <span class="deltime01">删除时间2018/03/12</span>
                   <span class="deltime02">上午11：12：51</span>
             </div>
            <button class="button01">还原</button>
            <button class="button02">删除</button>
         </li>
   
       </ul>  
  </div>
</template>
<style scoped>
.container30 ul{
    position: absolute;
    left: 501px;
    top: 303px;
    height: auto;
    z-index: 100;
    width:950px;
    text-align:left;    
    float: left;
    list-style: none;
}
.container30 li{
    position: relative;
    left: 0px; 
    height: 218px;
    z-index: 100;
    width: 299px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #f7f4eb;
}
.container30 .all_up img{
    position: absolute;
    left: 12px;
    top: 12px;
}
.container30 .all_up p{
    height: 19px;
    width:auto;
    color: #333;
    font-size: 18px;
    position: absolute;
    top: 150px;
    left: 12px;
}
.container30 .deltime01{
    height: 14px;
    width:auto;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 178px;
    left: 12px;
}
.container30 .deltime02{
    height: 14px;
    width:auto;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 198px;
    left: 12px;
}
.container30 .button01{
  height: 42px;
  width: 131px;
  background: #3bb4dc;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 12px;
  border: none;
  cursor: pointer;
}
.container30 .button02{
  height: 42px;
  width: 131px;
  background: #3bb4dc;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 58px;
  border: none;
  cursor: pointer;
}

</style>
