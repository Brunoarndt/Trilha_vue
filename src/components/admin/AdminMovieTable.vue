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
                Ver
              </BaseButton>
              <BaseButton
                :aria-label="`Editar ${movie.title}`"
                :to="{ name: 'admin-movie-edit', params: { id: movie.id } }"
                size="sm"
                title="Editar"
                variant="ghost"
              >
                Editar
              </BaseButton>
              <BaseButton
                :aria-label="`Excluir ${movie.title}`"
                size="sm"
                title="Excluir"
                variant="ghost"
                @click="emit('delete', movie)"
              >
                Excluir
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

<style lang="css" scoped>
.table-wrap {
  overflow: hidden;

  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.table-wrap table {
  width: 100%;

  border-collapse: collapse;
}

.table-wrap th {
  height: 44px;
  padding: 0 18px;

  background: rgba(255, 255, 255, 0.025);

  border-bottom: 1px solid var(--color-border);

  color: var(--color-text-muted);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-align: left;
  text-transform: uppercase;
}

.table-wrap td {
  padding: 14px 18px;

  border-bottom: 1px solid var(--color-border);

  color: var(--color-text-muted);

  font-size: 13px;
}

.table-wrap tbody tr:last-child td {
  border-bottom: 0;
}

.table-wrap tbody tr {
  transition: background 160ms ease;
}

.table-wrap tbody tr:hover {
  background: rgba(255, 255, 255, 0.025);
}

.movie-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.movie-cell img {
  width: 40px;
  height: 56px;

  flex: 0 0 auto;

  object-fit: cover;

  border-radius: 5px;
  background: var(--color-bg);
}

.movie-cell strong,
.movie-cell small {
  display: block;
}

.movie-cell strong {
  margin-bottom: 4px;

  color: var(--color-text);

  font-size: 13px;
}

.movie-cell small {
  color: var(--color-text-muted);

  font-size: 11px;
}

.rating {
  color: var(--color-text);
  font-weight: 600;
}

.table-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}
</style>
