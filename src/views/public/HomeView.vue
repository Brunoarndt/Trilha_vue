<script setup>
import { computed, ref } from 'vue'

import HeroCarousel from '@/components/movie/HeroCarousel.vue'
import MovieFilters from '@/components/movie/MovieFilters.vue'
import MovieGrid from '@/components/movie/MovieGrid.vue'

import { initialMovies } from '@/data/movies'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()

const search = ref('')
const activeFilter = ref('all')

const featuredMovies = computed(() => {
  return initialMovies.filter((movie) => movie.featured)
})

const filteredMovies = computed(() => {
  const normalizedSearch = search.value.trim().toLocaleLowerCase('pt-BR')

  return moviesStore.movies.filter((movie) => {
    const matchesStatus = activeFilter.value === 'all' || movie.status === activeFilter.value
    const matchesSearch =
      !normalizedSearch ||
      movie.title.toLocaleLowerCase('pt-BR').includes(normalizedSearch) ||
      movie.genre.toLocaleLowerCase('pt-BR').includes(normalizedSearch)

    return matchesStatus && matchesSearch
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
