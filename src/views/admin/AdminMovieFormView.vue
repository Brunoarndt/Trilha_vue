<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import MovieForm from '@/components/movie/MovieForm.vue'
import BaseButton from '@/components/base/BaseButton.vue'

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
  <div class="form-view">
    <div class="page-heading">
      <div>
        <span class="eyebrow">{{ isEditing ? 'Editar filme' : 'Novo filme' }}</span>
        <h1>{{ isEditing ? movie?.title ?? 'Editar filme' : 'Cadastrar filme' }}</h1>
        <p>
          {{
            isEditing
              ? 'Altere os campos desejados e salve para atualizar o catálogo.'
              : 'Preencha os campos abaixo para adicionar um título ao catálogo.'
          }}
        </p>
      </div>

      <BaseButton variant="ghost" size="sm" @click="router.push({ name: 'admin-movies' })">
        ← Voltar
      </BaseButton>
    </div>

    <MovieForm
      :movie="movie"
      :submit-label="isEditing ? 'Salvar alterações' : 'Cadastrar filme'"
      @cancel="router.push({ name: 'admin-movies' })"
      @submit="handleSubmit"
    />
  </div>
</template>
