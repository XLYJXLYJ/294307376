<template>
    <div class="container28">
        <ul v-show="nosend">
            <li v-for="item in list" :key='item.id'>
                <div class="all_up">
                    <img src="../../assets/all/allpic.png" alt="">
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
            demoid:''
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
                    // userid:0,
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
    width: 1000px;
    position: relative;
    left: 310px;
    overflow: auto;
}
.container28 ul{
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
.container28 li{
    position: relative;
    left: 0px; 
    height: 210px;
    z-index: 100;
    width: 299px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #f7f4eb;
}
.container28 .all_up img{
    position: absolute;
    left: 12px;
    top: 12px;
}
.container28 .all_up p{
    height: 19px;
    width:auto;
    color: #333;
    font-size: 18px;
    position: absolute;
    top: 150px;
    left: 12px;
}
.container28 .all_up span{
    height: 14px;
    width:221px;
    color: #999;
    font-size: 14px;
    position: absolute;
    top: 178px;
    left: 12px;
}
.container28 .button01{
  height: 42px;
  width: 131px;
  background: #4c9ee6;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 12px;
  border: none;
  cursor: pointer;
}
.container28 .button02{
  height: 42px;
  width: 131px;
  background: #4c9ee6;
  color: #fff;
  position: absolute;
  left: 160px;
  top: 58px;
  border: none;
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
    font-size: 12px;
    position: relative;
    left: 160px;
    top: 128px;
}
.container28 .down span{
    position: relative;
    left: 10px;
    margin-left: 11px;
    font-style: normal;
}
.container28 .cancelpub{
  height: 14px;
  width: 57px;
  color: #666;
  font-size: 14px;
  position: absolute;
  bottom: 13px;
  left: 228px;
  cursor: pointer;
}
</style>
