<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useMoviesStore } from '@/stores/movies'

const router = useRouter()
const route = useRoute()

const moviesStore = useMoviesStore()
const movie = computed(() => moviesStore.getMovieById(route.params.id))
</script>

<template>
  <article v-if="movie" class="details">
    <div
      class="details__backdrop"
      :style="{ '--movie-backdrop': `url(${movie.backdrop || movie.poster})` }"
    />
    <div class="container details__content">
      <img class="details__poster" :alt="`Pôster de ${movie.title}`" :src="movie.poster" />
      <div class="details__copy">
        <BaseBadge :tone="movie.status === 'showing' ? 'primary' : 'neutral'">
          {{ movie.status === 'showing' ? 'Em cartaz' : 'Em breve' }}
        </BaseBadge>
        <h1>{{ movie.title }}</h1>
        <p class="details__tagline">
          {{ movie.tagline }}
        </p>
        <div class="details__meta">
          <span>Nota: {{ movie.rating }}</span>
          <span>{{ movie.genre }}</span>
          <span>{{ movie.year }}</span>
          <span>{{ movie.duration }} min</span>
          <span>{{ movie.ageRating }}</span>
        </div>
        <div class="details__synopsis">
          <span class="eyebrow">Sinopse</span>
          <p>{{ movie.synopsis }}</p>
        </div>
        <BaseButton @click="router.push({ name: 'home', hash: '#emCartaz' })" variant="secondary">
          Voltar ao catálogo
        </BaseButton>
      </div>
    </div>
  </article>

  <section v-else class="missing-movie">
    <div class="container">
      <span class="missing-movie__code">404</span>
      <h1>Filme não encontrado</h1>
      <p>Este filme pode ter sido removido do catálogo.</p>
      <BaseButton @click="router.push({ name: 'home' })"> Voltar para o início </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.details {
  position: relative;
  min-height: 48rem;
  padding: 10rem 0 6rem;
  overflow: hidden;
}

.details__backdrop {
  position: absolute;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(0deg, var(--color-bg) 5%, rgba(8, 11, 18, 0.7) 55%, rgba(8, 11, 18, 0.72)),
    var(--movie-backdrop) center / cover;
  filter: saturate(0.65);
}

.details__content {
  display: grid;
  align-items: center;
  gap: 2rem;
}

.details__poster {
  width: min(100%, 20rem);
  aspect-ratio: 2 / 3;
  margin-inline: auto;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
}

.details h1 {
  margin-top: 1rem;
  font-size: var(--space-8);
  line-height: 0.94;
  letter-spacing: -0.065em;
}

.details__tagline {
  margin-top: 1rem;
  color: #d0d5df;
  font-size: 1.15rem;
}

.details__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  font-weight: 700;
}

.details__meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.details__meta span:first-child {
  color: var(--color-primary);
}

.details__synopsis {
  max-width: 42rem;
  margin: 2rem 0;
}

.details__synopsis p {
  margin-top: 0.65rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.missing-movie {
  display: grid;
  min-height: 42rem;
  padding-top: 7rem;
  text-align: center;
  place-items: center;
}

.missing-movie__code {
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.2em;
}

.missing-movie h1 {
  margin-top: 0.5rem;
  font-size: clamp(2rem, 6vw, 4rem);
}

.missing-movie p {
  margin: 0.6rem 0 1.5rem;
  color: var(--color-text-muted);
}

@media (min-width: 760px) {
  .details__content {
    grid-template-columns: minmax(14rem, 0.42fr) minmax(0, 1fr);
    gap: 3.5rem;
  }
}
</style>
