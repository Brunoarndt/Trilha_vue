<script setup>
import BaseEmptyState from '../base/BaseEmptyState.vue'
import MovieCard from './MovieCard.vue'

defineProps({
  movies: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="movie-grid-section">
    <h2>Filmes</h2>

    <div v-if="movies.length" class="movie-grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

    <BaseEmptyState v-else />
  </section>
</template>

<style scoped>
.movie-grid-section {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.movie-grid-section h2 {
  margin-bottom: var(--space-6);
  color: black;
  font-size: 1.5rem;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-6);
}
</style>
