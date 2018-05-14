<template>
    <div class="container06">
        <div class="rank_list_top"><img src="../../assets/home/rank_list.png" alt=""><p>排行榜</p></div>
        <div class="rank_up">
            <ul>
                <li v-for="(item, index) in list" v-if='index<8' :key="index"  @click="edit03(item.id)">
                     <router-link to="/Video">
                        <span class="sort_num">{{index+1}}</span>
                        <div class="ranking"><img :src="item.imgBuffer" alt=""></div>
                        <p>{{item.title}}</p>
                        <span class="icon_see_box"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                        <span class="icon_see_love"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                     </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { looksum } from '../../public/seesum.js'
    export default{
        filters: {
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
            this.getdemo03()
        },
        methods:{
            getdemo03(){
                this.axios.post('/res/filelist',{
                state:3,
                sortstate:1
                })
                .then(response => {   
                this.list=response.data.data
                })
            },
            edit03(id){               
                sessionStorage.id = id
            },
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container06{
    height: 600px;
    width: 270px;
    position: absolute;
    left: 865px;
    top: 160px;  
}
.container06 .rank_list_top{
    float: left;
    height: auto;
    width: 100px;
    position: absolute;
    top: -48px;
}
.container06 .rank_list_top p{
    position: relative;
    font-size:@llg-size;
    color: @ranklist-color;
    left: 12px;
    height: 22px;
    width: 116px;
    top: 8px;
}
.container06 .rank_up p{
   font-size:@md-size;
   text-align: left;
   position: relative;
   left: 134px;
   top: -68px;
   color:@contain06-color;
}
.container06 .rank_up p:hover{
   color: @main-color;
}
.container06 .rank_up .ranking{
    width: 69px;
    height: 68px;
    position: relative;
    left: 50px;
    top: -25px;
}
.container06 .rank_up .ranking img{
    width: 100%;
    height: 100%;
}
.container06 .rank_up .ranking img:hover{
    border: 1px solid @img-color;
}
.container06 .rank_list_top img{ 
    float: left;
    border-radius: 3px;
}
.container06 .icon_see{ 
    width: 15px;
    height: 14px;
    position: relative;
    left: 20px;
    background: url(../../assets/home/icon_see.png) no-repeat;
}
.container06 .icon_see span{
    position: relative;
    left: 6px;
    top: -3px;
    width: 25px;
    height: 14px;
    margin-left: 14px;
    font-style: normal;
    color:@contain06-color;
    display: inline-block;
}
.container06 .icon_love{
    background: url(../../assets/home/icon_love.png) no-repeat;
    width: 15px;
    height: 14px;
    position: relative;
    left: 16px;
}
.container06 .icon_love span{
    position: relative;
    left: 6px;
    top: -3px;
    margin-left: 14px;
    font-style: normal;
    color:@contain06-color;
}
.container06 .icon_see_box{
    height: 12px;
    width: 65px;
    font-size: 15px;
    position: relative;
    left: 114px;
    top: -53px;
}
.container06 .icon_see_love{
    height: 12px;
    width: 65px;
    font-size: 15px;
    position: relative;
    left: 126px;
    top: -53px;
}
.container06 .sort_num{
    width: 17px;
    height: 24px;
    background: @main-color;
    color: @background-color;
    float: left;
    border-radius: 25px;
    line-height: 24px;
    padding-left: 7px;
    font-size:@md-size;
    position: relative;
    left: 4px;
    top: 20px;
}
.container06 .rank_up ul{
    width: 100%;
    height: 210px;
    list-style: none;
    margin-top: -30px;
}
.container06 .rank_up ul li{
    width: 100%;
    height: 56px;
    margin-top: 40px;
    cursor: pointer;
}
.container06 a{
    text-decoration: none;
}
</style>

