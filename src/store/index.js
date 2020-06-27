import Vue from "vue";
import Vuex from "vuex";
// 引入拆分出去的子模块
import moduleA from "./modules/a";
import moduleB from "./modules/b";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "主",
  },
  mutations: {},
  actions: {},
  modules: {
    moduleA, //重命名
    moduleB, //重命名
  },
});
