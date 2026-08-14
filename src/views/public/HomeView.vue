<script setup>
import { computed, ref } from 'vue'
import { initialMovies } from '@/data/movies'

const search = ref('')

const filteredMovies = computed(() => {
  const query = search.value.trim().toLowerCase()

  return initialMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query),
  )
})
</script>

<template>
  <input v-model="search" placeholder="Pesquisar filme..." />

  <article v-for="movie in filteredMovies" :key="movie.id">
    {{ movie.title }}
    {{ movie.duration }}
    {{ movie.rating }}
    {{ movie.status == 'coming-soon' ? 'Em breve' : movie.status }}
  </article>
</template>
