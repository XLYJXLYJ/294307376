<template>
    <div class="container27">
        <ul v-for="item in list" :key='item.id' v-show="nosend">
            <li>
                <div class="all_up">
                    <img :src="item.imgBuffer" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.create_time|formatDate}}</span>
                </div>
                <router-link to="/Snap"><button class="button01" @click="edit(item.id,item.state)">修改</button></router-link>
                <button class="button02">加入</button>
                <span class="down"><i class="icon_see"><span>{{item.looktotal}}</span></i></span>
                <span class="down"><i class="icon_love"><span>{{item.praisetotal}}</span></i></span>
                <span class="down"><i class="icon_star"><span>{{item.collecttotal}}</span></i></span>
                <p class="cancelpub" @click.prevent.stop="Canpublic(item.id,item.state)">{{item.state==0?'删除':'取消发布'}}</p>
            </li>
        </ul>  
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex'
import { formatDate } from '../../public/time.js'
    export default{
        filters: {//时间转换
            formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
            }
        },
        data(){
            return{
                nosend:true,
                list:[],
                userid:sessionStorage.userid
            }
        },
        mounted: function () {      
            this.getalldemo()
        },
        methods:{
            edit(id,state){
                id:id,     
                this.$store.state.demoxmlid = id             
                sessionStorage.snapdemoid = id
                this.$store.state.publicstate = state
            },
            getalldemo(){
                this.axios.post('/res/filelist',{
                    userid:this.$store.state.userid,
                })
                .then(response => {   
                    if(response.data.data.msg=='这回真的没有了~'){
                        this.nosend = false
                        this.$message({
                        message: '暂时没有作品',
                        center: true
                        }); 
                    }else{
                        this.list=response.data.data
                        console.log(response)
                    }
                })
            },
            Canpublic(id,state){
                if(state==0){
                    this.axios.post('/res/dealfile',{
                        id:id,
                        userid:sessionStorage.userid,
                        state:4
                    })
                    .then(response => {
                        this.$message({
                        message: '删除成功，如需还原，请到回收站',
                        center: true
                        }); 
                        location.reload();
                        this,$route.push({name: 'Mydemo'})
                    })
                }else{
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
                        location.reload();
                    })
                }
            }
        }
    }
</script>
<style scoped>
.container27 {
    margin: 0 auto;
    height: 550px;
    width: 1140px;
    position: relative;
    left: -20px;
    top: 33px;
    overflow: auto;
}
.container27 ul{
    position: relative;
    left: 0px;
    top: 0px;
    height: auto;
    z-index: 100;
    width:auto;
    text-align:left;    
    float: left;
    list-style: none;
    overflow: hidden;
}
.container27 li{
    position: relative;
    left: 0px; 
    height: 252px;
    z-index: 100;
    width: 359px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #F5F5F5;
}
.container27 .all_up img{
    position: absolute;
    height: 154px;
    width: 154px;
    left: 12px;
    top: 12px;
}
.container27 .all_up p{
    height: 19px;
    width:auto;
    color: #333;
    font-size: 18px;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container27 .all_up span{
    height: 14px;
    width:221px;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 215px;
    left: 15px;
}
.container27 .button01{
  height: 50px;
  width: 157px;
  background: #F13232;
  color: #fff;
  position: absolute;
  left: 191px;
  top: 14px;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.container27 .button02{
  height: 50px;
  width: 157px;
  background: #F13232;
  color: #fff;
  position: absolute;
  left: 191px;
  top: 71px;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.container27 .icon_see{
    background:url(../../assets/home/icon_see.png) no-repeat;
    padding-right: 10px;
}
.container27 .icon_love{
    background:url(../../assets/home/icon_love.png) no-repeat;
    padding-right: 10px;
}
.container27 .icon_star{
    background:url(../../assets/home/icon_star.png) no-repeat;
    padding-right: 10px;
}
.container27 .down{
    font-size: 14px;
    position: relative;
    left: 190px;
    top: 152px;
}
.container27 .down span{
    position: relative;
    left: 10px;
    margin-left: 11px;
    top: -2px;
    font-style: normal;
}
.container27 .cancelpub{
  height: 14px;
  width: 77px;
  color: #666;
  font-size: 16px;
  position: absolute;
  top: 221px;
  left: 275px;
  cursor: pointer;
  text-align: center;
}
</style>
