import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { initialMovies } from '@/data/movies'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref(structuredClone(initialMovies))

  const nowShowing = computed(() => movies.value.filter((movie) => movie.status === 'showing'))

  function getMovieById(id) {
    return movies.value.find((movie) => movie.id === Number(id)) ?? null
  }

  const featuredMovie = computed(
    () => movies.value.find((movie) => movie.featured) ?? movies.value[0] ?? null,
  )

  const comingSoon = computed(() => movies.value.filter((movie) => movie.status === 'coming-soon'))

  const carouselMovies = computed(() =>
    [...movies.value]
      .sort((firstMovie, secondMovie) => {
        if (firstMovie.featured !== secondMovie.featured) {
          return firstMovie.featured ? -1 : 1
        }

        return Number(secondMovie.rating) - Number(firstMovie.rating)
      })
      .slice(0, 5),
  )

  const totalMovies = computed(() => movies.value.length)

  return {
    movies,
    featuredMovie,
    nowShowing,
    comingSoon,
    carouselMovies,
    totalMovies,
    getMovieById,
  }
})
