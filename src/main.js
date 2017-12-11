import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

Vue.config.productionTip = false

import axios from "./http.js"
Vue.prototype.$http = axios;
//路由跳转如果要跳转到页面的顶部，必须要使用下面的方式，让新的页面跳转到页面顶部
router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
})



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
