
<template>
    <div class="share">
         <iframe class="videoiframe" frameborder="0" :src="'static/snap/playsnap.html#present:Username=Lynn&ProjectName='+this.shareid" id="myFrameId"  name="snapplay" width="100%" height="100%"></iframe>
        <!-- <iframe class="videoiframe" style="height:100%;width:100%;" :src="'http://www.manykit.com/zeronerobot/static/snap/playersharesnap.html#present:Username=lynn&ProjectName='+this.shareid" ></iframe>    -->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                authid:'',
                shareid:''
            }
        },
        mounted(){
            this.authid = sessionStorage.sharenameid
            this.shareid = sessionStorage.sharedesid    
        }
    }
</script>
<style scoped>
.share{
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>



