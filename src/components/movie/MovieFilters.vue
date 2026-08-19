<script setup>
import BaseButton from '../base/BaseButton.vue'

defineProps({
  search: {
    type: String,
    default: '',
  },

  activeFilter: {
    type: String,
    default: 'all',
  },
})

const emit = defineEmits(['update:search', 'update:activeFilter'])
</script>

<template>
  <section class="movie-filters">
    <div class="movie-filters__search">
      <label for="movie-search"> Pesquisar filmes </label>

      <input
        id="movie-search"
        :value="search"
        placeholder="Digite o nome de um filme..."
        @input="emit('update:search', $event.target.value)"
      />
    </div>

    <div class="movie-filters__buttons">
      <BaseButton variant="secondary" @click="emit('update:activeFilter', 'all')">
        Todos
      </BaseButton>

      <BaseButton variant="secondary" @click="emit('update:activeFilter', 'showing')">
        Em cartaz
      </BaseButton>

      <BaseButton variant="secondary" @click="emit('update:activeFilter', 'coming-soon')">
        Em breve
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.movie-filters {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  max-width: var(--container);
  margin: 0 auto;

  padding: var(--space-6) var(--space-4);
}

.movie-filters__search {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.movie-filters__search label {
  font-weight: 600;
}

.movie-filters__search input {
  width: 100%;
  padding: var(--space-2) var(--space-4);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  background: var(--color-surface);
  color: var(--color-text);
}

.movie-filters__search input::placeholder {
  color: var(--color-text-muted);
}

.movie-filters__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
</style>
