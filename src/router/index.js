import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/ElGrau.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ElGrau',
    component: Home
  },
  {
    path: '/elGrau',
    name: 'ElGrau',
    component: Home
  },
  {
    path: '/internsUdL',
    name: 'InternsUdL',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InternsUdL.vue')
  },
  {
    path: '/externsUdL',
    name: 'ExternsUdL',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExternsUdL.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/contacte',
    name: 'Contacte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacte.vue')
  },
  {
    path: '/futursEstudiants',
    name: 'FutursEstudiants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FutursEstudiants.vue')
  },
  {
    path: '/albert',
    name: 'Albert',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Albert.vue')
  },
  {
    path: '/curts',
    name: 'Curts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Curts.vue')
  },
  {
    path: '/panera',
    name: 'Panera',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Panera.vue')
  },
  {
    path: '/cadira',
    name: 'Cadira',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadira.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
