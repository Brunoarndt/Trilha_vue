<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const credentials = reactive({
  email: 'admin@cinevue.dev',
  password: 'vue123',
})

async function handleSubmit() {
  const success = await authStore.login(credentials)

  if (!success) return

  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/admin'

  await router.push(redirect)
}
</script>

<template>
  <main class="login">
    <div class="login__container">
      <header class="login__brand">
        <span class="login__brand-mark"></span>

        <div>
          <strong>CineVue</strong>
          <span>Backoffice</span>
        </div>
      </header>

      <section class="login__card">
        <div class="login__heading">
          <span class="eyebrow">Área administrativa</span>

          <h1>Bem-vindo de volta</h1>

          <p>Entre com suas credenciais para acessar o painel administrativo.</p>
        </div>

        <form class="login__form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">E-mail</label>

            <input
              id="email"
              v-model="credentials.email"
              type="email"
              placeholder="seu@email.com"
              autocomplete="email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Senha</label>

            <input
              id="password"
              v-model="credentials.password"
              type="password"
              placeholder="Digite sua senha"
              autocomplete="current-password"
              required
            />
          </div>

          <BaseButton class="login__submit" type="submit" variant="primary">
            Entrar no painel
          </BaseButton>
        </form>
      </section>

      <p class="login__footer">CineVue Backoffice</p>
    </div>
  </main>
</template>

<style scoped>
.login {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: var(--space-8) var(--space-4);

  background:
    radial-gradient(
      circle at 50% 0%,
      color-mix(in srgb, var(--color-primary) 5%, transparent),
      transparent 36%
    ),
    var(--color-bg);
}

.login__container {
  width: 100%;
  max-width: 420px;
}

/* Marca */

.login__brand {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: var(--space-2);

  margin-bottom: var(--space-6);
}

.login__brand-mark {
  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;

  border-radius: var(--radius-md);

  background: var(--color-primary);

  color: var(--color-primary-ink);

  font-size: 1.125rem;
  font-weight: 800;
}

.login__brand strong,
.login__brand span {
  display: block;
}

.login__brand strong {
  color: var(--color-text);

  font-size: 1rem;
  font-weight: 700;
}

.login__brand div span {
  margin-top: 1px;

  color: var(--color-text-muted);

  font-size: 0.625rem;
  font-weight: 600;

  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Card */

.login__card {
  padding: var(--space-8);

  background: var(--color-surface);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
}

/* Heading */

.login__heading {
  margin-bottom: var(--space-6);
}

.login__heading .eyebrow {
  display: block;

  margin-bottom: var(--space-2);
}

.login__heading h1 {
  margin: 0 0 var(--space-2);

  color: var(--color-text);

  font-size: 1.625rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.login__heading p {
  margin: 0;

  color: var(--color-text-muted);

  font-size: 0.8125rem;
  line-height: 1.6;
}

/* Form */

.login__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-group label {
  color: var(--color-text);

  font-size: 0.75rem;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  height: 44px;

  padding: 0 var(--space-4);

  box-sizing: border-box;

  background: var(--color-bg);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  color: var(--color-text);

  font: inherit;
  font-size: 0.8125rem;

  outline: none;

  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.form-group input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.7;
}

.form-group input:hover {
  border-color: var(--color-text-muted);
}

.form-group input:focus {
  border-color: var(--color-primary);

  box-shadow: 0 0 0 3px var(--color-success-subtle);
}

/* Button */

.login__submit {
  width: 100%;
  min-height: 44px;

  margin-top: var(--space-2);
}

/* Footer */

.login__footer {
  margin: var(--space-4) 0 0;

  color: var(--color-text-muted);

  font-size: 0.6875rem;

  text-align: center;

  opacity: 0.7;
}

@media (max-width: 480px) {
  .login {
    padding: var(--space-6) var(--space-4);
  }

  .login__card {
    padding: var(--space-6) var(--space-4);
  }
}
</style>
