<template>
  <div class="app">
    <MobileNav :activeSection="activeSection" />
    <div class="layout">
      <LeftPanel :activeSection="activeSection" />

      <main class="right-panel">
        <div class="fade-in"><AboutSection /></div>
        <hr class="section-divider" />
        <div class="fade-in"><ExperienceSection /></div>
        <hr class="section-divider" />
        <div class="fade-in"><CertificationsSection /></div>
        <hr class="section-divider" />
        <div class="fade-in"><ProjectsSection /></div>
        <hr class="section-divider" />
        <div class="fade-in"><ContactSection /></div>
        <hr class="section-divider" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftPanel from './components/LeftPanel.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import MobileNav from './components/MobileNav.vue'
import { useActiveSection } from './composables/useActiveSection'
import { useFadeIn } from './composables/useFadeIn'

const { activeSection } = useActiveSection(['about', 'experience', 'certifications', 'projects', 'contact'])
useFadeIn()
</script>

<style lang="scss">
@use './styles/main.scss';
@use './styles/variables' as *;
@use './styles/mixins' as *;

.app {
  min-height: 100vh;
  padding: 0 3rem;

  @include respond-to(lg) { padding: 0 2rem; }
  @include respond-to(sm) { padding: 0 1.5rem; }
}

.layout {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 0 auto;
  max-width: 76rem;

  @include respond-to(lg) {
    flex-direction: column;
    gap: 0;
  }
}

.right-panel {
  flex: 2;
  padding: 5rem 0 1.5rem;
  min-width: 0;

  @include respond-to(lg) { padding: 1rem 0 3rem; }
}

.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 3.5rem 0;
}

.right-panel section {
  margin-bottom: 0 !important;
}

// Spotlight cursor glow effect
.app::before {
  content: '';
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(126,255,166,0.04), transparent 60%);
  transition: background 0.1s;
}
</style>
