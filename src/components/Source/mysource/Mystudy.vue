<template>
  <div class="container7100">
      <div class="first">
        <ul class="role">
            <li v-for="item in list01" :key="item.id">
                <div class="roleimg"><img :src="'/codeplay/'+item.content" alt=""></div>
                <div class="roleup">
                    <button>采集</button>
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
    methods:{
        select01(){
            this.axios.post('/res/resourcelist',{
                onenav:1,
            })
            .then(response => {   
                this.list01=response.data.data
                console.log(response)
            })
        },
        Getsource01(){
            this.axios.post('/res/resourcelist',{
                onenav:2,
            })
            .then(response => {   
                this.list02=response.data.data
                console.log(response)
            })
        },
        Getsource03(){
            this.axios.post('/res/resourcelist',{
                onenav:3,
            })
            .then(response => {   
                this.list03=response.data.data
                console.log(response)
            })
        },
    },
}
</script>
<style scoped>
.container7100{
    width: 1200px;
    height: 925px;
    position: relative;
    top: -86px;
    left: 0px;
    background: #fff;
}
.container7100 .first .firstlogo{
    position: relative;
    height: 29px;
    width: 29px;
    top: 10px;
    left: 57px;
    z-index: 100;
}
.container7100 .first .rolemain{
    position: relative;
    top: -28px;
    left: 102px;
    width: 61px;
    height: 30px;
    font-size: 30px;
    color: #333;
     z-index: 100;
}
.container7100 .first .role{
    position: relative;
    top: -18px;
    left: 44px;  
}
.container7100 .first .line{
    position: relative;
    border-bottom: 1px solid #333;  
    position: relative;
    left: 63px;
    top: -20px;
    width: 1086px;
     z-index: 100;
}
.container7100 .first .role li{
    float: left;
    width: 198px;
    height: 277px;
    margin-right: 24px;
    background: #f5f5f5;
    margin-top: 30px;
    position: relative;
}
.container7100 .first .roleup button{
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
.container7100 .first .roleup button:hover{
    color: #fff; 
    background: #F13232;
}
.container7100 .first .roleimg{
    height: 198px;
    width: 198px;
}
.container7100 .first .roleimg img{
    height: 100%;
    width: 100%;
}
.container7100 .first .roleup .text{
    font-size: 18px;
    position: relative;
    left: 10px;
    top: -13px;
}

</style>
