<template>
    <div class="container28">
        <ul v-show="nosend">
            <li v-for="item in list" :key='item.id'>
                <div class="all_up">
                    <img :src="item.imgBuffer" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.create_time}}</span>
                </div>
                <router-link to="/Snap"><button class="button01" @click="edit(item.id)">修改</button></router-link>
                <button class="button02">加入</button>
                <span class="down"><i class="icon_see"><span>5k</span></i></span>
                <span class="down"><i class="icon_love"><span>5</span></i></span>
                <span class="down"><i class="icon_star"><span>7</span></i></span>
                <p class="cancelpub" @click="Canpublic(item.id)">取消发布</p>
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
            list:'',
            demoid:'',
            imgBuffer:''
        }
    },
    created: function () {      
        this.Getalldemo()
    },
    methods:{
        Getalldemo(){
            this.axios.post('/res/filelist',{
                userid:this.$store.state.userid,
                state:1
            })
            .then(response => {           
                if(response.data.data.msg=='这回真的没有了~'){
                    this.nosend = false
                }else{
                    this.list=response.data.data
                    console.log(this.list)
                }
            })
            },
        edit(id){
            id:id,                  
            this.$store.state.demoxmlid = id
        },
        Canpublic(id){
            this.axios.post('/res/dealfile',{
                    id:id,
                    userid:sessionStorage.userid,
                    state:6
                })
                .then(response => {
                    this.$message({
                    message: '取消发布成功，请刷新',
                    center: true
                }); 
                location.reload();
            })
        }
    }
}
</script>
<style scoped>
.container28 {
    margin: 0 auto;
    height: 550px;
    width: 1200px;
    position: relative;
    left: -14px;
    top: 33px;
    overflow: auto;
}
.container28 ul{
    position: relative;
    left: 40px;
    top: 0px;
    height: auto;
    z-index: 100;
    width:1150px;
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
    background: #F5F5F5;
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
    color: #333;
    font-size: 18px;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container28 .all_up span{
    height: 14px;
    width:221px;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 215px;
    left: 15px;
}
.container28 .button01{
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
.container28 .button02{
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
    font-size: 14px;
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
  color: #666;
  font-size: 16px;
  position: absolute;
  top: 221px;
  left: 275px;
  cursor: pointer;
}
</style>
