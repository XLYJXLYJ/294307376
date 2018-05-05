import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)

Vue.use(Vuex);

const state = {
    userid: '',
    usernamesession:'',
    demoxmlid:'',
    recommenddemo:'',
    productiondemo:'',
    searchdemo:'',
    isdropdownparent:false,
    bgid:'',
    shareid:'',
    sourcesearch:false,
    sourcebackg:false,
    sourcegame:false,
    sourcegsource:false,
    sourcemusic:false,
    sourcesource01:false,
    sourcelesson:false,
    sourcestudy:false,
    authid:'',
    publicstate:'',
    directxmlid:'',
    shareid:''
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