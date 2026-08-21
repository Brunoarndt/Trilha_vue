<script setup>
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="hero-banner">
    <img :src="movie.backdrop" :alt="`Imagem de ${movie.title}`" class="hero-banner__image" />

    <div class="hero-banner__overlay"></div>

    <div class="hero-banner__content">
      <BaseBadge tone="primary"> Em destaque </BaseBadge>

      <h1>{{ movie.title }}</h1>

      <p class="hero-banner__tagline">
        {{ movie.tagline }}
      </p>

      <p class="hero-banner__synopsis">
        {{ movie.synopsis }}
      </p>

      <BaseButton
        variant="primary"
        @click="router.push({ name: 'movie-details', params: { id: movie.id } })"
      >
        Ver detalhes
      </BaseButton>
    </div>
  </article>
</template>

<style scoped>
.hero-banner {
  position: relative;
  height: 85vh;
  overflow: hidden;

  background: var(--color-surface);
}

.hero-banner__image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.hero-banner__overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(8, 11, 17, 0.98) 0%,
    rgba(8, 11, 17, 0.82) 35%,
    rgba(8, 11, 17, 0.35) 70%,
    rgba(8, 11, 17, 0.15) 100%
  );
}

.hero-banner__content {
  position: relative;
  z-index: 1;

  max-width: 600px;
  padding: 8rem var(--space-6);

  color: var(--color-text);
}

.hero-banner__content h1 {
  margin: var(--space-4) 0 var(--space-2);

  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
}

.hero-banner__tagline {
  margin-bottom: var(--space-4);

  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
}

.hero-banner__synopsis {
  margin-bottom: var(--space-6);

  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
