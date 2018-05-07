<template>
    <div class="container38">
            <ul>
                <li v-for="(item,index) in list" :key='item.id' v-if='index<5' @click="edit04(item.id)">
                    <img class="jinglin" :src="item.imgBuffer" alt="">
                    <p class="jinglingtext">{{item.title}}</p>
                    <span class="time">分享于：{{item.create_time|formatDate}}</span>
                    <span class="icon_see_zan"><i class="icon_zan"><span>{{item.praisetotal|looksums}}</span></i></span>
                    <span class="icon_see_star01"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span>
                    <span class="icon_see_see01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                </li>
            </ul>
    </div>
</template>
<script>
import { formatDate } from '../../public/time.js'
import { looksum } from '../../public/seesum.js'
    export default{
        filters: {
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            },
            looksums(n) {
                var n = n;
                return looksum(n);
            }
        },

        data(){
            return{
                list:[],
            }
        },
        mounted: function () {      
            this.getdemo01()
        },
        methods:{
            getdemo01(){
                this.axios.post('/res/filelist',{
                    state:4,
                    sortstate:2,
                    pagesize:5
                })
                .then(response => {   
                    this.list=response.data.data
                    this.$store.state.searchdemo=false
                    this.$store.state.recommenddemo=true
                    this.$store.state.productiondemo=false
                })
            },
            edit04(id){                 
                sessionStorage.id = id
                location.reload()
            },
        }
    }
</script>
<style scoped>
.container38{
    height: auto;
    width: 300px;
    position: relative;
    left:818px;
    top: -261px;
}
.container38 ul li{
    height: 77px;
    width: 300px;
    position: relative;
    left:0px;
    margin-bottom: 18px;
    cursor: pointer;
}
 .container38 .jinglin{
    position: absolute;
    height: 77px;
    width: 77px;
    top: 18px;
    left: 32px;
}
 .container38 .jinglin img{
    width: 100%;
    height: 100%;
}
.container38 .jinglingtext{
    position: absolute;
    top: 17px;
    left: 126px;
    font-size: 22px;
    color: #43455a;
}
.container38 .jinglingtext:hover{
    color: #f13232;
}
.container38 .time{
    position: absolute;
    top: 55px;
    left: 126px;
    font-size: 14px;
    color: #b1b2ba;
}
.container38 .icon_zan{
    background: url(../../assets/video/zan.png) no-repeat;
    width: auto;
    height: 16px;
    position: relative;
    left: 93px;
}
.container38 .icon_see{
    width: auto;
    height: 14px;
    position: relative;
    left: 20px;
    background: url(../../assets/video/see01.png) no-repeat;
}
.container38 .icon_star{
    width: auto;
    height: 14px;
    position: relative;
    left: 20px;
    background: url(../../assets/video/star01.png) no-repeat;
}
.container38 .icon_see_zan{
    height: 16px;
    width: auto;
    font-size: 14px;
    position: relative;
    left: 32px;
    top: 77px;
}
.container38 .icon_see_star01{
    height: 16px;
    width: auto;
    font-size: 14px;
    position: relative;
    left: 126px;
    top: 77px;
}
.container38 .icon_see_see01{
    height: 16px;
    width: auto;
    font-size: 14px;
    position: relative;
    left: 150px;
    top: 77px;
}
.container38 .icon_zan span{
    position: relative;
    left: 6px;
    margin-left: 12px;
    font-style: normal;
}
.container38 .icon_star span{
    position: relative;
    left: 6px;
    margin-left: 12px;
    font-style: normal;
}
.container38 .icon_see span{
    position: relative;
    left: 6px;
    margin-left: 12px;
    font-style: normal;
}
</style>

