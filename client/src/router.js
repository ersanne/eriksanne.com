import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound'
import Portfolio from './components/front-page/Portfolio'
import Blog from './components/blog/Blog'

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
    // {
    //   path: '/about-me',
    //   name: 'about-me',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/AboutMe.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wip/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/wip/blog',
      name: 'blog',
      component: Blog
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
