<script setup>
import { computed, ref } from 'vue'
import HeroBanner from './HeroBanner.vue'

const props = defineProps({
  movies: { type: Array, required: true },
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
      <div :key="activeMovie.id" class="carousel__slide">
        <HeroBanner :movie="activeMovie" />
      </div>
    </Transition>

    <button @click="showPrevious">Anterior</button>
    <button @click="showNext">Próximo</button>
  </section>
</template>

<style scoped>
.carousel {
  padding-bottom: 2vw;
}
</style>
