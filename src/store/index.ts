import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // choose theme colors
    mode: 'dark',
    // hide nav
    hideNav: false
  },
  mutations: {
    changeMode (state, value) {
      state.mode = value
    },
    hideNav (state, value) {
      state.hideNav = value
    }
  },
  actions: {
  },
  modules: {
  }
})
