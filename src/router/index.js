import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { pinia } from '@/stores'

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
      meta: { requiresAuth: true },
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
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
      meta: { requiresGuest: true },
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore(pinia)

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return { name: 'admin-dashboard' }
  }

  return true
})

export default router
