<template>
    <div class="mydemo_framebox01">
        <iframe class="video01" frameborder="0" src="static/player/index.html" id="myFrameId"  name="snapplay"></iframe>
    </div>
</template>
<script>
export default{
    data(){
        return{
            demoxml:'',
            shareid:''
        }
    },
    mounted(){
        this.loadprojectplay()
        this.shareid = this.$store.state.demoxmlid
    },    
    methods:{
        // 播放文件获取数据
        loadprojectplay(){
            console.log(1111111111) 
             console.log(this.$store.state.demoxmlid) 
            console.log(this.shareid) 
            //  this.axios.post('/res/getfile',{
            //     id:this.shareid
            // })
            // .then(response => {    
            // console.log(this.shareid) 
            // console.log(id)                     
            // this.demoxml = response.data  
            // console.log(this.demoxml)
            // window.frames["snapplay"].ide.openProjectString(this.demoxml) 
            // })            
        },
    }
}
</script>
<style scoped>
.mydemo_framebox01{
    height: 100%;
    width: 100%;
}
.mydemo_framebox .video01{
    height: 970px;
    width: 1906px;
}
</style>
