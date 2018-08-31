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
