<script setup>
import { reactive, watch } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'

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
  <form class="movie-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label class="form-label" for="title">Título</label>
      <input id="title" v-model="form.title" class="form-input" type="text" />
      <span v-if="errors.title" class="form-error">{{ errors.title }}</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="tagline">Tagline</label>
      <input id="tagline" v-model="form.tagline" class="form-input" type="text" />
    </div>

    <div class="form-group">
      <label class="form-label" for="genre">Gênero</label>
      <input id="genre" v-model="form.genre" class="form-input" type="text" />
      <span v-if="errors.genre" class="form-error">{{ errors.genre }}</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="synopsis">Sinopse</label>
      <textarea id="synopsis" v-model="form.synopsis" class="form-input form-textarea" rows="4" />
      <span v-if="errors.synopsis" class="form-error">{{ errors.synopsis }}</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="year">Ano</label>
      <input id="year" v-model="form.year" class="form-input" type="number" />
    </div>

    <div class="form-group">
      <label class="form-label" for="duration">Duração (min)</label>
      <input id="duration" v-model="form.duration" class="form-input" type="number" min="1" />
    </div>

    <div class="form-group">
      <label class="form-label" for="rating">Avaliação (0–10)</label>
      <input
        id="rating"
        v-model="form.rating"
        class="form-input"
        type="number"
        min="0"
        max="10"
        step="0.1"
      />
      <span v-if="errors.rating" class="form-error">{{ errors.rating }}</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="ageRating">Classificação</label>
      <select id="ageRating" v-model="form.ageRating" class="form-input">
        <option value="Livre">Livre</option>
        <option value="10">10 anos</option>
        <option value="12">12 anos</option>
        <option value="14">14 anos</option>
        <option value="16">16 anos</option>
        <option value="18">18 anos</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label" for="status">Status</label>
      <select id="status" v-model="form.status" class="form-input">
        <option value="showing">Em cartaz</option>
        <option value="coming-soon">Em breve</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label form-label--checkbox">
        <input v-model="form.featured" type="checkbox" />
        Destaque no carrossel
      </label>
    </div>

    <div class="form-group">
      <label class="form-label" for="poster">URL do pôster</label>
      <input id="poster" v-model="form.poster" class="form-input" type="url" />
    </div>

    <div class="form-group">
      <label class="form-label" for="backdrop">URL do backdrop</label>
      <input id="backdrop" v-model="form.backdrop" class="form-input" type="url" />
    </div>

    <div class="form-actions">
      <BaseButton type="submit">{{ submitLabel }}</BaseButton>
      <BaseButton type="button" variant="ghost" @click="emit('cancel')">Cancelar</BaseButton>
    </div>
  </form>
</template>

<style scoped>
.movie-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  max-width: 600px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  color: var(--color-text-muted);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.form-label--checkbox {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--color-text-muted);

  font-size: 13px;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: none;

  cursor: pointer;
}

.form-input {
  height: 40px;
  padding: 0 12px;

  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 7px;

  color: var(--color-text);

  font: inherit;
  font-size: 13px;

  outline: none;

  transition: border-color 160ms ease;
}

.form-input:focus {
  border-color: var(--color-primary);
}

.form-textarea {
  height: auto;
  padding: 10px 12px;

  resize: vertical;
}

.form-error {
  color: var(--color-warning);

  font-size: 12px;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 12px;

  padding-top: var(--space-2);

  border-top: 1px solid var(--color-border);
}
</style>
