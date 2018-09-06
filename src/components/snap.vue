<template>
    <div class="snapbcw">
        <iframe class="snap" src="static/snap/pxsnap.html" name="snap" id="myFrameId01" frameborder="0" ></iframe>
   </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default{
        data(){
            return{
                demoxml:'',//作品数据
            }
        },
        created(){
            let url=window.location.href;
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
        mounted(){
            this.loadprojectxml()
        },
        methods: {
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
.snap {
    flex: 1;
}
.snap{
    width: 100%;
    height: 542px;
}
</style>
