import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// todo 全局导航钩子
router.beforeEach(function(to, from, next) {
  NProgress.start();
  next();
});
// todo 导航钩子
router.afterEach(function(to) {
  console.log(window.scrollTo, "window.scrollTo");
  window.scrollTo(0, 0);
  NProgress.done();
});
// todo 解决导航栏重复点菜单报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
