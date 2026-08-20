<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  detail: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'film',
  },
  tone: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <article class="stat-card" :class="`stat-card--${tone}`">
    <div class="stat-card__top">
      <span>{{ label }}</span>
    </div>
    <strong>{{ value }}</strong>
    <p>{{ detail }}</p>
  </article>
</template>
