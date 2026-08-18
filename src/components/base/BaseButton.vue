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
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 2.75rem;
  min-height: 2.75rem;

  padding: var(--space-2) var(--space-4);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  background: var(--color-surface);
  color: var(--color-text);

  font: inherit;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 150ms ease,
    border-color 150ms ease,
    transform 150ms ease;
}

.button:hover {
  border-color: rgba(255, 255, 255, 0.25);

  transform: translateY(-1px);
}

.button--primary {
  border-color: var(--color-primary);

  background: var(--color-primary);
  color: var(--color-primary-ink);
}

.button--secondary {
  background: rgba(21, 27, 39, 0.8);
  color: var(--color-text);
}
</style>
