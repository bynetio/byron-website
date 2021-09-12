import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solutions.vue')
  },
  {
    path: '/developers',
    name: 'Developers',
    component: () => import(/* webpackChunkName: "about" */ '../views/Developers.vue')
  },
  {
    path: '/use-case',
    name: 'UseCase',
    component: () => import(/* webpackChunkName: "about" */ '../views/UseCase.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
