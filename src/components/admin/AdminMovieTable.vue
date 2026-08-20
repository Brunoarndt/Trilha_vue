<script setup>
import BaseButton from '../base/BaseButton.vue'
import BaseEmptyState from '../base/BaseEmptyState.vue'

defineProps({
  movies: { type: Array, required: true },
})

const emit = defineEmits(['delete'])
</script>

<template>
  <div v-if="movies.length" class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Filme</th>
          <th>Gênero</th>
          <th>Status</th>
          <th>Avaliação</th>
          <th><span class="sr-only">Ações</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td>
            <div class="movie-cell">
              <img :alt="`Pôster de ${movie.title}`" :src="movie.poster" />
              <span>
                <strong>{{ movie.title }}</strong>
                <small>{{ movie.year }} · {{ movie.duration }} min</small>
              </span>
            </div>
          </td>
          <td data-label="Gênero">
            {{ movie.genre }}
          </td>
          <td data-label="Status">
            <BaseBadge :tone="movie.status === 'showing' ? 'success' : 'warning'">
              {{ movie.status === 'showing' ? 'Em cartaz' : 'Em breve' }}
            </BaseBadge>
          </td>
          <td data-label="Avaliação">
            <span class="rating"> {{ movie.rating }}</span>
          </td>
          <td>
            <div class="table-actions">
              <BaseButton
                :aria-label="`Visualizar ${movie.title}`"
                :to="{ name: 'movie-details', params: { id: movie.id } }"
                size="sm"
                title="Visualizar"
                variant="ghost"
              >
              </BaseButton>
              <BaseButton
                :aria-label="`Editar ${movie.title}`"
                :to="{ name: 'admin-movie-edit', params: { id: movie.id } }"
                size="sm"
                title="Editar"
                variant="ghost"
              >
              </BaseButton>
              <BaseButton
                :aria-label="`Excluir ${movie.title}`"
                size="sm"
                title="Excluir"
                variant="ghost"
                @click="emit('delete', movie)"
              >
              </BaseButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <BaseEmptyState
    v-else
    description="Cadastre um filme para começar a montar o catálogo."
    title="Nenhum filme cadastrado"
  >
    <BaseButton :to="{ name: 'admin-movie-create' }" size="sm"> Cadastrar filme </BaseButton>
  </BaseEmptyState>
</template>
