<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const navigation = [
  { label: 'Visão geral', icon: 'grid', to: { name: 'admin-dashboard' } },
  { label: 'Filmes', icon: 'film', to: { name: 'admin-movies' } },
  { label: 'Novo filme', icon: 'plus', to: { name: 'admin-movie-create' } },
]
</script>

<template>
  <Transition name="overlay">
    <button
      v-if="open"
      aria-label="Fechar menu"
      class="sidebar-overlay"
      type="button"
      @click="emit('close')"
    />
  </Transition>

  <aside class="sidebar" :class="{ 'sidebar--open': open }">
    <div class="sidebar__top">
      <span class="sidebar__label">Backoffice</span>
    </div>

    <nav class="sidebar__nav" aria-label="Navegação administrativa">
      <span class="sidebar__section">Gerenciamento</span>
      <RouterLink v-for="item in navigation" :key="item.label" :to="item.to" @click="emit('close')">
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <RouterLink class="sidebar__public-link" :to="{ name: 'home' }"> Ver site público </RouterLink>
  </aside>
</template>
