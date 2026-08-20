<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'

const route = useRoute()
const router = useRouter()
const moviesStore = useMoviesStore()

const isEditing = computed(() => route.name === 'admin-movie-edit')
const movie = computed(() => (isEditing.value ? moviesStore.getMovieById(route.params.id) : null))

function handleSubmit(movieData) {
  if (isEditing.value) {
    moviesStore.updateMovie(route.params.id, movieData)
  } else {
    moviesStore.addMovie(movieData)
  }

  router.push({ name: 'admin-movies' })
}
</script>
<template>
  <MovieForm
    :movie="movie"
    :submit-label="isEditing ? 'Salvar alterações' : 'Cadastrar filme'"
    @cancel="router.push({ name: 'admin-movies' })"
    @submit="handleSubmit"
  />
</template>
