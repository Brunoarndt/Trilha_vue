<script setup>
defineProps({
  search: { type: String, default: '' },
  activeFilter: { type: String, default: 'all' },
})

const emit = defineEmits(['update:search', 'update:activeFilter'])
</script>

<template>
  <input :value="search" @input="emit('update:search', $event.target.value)" />

  <button @click="emit('update:activeFilter', 'showing')">Em cartaz</button>
  <button @click="emit('update:activeFilter', 'coming-soon')">Em breve</button>
</template>
