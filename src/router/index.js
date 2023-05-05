import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'abospecialityut',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/nomera',
    name: 'nomera',
    component: () => import('../views/nomera/NomeraView.vue')
  },
  {
    path: '/nomera/add',
    name: 'nomeraAdd',
    component: () => import('../views/nomera/NomeraCreateView.vue')
  },
  {
    path: '/nomera/:id',
    name: 'nomeraGetId',
    component: () => import('../views/nomera/NomeraShowView.vue')
  },
  {
    path: '/nomera/edit/:id',
    name: 'nomeraEditId',
    component: () => import('../views/nomera/NomeraEditView.vue')
  },
  {
    path: '/gosti',
    name: 'gosti',
    component: () => import('../views/gosti/GostiView.vue')
  },
  {
    path: '/gosti/add',
    name: 'gostiAdd',
    component: () => import('../views/gosti/GostiCreateView.vue')
  },
  {
    path: '/gosti/:id',
    name: 'gostiGetId',
    component: () => import('../views/gosti/GostiShowView.vue')
  },
  {
    path: '/gosti/edit/:id',
    name: 'gostiEditId',
    component: () => import('../views/gosti/GostiEditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
