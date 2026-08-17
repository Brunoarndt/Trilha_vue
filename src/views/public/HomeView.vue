<script setup>
import { computed, ref } from 'vue'

import HeroCarousel from '@/components/movie/HeroCarousel.vue'
import MovieFilters from '@/components/movie/MovieFilters.vue'
import MovieGrid from '@/components/movie/MovieGrid.vue'

import { initialMovies } from '@/data/movies'

const search = ref('')
const activeFilter = ref('all')

const featuredMovies = computed(() => {
  return initialMovies.filter((movie) => movie.featured)
})

const filteredMovies = computed(() => {
  const query = search.value.trim().toLowerCase()

  return initialMovies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query)

    const matchesFilter = activeFilter.value === 'all' || movie.status === activeFilter.value

    return matchesSearch && matchesFilter
  })
})
</script>

<template>
  <main>
    <HeroCarousel :movies="featuredMovies" />

    <MovieFilters v-model:search="search" v-model:active-filter="activeFilter" />

    <MovieGrid :movies="filteredMovies" />
  </main>
</template>
