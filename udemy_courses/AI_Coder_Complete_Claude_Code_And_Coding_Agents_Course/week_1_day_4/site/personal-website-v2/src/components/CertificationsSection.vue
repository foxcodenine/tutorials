<template>
  <section id="certifications" class="section">
    <div class="section__label">Certifications</div>

    <div class="cards" @mouseenter="dimmed = true" @mouseleave="dimmed = false; hovered = null">
      <component
        :is="cert.href ? 'a' : 'div'"
        v-for="cert in certs"
        :key="cert.name"
        :href="cert.href || undefined"
        :target="cert.href ? '_blank' : undefined"
        :rel="cert.href ? 'noopener noreferrer' : undefined"
        class="card"
        :class="{ 'card--dimmed': dimmed && hovered !== cert.name, 'card--hovered': hovered === cert.name }"
        @mouseenter="hovered = cert.name"
        @mouseleave="hovered = null"
      >
        <div class="card__period">{{ cert.year }}</div>
        <div class="card__body">
          <div class="card__title">
            {{ cert.name }}
            <span v-if="cert.isNew" class="card__new">New</span>
            <svg v-if="cert.href" class="card__arrow" viewBox="0 0 16 16" fill="none">
              <path d="M3.75 8h8.5M8.5 4.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card__sub">{{ cert.sub }}</div>
          <div class="card__tags" v-if="cert.tags">
            <span class="tag" v-for="t in cert.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </component>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dimmed = ref(false)
const hovered = ref<string | null>(null)

const certs = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    sub: 'SAA-C03 · Amazon Web Services',
    year: 'June 2026',
    isNew: true,
    href: 'https://www.credly.com/badges/7d46d91e-157c-4f87-9332-d763a7e7da39',
    tags: ['Cloud', 'AWS', 'Architecture'],
  },
  {
    name: 'LPIC-1 Linux Administrator',
    sub: 'LPI000519379 · Linux Professional Institute',
    year: '2021',
    isNew: false,
    href: 'https://www.credly.com/badges/d1a932e2-effc-4df9-842c-dda349770ccd',
    tags: ['Linux', 'Bash', 'Networking'],
  },
  {
    name: 'Zend Certified Engineer',
    sub: 'ZEND033155 · PHP 7.1',
    year: '2021',
    isNew: false,
    tags: ['PHP'],
  },
  {
    name: 'MQF Level 5 – VET Award',
    sub: 'Development with MySQL and PHP',
    year: '2020',
    isNew: false,
    tags: ['PHP', 'MySQL'],
  },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.section {
  margin-bottom: 6rem;
}

.section__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: $text-2;
  margin-bottom: 1.5rem;
  display: none;

  @include respond-to(lg) {
    display: block;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid $border;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;

  @include respond-to(md) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  &--dimmed { opacity: 0.4; }

  &--hovered {
    background: $bg-card-hover;
    border-color: $border-hover;
    opacity: 1;
    .card__title { color: $accent; }
    .card__arrow { opacity: 1; transform: translate(3px, -3px); }
  }
}

.card__period {
  padding-top: 0.2rem;
  font-family: $font-mono;
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  color: $text-2;
  text-transform: uppercase;
  white-space: nowrap;
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.card__title {
  font-family: $font-display;
  font-size: 0.95rem;
  font-weight: 500;
  color: $text-1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: color 0.2s;
}

.card__arrow {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  opacity: 0;
  transition: transform 0.15s, opacity 0.15s;
}

.card__new {
  font-family: $font-mono;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $accent;
  background: $accent-dim;
  border: 1px solid $accent-border;
  padding: 1px 7px;
  border-radius: 100px;
  flex-shrink: 0;
}

.card__sub {
  font-size: 0.85rem;
  line-height: 1.65;
  color: $text-2;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.tag {
  font-family: $font-mono;
  font-size: 0.68rem;
  padding: 3px 10px;
  border-radius: 100px;
  background: $accent-dim;
  color: $accent;
  letter-spacing: 0.03em;
}
</style>
