import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Map from './components/Map.vue'
import Seasons from './components/Seasons.vue'
const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
const shouldSWDev = 'serviceWorker' in navigator && !prod
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    // eslint-disable-next-line
    console.log("Service Worker Registered!")
  })
}else if (shouldSWDev) {
  navigator.serviceWorker.register('/service-workder-dev.js').then(() => {
    // eslint-disable-next-line
    console.log('Service Worker Registered!')
  })
}


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Map },
  { path: '/map', component: Map },
  { path: '/seasons', component: Seasons },
  { path: '/coordinates', component: Map },
  { path: '/assets', },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  render: h => h(App)
}).$mount('#app')
