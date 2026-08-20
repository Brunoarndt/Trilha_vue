<script setup>
defineProps({
  title: {
    type: String,
    default: 'Nenhum item encontrado',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="empty-state">
    <p class="empty-state__title">{{ title }}</p>
    <p v-if="description" class="empty-state__description">{{ description }}</p>
    <div v-if="$slots.default" class="empty-state__action">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 48px 24px;

  text-align: center;
}

.empty-state__title {
  margin-bottom: 6px;

  color: var(--color-text);

  font-size: 15px;
  font-weight: 600;
}

.empty-state__description {
  max-width: 320px;
  margin-bottom: 20px;

  color: var(--color-text-muted);

  font-size: 13px;
  line-height: 1.6;
}

.empty-state__action {
  display: flex;
  gap: 8px;
}
</style>
