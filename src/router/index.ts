import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/home/Home.vue'),
    },
    {
      name: '3dmax',
      path: '/3dmax',
      component: () => import('@/views/3dmax/index.vue'),
    },
    {
      name: 'drones',
      path: '/drones',
      component: () => import('@/views/drones/index.vue'),
    },
  ],
});

export default router;
