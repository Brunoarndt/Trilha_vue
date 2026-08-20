<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
})
</script>

<template>
  <button class="button" :class="[`button--${variant}`, `button--${size}`]">
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
    color 150ms ease,
    transform 150ms ease;
}

.button:hover {
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.button:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
}

.button--primary {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--color-primary-ink);
}

.button--primary:hover {
  border-color: var(--color-primary);
  background: var(--color-primary);
  filter: brightness(1.08);
}

.button--secondary {
  background: rgba(21, 27, 39, 0.8);
  color: var(--color-text);
}

.button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--color-text-muted);
}

.button--ghost:hover {
  border-color: var(--color-border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  transform: none;
}

.button--sm {
  min-height: 2rem;
  padding: 0 var(--space-2);
  font-size: 13px;
}
</style>
