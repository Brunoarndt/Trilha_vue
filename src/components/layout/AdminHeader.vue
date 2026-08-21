<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import BaseButton from '../base/BaseButton.vue'

const router = useRouter()
const authStore = useAuthStore()

const emit = defineEmits(['open-menu'])

const userInitials = computed(
  () =>
    authStore.user?.name
      ?.split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() ?? '',
)

async function handleLogout() {
  authStore.logout()
  await router.push({ name: 'home' })
}
</script>

<template>
  <header class="admin-header">
    <div class="admin-header__left">
      <BaseButton
        aria-label="Abrir menu administrativo"
        class="admin-header__menu"
        type="button"
        @click="emit('open-menu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </BaseButton>

      <div class="admin-header__context">
        <span>Painel administrativo</span>
        <strong>Gerencie o catálogo CineVue</strong>
      </div>
    </div>

    <div class="admin-header__right">
      <div class="admin-header__divider"></div>

      <BaseButton
        class="admin-header__logout"
        aria-label="Sair"
        title="Sair"
        type="button"
        @click="handleLogout"
      >
        Sair
      </BaseButton>

      <div class="admin-header__user">
        <span class="admin-header__avatar">
          {{ userInitials }}
        </span>

        <div class="admin-header__identity">
          <strong>{{ authStore.user?.name }}</strong>
          <small>{{ authStore.user?.role }}</small>
        </div>
      </div>
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
  padding: 0 var(--space-8);

  background: color-mix(in srgb, var(--color-bg) 94%, transparent);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(14px);
}

.admin-header__left,
.admin-header__right,
.admin-header__user {
  display: flex;
  align-items: center;
}

.admin-header__left {
  gap: var(--space-4);
}

.admin-header__right {
  gap: var(--space-4);
}

.admin-header__context span,
.admin-header__context strong {
  display: block;
}

.admin-header__context span {
  margin-bottom: var(--space-2);

  color: var(--color-text-muted);

  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-header__context strong {
  color: var(--color-text);

  font-size: 0.875rem;
  font-weight: 600;
}

/* Menu mobile */

.admin-header__menu {
  display: none;

  width: 40px;
  height: 40px;

  padding: var(--space-2);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  background: var(--color-surface);

  cursor: pointer;
}

.admin-header__menu span {
  display: block;

  width: 100%;
  height: 2px;

  margin: 4px 0;

  border-radius: var(--radius-pill);

  background: var(--color-text);
}

/* Divisor */

.admin-header__divider {
  width: 1px;
  height: 28px;

  background: var(--color-border);
}

/* Usuário */

.admin-header__user {
  gap: var(--space-2);
}

.admin-header__avatar {
  display: grid;
  place-items: center;

  width: 34px;
  height: 34px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);

  background: var(--color-surface);

  color: var(--color-text);

  font-size: 0.6875rem;
  font-weight: 700;
}

.admin-header__identity {
  min-width: 100px;
}

.admin-header__identity strong,
.admin-header__identity small {
  display: block;
}

.admin-header__identity strong {
  overflow: hidden;

  color: var(--color-text);

  font-size: 0.75rem;
  font-weight: 600;

  text-overflow: ellipsis;
  white-space: nowrap;
}

.admin-header__identity small {
  margin-top: 2px;

  color: var(--color-text-muted);

  font-size: 0.625rem;
}

/* Logout */

.admin-header__logout {
  display: grid;
  place-items: center;

  width: 34px;
  height: 34px;

  margin-left: var(--space-2);

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  background: transparent;

  color: var(--color-text-muted);

  cursor: pointer;

  transition:
    color 160ms ease,
    background 160ms ease,
    border-color 160ms ease;
}

.admin-header__logout:hover {
  border-color: var(--color-border);

  background: var(--color-surface);

  color: var(--color-primary);
}

.admin-header__logout:focus-visible,
.admin-header__menu:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@media (max-width: 900px) {
  .admin-header {
    padding: 0 var(--space-6);
  }

  .admin-header__menu {
    display: block;
  }

  .admin-header__divider {
    display: none;
  }
}

@media (max-width: 600px) {
  .admin-header {
    padding: 0 var(--space-4);
  }

  .admin-header__context strong {
    display: none;
  }

  .admin-header__identity {
    display: none;
  }
}
</style>
