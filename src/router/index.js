import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  next();
})
router.afterEach(function (to) {
  
  window.scrollTo(0, 0)
 })
export default router
