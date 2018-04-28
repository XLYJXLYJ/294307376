<template>
    <div id="app" @click.prevent="isdropdowncontrol">
        <router-view/>
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
