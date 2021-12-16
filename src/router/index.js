import Vue from 'vue'
import VueRouter from 'vue-router'
import maps from '../pages/maps'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/maps'
      },
  {
      path: '/maps',
      name: 'maps',
      component: maps,
      routes: true
  },
]

const router = new VueRouter({
    mode: 'history',
  routes
})

export default router