import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/pages/Home.vue')
  },
  {
    path: '/clients',
    name: 'ClientList',
    component: () => import('../components/pages/ClientList.vue')
  },
  {
    path: '/dashboards',
    name: 'Dashboards',
    component: () => import('../components/pages/Dashboards.vue')
  },
  {
    path: '/config',
    name: 'Configuration',
    component: () => import('../components/pages/Configuration.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
