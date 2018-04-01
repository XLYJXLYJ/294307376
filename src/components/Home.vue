<template>
    <div class="container13">
       <Header/>
       <div class="content01">
            <Swiper/>
            <List/>
       </div>
       <div class="footer01">
           <Footer/>
       </div>  
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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
/* .container13 .container003{
    position: absolute;
    left: 0px;
    bottom: -142rem;   
} */
.content01 {
    flex: 1;
}
.footer01 {
    flex: 0;
    margin-top: 120px;
}
</style>
