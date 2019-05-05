import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex: '',
    drawer: false,
    links: [
      {
        id: 'skills',
        text: 'Skills'
      },
      {
        id: 'experience',
        text: 'Experience'
      },
      {
        id: 'education',
        text: 'Education'
      },
      {
        id: 'contact',
        text: 'Contact'
      }
    ]
  },
  mutations: {
    activeIndex (state, payload) {
      state.activeIndex = payload
    },
    drawer (state, payload) {
      state.drawer = payload
    },
    drawerToggle (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {

  }
})
