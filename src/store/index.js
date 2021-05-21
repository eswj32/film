import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uName: null,
    uId: null,
    cId: null
  },
  mutations: {
    setName(state,uName) {
      state.uName = uName;
    },
    setId(state,uId) {
      state.uId = uId;
    },
    setCid(state,cId) {
      state.cId = cId;
    }
  },
  actions: {
  },
  modules: {
  }
})
