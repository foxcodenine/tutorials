<template>
  <nav class="mobile-nav">
    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="mobile-nav__item"
      :class="{ 'mobile-nav__item--active': activeSection === item.id }"
      @click.prevent="scrollTo(item.id)"
    >
      <span class="mobile-nav__label">{{ item.label }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ activeSection: string }>()

const navItems = [
  { id: 'about',          label: 'About' },
  { id: 'experience',     label: 'Experience' },
  { id: 'certifications', label: 'Certs' },
  { id: 'projects',       label: 'Projects' },
  { id: 'contact',        label: 'Contact' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.mobile-nav {
  display: none;

  @include respond-to(lg) {
    display: flex;
    position: fixed;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    background: rgba($bg-2, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
    padding: 0.4rem 0.5rem;
    gap: 0.1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
}

.mobile-nav__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.9rem;
  border-radius: 100px;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $text-2;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;

  &:hover { color: $text-1; }

  &--active {
    color: $accent;
    background: rgba($accent, 0.1);
  }
}
</style>
