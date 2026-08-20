<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    default: null,
  },
  submitLabel: {
    type: String,
    default: 'Salvar',
  },
})

const emit = defineEmits(['submit', 'cancel'])

const emptyForm = {
  title: '',
  tagline: '',
  synopsis: '',
  genre: '',
  year: new Date().getFullYear(),
  duration: 100,
  rating: 8,
  ageRating: 'Livre',
  status: 'showing',
  featured: false,
  poster: '',
  backdrop: '',
}

const form = reactive({ ...emptyForm })
const errors = reactive({})

watch(
  () => props.movie,
  (movie) => {
    Object.assign(form, emptyForm, movie ?? {})
  },
  { immediate: true },
)

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.title.trim()) errors.title = 'Informe o título.'
  if (!form.genre.trim()) errors.genre = 'Informe o gênero.'
  if (!form.synopsis.trim()) errors.synopsis = 'Informe a sinopse.'
  if (Number(form.rating) < 0 || Number(form.rating) > 10) {
    errors.rating = 'A avaliação deve ficar entre 0 e 10.'
  }

  return Object.keys(errors).length === 0
}

function handleSubmit() {
  if (!validate()) return

  emit('submit', {
    ...form,
    year: Number(form.year),
    duration: Number(form.duration),
    rating: Number(form.rating),
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title"> Título </label>

      <input id="title" v-model="form.title" type="text" />

      <span v-if="errors.title">
        {{ errors.title }}
      </span>
    </div>

    <div>
      <label for="genre"> Gênero </label>

      <input id="genre" v-model="form.genre" type="text" />
    </div>

    <div>
      <label for="synopsis"> Sinopse </label>

      <input id="synopsis" v-model="form.synopsis" type="text" />
    </div>

    <div>
      <label for="year"> Ano </label>

      <input id="year" v-model="form.year" type="number" />
    </div>

    <div>
      <label for="rating"> Avaliação </label>

      <input id="rating" v-model="form.rating" type="number" min="0" max="10" step="0.1" />
    </div>

    <div>
      <label for="status"> Status </label>

      <select id="status" v-model="form.status">
        <option value="showing">Em cartaz</option>

        <option value="coming-soon">Em breve</option>
      </select>
    </div>

    <button type="submit">{{ submitLabel }}</button>

    <button type="button" @click="emit('cancel')">Cancelar</button>
  </form>
</template>
