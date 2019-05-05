import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'

Vue.use(Router)

const router = new Router({
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
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../../admin/src/views/Login.vue')
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const restrictedPages = ['/admin']
  const authRequired = restrictedPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
