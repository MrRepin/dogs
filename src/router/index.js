import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/favorites',
    name: 'Favorite',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/:breed',
    name: 'Breed',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Breed.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
