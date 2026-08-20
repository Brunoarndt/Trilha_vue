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
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="admin-header__context">
      <span>Painel administrativo</span>
      <strong>Gerencie o catálogo CineVue</strong>
    </div>

    <div class="admin-header__status">
      <span></span>
      Catálogo local
    </div>
  </header>
</template>

<style scoped>
.admin-header {
  position: sticky;
  top: 0;
  z-index: 40;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 72px;
  padding: 0 48px;

  background: color-mix(in srgb, var(--color-bg) 92%, transparent);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(12px);
}

.admin-header__menu {
  display: none;

  width: 40px;
  height: 40px;

  padding: 9px;

  border: 1px solid var(--color-border);
  border-radius: 8px;

  background: var(--color-surface);
}

.admin-header__menu span {
  display: block;

  height: 2px;
  margin: 4px 0;

  background: var(--color-text);
}

.admin-header__context span,
.admin-header__context strong {
  display: block;
}

.admin-header__context span {
  margin-bottom: 3px;

  color: var(--color-text-muted);

  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.admin-header__context strong {
  color: var(--color-text);
  font-size: 14px;
}

.admin-header__status {
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--color-text-muted);

  font-size: 12px;
}

.admin-header__status span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #4ade80;
}
</style>
