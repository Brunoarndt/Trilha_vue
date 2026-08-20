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
      <div class="sidebar__brand">
        <span class="sidebar__brand-mark">C</span>

        <div>
          <strong>CineVue</strong>
          <span>Backoffice</span>
        </div>
      </div>
    </div>

    <nav class="sidebar__nav" aria-label="Navegação administrativa">
      <span class="sidebar__section">Gerenciamento</span>

      <RouterLink v-for="item in navigation" :key="item.label" :to="item.to" @click="emit('close')">
        <span class="sidebar__icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="sidebar__bottom">
      <RouterLink class="sidebar__public-link" :to="{ name: 'home' }">
        <span>↗</span>
        Ver site público
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 50;

  display: flex;
  flex-direction: column;

  width: 250px;
  height: 100vh;

  padding: 24px 16px;

  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
}

.sidebar__top {
  padding: 0 10px 32px;
}

.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar__brand-mark {
  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

  border-radius: 10px;

  background: var(--color-primary);
  color: white;

  font-size: 18px;
  font-weight: 800;
}

.sidebar__brand strong,
.sidebar__brand span {
  display: block;
}

.sidebar__brand strong {
  color: var(--color-text);
  font-size: 15px;
}

.sidebar__brand div span {
  margin-top: 2px;

  color: var(--color-text-muted);
  font-size: 11px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar__section {
  margin: 0 10px 8px;

  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.sidebar__nav a {
  display: flex;
  align-items: center;
  gap: 12px;

  min-height: 44px;
  padding: 0 12px;

  border-radius: 8px;

  color: var(--color-text-muted);
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;

  transition:
    background 160ms ease,
    color 160ms ease;
}

.sidebar__nav a:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
}

.sidebar__nav a.router-link-active {
  background: rgba(255, 255, 255, 0.07);
  color: var(--color-text);
}

.sidebar__icon {
  width: 18px;

  color: currentColor;

  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.sidebar__bottom {
  margin-top: auto;
  padding-top: 20px;

  border-top: 1px solid var(--color-border);
}

.sidebar__public-link {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;

  color: var(--color-text-muted);
  text-decoration: none;

  font-size: 13px;

  transition: color 160ms ease;
}

.sidebar__public-link:hover {
  color: var(--color-text);
}

/* responsividade */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  z-index: 45;

  border: 0;

  background: rgba(0, 0, 0, 0.6);
}

@media (max-width: 900px) {
  .admin-layout__content {
    margin-left: 0;
  }

  .sidebar {
    transform: translateX(-100%);

    transition: transform 180ms ease;
  }

  .sidebar--open {
    transform: translateX(0);
  }

  .admin-header {
    padding: 0 24px;
  }

  .admin-header__menu {
    display: block;
  }

  .admin-main {
    padding: 32px 24px 48px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .admin-header {
    gap: 12px;
  }

  .admin-header__status {
    display: none;
  }

  .admin-main {
    padding: 24px 16px 40px;
  }

  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .catalog-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .filter-field select {
    width: 100%;
  }

  .table-wrap {
    overflow-x: auto;
  }

  .table-wrap table {
    min-width: 700px;
  }
}
</style>
