import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/login',
      name: 'LoginNumber',
      component: () => import('@/pages/LoginNumber')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/register')
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: () => import('@/userpages/userInfo')
    }
  ]
})
