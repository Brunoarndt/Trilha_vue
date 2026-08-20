<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  detail: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'film',
  },
  tone: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <article class="stat-card" :class="`stat-card--${tone}`">
    <div class="stat-card__top">
      <span class="stat-card__label">{{ label }}</span>
      <span class="stat-card__dot"></span>
    </div>
    <strong class="stat-card__value">{{ value }}</strong>
    <p v-if="detail" class="stat-card__detail">{{ detail }}</p>
  </article>
</template>

<style scoped>
.stat-card {
  display: flex;
  flex-direction: column;

  padding: 20px 24px;

  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.stat-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
}

.stat-card__label {
  color: var(--color-text-muted);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.stat-card__dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--color-border);
}

.stat-card__value {
  margin-bottom: 4px;

  color: var(--color-text);

  font-size: clamp(28px, 3vw, 36px);
  font-weight: 800;
  line-height: 1;
}

.stat-card__detail {
  margin: 0;

  color: var(--color-text-muted);

  font-size: 12px;
}

.stat-card--primary .stat-card__dot {
  background: var(--color-primary);
}

.stat-card--success .stat-card__dot {
  background: var(--color-success);
}

.stat-card--warning .stat-card__dot {
  background: var(--color-warning);
}
</style>
