import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Dashboard from '@/views/Dashboard'
import Pages from '@/views/Pages'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Page404 from '@/views/Error/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'Login' } },
    { path: '*', redirect: { name: '404Page' } },
    {
      path: '/404',
      name: '404Page',
      component: Page404,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/fontend',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'pages',
          name: 'Pages',
          component: Pages,
        },
      ]
    }
  ]
})
