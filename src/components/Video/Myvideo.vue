<template>
    <div class="container37">
            <ul v-show="uservideo">
                <router-link to="/Video">
                    <li v-for="(item,index) in list" :key='item.id' v-if='index<5' @click="edit03(item.id)">
                        <img class="jinglin" :src="item.imgBuffer" alt="">
                        <p class="jinglingtext">{{item.title}}</p>
                        <span class="time">分享于：{{item.create_time|formatDate}}</span>
                        <span class="icon_see_zan"><i class="icon_zan"><span>{{item.praisetotal|looksums}}</span></i></span>
                        <span class="icon_see_star01"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span>
                        <span class="icon_see_see01"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                    </li>
                </router-link>
            </ul>
    </div>
</template>
<script>
import { formatDate } from '../../public/time.js'
import { looksum } from '../../public/seesum.js'
    export default{
        filters: {//时间过滤器
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            },
            looksums(n) {//数字过滤器
                var n = n;
                return looksum(n);
            }
        },
    data(){
        return{
            uservideo:true,//控制是否显示list
            list:'',//list数据列表
        }
    },
    created: function () {      
        this.Getalldemo()
    },
    methods:{
        //加载默认数据
        Getalldemo(){
            this.axios.post('/res/filelist',{
                userid:this.$store.state.authid,
                state:1
            })
            .then(response => {        
                if(response.data.data.msg=='这回真的没有了~'){
                    this.uservideo = false
                }else{
                    this.list=response.data.data
                }
            })
        },
        //点击加载数据
        edit03(id){                 
            sessionStorage.id = id
            location.reload()
        },
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container37{
    height: auto;
    width: 300px;
    position: relative;
    left:818px;
    top: -261px;
}
.container37 ul li{
    height: 77px;
    width: 300px;
    position: relative;
    left:0px;
    margin-bottom: 18px;
    cursor: pointer;
}
 .container37 .jinglin{
    position: absolute;
    height: 77px;
    width: 77px;
    top: 18px;
    left: 32px;
}
 .container37 .jinglin img{
     width: 100%;
     height: 100%;
}
.container37 .jinglingtext{
    position: absolute;
    top: 17px;
    left: 126px;
    font-size:@llg-size;
    color: #43455a;
}
.container37 .jinglingtext:hover{
    color: @main-color;
}
.container37 .time{
    position: absolute;
    width: 200px;
    top: 55px;
    left: 126px;
    font-size:@sm-size;
    color: #b1b2ba;
}
.container37 .icon_zan{
    background: url(../../assets/video/zan.png) no-repeat;
    width: auto;
    height: 16px;
    position: relative;
    left: 93px;
}
.container37 .icon_see{
    width: auto;
    height: 14px;
    position: relative;
    left: 20px;
    background: url(../../assets/video/see01.png) no-repeat;
}
.container37 .icon_star{
    width: auto;
    height: 14px;
    position: relative;
    left: 20px;
    background: url(../../assets/video/star01.png) no-repeat;
}
.container37 .icon_see_zan{
    height: 16px;
    width: auto;
    font-size:@sm-size;
    position: relative;
    left: 32px;
    top: 77px;
}
.container37 .icon_see_star01{
    height: 16px;
    width: auto;
    font-size:@sm-size;
    position: relative;
    left: 126px;
    top: 77px;
}
.container37 .icon_see_see01{
    height: 16px;
    width: auto;
    font-size:@sm-size;
    position: relative;
    left: 150px;
    top: 77px;
}
.container37 .icon_zan span{
    position: relative;
    left: 8px;
    margin-left: 12px;
    font-style: normal;
}
.container37 .icon_star span{
    position: relative;
    left: 8px;
    margin-left: 12px;
    font-style: normal;
}
.container37 .icon_see span{
    position: relative;
    left: 8px;
    margin-left: 12px;
    font-style: normal;
}
</style>

