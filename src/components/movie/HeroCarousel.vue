<script setup>
import { computed, ref } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'
import HeroBanner from './HeroBanner.vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const direction = ref('next')

const activeMovie = computed(() => props.movies[activeIndex.value])

const transitionName = computed(() => `hero-${direction.value}`)

function showNext() {
  direction.value = 'next'

  activeIndex.value = (activeIndex.value + 1) % props.movies.length
}

function showPrevious() {
  direction.value = 'previous'

  activeIndex.value = (activeIndex.value - 1 + props.movies.length) % props.movies.length
}
</script>

<template>
  <section class="carousel">
    <Transition :name="transitionName">
      <div v-if="activeMovie" :key="activeMovie.id" class="carousel__slide">
        <HeroBanner :movie="activeMovie" />
      </div>
    </Transition>

    <div class="carousel__controls">
      <BaseButton variant="secondary" aria-label="Filme anterior" @click="showPrevious">
        ←
      </BaseButton>

      <BaseButton variant="secondary" aria-label="Próximo filme" @click="showNext"> → </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  width: 100%;
}

.carousel__slide {
  width: 100%;
}

.carousel__controls {
  display: flex;
  justify-content: center;
  gap: var(--space-2);

  padding-top: var(--space-4);
}
</style>
