<template>
    <div id="app" @click="isdropdowncontrol">
        <!-- <keep-alive> -->
            <router-view/>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
export default {
    methods:{
        isdropdowncontrol(event){
            if(!document.getElementById("myPanel").contains(event.target)){ 
                this.$store.state.isdropdownparent = false  
            }
        },
    },
    name: 'App'
}
</script>

<style>
#app {
    min-height: 100%;
    width: 100%;
}
</style>
