<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <button class="button" :class="`button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.button--primary {
  background-color: #007bff;
  color: white;
}

.button--danger {
  background-color: #ff312a;
  color: white;
}
</style>
