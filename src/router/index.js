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
    {
      path: '/admin',
      component: () => import('@/components/layout/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: () => import('@/views/admin/AdminDashboardView.vue'),
        },
        {
          path: 'filmes',
          name: 'admin-movies',
          component: () => import('@/views/admin/AdminMoviesView.vue'),
        },
        {
          path: 'filmes/novo',
          name: 'admin-movie-create',
          component: () => import('@/views/admin/AdminMovieFormView.vue'),
        },
        {
          path: 'filmes/:id/editar',
          name: 'admin-movie-edit',
          component: () => import('@/views/admin/AdminMovieFormView.vue'),
        },
      ],
    },
  ],
})

export default router
