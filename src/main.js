import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./plugins";
// 引入公共样式
import "./styles/reset.css";
import "./styles/mayi.css";

// todo 处理错误信息, 进行错误上报
Vue.config.errorHandler = function(err, vm, info) {
  console.warn("错误对象", err); //* err错误对象
  // todo console.log('Vue实例',vm) // vm Vue实例
  console.warn("在生命周期的：", info); // *  `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
};
Vue.config.warnHandler = function(msg, vm, trace) {
  console.warn("warn", msg, vm, trace); // *  `trace` 是组件的继承关系追踪
};

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
