<template>
    <div class="container11">
        <div class="container011">
            <div class="logo04_p"><p>课程大纲</p></div>
            <div class="cut_off"></div>
            <div class="container_up01">
                <el-row class="tac">
                    <el-col>
                        <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            background-color='#f9f9f9'
                            text-color="#000"
                            active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>STEAM教育</span>
                                </template>
                                    <el-submenu index="1.1">
                                        <template slot="title">1. 图形编程</template>
                                            <el-menu-item-group>
                                                <el-menu-item index="item.id" v-for="item in listlesson1" :key="item.id"><a href="#1-1">{{item.lesson1}}</a></el-menu-item>
                                            </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="1.2">
                                        <template slot="title">2. 机器人课</template>
                                            <el-menu-item-group>
                                                <el-menu-item index="item.id" v-for="item in listlesson2" :key="item.id" @click="lesson2(item.id)">{{item.lesson2}}</el-menu-item>
                                            </el-menu-item-group>
                                    </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="block">
                <vue-markdown>{{md}}</vue-markdown>
            </div>
        </div>
    </div>
</template>
<script>
import md16 from '../../assets/text/16.md'
import md17 from '../../assets/text/17.md'
import md18 from '../../assets/text/18.md'
import marked from 'marked'
import VueMarkdown from 'vue-markdown'
    export default{
        data(){
            return{
                lessonLength:18,
                isLessonHover:'',
                playStatus:false,//默认的播放状态
                dialogVideo01:false,//播放模态款状态，默认时关闭
                md16:md16,
                md17:md17,
                md18:md18,
                md:'',
                listlesson1:[
                    {id:0,lesson1:'1.1 认识snap编程体验课'},
                    {id:1,lesson1:'1.2 动作与绘图'},
                    {id:2,lesson1:'1.3 外观和声音'},
                    {id:3,lesson1:'1.4 变量'},
                    {id:4,lesson1:'1.5 逻辑运算'},
                    {id:5,lesson1:'1.6 消息与过程'},
                    {id:6,lesson1:'1.7 循环'},
                    {id:7,lesson1:'1.8 字符串与链表操作'}
                ],
                listlesson2:[
                    {id:8,lesson2:'2.1 Arduino介绍，闪烁LED'},
                    {id:9,lesson2:'2.2 学习使用按钮控制LED'},
                    {id:10,lesson2:'2.3 制作忽明忽暗LED'},
                    {id:11,lesson2:'2.4 硬件小游戏'},
                    {id:12,lesson2:'2.5 按钮风扇和自动变速风扇'},
                    {id:13,lesson2:'2.6 摇头风扇'},
                    {id:14,lesson2:'2.7 遥控风扇'},
                    {id:15,lesson2:'2.8 智能声控灯'},
                    {id:16,lesson2:'2.9 遥控小车'},
                    {id:17,lesson2:'2.10 超声波避障小车'},
                    {id:18,lesson2:'2.11 沿着黑线寻迹小车'},
                ],
                file2: {m16:md16,m17:md17,m18:md18},
            }
        },
        created(){
            let mdindex='m'+sessionStorage.md
            this.md=this.file2[mdindex]
        },
        computed:{
            compiledMarkdown () {
                return marked(this.md1)
            }
        },
        watch:{
            //监控视频窗口，只要变化，则暂停播放
            dialogVideo01:function(){
                this._dom = document.getElementById('video01');
                this._dom.pause();  
            }
        },
        methods:{
            lesson2(id){
                sessionStorage.md=id
                window.location.reload()
            },
            showmd(){
                console.log(this.compiledMarkdown);
            },
            selectLesson(index){
                this.isLessonHover=index
            },
                    //控制视频播放，暂停
            playClick(){
                this._dom = document.getElementById('video01');
                if (this._dom.paused) {  
                    this._dom.play();
                }else{ 
                    this._dom.pause();  
                }  
            },
            //点击视频播放框变大
            videoScreen(){
                this.dialogVideo01 = true
            },
        },
        components: {
            VueMarkdown
        }
    }
</script>
<style scoped lang="less">
@import '../../assets/index.less';
 .container11{
     width: 1200px;
     min-height: 951px;
     z-index: 100;
     background: @background-color;
     margin: 0 auto;
     z-index: -1;
     margin-top: 26px;
 }
  .container011{
     position: relative;
 }
 .container11 .logo04_p p{
     position: absolute;
     width: 102px;
     height: 24px;
     left: 60px;
     top: 26px;
     font-size:@llg-size;
 }
  .container11 .cut_off{
    position: absolute;
    left: 0px;
    top: 64px;
    height: 4px;
    z-index: 100;
    width: 1200px;
    background: @cut-color;
}
 .container11 .container_up01{
    position: absolute;
    left: 20px;
    top: 88px;
    height:834px;
    z-index: 100;
    width: 320px;
    background: #f9f9f9;
    overflow-y: auto;
}
 .container11 .container_up01 a{
     color: #000;
     text-decoration: none;
}
 .container11 .video{
    position: absolute;
    left: 63px;
    top: 83px;
    height: 373px;
    z-index: 100;
    width: 568px;
}
 .container11 .snap{
    position: absolute;
    left: 700px;
    top: 83px;
    height: 25px;
    z-index: 100;
    width: 131px;
    font-size:@llg-size;
    color: @black;
}
 .container11 .snap_detail{
    position: absolute;
    left: 697px;
    top: 128px;
    height: 49px;
    z-index: 100;
    width: 433px;
    font-size:@md-size;
    color: @container0203-color;
    text-align:left;
    text-indent:2em;
}
 .container11 .block{
    position: absolute;
    left: 360px;
    top: 88px;
    height: 792px;
    z-index: 100;
    width: 780px;
    font-size: 0px;
    text-align:left; 
    font-size: 20px;
    padding: 20px;
    background: #f9f9f9;
    overflow: auto;
}
 .container11 .block p{
    z-index: 1000;
    height: 100px;
    width: 100px;
    color: #000;

}
.lessonhover{
    background: #f13232!important;
 }
</style>
