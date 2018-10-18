<template>
    <div class="container27">
        <ul v-for="item in list" :key='item.id' v-show="noSend">
            <li>
                <div class="all_up">
                     <router-link :to="'/video?='+item.id">
                        <img :src="item.imgBuffer" alt="">
                    </router-link>
                    <p>{{item.title}}</p>
                    <span>{{item.create_time|formatDate}}</span>
                </div>
                <a :href="'/codeplay/#/snap?='+item.id" target="_blank"><button class="button01" @click="edit(item.id,item.state)">修改</button></a>
                <button class="button02" @click.prevent.stop="isPublic(item.id,item.state)">{{item.state==0?'发布':'取消发布'}}</button>
                <span class="down"><i class="icon_see"><span>{{item.looktotal|looksums}}</span></i></span>
                <span class="down"><i class="icon_love"><span>{{item.praisetotal|looksums}}</span></i></span>
                <span class="down"><i class="icon_star"><span>{{item.collecttotal|looksums}}</span></i></span>
                <p class="cancelpub" @click.prevent.stop="Canpublic(item.id,item.state)">{{item.state==0?'删除':''}}</p>
            </li>
        </ul>  

        <transition name="el-fade-in-linear">
            <div>
                <el-dialog :visible.sync="dialogdelete" :modal="false" width="320px" :show-close="false">
                    <div class="containerdelete">
                        <el-form>
                            <el-form-item class="iden01">
                                <h1>确定删除项目吗？</h1>      
                            </el-form-item>
                             <el-button  class="iden02"  @click="deletedemo">确定</el-button>
                            <el-button  class="iden03" @click="dialogdelete=false">取消</el-button>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapGetters,mapActions} from 'vuex'
import { formatDate } from '../../public/time.js'//事件转换函数
import { looksum } from '../../public/seesum.js'//观看总数转换函数(数字超过一千转成以K为单位)
    export default{
        filters: {//时间转换
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
                list:[],//数据列表
                userid:sessionStorage.userid,//用户id
                dialogdelete:false,//删除弹出框
                deleteId:'',//删除文件ID
                allimgbuffer:''//图片流
            }
        },
        mounted: function () {      
            this.getalldemo()//初始化请求数据
        },
        methods:{
            edit(id,state){//编辑文件
                id:id,     
                this.$store.state.demoxmlid = id             
                sessionStorage.snapdemoid = id
                this.$store.state.publicstate = state
                sessionStorage.publishid = id
            },
            getalldemo(){//舒适化请求数据函数定义
                this.axios.post('/res/filelist',{
                    userid:sessionStorage.userid,
                })
                .then(response => {   
                    if(response.data.data.msg=='这回真的没有了~'){
                        this.noSend = false
                        // this.$message({
                        // message: '暂时没有作品',
                        // center: true
                        // }); 
                    }else{
                        this.list=response.data.data
                         console.log(this.list)
                    }
                })
            },
            Canpublic(id,state){//处理文件函数
                if(state==0){//删除文件
                    this.deleteId = id
                    this.dialogdelete=true
                }else{//取消文件函数
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
                        this.getalldemo()
                    })
                }
            },
            //删除文件函数
            deletedemo(){
                this.dialogdelete=false
                this.axios.post('/res/dealfile',{
                    id:this.deleteId,
                    userid:sessionStorage.userid,
                    state:4
                })
                .then(response => {
                    this.$message({
                    message: '删除成功，如需还原，请到回收站',
                    center: true
                    }); 
                    this.getalldemo()
                })
            },
            //处理文件函数
            isPublic(id,state){
                if(state==0){//发布文件函数
                    this.$store.state.demoxmlid = id
                    this.$store.state.publicstate = 0
                    sessionStorage.publishid = id
                    this.$router.push({name: 'Publish'})
                }else{//取消发布
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
                    })
                    this.getalldemo()
                }
            }
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';

.container27 {
    margin: 0 auto;
    height: 530px;
    width: 1160px;
    position: relative;
    left: -20px;
    top: 13px;
    overflow: auto;
}
.container27 ul{
    position: relative;
    left: 20px;
    top: 0px;
    height: auto;
    z-index: 100;
    width:auto;
    text-align:left;    
    float: left;
    list-style: none;
    overflow: auto;
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
    background: @mainbg-color;
}
.container27 .all_up img{
    position: absolute;
    height: 154px;
    width: 154px;
    left: 12px;
    top: 12px;
}
.container27 .all_up p{
    height: 24px;
    width:340px;
    overflow: hidden;
    color: @gray;
    font-size:@md-size;
    position: absolute;
    top: 180px;
    left: 13px;
}
.container27 .all_up span{
    height: 14px;
    width:221px;
    color: @delete-color;
    font-size:@sm-size;
    position: absolute;
    top: 215px;
    left: 15px;
}
.container27 .button01{
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
.container27 .button02{
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
    font-size:@sm-size;
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
  color: @cancel-color;
  font-size:@xm-size;
  position: absolute;
  top: 221px;
  left: 275px;
  cursor: pointer;
  text-align: center;
}
.container27 .containerdelete .iden01{
    position: relative;
    left: 35%;
    top: 20px;
}
.container27 .containerdelete .iden02{
    position: relative;
    left: 19%;
    margin-bottom: 20px;
}
.container27 .containerdelete .iden03{
    position: relative;
    left: 37%;
    margin-bottom: 20px;
}
</style>
