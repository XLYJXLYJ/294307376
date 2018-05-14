<template>
    <div>
        <Header/>
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
export default{
    components:{
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/index.less';
.container15{
    width: 100%;
    height: auto;
    background: @background-color;
}
</style>