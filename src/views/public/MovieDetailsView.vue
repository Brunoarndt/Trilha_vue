<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useMoviesStore } from '@/stores/movies'

const route = useRoute()
const moviesStore = useMoviesStore()
const movie = computed(() => moviesStore.getMovieById(route.params.id))
</script>

<template>
  <h1>
    {{ movie }}
  </h1>
</template>
