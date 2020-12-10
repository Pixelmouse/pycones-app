import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Config from '@/views/Config.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  }
]

const router = new VueRouter({
  routes
})

export default router
