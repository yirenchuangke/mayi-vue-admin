import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入二次封装axios
import http from './api/api'
Vue.prototype.$http = http; // 请求封装

// 引入公共css样式
import './style/reset.css'
import './style/mayi.css'

// 引入饿了么ui样式库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 处理错误信息, 进行错误上报
Vue.config.errorHandler = function (err, vm, info) {
  console.warn('错误对象', err) // err错误对象
  // console.log('Vue实例',vm) // vm Vue实例
  console.warn('在生命周期的：', info) // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
}
Vue.config.warnHandler = function (msg, vm, trace) {
  console.warn('warn', msg, vm, trace) // `trace` 是组件的继承关系追踪
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
