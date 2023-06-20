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
    },
    {
      path: '/politica-de-confidentialitate',
      name: 'politica-de-confidentialitate',
      component: () => import('@/views/PoliticaConfidentialitate.vue')
    },
    {
      path: '/termeni-si-conditii',
      name: 'termeni-si-conditii',
      component: () => import('@/views/TermeniSiConditii.vue')
    },
    {
      path: '/declinarea-raspunderii',
      name: 'declinarea-raspunderii',
      component: () => import('@/views/DeclinareaRaspunderii.vue')
    },
    {
      path: '/politica-de-cookies',
      name: 'politica-de-cookies',
      component: () => import('@/views/PoliticaDeCookies.vue')
    },
  ]
})

export default router
