<template>
    <div class="container27">
        <ul v-for="item in list" :key='item.id' v-show="nosend">
            <li>
                <div class="all_up">
                    <img :src="'static/publish/'+item.surfaceplot+'l.png'" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.time}}</span>
                </div>
                <router-link to="/Snap"><button class="button01" @click="edit(item.id)">修改</button></router-link>
                <button class="button02">加入</button>
                <span class="down"><i class="icon_see"><span>3k</span></i></span>
                <span class="down"><i class="icon_love"><span>25</span></i></span>
                <span class="down"><i class="icon_star"><span>17</span></i></span>
                <!-- <p class="cancelpub">取消发布</p> -->
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
                userid:sessionStorage.userid
            }
        },
        mounted: function () {      
            this.getalldemo()
        },
        methods:{
            edit(id){
                id:id,                  
                this.$store.state.demoxmlid = id
            },
            getalldemo(){
                this.axios.post('/res/filelist',{
                    userid:this.$store.state.userid,
                })
                .then(response => {   
                    if(response.data.data.msg=='这回真的没有了~'){
                        this.nosend = false
                    }else{
                        this.list=response.data.data
                    }
                })
            },
        }
    }
</script>
<style scoped>
.container27 {
    margin: 0 auto;
    height: 550px;
    width: 1200px;
    position: relative;
    left: -14px;
    top: 33px;
    overflow: auto;
}
.container27 ul{
    position: relative;
    left: 40px;
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
    width:51px;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 178px;
    left: 12px;
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
  width: 57px;
  color: #666;
  font-size: 16px;
  position: absolute;
  top: 221px;
  left: 275px;
  cursor: pointer;
}
</style>
