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
  <div v-if="movies.length" class="movie-grid">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <BaseEmptyState v-else />
</template>
