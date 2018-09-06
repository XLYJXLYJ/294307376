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
                            @open="handleOpen"
                            @close="handleClose"
                            background-color='#FF9797'
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>STEAM教育</span>
                                </template>
                                    <el-submenu index="1.1">
                                        <template slot="title">1. 图形编程</template>
                                            <el-menu-item-group>
                                            <el-menu-item index="1-1"><a href="#1-1">1.1 切换语言</a></el-menu-item>
                                            <el-menu-item index="1-2"><a href="#1-1">1.2 改变舞台大小</a></el-menu-item>
                                            <el-menu-item index="1-3"><a href="#1-1">1.3 改变脚本区积木大小</a></el-menu-item>
                                            <el-menu-item index="1-4" title="1.4 新建角色，画一个角色，隐藏显示，复制，删除等功能"><a href="#1-1">1.4 新建角色，画一个角色，隐藏显示，复制，删除等功能</a></el-menu-item>
                                            <el-menu-item index="1-5"><a href="#1-1">1.5 介绍各个命令模块的功能</a></el-menu-item>
                                            <el-menu-item index="1-6"><a href="#1-1">1.6 开发一个弹球游戏</a></el-menu-item>
                                            <el-menu-item index="1-7"><a href="#1-1">1.9 保存（注册，登录）</a></el-menu-item>
                                            </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="1.2">
                                        <template slot="title">2. 机器人资料</template>
                                            <!-- <el-menu-item-group>
                                            <el-menu-item index="1-8"> 2.1 绝对动作，滑行</el-menu-item>
                                            <el-menu-item index="1-9">2.2 相对动作</el-menu-item>
                                            <el-menu-item index="1-10">2.3 朝向</el-menu-item>
                                            <el-menu-item index="1-11">2.4 试一试，走格子</el-menu-item>
                                            <el-menu-item index="1-12">2.5 做一个猫爪球的游戏</el-menu-item>
                                            <el-menu-item index="1-13">2.6 画笔</el-menu-item>
                                            <el-menu-item index="1-14">2.7 神奇的循环画笔</el-menu-item>
                                            <el-menu-item index="1-15">2.8 图章功能</el-menu-item>
                                            </el-menu-item-group> -->
                                    </el-submenu>
                                    <el-submenu index="1.3">
                                        <template slot="title">3. 机器人课</template>
                                        <el-menu-item-group>
                                            <el-submenu index="1.3.1">
                                                <template slot="title">3.1 制作动画</template>
                                                <!-- <el-menu-item-group>
                                                    <el-menu-item index="1-17">3.1.1 自定义角色外观</el-menu-item>
                                                    <el-menu-item index="1-18">3.1.2 让角色动起来</el-menu-item>
                                                    <el-menu-item index="1-19">3.1.3 角色对话和思考</el-menu-item>
                                                    <el-menu-item index="1-20">3.1.4 图形特效</el-menu-item>
                                                    <el-menu-item index="1-21">3.1.5 角色隐身</el-menu-item>
                                                    <el-menu-item index="1-22">3.1.6 图层</el-menu-item>
                                                </el-menu-item-group> -->
                                            </el-submenu>
                                            <el-submenu index="1.3.2">
                                            <template slot="title">4.3D打印课程</template>
                                                <!-- <el-menu-item-group>
                                                    <el-menu-item index="1-24">3.2.1 播放音乐文件</el-menu-item>
                                                    <el-menu-item index="1-25">3.2.2 关闭所有声音</el-menu-item>
                                                    <el-menu-item index="1-26">3.2.3 乐器</el-menu-item>
                                                    <el-menu-item index="1-27">3.2.4 弹奏音符与节奏概念</el-menu-item>
                                                </el-menu-item-group> -->
                                            </el-submenu>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="1.4">
                                        <template slot="title">4. 变量</template>
                                        <!-- <el-menu-item-group>
                                        <el-menu-item index="1-28">4.1 什么是变量</el-menu-item>
                                        <el-menu-item index="1-29">4.2 变量的类型与积木形状</el-menu-item>
                                        <el-menu-item index="1-30">4.3 类型转换</el-menu-item>
                                        <el-menu-item index="1-31">4.4 变量的基础操作</el-menu-item>
                                        </el-menu-item-group> -->
                                    </el-submenu>
                                    <el-submenu index="1.5">
                                        <template slot="title">5. 逻辑运算</template>
                                        <!-- <el-menu-item-group>
                                        <el-menu-item index="1-32">5.1 数值比较</el-menu-item>
                                        <el-menu-item index="1-33">5.2 逻辑运算</el-menu-item>
                                        <el-menu-item index="1-34">5.3 分支结构</el-menu-item>
                                        </el-menu-item-group> -->
                                    </el-submenu>
                                    <el-submenu index="1.6">
                                        <template slot="title">6. 消息与过程</template>
                                            <!-- <el-menu-item-group>
                                            <el-menu-item index="1-35">6.1 广播与等待消息</el-menu-item>
                                            <el-menu-item index="1-36">6.2 拆分任务</el-menu-item>
                                            <el-menu-item index="1-37">6.3 自定义积木</el-menu-item>
                                            </el-menu-item-group> -->
                                    </el-submenu>
                                    <el-submenu index="1.7">
                                        <template slot="title">7. 循环</template>
                                            <!-- <el-menu-item-group>
                                            <el-menu-item index="1-38">7.1 循环积木</el-menu-item>
                                            <el-menu-item index="1-39">7.2 停止积木</el-menu-item>
                                            </el-menu-item-group> -->
                                    </el-submenu>
                                    <el-submenu index="1.8">
                                        <template slot="title">8. 字符串与链表操作</template>
                                            <!-- <el-menu-item-group>
                                            <el-menu-item index="1-40">8.1 字符串操作</el-menu-item>
                                            <el-menu-item index="1-41">8.2 链表操作</el-menu-item>
                                            </el-menu-item-group> -->
                                    </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>


            </div>
            <div class="block">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lessonLength:18,
                isLessonHover:'',
                playStatus:false,//默认的播放状态
                dialogVideo01:false//播放模态款状态，默认时关闭
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
    left: 0px;
    top: 68px;
    height:874px;
    z-index: 100;
    width: 360px;
    background: #FF9797;
    overflow-y: auto;
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
 .container11 .block ul{
    position: absolute;
    left: 360px;
    top: 68px;
    height: 871px;
    z-index: 100;
    width: 840px;
    font-size: 0px;
    text-align:left; 
    border: 1px solid red;
}
 .container11 .block li{
    position: relative;
    left: 0px; 
    height: 71px;
    z-index: 100;
    width: 68px;
    border: 1px solid #FF7878;
    display: inline-block;
    font-size: 20px;
    text-align: center;
    background: #FF9797;
    cursor: pointer;
}
 .container11 .block li:hover{
    background: #f13232;
}
.lessonhover{
    background: #f13232!important;
 }
.container11 .block li p{
    position: relative;
    top: 20px;
    color: #fff;
}
</style>
