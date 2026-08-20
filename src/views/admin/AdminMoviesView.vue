<script setup>
import { computed, ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()

const search = ref('')
const activeFilter = ref('all')
const selectedMovie = ref(null)

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

function requestDelete(movie) {
  selectedMovie.value = movie
}
</script>

<template>
  <div class="page-heading">
    <div>
      <span class="eyebrow">Catálogo</span>
      <h1>Gerenciar filmes</h1>
      <p>Cadastre e mantenha os títulos exibidos no site público.</p>
    </div>

    <BaseButton :to="{ name: 'admin-movie-create' }"> Novo filme </BaseButton>
  </div>

  <AdminMovieTable :movies="filteredMovies" @delete="requestDelete" />
</template>
