// 引入Vue核心庫
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 應用Vuex插件
Vue.use(Vuex)

// 準備actions，用於響應組件中的動作
const actions = {
    add(context,value){
        context.commit('ADD', value)
    },
}

// 準備mutations，用於操作數據(state)
const mutations = {
    ADD(state,value){
        state.sum += value
    },
}

// 準備state，用於存儲數據
const state = {
    sum:0,
}

// 創建並暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})