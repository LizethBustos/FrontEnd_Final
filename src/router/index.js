import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import Productos from '../components/Productos'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/user/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: Productos
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
