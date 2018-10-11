<template>
<div>
    <div class="snapbcw">
        <transition name="fade">
            <iframe :class='{"snap1":issnap,"snap2":!issnap}' src="static/snap/pxsnap.html" name="snap" id="myFrameId01" frameborder="0" ></iframe>
        </transition>
            <!-- <img class="side2" src="../assets/snappic/side2.png" alt="收起源码" @click="nosee" v-show="isRellyShow">
            <img class="side1" src="../assets/snappic/side1.png" alt="查看源码" @click="see" v-show="!isRellyShow">
            <img class="side3" src="../assets/snappic/flexbutton.png" alt="查看源码" @click="see" v-show="isRellyShow">
            <div v-on:storage="changDate"></div>
        <transition name="fade">
            <div class="side-content" v-show="isRellyShow">  
                <button style="margin-right:10px" @click="downloadblock">下载源码</button> 
                <p v-html="block" style="color:#fff"></p>
            </div> 
        </transition> -->
   </div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default{
        data(){
            return{
                demoxml:'',//作品数据
                isRellyShow:false,
                issnap:true,
                block:localStorage.setblock
            }
        },
        created(){
            let url=window.location.href;
            localStorage.setblock='';
            // var theRequest = new Object();  
            if (window.location.href.indexOf("?") != -1) {  
                var str = url.split("?=");
                this.$store.state.shareid=str[1];
                sessionStorage.snapdemoid=str[1];
                // for(var i = 0; i < strs.length; i ++) {  
                //     theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
                // }  
            }
        },
        watch:{
            block:function(){
                this.isRellyShow=true
                this.issnap=false
            }
        },
        mounted(){
            this.loadprojectxml()
        },
        methods: {
            downloadblock(){
                window.frames["snap"].blockide.transpileToCAndSave()
            },
            see(){
                this.isRellyShow=true
                this.issnap=false
                this.block=window.frames["snap"].blockide.transpileToCAndShow()
                this.block=localStorage.setblock
            },
            changDate(){
                this.isRellyShow=true
                this.issnap=false
                console.log(1111)
            },
            nosee(){
                localStorage.isRellyShow=0
                this.isRellyShow=false
                this.issnap=true
            },
            // 编辑文件(被弃用)
            loadprojectxml(){
                this.axios.post('/res/getfile',{
                id:this.$store.state.demoxmlid,
            })
            .then(response => {                   
                this.demoxml = response.data;
            })   
        }
    }
}

</script>
<style scoped lang="less">
@import '../assets/index.less';
.snapbcw{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.snap1 {
    flex: 1;
}
.snap2 {
    flex: 1;
}
.snap1{
    width: 100%;
    min-height: 542px;
}
.snap2{
    width: 100%;
    height: 542px;
}
.side-content{

    position: fixed;
    flex: 1;
    right: 0px;
    width: 480px;
    height: 100%;
    top: 0px;
    background-color: #333333;
    z-index: 10000;
}
.line{
    position: fixed;
    right: 0px;
    width: 2px;
    height: 100%;
    top: 0px;
    background-color: red;
    z-index: 1000;
}
.side-content button{
    cursor: pointer;
    margin-top: 4px;
    border-radius: 5px;
    font-size: 14px;
    position: fixed;
    right: 12px;
}
.side-content p{
    height: 100%;
    overflow: auto;
    padding: 30px;
}
.snapbcw .side1{
    width: 23px;
    height: 100px;
    position: fixed;
    right: 0px;
    top: 45%;
    opacity: 0.6;
}
.snapbcw .side1:hover{
    opacity: 1;
    cursor: pointer;
}
.snapbcw .side2{
    width: 23px;
    height: 100px;
    position: fixed;
    right: 480px;
    top: 45%;
    opacity: 0.6;
}
.snapbcw .side3{
    width: 6px;
    height: 50px;
    position: fixed;
    right: 480px;
    top: 58%;
    opacity: 0.6;
}
.snapbcw .side3:hover{
    opacity: 1;
}
.snapbcw .side2:hover{
    opacity: 1;
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
