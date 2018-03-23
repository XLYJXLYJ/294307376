import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
    change(state) {
        state.count = 1
    }
}

export default new Vuex.Store({
    state: {
        // header导航栏状态
        headerStatus: 1,
        //搜索结果
        searchList: [],

    }
})