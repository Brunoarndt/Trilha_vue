<script setup>
defineProps({
  tone: {
    type: String,
    default: 'neutral',
  },
})
</script>

<template>
  <span class="badge" :class="`badge--${tone}`">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;

  padding: 3px 8px;

  border-radius: var(--radius-pill);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge--primary {
  background: var(--color-primary);
  color: var(--color-primary-ink);
}

.badge--success {
  background: var(--color-success-subtle);
  color: var(--color-success);
}

.badge--warning {
  background: var(--color-warning-subtle);
  color: var(--color-warning);
}

.badge--neutral {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-text-muted);
}
</style>
