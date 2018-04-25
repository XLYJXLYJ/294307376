<template>
    <div class="container60">
       <Header/>
       <div class="content10">
            <Sourcehead/>
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
    mounted:function() {
    }, 
    methods:{
    },
    components:{
        Header,
        Footer,
        Sourcehead
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container60{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content10 {
    flex: 1;
    padding-left: 5px;
}
.footer10 {
    flex: 0;
}
</style>
