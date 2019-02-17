import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 三项初始化
const state = {
  position: '北京'

}

const mutation = {
  setPosition(state, val){ // val 接收的城市值传递给 position
    state.position = val
  }
}

const actions = {
  setPosition({ commit }, val) {
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutation,
  actions
})