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
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.genre }} · {{ movie.year }}</p>
  </article>
</template>
