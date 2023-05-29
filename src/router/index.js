import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acasa',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/cum-pot-sa-ajut',
      name: 'cum-ajut',
      component: () => import('@/views/CumAjut.vue')
    }
  ]
})

export default router
