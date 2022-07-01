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
    path: '/xtay',
    name: 'xtay',
    component: () => import('../views/XtayView.vue')
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
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/GaleriaView.vue')
  },
  {
    path: '/dwgs',
    name: 'dwgs',
    component: () => import('../views/DwgsView.vue')
  },
  {
    path: '/folder',
    name: 'folder',
    component: () => import('../views/FolderView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
