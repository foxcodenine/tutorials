<template>
  <section id="contact" class="section">
    <div class="section__label">CV &amp; Contact</div>

    <ul class="links">
      <li v-for="item in items" :key="item.label">
        <a
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="link"
        >
          <div class="link__meta">
            <span class="link__type">{{ item.type }}</span>
          </div>
          <div class="link__body">
            <div class="link__title">
              {{ item.label }}
              <svg class="link__arrow" viewBox="0 0 16 16" fill="none">
                <path d="M3.75 8h8.5M8.5 4.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="link__desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    type: 'Document',
    label: 'View CV',
    href: 'https://chrisfarrugia.dev/cv',
    external: true,
    desc: 'Full curriculum vitae with experience, certifications, skills, and project history.',
  },
  {
    type: 'Email',
    label: 'chris12aug@yahoo.com',
    href: 'mailto:chris12aug@yahoo.com',
    external: false,
    desc: 'Reach out directly for opportunities, collaborations, or any enquiries.',
  },
  {
    type: 'LinkedIn',
    label: 'christopher-farrugia-3a51184b',
    href: 'https://linkedin.com/in/christopher-farrugia-3a51184b',
    external: true,
    desc: 'Connect on LinkedIn to see my professional profile and career updates.',
  },
  {
    type: 'GitHub',
    label: 'foxcodenine',
    href: 'https://github.com/foxcodenine',
    external: true,
    desc: 'Personal GitHub with tutorials, experiments, and open-source work.',
  },
  {
    type: 'GitHub',
    label: 'ChrisFarrugiaDev',
    href: 'https://github.com/ChrisFarrugiaDev',
    external: true,
    desc: 'Development GitHub with projects and professional work.',
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

.links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.link {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding: 0.65rem 0.75rem;
  border-radius: 0.6rem;
  border: 1px solid transparent;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;

  @include respond-to(md) { grid-template-columns: 1fr; gap: 0.3rem; }

  &:hover {
    background: $bg-card-hover;
    border-color: $border-hover;

    .link__title { color: $accent; }
    .link__arrow { opacity: 1; transform: translate(3px, -3px); }
  }
}

.link__meta {
  padding-top: 0.15rem;
}

.link__type {
  font-family: $font-mono;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: $text-2;
}

.link__body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.link__title {
  font-size: 0.88rem;
  font-weight: 500;
  color: $text-1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s;
}

.link__arrow {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  opacity: 0;
  transition: transform 0.15s, opacity 0.15s;
}

.link__desc {
  font-size: 0.85rem;
  color: $text-2;
  line-height: 1.65;
}
</style>
