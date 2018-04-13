<template>
    <div class="container06">
        <div class="rank_list_top"><img src="../../assets/home/rank_list.png" alt=""><p>排行版</p></div>
        <div class="rank_up">
            <ul>
                <li v-for="(item, index) in list" v-if='index<10' :key="index">
                    <span class="sort_num">{{index+1}}</span>
                     <div class="ranking"><img src="../../assets/home/fight.png" alt=""></div>
                    <p>{{item.title}}</p>
                    <span class="icon_see_box"><i class="icon_see"><span>32225</span></i></span>
                    <span class="icon_see_love"><i class="icon_love"><span>{{item.praisetotal}}</span></i></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
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
                    console.log(response)
                })
            },
            edit01(id){                 
                sessionStorage.id = id
            },
        }
    }
</script>
<style scoped>
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
    width: 90px;
    position: absolute;
    top: -48px;
}
.container06 .rank_list_top p{
    position: relative;
    font-size: 22px;
    color: #808080;
    left: 12px;
    top: 0px；
}
.container06 .rank_up p{
   font-size: 18px;
   text-align: left;
   position: relative;
   left: 134px;
   top: -68px;
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
    margin-left: 14px;
    font-style: normal;
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
    width: 18px;
    height: 24px;
    background: #5bc4ea;
    float: left;
    border-radius: 25px;
    line-height: 22px;
    padding-left: 8px;
    font-size: 18px;
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
</style>

