import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stake from '../views/Stake.vue'
import Gov from '../views/Gov.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stake',
    name: 'Stake',
    component: Stake
  },
  {
    path: '/gov',
    name: 'Gov',
    component: Gov
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
