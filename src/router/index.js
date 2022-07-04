import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/pavimento/:id',
    name: 'pavimento',
    component: () => import('../views/PavimentoView.vue')
  },
  {
    path: '/pdf/:id',
    name: 'pdf',
    component: () => import('../views/PdfView.vue')
  },
  {
    path: '/terreo',
    name: 'terreo',
    component: () => import('../views/TerreoView.vue')
  },
  {
    path: '/rooftop',
    name: 'rooftop',
    component: () => import('../views/RooftopView.vue')
  },
  {
    path: '/galeria/:path',
    name: 'galeria',
    component: () => import('../views/GaleriaView.vue')
  },
  {
    path: '/dwgs/:file?',
    name: 'dwgs',
    component: () => import('../views/DwgsView.vue')
  },
  {
    path: '/apartamento/:numero',
    name: 'dwgs',
    component: () => import('../views/ApartamentoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
