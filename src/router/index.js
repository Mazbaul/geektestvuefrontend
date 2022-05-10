import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MostConversion from '../components/MostConversion.vue'
import SendMoney from '../components/SendMoney.vue'
import UserTransactionInfo from '../components/UserTransactionInfo.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mostconversion',
      name: 'mostconversion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:MostConversion
    },
    {
      path: '/sendmoney',
      name: 'sendmoney',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:SendMoney
    },
    {
      path: '/usertransactioninfo',
      name: 'usertransactioninfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:UserTransactionInfo
    }
  ]
})

export default router
