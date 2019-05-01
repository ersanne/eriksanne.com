import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex: '',
    drawer: false,
    links: [
      {
        id: 'about-me',
        text: 'About Me'
      },
      {
        id: 'skills',
        text: 'Skills'
      },
      {
        id: 'Experience',
        text: 'experience'
      },
      {
        id: 'portfolio',
        text: 'Portfolio'
      },
      {
        id: 'contact',
        text: 'Contact Me'
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
