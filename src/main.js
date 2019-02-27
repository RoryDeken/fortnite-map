import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Map from './components/Map.vue'
import Seasons from './components/Seasons.vue'
import Coordinates from './components/Coordinates.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Map },
  { path: '/map', component: Map },
  { path: '/seasons', component: Seasons },
  { path: '/coordinates', component: Coordinates },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
