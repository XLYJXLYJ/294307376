<template>
    <div class="share">
        <div class="header">编程玩</div>
        <div class="sharetitle">
            <p class="one">{{list.title}}</p>
            <p class="two">分享于：{{list.publishtime}}</p>
            <p class="three">作者:{{list.name}}</p>
        </div>
        <div class="sharevideo">
            <iframe class="video" frameborder="0" src="static/player/index.html#present:Username=lynn&ProjectName=haha" id="myFrameId"  name="snapplay"></iframe>    
        </div>   
        <div class="sharecomment">
          <ul>
            <li class="big">联系我们:</li>
            <li class="small">课程咨询：<br/>133 8230 4658</li>
            <li class="small">微信号：Manykits</li>
            <li class="small">QQ群：398680146</li>
          </ul>
        </div>  
    </div>
</template>
<script>
import Header from '@/components/HomePage/header'
import Footer from '@/components/HomePage/Footer'
import { formatDate } from '../public/time.js'
var QRCode = require('qrcode')
var canvas = '';
export default{
    data(){
        return{
            list:[
                {collecttotal:''},
                {praisetotal:''},

            ],
            isAttention:'',
            isCollect:'',
            isPraise:'',
            authid:'',
            demoid:'',
            bannerUrl: '',
            demoxml:'',
            item:{
                // url:"static/ceshi/snap.html#present:Username=jens&ProjectName=tree%20animation"
                url:'https://www.baidu.com/'
            }
        }
    },
    mounted(){
        this.loadproject()
        
        this.loadprojectplay()
         

        this.demoid = sessionStorage.id    
        // this.bannerUrl = 'http://www.manykit.com/codeplay/static/ static/player/index.html#present:Username=lynn&ProjectName=haha'
        this.bannerUrl = 'http://www.manykit.com/codeplay/#/share' 
        console.log(this.bannerUrl)
        this.$nextTick(function () {
        // DOM操作
        canvas = document.getElementById('qrccode')
        this.createQrc()
        })
    },
    
    methods:{
        // 加载默认数据
        loadproject(){
            // if(sessionStorage.userid!=='unfined')
            this.axios.post('/res/getfile',{
                userid:sessionStorage.userid,
                id:sessionStorage.id,
                state:3
            })
            .then(response => {                        
                this.list = response.data.data
                console.log(response)
                this.isCollect = response.data.data.isCollect
                this.isPraise = response.data.data.isPraise
                this.isAttention= response.data.data.isAttention
                this.$store.state.authid= response.data.data.authid
            }) 
        },
        // 播放文件获取数据
        loadprojectplay(){
             this.axios.post('/res/getfile',{
                id:sessionStorage.id,
            })
            .then(response => {                          
               this.demoxml = response.data  
            //    console.log(this.demoxml)
            //    console.log(this.$store.state.demoxmlid)
            // window.frames["snapplay"].ide.droppedText(this.demoxml,'OPEN') 
            // window.frames["snapplay"].ide.openProjectString(this.demoxml) 
            //  window.frames["snapplay"].ide.openUserProject(this.demoxml)
            // window.frames["snapplay"].ide.droppedText(this.demoxml,'OPEN')  
            
            })
        },
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
.share{
   height: 880px;
    width: 170px;
}
.share .header{
    height: 60px;
    width: 100%;
    background: #fff;
    color: black;
    font-size: 30px;
    position: relative;
    top: 30px;
    left: 250px;
}
.share .one{
    font-size: 20px;
    position: relative;
    left: 30px;
    top:50px;
}
.share .two{
    font-size: 20px;
    position: relative;
    left: 200px;
    top:26px;
}
.share .three{
    font-size: 20px;
    position: relative;
    left: 430px;
    top:0px;
}
.share .sharevideo{
    height: 500px;
    width: 600px;
    position: relative;
    top: 40px;
}
.share .sharevideo .video{
    height: 100%;
    width: 100%;
}
.share .sharecomment ul{
    list-style: none;
    position: relative;
    top: 60px;
    left: 30px;
    font-size: 20px;
}
.share .sharecomment ul li{
    margin-top: 10px;
}
</style>
