<!-- src/components/layout/PublicFooter.vue -->
<script setup></script>

<template>
  <footer>
    <nav aria-label="Links do rodapé">
      <RouterLink :to="{ name: 'home' }">Catálogo</RouterLink>
      <RouterLink :to="{ name: 'roadmap' }">Trilha de estudo</RouterLink>
      <RouterLink :to="{ name: 'login' }">Backoffice</RouterLink>
    </nav>
  </footer>
</template>
