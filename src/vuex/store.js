import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)

Vue.use(Vuex);

const state = {
    userid: '',//用户id
    usernamesession:'',//用户名称
    demoxmlid:'',//作品id
    recommenddemo:'',//首页推荐列表
    productiondemo:'',//首页产品列表
    searchdemo:'',//首页搜索列表
    isdropdownparent:false,//首页下拉框
    sourcesearch:false,//素材搜索
    sourcebackg:false,//素材背景
    sourcegame:false,//素材游戏
    sourcegsource:false,//总素材
    sourcemusic:false,//素材音乐
    sourcesource01:false,//素材
    sourcelesson:false,//素材课程
    sourcestudy:false,//素材学习
    authid:'',//其他作者id
    publicstate:'',//个人作品中作品的存储状态(是处于发布状态还是处于保存状态)
    shareid:'',//分享作品id
}

const actions = {
    Getsession01 (context) {
        context.commit('Getsession01')
    }
}

const mutations = {
    Getsession01() {
        // session验证 
        axios.get('/res/verify')
        .then(response =>{
            state.userid=response.data.data.userid
            // state.userid=0
            state.usernamesession01=response.data.data
            state.usernamesession02=response.data.data.username
        }) 
    },
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})


//sessionStorage定义
// sessionStorage.snapdemoid//作品id
// sessionStorage.userid//登录者id
// sessionStorage.lookuserdes//其他作者id
// sessionStorage.usernamesession//登录者昵称
// sessionStorage.demoname//作品名称
// sessionStorage.demodes//描述作品
