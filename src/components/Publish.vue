<template>
    <div class="container72">
        <div class="container73">
            <p class="publishdemo">发布作品</p>
            <div class="fengexian"></div>
            <div class="demoname"><p>作品名称</p><input :rules="rules" v-model="demoname" type="text" placeholder="请填写作品名"> </div>
            <div class="demodes"><p>作品说明</p><textarea :rules="rules" v-model="demodes" type="text" placeholder="请填写作品描述"> </textarea></div>
            <button class="returngo" @click="returngo">返回</button>
            <div class="userpic"><input type="file" ref="file_el" @change="choise_file"> 
                <img :src="imageUrl">
            </div>
            <el-button class="send" @click="submitUpload">确认发布</el-button>   
            <p class="uploadcover">作品封面</p>
            <p class="uploadtext">上传封面</p>
            <div class="imglarge"><img :src="urllarge" alt=""></div>
            <ul class="uploadimg">
                <li  v-for="(item,index) in Urlimg" :key='index'><img :src='item.url' alt="" @click="pickimg(index)"></li>
            </ul>
            <!-- <p class="uploadcovertag">作品标签</p>
            <ul class="uploadtag">
                <li v-for="(item,index) in Urltag" v-bind:class='{"activeimg":!isactive}' :key='index' @click="picktag(item,index)">{{item.tag}}</li>
            </ul> -->
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data() {
        return {
            // isactive: true,
            urllarge:'static/publish/8l.png',//默认图片
            imageUrl: 'static/publish/1l.png',//用户自己选的图片
            indexdemoid:1,//默认图片加载
            demoname:'',//作品名称
            demodes:'',//作品描述
            readpicbinary:'',//读取图片二进制数据
            result:'',
            picdemo:'',//该组件内的demoid
            Urlimg:[//默认图片
                {url:'static/publish/1.png'},
                {url:'static/publish/2.png'},
                {url:'static/publish/3.png'},
                {url:'static/publish/4.png'},
                {url:'static/publish/5.png'},
                {url:'static/publish/6.png'},
                {url:'static/publish/7.png'},
                {url:'static/publish/8.png'},
            ],
            // uploadimg:{
            //         id:this.$store.state.demoxmlid,
            //         userid:sessionStorage.userid,
            //         title:this.demoname,
            //         desc:this.demodes,
            //         state:3,
            //         surfaceplot:this.indexdemoid
            // },
            rules:{
            demoname: [
                { required: true, message: '请输入作品名称', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 10 个字符', trigger: 'blur' }
            ],
            demodes:[
                { required: true, message: '请输入作品描述', trigger: 'blur' },
                { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
            ],
        },
            // Urltag:[
            //     {tag:'游戏'},
            //     {tag:'故事'},
            //     {tag:'绘画'},
            //     {tag:'动漫'},
            //     {tag:'音乐'},
            //     {tag:'教程'},
            //     {tag:'节日'},
            // ]
        };
    },
    mounted(){
        this.loadprojectdes()
    },
    methods: {
        //选择默认照片
        pickimg(indexid){  
            this.imageUrl = ''  
            this.indexdemoid=indexid+1
            this.urllarge='static/publish/'+this.indexdemoid+'l.png'
        },
        //加载项目信息
        loadprojectdes(){
            console.log(this.$store.state.demoxmlid)
            // if(sessionStorage.userid!=='unfined')
            this.axios.post('/res/getfile',{
                userid:sessionStorage.userid,
                id:this.$store.state.demoxmlid,
                state:3
            })
            .then(response => {  
                this.demoname = response.data.data.title
                this.demodes = response.data.data.desc
            }) 
        },

        //发布用户带自己选择的作品
        submitUpload(){
            if(this.indexdemoid==19){//用户自己上传图片
                this.picdemo = this.$store.state.demoxmlid
                sessionStorage.demoname = this.demoname
                sessionStorage.demodes = this.demodes   
                var picsource = this.$refs.file_el.files[0]
                this.uploadFile(picsource)
                // reader.onload = function () {   
                //     this.readpicbinary = new Blob([this.result])
                //     this.useruploadimg(this.result)
                //     console.log(this.readpicbinary)
                //     console.log(sessionStorage.picdemo)
                //     console.log(sessionStorage.userid)
                //     console.log(sessionStorage.demoname)
                //     console.log(sessionStorage.demodes)
                // }  
            }else{
                this.axios.post('/res/dealfile',{//选择默认图片
                    id:this.$store.state.demoxmlid,
                    userid:sessionStorage.userid,
                    title:this.demoname,
                    desc:this.demodes,
                    state:3,
                    surfaceplot:this.indexdemoid,
                    coverworkid:this.$store.state.demoxmlid
                })
                .then(response => {
                    this.$message({
                    message: '发布成功',
                    center: true
                    }); 
                })
            }
        },
        //返回上一级及赋值sessionStroage，让snap可以打开作品
        returngo(){
            sessionStorage.snapdemoid = this.$store.state.demoxmlid
            this.$router.go(-1)
        },
        //发布带默认图片的作品
        uploadFile(picsource){
            let formData = new FormData();
            formData.append('id',this.picdemo);
            formData.append('userid',sessionStorage.userid);
            formData.append('title',sessionStorage.demoname);
            formData.append('desc',sessionStorage.demodes);
            formData.append('state',3);
            formData.append('surfaceplot',9);
            formData.append('files',picsource);
            formData.append('coverworkid',this.$store.state.demoxmlid);
            let config = {
                headers:{
                    'Content-Type':'application/x-jpg'
                }
            }
            this.axios.post('/res/dealfile',formData,config)
            .then(function(response){
                
            })
            this.$message({
                message: '上传成功',
                center: true
            });  
        },
        //选择图片
        choise_file () {
            this.indexdemoid=19
            this.urllarge=''
            // this.urllarge='static/publish/'+this.indexdemoid+'l.png'
            var file_info = this.$refs.file_el.files[0]
            // 使用FileReader对象预览
            var fr = new FileReader()
            // 通过fr.readAsDataURL文件的内容进行读取
            fr.readAsDataURL(file_info)
            var that = this
            fr.onload = function () {
                // DataUrl data? :data:image/jpeg;base64,/9j/4
                that.imageUrl = this.result
            }   
        }
    }
}
</script>
<style scoped lang="less">
@import '../assets/index.less';
.container72{
    width: 100%;
    height: 970px;
    background: #F1F1F1;
}
.container73{
    width: 1200px;
    height: 488px;
    background: @background-color;
    margin: 0 auto; 
    position: relative;
    top: 224px;
}
.container73 .publishdemo{
    color: @gray;
    font-size:@llg-size;
    position: absolute;
    left: 25px;
    top: 29px;
    font-weight: 600;
}
.container72 ul li{
    float: left;
}
.container72 .fengexian{
    border-bottom: 2px solid @mainbg-color;
    position: relative;
    width: 1152px;
    top: 80px;
    margin:0 auto;
}
.container72 .demoname p{
    position: absolute;
    left: 38px;
    top: 125px;
    color: @gray;
    font-size:@xm-size;
}
.container72 .userpic{
    position: absolute;
    left: 721px;
    top: 109px;
    height: 168px;
    width: 168px;
    color: @gray;
    font-size:@xm-size;
    overflow: hidden;
    box-shadow:0px 6px 10px @shadow-color;
    background: url(../assets/publish/publish.png) no-repeat;
    background-position: 60px 60px;
    opacity: 1;
}
.container72 .userpic input{
    position: absolute;
    left: 0px;
    top: 80px;
    height: 188px;
    width: 168px;
    color: @gray;
    font-size:@xm-size;
    overflow: hidden;
    z-index: 1000;
    opacity: 0;
}
.container72 .userpic img{
    height: 168px;
    width: 168px;
    z-index: 100;
}
.container72 .demoname input{
    height: 50px;
    width: 434px;
    position: absolute;
    left: 121px;
    top: 108px;
    color: @gray;
    font-size:@xm-size;
    background: @mainbg-color;
    border: none;
    padding-left: 25px;
    outline: none;
}
.container72 .demodes p{
    position: absolute;
    left: 38px;
    top: 216px;
    color: @gray;
    font-size:@xm-size;
}
.container72 .demodes textarea{
    height: 116px;
    width: 434px;
    position: absolute;
    left: 121px;
    top: 200px;
    color: @gray;
    font-size:@xm-size;
    background: @mainbg-color;
    border: none;
    padding-left: 25px;
    padding-top:16px;
    outline: none;
}

.container72 .send:hover{
    opacity: 0.7;
}
.container72 .returngo{
    height: 50px;
    width: 204px;
    position:absolute;
    left: 372px;
    top: 366px;
    background: @background-color;
    color: #bbb;
    border: 1px solid #bbb;
    cursor: pointer;
}

.container72 .upload img{
    width: 100%;
    height: 100%;
}
.container72 .uploadimg{
    position: absolute;
    top:108px;
    left: 929px;
    width: 188px;
    height: 168px;
}
.container72 .imglarge img{
    width: 100%;
    height: 100%;
}
.container72 .imglarge{
    width: 168px;
    height: 168px;
    position: absolute;
    left: 722px;
    top: 109px;
}
.container72 .uploadimg li{
    margin-right:12px;
    cursor: pointer;
    margin-bottom: 16px;
    height: 48px;
    width: 48px;
}
.container72 .uploadcover{
    color: @gray;
    font-size:@xm-size;
    position:absolute;
    top:125px;
    left: 635px;

}
.container72 .uploadtext{
    color: @gray;
    font-size:@sm-size;
    position:absolute;
    top:285px;
    left: 774px;

}
.container72 .upload{
    position:absolute;
    top:108px;
    left: 722px;
    z-index: 0;
    height: 168px;
    width: 168px;
    overflow: hidden;
}
.container72 .el-icon-plus{
    position:absolute;
    width: 168px;
    height: 168px;
    top:-20px;
    left: 0px;
}
.container72 .send{
    height: 50px;
    width: 204px;
    position:absolute;
    left: 121px;
    top: 366px;
    background: @main-color;
    color: @background-color;
    border: none;
    cursor: pointer;
    font-size:@xm-size;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
} 
.avatar-uploader .el-upload:hover {
    border-color: @main-color;
}
.avatar-uploader-icon {
    font-size:@lllg-size;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
} 
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

input::-webkit-input-placeholder{
    color:#C8C8C8;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#C8C8C8;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#C8C8C8;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#C8C8C8;
}
textarea::-webkit-input-placeholder{
    color:#C8C8C8;
}
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#C8C8C8;
}
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#C8C8C8;
}
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#C8C8C8;
}
/* .container72 .uploadtag{
    position: absolute;
    top:320px;
    left: 600px;
}
.container72 .uploadtag li{
    margin-right:15px;
    cursor: pointer;
    border: 1px solid #bbb;
    color: #bbb;
    width: 46px;
    height: 24px;
    margin-bottom: 15px;
}
.activeimg{
   color:red;
   background: red;
   margin-right:105px;
}
.unactive{
    color:@black;
}
.container72 .uploadcovertag{
    color: #43455a;
    font-size:@sm-size;
    position:absolute;
    top:321px;
    left: 521px;
} */
</style>

