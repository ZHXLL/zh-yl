// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.use(BaiduMap,{
		ak:'RqyV2fX5lGxujxvOn6Tp5VwzSt8bXwUb'
	}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render:h=>h(App)
})
