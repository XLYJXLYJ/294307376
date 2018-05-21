<template>
    <div class="container29">
        <ul v-show="noSend">
            <li v-for="item in list" :key='item.id'>
                <div class="all_up">
                    <img :src="item.imgBuffer" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.update_time|formatDate}}</span>
                </div>
                <router-link to="/Snap"><button class="button01" @click="edit(item.id)">修改</button></router-link>
                <router-link to="/publish"><button class="button02" @click="publish(item.id)">发布</button></router-link> 
                <p class="cancelpub" @click.prevent.stop="deletedemo(item.id)">删除</p>
            </li>    
        </ul>  
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex' 
import { formatDate } from '../../public/time.js'
    export default{
        filters: {//时间处理函数
            formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
            }
        },
        data(){
            return{
                noSend:true,//是否显示列表
                list:[],//获取数据
            }
        },
        mounted: function () {      
            this.getnoSenddemo()
        },
        methods:{
            getnoSenddemo(){
                // this.$router.push({ name: 'noSend' })
                this.axios.post('/res/filelist',{
                    userid:this.$store.state.userid,
                    state:0
                })
                .then(response => {
                    if(response.data.data.msg=="这回真的没有了~"){
                        this.noSend = false
                        this.$message({
                        message: '没有未发布的作品',
                        center: true
                        }); 
                    }else{
                        this.list=response.data.data
                    }
                })
            },
            edit(id){
                id:id,                  
                this.$store.state.demoxmlid = id
                sessionStorage.snapdemoid = id
            },
            publish(id){
                this.$store.state.demoxmlid = id
                this.$store.state.publicstate = 0
            },
            // publish(id){
            //     this.axios.post('/res/dealfile',{
            //         id:id,
            //         userid:sessionStorage.userid,
            //         state:3
            //     })
            //     .then(response => {
            //         this.$message({
            //         message: '发布成功，请刷新',
            //         center: true
            //         }); 
            //         location.reload();
            //     })
            // },
            deletedemo(id){
                this.axios.post('/res/dealfile',{
                    id:id,
                    userid:sessionStorage.userid,
                    state:4
                })
                .then(response => {
                    this.$message({
                    message: '删除成功，请刷新，如需还原，请到回收站',
                    center: true
                    }); 
                     this.getnoSenddemo()
                })
            }
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container29 {
    margin: 0 auto;
    height: 550px;
    width: 1140px;
    position: relative;
    left: -20px;
    top: 33px;
    overflow: auto;
}
.container29 ul{
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
.container29 li{
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
.container29 .all_up img{
    position: absolute;
    height: 154px;
    width: 154px;
    left: 12px;
    top: 12px;
}
.container29 .all_up p{
    height: 19px;
    width:auto;
    color: @gray;
    font-size:@md-size;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container29 .all_up span{
    height: 14px;
    width:221px;
    color: @delete-color;
    font-size:@sm-size;
    position: absolute;
    top: 215px;
    left: 15px;
}
.container29 .button01{
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
.container29 .button02{
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
.container29 .icon_see{
    background:url(../../assets/home/icon_see.png) no-repeat;
    padding-right: 10px;
}
.container29 .icon_love{
    background:url(../../assets/home/icon_love.png) no-repeat;
    padding-right: 10px;
}
.container29 .icon_star{
    background:url(../../assets/home/icon_star.png) no-repeat;
    padding-right: 10px;
}
.container29 .cancelpub{
    height: 14px;
    width: 77px;
    color: @cancel-color;
    font-size:@xm-size;
    position: absolute;
    top: 214px;
    left: 275px;
    cursor: pointer;
}
</style>
