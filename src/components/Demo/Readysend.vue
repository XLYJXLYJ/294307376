<template>
    <div class="container28">
        <ul v-show="noSend">
            <li v-for="item in list" :key='item.id'>
                <div class="all_up">
                    <img :src="item.imgBuffer" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.update_time|formatDate}}</span>
                </div>
                <router-link to="/Snap"><button class="button01" @click="edit(item.id)">修改</button></router-link>
                <button class="button02" @click.prevent.stop="Canpublic(item.id)">取消发布</button>
                <span class="down"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                <span class="down"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                <span class="down"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span>
                <!-- <p class="cancelpub" @click.prevent.stop="Canpublic(item.id)">取消发布</p> -->
            </li>    
        </ul>  
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex'
import { formatDate } from '../../public/time.js'
import { looksum } from '../../public/seesum.js'
export default{
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        },
        looksums(n) {
            var n = n;
            return looksum(n);
        }
    },
    data(){
        return{
            noSend:true,//是否显示列表
            list:'',//获取数据
        }
    },
    created: function () {      
        this.Getalldemo()//初始化数据
    },
    methods:{
        Getalldemo(){//初始化数据函数
            this.axios.post('/res/filelist',{
                userid:this.$store.state.userid,
                state:1
            })
            .then(response => {           
                if(response.data.data.msg=='这回真的没有了~'){
                    this.noSend = false
                        this.$message({
                        message: '没有已发布的作品',
                        center: true
                        }); 
                }else{
                    this.list=response.data.data
                }
            })
            },
        edit(id){//编辑
            id:id,                  
            this.$store.state.demoxmlid = id
            this.$store.state.publicstate = 1
            sessionStorage.snapdemoid = id
        },
        Canpublic(id){//取消发布
            this.axios.post('/res/dealfile',{
                    id:id,
                    userid:sessionStorage.userid,
                    state:6
                })
                .then(response => {
                    this.$message({
                    message: '取消发布成功',
                    center: true
                }); 
                this.Getalldemo()
            })
        }
    }
}
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container28 {
    margin: 0 auto;
    height: 550px;
    width: 1140px;
    position: relative;
    left: -20px;
    top: 33px;
    overflow: auto;
}
.container28 ul{
    position: relative;
    left: 0px;
    top: 0px;
    height: auto;
    z-index: 100;
    width:1120px;
    text-align:left;    
    float: left;
    list-style: none;
    overflow: hidden;
}
.container28 li{
    position: relative;
    left: 0px; 
    height: 252px;
    z-index: 100;
    width: 359px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background: @mainbg-color;
}
.container28 .all_up img{
    position: absolute;
    height: 154px;
    width: 154px;
    left: 12px;
    top: 12px;
}
.container28 .all_up p{
    height: 19px;
    width:auto;
    color: @gray;
    font-size:@md-size;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container28 .all_up span{
    height: 14px;
    width:221px;
    color: @delete-color;
    font-size:@sm-size;
    position: absolute;
    top: 215px;
    left: 15px;
}
.container28 .button01{
    height: 50px;
    width: 157px;
    background: @main-color;
    color: @background-color;
    position: absolute;
    left: 191px;
    top: 14px;
    border: none;
    font-size:@lg-size;
    cursor: pointer;
}
.container28 .button02{
    height: 50px;
    width: 157px;
    background: @main-color;
    color: @background-color;
    position: absolute;
    left: 191px;
    top: 71px;
    border: none;
    font-size:@lg-size;
    cursor: pointer;
}
.container28 .icon_see{
    background:url(../../assets/home/icon_see.png) no-repeat;
    padding-right: 10px;
}
.container28 .icon_love{
    background:url(../../assets/home/icon_love.png) no-repeat;
    padding-right: 10px;
}
.container28 .icon_star{
    background:url(../../assets/home/icon_star.png) no-repeat;
    padding-right: 10px;
}
.container28 .down{
    font-size:@sm-size;
    position: relative;
    left: 190px;
    top: 152px;
}
.container28 .down span{
    position: relative;
    left: 10px;
    margin-left: 11px;
    top: -2px;
    font-style: normal;
}
.container28 .cancelpub{
    height: 14px;
    width: 77px;
    color: @cancel-color;
    font-size:@xm-size;
    position: absolute;
    top: 221px;
    left: 275px;
    cursor: pointer;
}
</style>
