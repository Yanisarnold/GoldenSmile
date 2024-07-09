import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/nursery',
      name: 'nursery',
      component: () => import('../views/OurNursery.vue')
    },
    {
      path: '/rooms',
      name: 'room',
      component: () => import('../views/OurRooms.vue')
    },
    {
      path: '/fees',
      name: 'fees',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/policies',
      name: 'policies',
      component: () => import('../views/PoliciesView.vue')
    }
  ]
})

export default router
