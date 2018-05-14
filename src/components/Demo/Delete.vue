<template>
    <div class="container30">
        <ul v-for="item in list" :key='item.id' v-show="nosend">
            <li>
                <div class="all_up">
                    <img :src="item.imgBuffer" alt="">
                    <p>{{item.title}}</p>
                    <span class="deltime01">删除时间:{{item.update_time|formatDate}}</span>
                    <!-- <span class="deltime02">上午11：12：51</span> -->
                </div>
                <button class="button01" @click.prevent.stop="restore(item.id)">还原</button>
                <button class="button02" @click.prevent.stop="deletedemo(item.id)">删除</button>
            </li>
        </ul>  
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex'
import { formatDate } from '../../public/time.js'
    export default{
        filters: {
            formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
            }
        },
        data(){
            return{
                nosend:true,
                list:[],
            }
        },
        mounted: function () {      
            this.getalldemo()
        },
        methods:{
            getalldemo(){
                this.axios.post('/res/filelist',{
                    userid:this.$store.state.userid,
                    state:2
                })
                .then(response => {
                    if(response.data.data.msg=='这回真的没有了~'){
                        this.nosend = false
                        this.$message({
                        message: '没有删除的作品',
                        center: true
                        }); 
                    }else{
                        this.list=response.data.data
                    }
                })
            },
            restore(id){
                this.axios.post('/res/dealfile',{
                        id:id,
                        userid:sessionStorage.userid,
                        state:6
                    })
                    .then(response => {
                        this.$message({
                        message: '还原成功',
                        center: true
                    }); 
                    location.reload();
                })
            },
            deletedemo(id){
                this.axios.post('/res/dealfile',{
                    id:id,
                    userid:sessionStorage.userid,
                    state:5
                })
                .then(response => {
                    this.$message({
                    message: '删除成功',
                    center: true
                    }); 
                    location.reload();
                })
            }
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
.container30 {
    margin: 0 auto;
    height: 550px;
    width: 1140px;
    position: relative;
    left: -20px;
    overflow: auto;
    top:-640px;
}
.container30 ul{
    position: relative;
    left: 30px;
    top: 0px;
    height: auto;
    z-index: 100;
    width:auto;
    text-align:left;    
    float: left;
    list-style: none;
    overflow: hidden;
}
.container30 li{
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
.container30 .all_up img{
    position: absolute;
    height: 154px;
    width: 154px;
    left: 12px;
    top: 12px;
}
.container30 .all_up p{
    height: 19px;
    width:auto;
    color: @gray;
    font-size:@md-size;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container30 .deltime01{
    height: 14px;
    width:auto;
    color: @delete-color;
    font-size:@sm-size;
    position: absolute;
    top: 224px;
    left: 15px;
}
.container30 .deltime02{
    height: 14px;
    width:auto;
    color: @delete-color;
    font-size:@sm-size;
    position: absolute;
    top: 208px;
    left: 12px;
}
.container30 .button01{
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
.container30 .button02{
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
</style>
