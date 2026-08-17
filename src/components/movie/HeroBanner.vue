<script setup>
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'

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

    <div class="hero-banner__content">
      <BaseBadge tone="primary"> Em destaque </BaseBadge>

      <h1>{{ movie.title }}</h1>

      <p>{{ movie.tagline }}</p>

      <p>{{ movie.synopsis }}</p>

      <BaseButton variant="primary"> Ver detalhes </BaseButton>
    </div>
  </article>
</template>

<style scoped>
.hero-banner__image {
  width: 100vw;
  height: 100vh;
  position: relative;
  object-fit: cover;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 40%,
    rgba(117, 117, 117, 1) 100%
  );
}

.hero-banner__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: yellow;
  text-align: center;
}

.hero-banner {
  padding-bottom: 2vw;
}
</style>
