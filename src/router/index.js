import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeProductsView from '../views/HomeProductsView.vue'
import MyShopping from '../components/MyShopping/Myshopping.vue'
import Login from '../components/login/login.vue'
import ShoppingCart from '../views/ShoppingCartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeProductsView
  },
  {
    path: '/MyShopping',
    name: 'myshopping',
    component: MyShopping
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/ShoppingCart',
    name: 'shoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
