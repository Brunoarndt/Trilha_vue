import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layout/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/public/HomeView.vue'),
        },
        {
          path: 'filmes/:id',
          name: 'movie-details',
          component: () => import('@/views/public/MovieDetailsView.vue'),
        },
      ],
    },
  ],
})

export default router
