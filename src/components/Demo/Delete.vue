<template>
    <div class="container30">
        <ul v-for="item in list" :key='item.id' v-show="nosend">
            <li>
                <div class="all_up">
                    <img src="../../assets/all/allpic.png" alt="">
                    <p>{{item.title}}</p>
                    <span class="deltime01">删除时间2018/03/12</span>
                    <span class="deltime02">上午11：12：51</span>
                </div>
                <button class="button01" @click="restore(item.id)">还原</button>
                <button class="button02" @click="deletedemo(item.id)">删除</button>
            </li>
        </ul>  
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex'

    export default{
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
                    }else{
                        this.list=response.data.data
                    }
                })
            },
            restore(id){
                this.axios.post('/res/dealfile',{
                        id:id,
                        // userid:0,
                        state:6
                    })
                    .then(response => {
                        this.$message({
                        message: '还原成功，请刷新',
                        center: true
                    }); 
                })
            },
            deletedemo(id){
                this.axios.post('/res/dealfile',{
                    id:id,
                    // userid:0,
                    state:5
                })
                .then(response => {
                    this.$message({
                    message: '删除成功,请刷新',
                    center: true
                    }); 
                })
            }
        }
    }
</script>
<style scoped>
.container30 {
    margin: 0 auto;
    height: 550px;
    width: 1000px;
    position: relative;
    left: 0px;
    top:-600px;
    overflow: auto;
}
.container30 ul{
    position: relative;
    left: 40px;
    top: 30px;
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
    height: 220px;
    z-index: 100;
    width: 299px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #f7f4eb;
}
.container30 .all_up img{
    position: absolute;
    left: 12px;
    top: 12px;
}
.container30 .all_up p{
    height: 19px;
    width:auto;
    color: #333;
    font-size: 18px;
    position: absolute;
    top: 150px;
    left: 12px;
}
.container30 .deltime01{
    height: 14px;
    width:auto;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 178px;
    left: 12px;
}
.container30 .deltime02{
    height: 14px;
    width:auto;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 198px;
    left: 12px;
}
.container30 .button01{
  height: 42px;
  width: 131px;
  background: #3bb4dc;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 12px;
  border: none;
  cursor: pointer;
}
.container30 .button02{
  height: 42px;
  width: 131px;
  background: #3bb4dc;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 58px;
  border: none;
  cursor: pointer;
}
</style>
