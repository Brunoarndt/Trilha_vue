<!-- src/components/layout/PublicFooter.vue -->
<script setup>
import AppLogo from '@/components/base/AppLogo.vue'
</script>

<template>
  <footer>
    <AppLogo />
    <nav aria-label="Links do rodapé">
      <RouterLink :to="{ name: 'home' }">Catálogo</RouterLink>
      <RouterLink :to="{ name: 'roadmap' }">Trilha de estudo</RouterLink>
      <RouterLink :to="{ name: 'login' }">Backoffice</RouterLink>
    </nav>
  </footer>
</template>
