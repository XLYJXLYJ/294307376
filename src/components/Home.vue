<template>
    <div class="container13">
        <Header/>
        <div class="content01">
            <Swiper/>
            <List/>
        </div>
        <div class="footer01">
            <div class="bcw">
                <img src="../assets/Home/logo_bottom.png" alt="">
                <ul>
                    <li>是一个致力于青少年编程教育与分享的社区，社区最大的特点是注重培养孩子动手创造与编程的能力。</li>
                    <li>我们认为编程并不只是一种开拓思维的过程，更是将来必备的一种生活，生存的技能。因此我们非常注重编程能力的提升，逻辑思维的培养，产品文化的塑造，分享表达的训练，等综合的能力</li>
                    <li>编程玩的老师，大多来自优秀的工程师，优秀的工科老师；他们有的不但是技术的大牛，也是钢琴师，绘画高手，艺术家。</li>
                    <li>寓教于乐，这是中国的古语。我们致力于给您和您的亲人朋友，带来“科学”，“技术”，“电子”，“艺术”，“教学”融合的教育体验</li>
                </ul>
            </div>
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
    data(){
        return{
           
        }
    },
    mounted(){
        this.recommendroute()
    },
    methods:{
        recommendroute(){
            this.$router.push({ name: 'Recommend' })
        }
    },
    components:{
        Header,
        Swiper,
        List,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/index.less';
.container13{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #F5F5F5;
}
/* .container13 .container003{
    position: absolute;
    left: 0px;
    bottom: -142rem;   
} */
.content01{
    flex: 1;
    margin: 0 auto;
    background: #ffffff;
}
.footer01 {
    flex: 0;
    min-width: 1200px;
    margin-top: 0px;
}
.footer01 .bcw{
    height: 232px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    background: #d3e1f2;
    margin-bottom: -20px;
}
.footer01 .bcw img{
    position: absolute;
    left: 35px;
    top: 71px;
}
.footer01 .bcw ul{
    height: 232px;
    width: 956px;
    position:absolute;
    top: 0px;
    left: 200px;
} 
.footer01 .bcw ul li{
    min-height: 18px;
    width: 956px;
    position:relative;
    top: 0px;
    left: 0px;
    margin-top: 21px;
    font-size: 15px;
    color: #000;
    font-family: 'SimHei';
} 
</style>
