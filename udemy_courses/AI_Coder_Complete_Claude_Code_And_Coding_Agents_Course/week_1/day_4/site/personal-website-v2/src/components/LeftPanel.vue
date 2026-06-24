<template>
  <aside class="left-panel">
    <header class="header">
      <div class="header__name">Christopher Farrugia</div>
      <div class="header__role">Backend-Focused Full-Stack Engineer</div>
      <div class="header__stack">Go · TypeScript · Linux · Microservices · AWS</div>
      <div class="header__row">
        <img src="/profile.jpeg" alt="Christopher Farrugia" class="header__photo" />
        <p class="header__tagline">
          I build scalable software — from web platforms and APIs to Linux-hosted microservices, IoT integrations, and cloud-ready systems.
        </p>
      </div>
    </header>

    <nav class="nav">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav__item"
        :class="{ 'nav__item--active': activeSection === item.id }"
        @click.prevent="scrollTo(item.id)"
      >
        <span class="nav__line"></span>
        <span class="nav__label">{{ item.label }}</span>
      </a>
    </nav>

    <TechIcons />

  </aside>
</template>

<script setup lang="ts">
import TechIcons from './TechIcons.vue'

defineProps<{ activeSection: string }>()

const navItems = [
  { id: 'about',           label: 'About' },
  { id: 'experience',      label: 'Experience' },
  { id: 'certifications',  label: 'Certifications' },
  { id: 'projects',        label: 'Side Projects' },
  { id: 'contact',         label: 'CV & Contact'  },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.left-panel {
  position: sticky;
  top: 0;
  height: 100vh;
  flex: 1;
  min-width: 0;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 3rem;
  gap: 3.5rem;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @include respond-to(lg) {
    position: static;
    height: auto;
    max-width: 100%;
    padding: 3rem 0 2rem;
    gap: 2rem;
  }
}

.header__row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1.1rem;
}

.header__photo {
  width: 5.5rem;
  height: 5.5rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  object-fit: cover;
  object-position: center top;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: border-color 0.2s;

  &:hover { border-color: rgba($accent, 0.4); }
}

.header__name {
  font-family: $font-display;
  font-size: 2.4rem;
  font-weight: 600;
  color: $text-1;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @include respond-to(lg) { font-size: 2rem; }
}

.header__role {
  font-size: 1rem;
  font-weight: 500;
  color: $text-1;
  margin-bottom: 0.35rem;
}

.header__stack {
  font-family: $font-mono;
  font-size: 0.72rem;
  color: $accent;
  letter-spacing: 0.04em;
}

.header__tagline {
  font-size: 0.85rem;
  color: $text-2;
  line-height: 1.65;
  flex: 1;
  min-width: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @include respond-to(lg) { display: none; }
}

.nav__item {
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  gap: 0.75rem;
  color: $text-2;
  font-size: 0.63rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s $ease;
  width: fit-content;
  cursor: pointer;

  .nav__line {
    height: 1px;
    background: currentColor;
    display: block;
    width: 100%;
  }

  &:hover { color: $text-1; }

  &--active {
    color: $text-1;
    grid-template-columns: 4rem 1fr;

    .nav__line { background: $accent; }
    .nav__label { color: $accent; }
  }
}

.nav__label {
  transition: color 0.2s $ease;
}

</style>
