<template>
  <footer class="footer">
    <div class="footer__social">
      <a
        v-for="link in socialLinks"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        class="footer__link"
      >
        <span class="footer__tooltip">{{ link.label }}</span>
        <span class="footer__icon">
          <component :is="link.icon" v-if="link.icon" />
          <span v-else class="footer__cv">CV</span>
        </span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h } from 'vue'

const IconGitHub = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: 18, height: 18 }, [
  h('path', { d: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' })
])

const IconLinkedIn = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: 18, height: 18 }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const IconEmail = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', width: 18, height: 18 }, [
  h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
  h('polyline', { points: '22,6 12,13 2,6' }),
])

const socialLinks = [
  { href: 'https://linkedin.com/in/christopher-farrugia-3a51184b', label: 'LinkedIn',        icon: IconLinkedIn, external: true  },
  { href: 'https://github.com/ChrisFarrugiaDev',                    label: 'ChrisFarrugiaDev', icon: IconGitHub,   external: true  },
  { href: 'https://github.com/foxcodenine',                         label: 'foxcodenine',     icon: IconGitHub,   external: true  },
  { href: 'https://chrisfarrugia.dev/cv',                           label: 'CV',              icon: null,         external: true  },
  { href: 'mailto:chris12aug@yahoo.com',                            label: 'Email',           icon: IconEmail,    external: false },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.footer {
  padding: 2.5rem 0 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 2rem;
}

.footer__social {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.footer__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $text-2;
  transition: color 0.2s;

  &:hover {
    color: $accent;

    .footer__tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(-4px);
    }
  }
}

.footer__tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  font-size: 0.65rem;
  white-space: nowrap;
  color: $text-2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  font-family: $font-mono;
  letter-spacing: 0.03em;
}

.footer__icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.footer__cv {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: 1.5px solid currentColor;
  border-radius: 4px;
  padding: 1px 5px;
  line-height: 1.4;
}
</style>
