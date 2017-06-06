import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import LatestArticles from './LatestArticles.vue'
import Tag from './Tag.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LatestArticles,
      mate: {
        keepAlive: true
      }
    },
    {
      path: '/tag',
      component: Tag
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
