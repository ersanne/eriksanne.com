import Vue from 'vue'
import StoryblokVue from 'storyblok-vue'
import Page from '../components/blog/Page'
import Teaser from '../components/blog/Teaser'

Vue.use(StoryblokVue)

Vue.component('page', Page)
Vue.component('teaser', Teaser)
