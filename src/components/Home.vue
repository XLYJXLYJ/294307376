<template>
    <div class="container13">
       <Header/>
       <Swiper/>
       <List/>
       <Footer/>
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import Swiper from '@/components/HomePage/swiper'
import List from '@/components/HomePage/List'
import Footer from '@/components/HomePage/Footer'
export default{
    components:{
        Header,
        Swiper,
        List,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container13{
    width: 100%;
    /* background: #fff; */
}
.container13 .container003{
    position: absolute;
    left: 0px;
    bottom: -142rem;
    /* bottom: -1940px; */
    
}
</style>
