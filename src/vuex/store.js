import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(Vuex);

const state = {
    userid: 123
}

const actions = {
    Getsession (context) {
      context.commit('Getsession')
    }
}

const mutations = {
    Getsession() {
        // session验证
        this.axios.get('/res/verify')
        .then(response =>{
            state.userid=response.data.data.userid 
        }) 
    },
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})