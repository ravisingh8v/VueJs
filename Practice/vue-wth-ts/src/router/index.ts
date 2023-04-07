import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheHome from './../components/TheHome.vue'
// import App from './App.vue'

import TheAbout from './../components/TheAbout.vue'
import TheUsers from './../components/users/TheUsers.vue'
import UsersForm from './../components/users/UsersForm.vue'
import UsersList from './../components/users/UsersList.vue'
import BaseVuex from './../components/vuex/BaseVuex.vue'
import TheCalendar from './../components/TheCalendar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home',
  },
  { path: '/home', component: TheHome },
  {
    path: '/users', component: TheUsers, children: [
      { path: "", redirect: "users/users-form" },
      { name: 'users-form', path: 'users-form', component: UsersForm },
      { name: 'users-list', path: 'users-list', component: UsersList }
    ]
  },
  { name: 'about', path: '/about', component: TheAbout },
  { path: '/vuex', component: BaseVuex, children: [] },
  { path: '/calendar', component: TheCalendar }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
