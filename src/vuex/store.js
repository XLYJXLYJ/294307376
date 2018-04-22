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
    bgid:''
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