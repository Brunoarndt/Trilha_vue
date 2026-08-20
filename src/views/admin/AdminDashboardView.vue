<script setup>
import AdminMovieTable from '@/components/admin/AdminMovieTable.vue'
import { useMoviesStore } from '@/stores/movies'
import { computed } from 'vue'
import StatCard from '@/components/admin/StatCard.vue'

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

      <BaseButton :to="{ name: 'admin-movie-create' }"> Novo filme </BaseButton>
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
        <BaseButton :to="{ name: 'admin-movies' }" size="sm" variant="ghost">
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
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.dashboard-panel div.dashboard-panel__heading {
  gap: var(--space-2);
  display: flex;
}

.dashboard-panel h2 {
  margin: 5px 0 6px;
  color: var(--color-text);
  font-size: 18px;
}

.dashboard-panel p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 13px;
}
</style>
