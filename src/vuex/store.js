import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)

Vue.use(Vuex);

const state = {
    userid: ''
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
            console.log(state.userid)
        }) 
    },
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})