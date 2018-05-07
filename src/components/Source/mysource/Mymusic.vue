<template>
    <div class="container710">
        <div class="first">
            <ul class="role">
                <li v-for="item in list01" :key="item.id">
                    <div class="roleimg"><img :src="'/codeplay/'+item.content" alt=""></div>
                    <div class="roleup">
                        <button @click="deletemaster(item.id)">删除</button>
                        <p class="text">{{item.name}}</p>
                    </div>
                </li>  
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    data() {
      return {
        list01:'',
        list02:'',
        list03:'',
      }
    },
    mounted(){
        this.Getsource01()
        this.select01()
        this.Getsource03()
    },
    mounted(){
        this.sourcemusic()

    },
    methods:{
        sourcemusic(){
            this.axios.post('/res/resourcelist',{
                userid:sessionStorage.userid,
                type:5
            })
            .then(response => {   
                this.list01=response.data.data
            })
        },
        deletemaster(id){
                this.axios.post('/res/collectmaterial',{
                userid:sessionStorage.userid,
                id:id,
                // type:4,
                state:2
            })
            .then(response => {   
            })
        },
    },
}
</script>
<style scoped>
.container710{
    width: 1200px;
    height: 925px;
    position: relative;
    top: -86px;
    left: 0px;
    background: #fff;
}
.container710 .first .firstlogo{
    position: relative;
    height: 29px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container710 .first .rolemain{
    position: relative;
    top: -28px;
    left: 102px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: #333;
     z-index: 100;
}
.container710 .first .role{
    position: relative;
    top: -18px;
    left: 44px;  
}
.container710 .first .line{
    position: relative;
    border-bottom: 1px solid #333;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 1086px;
     z-index: 100;
}
.container710 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: #f5f5f5;
    margin-top: 30px;
    position: relative;
}
.container710 .first .roleup button{
    width: 60px;
    height: 26px;
    color: #F13232; 
    border: 1px solid #F13232;
    font-size: 14px;
    position: relative;
    background: #f5f5f5;
    left: 120px;
    top: 44px;
    cursor: pointer;
}
.container710 .first .roleup button:hover{
    color: #fff; 
    background: #F13232;
}
.container710 .first .roleimg{
    height: 198px;
    width: 198px;
}
.container710 .first .roleimg img{
    height: 100%;
    width: 100%;
}
.container710 .first .roleup .text{
    font-size: 18px;
    position: relative;
    left: 10px;
    top: -13px;
}

</style>
