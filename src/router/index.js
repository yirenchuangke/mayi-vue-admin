import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

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
 var top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset)
console.log(top)
 })
export default router
