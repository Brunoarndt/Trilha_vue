import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { initialMovies } from '@/data/movies'
import { readStorage, removeStorage, writeStorage } from '@/services/storageService'

const MOVIES_STORAGE_KEY = 'movies'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref(readStorage('movies', structuredClone(initialMovies)))

  function persist() {
    writeStorage('movies', movies.value)
  }

  const nowShowing = computed(() => movies.value.filter((movie) => movie.status === 'showing'))

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

  function getMovieById(id) {
    return movies.value.find((movie) => movie.id === Number(id)) ?? null
  }

  function addMovie(movieData) {
    const nextId = Math.max(0, ...movies.value.map((movie) => movie.id)) + 1

    const movie = {
      ...movieData,
      id: nextId,
    }

    movies.value.push(movie)

    persist()

    return movie
  }

  function updateMovie(id, movieData) {
    const index = movies.value.findIndex((movie) => movie.id === Number(id))

    if (index === -1) {
      return null
    }

    movies.value[index] = {
      ...movies.value[index],
      ...movieData,
      id: Number(id),
    }

    persist()

    return movies.value[index]
  }

  function removeMovie(id) {
    const index = movies.value.findIndex((movie) => movie.id === Number(id))

    if (index === -1) {
      return false
    }

    movies.value.splice(index, 1)

    persist()

    return true
  }

  function resetMovies() {
    movies.value = structuredClone(initialMovies)
    removeStorage(MOVIES_STORAGE_KEY)
  }

  return {
    movies,
    featuredMovie,
    nowShowing,
    comingSoon,
    carouselMovies,
    totalMovies,
    getMovieById,
    addMovie,
    updateMovie,
    removeMovie,
    resetMovies,
  }
})
