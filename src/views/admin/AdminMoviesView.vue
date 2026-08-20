<script setup>
import { computed, ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import AdminMovieTable from '@/components/admin/AdminMovieTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'

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
  <div class="movies-page">
    <div class="page-heading">
      <div>
        <span class="eyebrow">Catálogo</span>
        <h1>Gerenciar filmes</h1>
        <p>Cadastre e mantenha os títulos exibidos no site público.</p>
      </div>

      <BaseButton :to="{ name: 'admin-movie-create' }"> Novo filme </BaseButton>
    </div>

    <section class="catalog-toolbar">
      <div class="search-field">
        <label for="movie-search">Buscar filmes</label>

        <input id="movie-search" v-model="search" type="search" placeholder="Título ou gênero..." />
      </div>

      <div class="filter-field">
        <label for="movie-status">Status</label>

        <select id="movie-status" v-model="activeFilter">
          <option value="all">Todos</option>
          <option value="showing">Em cartaz</option>
          <option value="coming-soon">Em breve</option>
        </select>
      </div>
    </section>

    <div class="catalog-summary">
      <span>
        {{ filteredMovies.length }}
        {{ filteredMovies.length === 1 ? 'filme encontrado' : 'filmes encontrados' }}
      </span>
    </div>

    <AdminMovieTable :movies="filteredMovies" @delete="requestDelete" />
  </div>
</template>

<style scoped>
.catalog-toolbar {
  display: flex;
  align-items: flex-end;
  gap: 16px;

  margin-bottom: 12px;
  padding: 16px;

  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.search-field {
  flex: 1;
}

.search-field,
.filter-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.search-field label,
.filter-field label {
  color: var(--color-text-muted);

  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search-field input,
.filter-field select {
  height: 40px;

  padding: 0 12px;

  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 7px;

  color: var(--color-text);

  font: inherit;
  font-size: 13px;

  outline: none;

  transition: border-color 160ms ease;
}

.search-field input {
  width: 100%;
}

.filter-field select {
  min-width: 160px;
}

.search-field input:focus,
.filter-field select:focus {
  border-color: var(--color-primary);
}

.catalog-summary {
  margin-bottom: 10px;

  color: var(--color-text-muted);

  font-size: 12px;
}
</style>
