import Vue from 'vue'
import VueRouter from 'vue-router'

import exploreMusic from '../views/explore-music'
import latestMusic from '@/views/latest-music'
import latestMv from '@/views/latest-mv'
import recommend from '@/views/recommend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: exploreMusic
  },
  {
    path: '/music',
    component: latestMusic
  },
  {
    path: '/mv',
    component: latestMv
  },
  {
    path: '/recommend',
    component: recommend
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active-link',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
