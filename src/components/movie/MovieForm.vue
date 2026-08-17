<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['submit', 'cancel'])

const emptyForm = {
  title: '',
  genre: '',
  year: new Date().getFullYear(),
  rating: 0,
  status: 'coming-soon',
}

const form = reactive({ ...emptyForm })
const errors = reactive({})

watch(
  () => props.movie,
  (movie) => {
    Object.assign(form, emptyForm, movie ?? {})
  },
  {
    immediate: true,
  },
)

function handleSubmit() {
  errors.title = form.title.trim() ? '' : 'Informe o título.'

  if (errors.title) {
    return
  }

  emit('submit', {
    ...form,
    title: form.title.trim(),
    year: Number(form.year),
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

    <button type="submit">Salvar</button>

    <button type="button" @click="emit('cancel')">Cancelar</button>
  </form>
</template>
