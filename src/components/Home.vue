<template>
    <div class="container13">
       <Header/>
       <Swiper/>
       <List/>
       <Search/>
       <ranking-list/>
       <Footer/>
    </div>
</template>

<script>
import Header from '@/components/HomePage/header'
import Swiper from '@/components/HomePage/swiper'
import List from '@/components/HomePage/List'
import Footer from '@/components/HomePage/Footer'
import RankingList from '@/components/HomePage/RankingList'
import Search from '@/components/HomePage/Search'
export default{
    components:{
        Header,
        Swiper,
        List,
        RankingList,
        Search,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container13{
    width: 100%;
    height: 100%;
    background: #fff;
}
</style>
