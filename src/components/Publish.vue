<template>
    <div class="container72">
        <div class="container73">
             <div>
                 <p class="publishdemo">发布作品</p>
                 <div class="fengexian"></div>
                 <div class="demoname"><p>作品名称</p><input type="text" placeholder="请填写作品名"> </div>
                 <div class="demodes"><p>作品说明</p><textarea type="text" placeholder="请填写作品名"> </textarea></div>
                 <a href="/snap"><button class="returngo">返回</button></a> 
                 <!-- <div class="upload">   
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :limit=2>
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div> -->
                <div class="upload">   
                   <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :auto-upload="false">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <el-button class="send" size="small" type="success" @click="submitUpload">确认发布</el-button>
                    </el-upload>
                </div>
                <p class="uploadcover">作品封面</p>
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
                // urllarge:'static/publish/1l.png',
                imageUrl: '',
                // Urlimg:[
                //     {url:'static/publish/1.png'},
                //     {url:'static/publish/2.png'},
                //     {url:'static/publish/3.png'},
                //     {url:'static/publish/4.png'},
                //     {url:'static/publish/5.png'},
                // ],
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
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            pickimg(indexid){
                indexid=indexid+1
                this.urllarge='static/publish/'+indexid+'l.png'
                console.log(this.urllarge)
            },
            picktag(item,index){
                console.log(123)
                 this.$set(this.activeimg, index, !this.isactive)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
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
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
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
    width: 1000px;
    height: 487px;
    background: #fff;
    margin: 0 auto; 
    position: relative;
    top: 273px;
}
.container73 .publishdemo{
    color: #43455A;
    font-size: 18px;
    position: absolute;
    left: 20px;
    top: 24px;
}
.container72 ul li{
    float: left;
}
.container72 .fengexian{
    border-bottom: 2px solid #F5F5F5;
    position: relative;
    width: 960px;
    top: 67px;
    margin:0 auto;
}
.container72 .demoname p{
    position: absolute;
    left: 20px;
    top: 105px;
    color: #43455A;
    font-size: 14px;
}
.container72 .demoname input{
    height: 42px;
    width: 384px;
    position: absolute;
    left: 101px;
    top: 90px;
    color: #e1e1e1;
    font-size: 14px;
    background: #f5f5f5;
    border: none;
    padding-left: 10px;
}
.container72 .demodes p{
    position: absolute;
    left: 20px;
    top: 182px;
    color: #43455A;
    font-size: 14px;
}
.container72 .demodes textarea{
    height: 178px;
    width: 384px;
    position: absolute;
    left: 101px;
    top: 167px;
    color: #e1e1e1;
    font-size: 14px;
    background: #f5f5f5;
    border: none;
    padding-left: 10px;
    padding-top:10px;
}
.container72 .send{
    height: 42px;
    width: 170px;
    position:absolute;
    left: -510px;
    top: 255px;
    background: #0078d7;
    color: #fff;
    border: none;
    cursor: pointer;
}
.container72 .returngo{
    height: 42px;
    width: 170px;
    position:absolute;
    left: 310px;
    top: 385px;
    background: #fff;
    color: #bbb;
    border: 1px solid #bbb;
    cursor: pointer;
}
.container72 .upload{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 620px;
    top: 130px;
}
.container72 .upload img{
    width: 100%;
    height: 100%;
}
.container72 .el-icon-plus{
    margin-top: 50px;
    padding-top: 100px;
    height: 120px;
    width: 250px;
    border: 1px solid #bbb;
}
.container72 .uploadimg{
    position: absolute;
    top:250px;
    left: 644px;
}
.container72 .imglarge img{
    width: 100%;
    height: 100%;
}
.container72 .imglarge{
    width: 140px;
    height: 140px;
    position: absolute;
    left: 602px;
    top: 91px;
}
.container72 .uploadimg li{
    margin-right:4px;
    cursor: pointer;
    /* position: relative;
    left: 60px; */
}
.container72 .uploadtag{
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
.container72 .uploadcover{
    color: #43455a;
    font-size: 14px;
    position:absolute;
    top:105px;
    left: 521px;

}
.container72 .uploadcovertag{
    color: #43455a;
    font-size: 14px;
    position:absolute;
    top:321px;
    left: 521px;
}
.container72 .el-upload--picture-card{
    position: relative;
    left: -90px;
    top: 160px;
    width: 40px;
    height: 40px;
}
.container72 .el-icon-plus{
    position: relative;
    top: -48px;
}
</style>

