<!-- src/components/layout/PublicHeader.vue -->
<script setup>
const navigation = [
  { label: 'Início', to: { name: 'home' } },
  { label: 'Em cartaz', to: { name: 'home', hash: '#em-cartaz' } },
  { label: 'A trilha', to: { name: 'roadmap' } },
]
</script>

<template>
  <header>
    <nav aria-label="Navegação principal">
      <RouterLink v-for="item in navigation" :key="item.label" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
