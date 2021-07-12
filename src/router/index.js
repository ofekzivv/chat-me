import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/users.vue')
  },
  {
    path: '/chat/:uid',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
