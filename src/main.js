import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

Vue.config.productionTip = false

import axios from "./http.js"
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
