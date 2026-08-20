<script setup>
import AdminMovieTable from '@/components/admin/AdminMovieTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import StatCard from '@/components/admin/StatCard.vue'
import { useMoviesStore } from '@/stores/movies'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const moviesStore = useMoviesStore()

const recentMovies = computed(() => moviesStore.movies.slice(-4).reverse())
</script>

<template>
  <div class="dashboard">
    <div class="page-heading">
      <div>
        <span class="eyebrow">Visão geral</span>
        <h1>Dashboard</h1>
        <p>Acompanhe os dados principais e mantenha o catálogo atualizado.</p>
      </div>

      <BaseButton @click="router.push({ name: 'admin-movie-create' })">Novo filme</BaseButton>
    </div>

    <section class="stats-grid" aria-label="Indicadores do catálogo">
      <StatCard
        detail="Filmes cadastrados"
        icon="film"
        label="Total do catálogo"
        :value="moviesStore.totalMovies"
      />

      <StatCard
        detail="Disponíveis na landing page"
        icon="eye"
        label="Em cartaz"
        tone="success"
        :value="moviesStore.nowShowing.length"
      />

      <StatCard
        detail="Lançamentos preparados"
        icon="clock"
        label="Em breve"
        tone="warning"
        :value="moviesStore.comingSoon.length"
      />
    </section>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <span class="eyebrow">Catálogo</span>
          <h2>Visão rápida</h2>
          <p>O catálogo possui {{ moviesStore.totalMovies }} filmes cadastrados.</p>
        </div>
        <BaseButton
          size="sm"
          variant="ghost"
          @click="router.push({ name: 'admin-movies' })"
        >
          Gerenciar filmes
        </BaseButton>
      </div>

      <AdminMovieTable :movies="recentMovies" />
    </section>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-6);
  margin-bottom: 24px;
}

.dashboard-panel {
  padding: 24px;

  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.dashboard-panel__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);

  margin-bottom: 20px;
}

.dashboard-panel__heading h2 {
  margin: 4px 0 6px;

  color: var(--color-text);

  font-size: 18px;
  font-weight: 700;
}

.dashboard-panel__heading p {
  margin: 0;

  color: var(--color-text-muted);

  font-size: 13px;
}
</style>
