import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMoviesStore } from './movies'

describe('movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adiciona um filme com um novo identificador', () => {
    const store = useMoviesStore()
    const initialCount = store.totalMovies

    const movie = store.addMovie({
      title: 'Filme de teste',
      status: 'showing',
      featured: false,
    })

    expect(store.totalMovies).toBe(initialCount + 1)
    expect(store.getMovieById(movie.id)?.title).toBe('Filme de teste')
  })
})
