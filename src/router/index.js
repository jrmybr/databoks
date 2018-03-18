import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // {
        //   path: '',
        //   name: 'home',
        //   component: Home
        // }
      ],
      meta: { requiresAuth: false }
    },
    {
      path: '/user',
      name: 'user',
      component: Hello,
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    }
  ]
})
