<script setup>
const emit = defineEmits(['open-menu'])
</script>

<template>
  <header class="admin-header">
    <button
      aria-label="Abrir menu administrativo"
      class="admin-header__menu"
      type="button"
      @click="emit('open-menu')"
    ></button>

    <div class="admin-header__context">
      <span>Painel administrativo</span>
      <strong>Gerencie o catálogo CineVue</strong>
    </div>
  </header>
</template>
