<template>
    <div class="container11">
        <div class="container011">
            <div class="logo04_p"><p>课程大纲</p></div>
            <!-- <div class="cut_off"></div> -->
            <div class="container_up01">
                <el-row class="tac">
                    <el-col>
                        <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            background-color='#f9f9f9'
                            text-color="#000"
                            default-openeds='[1,1.1,1.2]'
                            active-text-color="#000">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>STEAM教育</span>
                                </template>
                                    <el-submenu index="1.1">
                                        <template slot="title">1. 图形编程</template>
                                            <el-menu-item-group>
                                                <el-menu-item index="item.id" v-for="item in listlesson1" :key="item.id" @click="lesson2(item.id)">{{item.lesson1}}</el-menu-item>
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
            <div class="block" v-html="md">
                <!-- <vue-markdown>{{md}}</vue-markdown> -->
            </div>
        </div>
    </div>
</template>
<script>
import md1 from '../../assets/text/1.md'
import md2 from '../../assets/text/2.md'
import md3 from '../../assets/text/3.md'
import md4 from '../../assets/text/4.md'
import md5 from '../../assets/text/5.md'
import md6 from '../../assets/text/6.md'
import md7 from '../../assets/text/7.md'
import md8 from '../../assets/text/8.md'
import md9 from '../../assets/text/9.md'
import md10 from '../../assets/text/10.md'
import md11 from '../../assets/text/11.md'
import md13 from '../../assets/text/13.md'
import md14 from '../../assets/text/14.md'
import md16 from '../../assets/text/16.md'
import md17 from '../../assets/text/17.md'
import md18 from '../../assets/text/18.md'
import md19 from '../../assets/text/19.md'
import marked from 'marked'
import VueMarkdown from 'vue-markdown'
// import scroll from 'vue-scroll'
// import markdown from '@/components/markdown'
    export default{
        data(){
            return{
                msgShow:'我要显示的内容',
                dilogStatus:false,
                lessonLength:18,
                isLessonHover:'',
                playStatus:false,//默认的播放状态
                dialogVideo01:false,//播放模态款状态，默认时关闭
                md:md1,
                mdValue:md16,
                listlesson1:[
                    {id:1,lesson1:'1.1 认识snap编程体验课'},
                    {id:2,lesson1:'1.2 动作与绘图'},
                    {id:3,lesson1:'1.3 外观和声音'},
                    {id:4,lesson1:'1.4 变量'},
                    {id:5,lesson1:'1.5 逻辑运算'},
                    {id:6,lesson1:'1.6 消息与过程'},
                    {id:7,lesson1:'1.7 循环'},
                    {id:8,lesson1:'1.8 字符串与链表操作'}
                ],
                listlesson2:[
                    {id:9,lesson2:'2.1 Arduino介绍，闪烁LED'},
                    {id:10,lesson2:'2.2 学习使用按钮控制LED'},
                    {id:11,lesson2:'2.3 制作忽明忽暗LED'},
                    {id:12,lesson2:'2.4 硬件小游戏'},
                    {id:13,lesson2:'2.5 按钮风扇和自动变速风扇'},
                    {id:14,lesson2:'2.6 摇头风扇'},
                    {id:15,lesson2:'2.7 遥控风扇'},
                    {id:16,lesson2:'2.8 智能声控灯'},
                    {id:17,lesson2:'2.9 遥控小车'},
                    {id:18,lesson2:'2.10 超声波避障小车'},
                    {id:19,lesson2:'2.11 沿着黑线寻迹小车'},
                ],
                file2: {m1:md1,m2:md2,m3:md3,m4:md4,m5:md5,m6:md6,m7:md7,m8:md8,m9:md9,m10:md10,m11:md11,m13:md13,m14:md14,m16:md16,m17:md17,m18:md18,m19:md19},
            }
        },
        created(){
            let mdindex='m'+sessionStorage.md
            this.md=this.file2[m1]
        },
        computed:{
            compiledMarkdown () {
                return marked(this.mdValue)
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
                this.md=this.file2['m'+id]
                // window.location.reload()
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
            //             childEventHandler:function(res){
            //     // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
            //     this.msg=res;
            // },
            // getMdValueFn(){
            //     this.msgShow=this.msg.mdValue;
            //     this.dilogStatus=true;
            // },
            // getHtmlValueFn(){
            //     this.msgShow=this.msg.htmlValue;
            //     this.dilogStatus=true;
                
            // },
            // closeMaskFn(){
            //     this.msgShow='';
            //     this.dilogStatus=false;
            // }
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
     margin-top: 6px;
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
    width: 780px;
    text-indent:2em;
    padding: 20px;
    color: #333;
    font-size: 16px;
    line-height: 2;
    word-wrap: break-word;
    background: #f9f9f9;
    overflow: auto;
}

</style>
