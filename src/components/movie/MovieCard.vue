<script setup>
import BaseBadge from '@/components/base/BaseBadge.vue'

defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="movie-card">
    <img :src="movie.poster" :alt="`Pôster de ${movie.title}`" />
    <BaseBadge :tone="movie.status === 'showing' ? 'primary' : 'neutral'">
      {{ movie.status === 'showing' ? 'Em cartaz' : 'Em breve' }}
    </BaseBadge>
    <RouterLink :to="{ name: 'movie-details', params: { id: movie.id } }">
      {{ movie.title }}
    </RouterLink>
    <p>{{ movie.genre }} · {{ movie.year }}</p>
  </article>
</template>
