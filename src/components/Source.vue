<template>
    <div class="container60">
        <Header/>
        <div class="content10">
            <!-- <keep-alive> -->
                <Sourcehead/>
            <!-- </keep-alive> -->
        </div>
        <div class="footer10">
            <Footer/>
        </div>  
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import Sourcehead from '@/components/Source/Sourcehead'
import Footer from '@/components/HomePage/Footer'
export default{
    mounted(){
        this.recommendroute()
    },
    methods:{
        recommendroute(){
            this.$router.push({ name: 'Gsource' })
        }
    },
    components:{
        Header,
        Footer,
        Sourcehead
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/index.less';
.container60{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content10 {
    flex: 1;
    padding-left: 5px;
    margin-top: -128px;
}
.footer10 {
    flex: 0;
    z-index: 1000;
    margin-top: -20px;
    background: @mainbg-color;
}
</style>
