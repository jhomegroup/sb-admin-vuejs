import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Dashboard from '@/views/Dashboard'
import Pages from '@/views/Pages'

Vue.use(Router)

export default new Router({
  routes: [
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
