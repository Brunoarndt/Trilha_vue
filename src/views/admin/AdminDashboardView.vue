<script setup>
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
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
  </div>
</template>
