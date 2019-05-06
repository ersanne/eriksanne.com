import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wip/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './components/front-page/Portfolio.vue')
    },
    {
      path: '/wip/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './components/blog/Blog.vue')
    }
  ]
})

export default router
