import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import SignUp from '../views/SignUp/index.vue'
import Dashboard from '../views/Dashboard/index.vue'
import Analytics from '../views/Dashboard/Analytics/index.vue'
import SendMail from '../views/Dashboard/SendLetter/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/analytics',
    name: 'Analytics',
    component: Analytics
  },
  {
    path: '/dashboard/send-letter',
    name: 'Send Mail',
    component: SendMail
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
