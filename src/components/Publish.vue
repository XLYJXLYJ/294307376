<template>
    <div class="container72">
        <div class="container73">
                 <p class="publishdemo">发布作品</p>
                 <div class="fengexian"></div>
                 <div class="demoname"><p>作品名称</p><input v-model="demoname" type="text" placeholder="请填写作品名"> </div>
                 <div class="demodes"><p>作品说明</p><textarea v-model="demodes" type="text" placeholder="请填写作品描述"> </textarea></div>
                 <a href="/snap"><button class="returngo">返回</button></a> 
                <div class="upload" @click="select" > 
                    <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :data="uploadimg"
                    :before-upload="beforeAvatarUpload"
                    ref="upload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
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
                dialogImageUrl: '',
                isactive: true,
                dialogVisible: false,
                urllarge:'static/publish/9l.png',
                imageUrl: '',
                indexdemoid:'',
                demoname:'',
                demodes:'',
                Urlimg:[
                    {url:'static/publish/1.png'},
                    {url:'static/publish/2.png'},
                    {url:'static/publish/3.png'},
                    {url:'static/publish/4.png'},
                    {url:'static/publish/5.png'},
                    {url:'static/publish/6.png'},
                    {url:'static/publish/7.png'},
                    {url:'static/publish/8.png'},
                ],
                uploadimg:{
                        id:this.$store.state.demoxmlid,
                        userid:sessionStorage.userid,
                        title:this.demoname,
                        desc:this.demodes,
                        state:3,
                        surfaceplot:this.indexdemoid
                }
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
        methods: {
            pickimg(indexid){  
                this.imageUrl = ''  
                this.indexdemoid=indexid+1
                this.urllarge='static/publish/'+this.indexdemoid+'l.png'
            },
            select(){
                this.indexdemoid=9
                this.urllarge='static/publish/'+this.indexdemoid+'l.png'
            },
            submitUpload(){
                if(this.indexdemoid==9){
                    console.log(99999)
                    this.$refs.upload.submit();
                }else{
                    this.axios.post('/res/dealfile',{
                        id:this.$store.state.demoxmlid,
                        userid:sessionStorage.userid,
                        title:this.demoname,
                        desc:this.demodes,
                        state:3,
                        surfaceplot:this.indexdemoid
                    })
                    .then(response => {
                        this.$message({
                        message: '发布成功，请刷新',
                        center: true
                        }); 
                    })
                }
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>
<style>
.container72{
    width: 100%;
    height: 970px;
    background: #F1F1F1;
}
.container73{
    width: 1200px;
    height: 488px;
    background: #fff;
    margin: 0 auto; 
    position: relative;
    top: 224px;
}
.container73 .publishdemo{
    color: #333;
    font-size: 22px;
    position: absolute;
    left: 25px;
    top: 29px;
    font-weight: 600;
}
.container72 ul li{
    float: left;
}
.container72 .fengexian{
    border-bottom: 2px solid #F5F5F5;
    position: relative;
    width: 1152px;
    top: 80px;
    margin:0 auto;
}
.container72 .demoname p{
    position: absolute;
    left: 38px;
    top: 125px;
    color: #333;
    font-size: 16px;
}
.container72 .demoname input{
    height: 50px;
    width: 434px;
    position: absolute;
    left: 121px;
    top: 108px;
    color: #c8c8c8;
    font-size: 16px;
    background: #f5f5f5;
    border: none;
    padding-left: 25px;
    outline: none;
}
.container72 .demodes p{
    position: absolute;
    left: 38px;
    top: 216px;
    color: #333;
    font-size: 16px;
}
.container72 .demodes textarea{
    height: 116px;
    width: 434px;
    position: absolute;
    left: 121px;
    top: 200px;
    color: #c8c8c8;
    font-size: 16px;
    background: #f5f5f5;
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
    background: #fff;
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
    color: #333;
    font-size: 16px;
    position:absolute;
    top:125px;
    left: 635px;

}

.container72 .uploadtext{
    color: #333;
    font-size: 14px;
    position:absolute;
    top:285px;
    left: 764px;

}
.container72 .upload{
    position:absolute;
    top:108px;
    left: 722px;
    z-index: 2000;
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
    background: #F13232;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
}
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
  } 
  .avatar-uploader .el-upload:hover {
    border-color: #F13232;
  }
  .avatar-uploader-icon {
    font-size: 28px;
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
    color:#000;
}
.container72 .uploadcovertag{
    color: #43455a;
    font-size: 14px;
    position:absolute;
    top:321px;
    left: 521px;
} */
</style>

