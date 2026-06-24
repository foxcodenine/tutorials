<template>
  <section id="projects" class="section">
    <div class="section__label">Side Projects</div>

    <div class="cards" @mouseenter="dimmed = true" @mouseleave="dimmed = false; hovered = null">
      <component
        :is="proj.href ? 'a' : 'div'"
        v-for="proj in projects"
        :key="proj.title"
        :href="proj.href || undefined"
        :target="proj.href ? '_blank' : undefined"
        :rel="proj.href ? 'noopener noreferrer' : undefined"
        class="card"
        :class="{ 'card--dimmed': dimmed && hovered !== proj.title, 'card--hovered': hovered === proj.title }"
        @mouseenter="hovered = proj.title"
        @mouseleave="hovered = null"
      >
        <div class="card__img-wrap" v-if="proj.image">
          <img :src="proj.image" :alt="proj.title" class="card__img" :class="{ 'card__img--portrait': proj.portrait }" />
        </div>
        <div class="card__img-placeholder card__img-placeholder--terminal" v-else-if="proj.placeholder === 'terminal'">
          <span class="card__img-terminal">&gt;_</span>
        </div>
        <div class="card__img-placeholder" v-else>
          <span class="card__img-initials">{{ proj.initials }}</span>
        </div>

        <div class="card__body">
          <div class="card__title">
            {{ proj.title }}
            <svg v-if="proj.href" class="card__arrow" viewBox="0 0 16 16" fill="none">
              <path d="M3.75 8h8.5M8.5 4.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="card__desc">{{ proj.desc }}</p>
          <div class="card__links" v-if="proj.links && proj.links.length">
            <a
              v-for="link in proj.links"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="card__link"
              @click.stop
            >
              <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                <path d="M3.75 8h8.5M8.5 4.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ link.label }}
            </a>
          </div>
          <div class="card__tags">
            <span class="tag" v-for="t in proj.tags" :key="t">{{ t }}</span>
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

interface Project {
  title: string
  initials: string
  href?: string
  image?: string
  placeholder?: 'terminal'
  desc: string
  links?: { label: string; href: string }[]
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'iotrack.live',
    initials: 'IO',
    href: 'https://iotrack.live',
    image: '/images/iotrack_live.png',
    desc: 'Personal project focused on fleet tracking, telemetry processing, and IoT device management across vehicles, assets, and connected devices. Includes live maps, dashboards, reporting, device monitoring, and backend services for telemetry ingestion, messaging, and data processing. Built with an event-driven microservice architecture and designed as a Docker-based, Linux-hosted platform to strengthen hands-on experience with backend services, infrastructure, deployment, and scalable event-driven systems.',
    links: [{ label: 'iotrack.live', href: 'https://iotrack.live' }],
    tags: ['Vue.js', 'TypeScript', 'Go', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Socket.IO', 'Zod', 'Docker', 'SASS', 'Linux'],
  },
  {
    title: 'Teltonika Codec CLI Tools',
    initials: 'TT',
    placeholder: 'terminal',
    desc: 'A pair of lightweight Go CLI tools for parsing raw Teltonika GPS device packets — one for Codec 8 / Codec 8 Extended and one for Codec 12 GPRS command responses. Each accepts a hex string and outputs structured JSON, designed to slot into fleet tracking and IoT ingestion pipelines via Node.js, PHP, or Python subprocess calls.',
    links: [
      { label: 'codec8-cli', href: 'https://github.com/ChrisFarrugiaDev/teltonika-codec8-cli' },
      { label: 'codec12-cli', href: 'https://github.com/ChrisFarrugiaDev/teltonika-codec12-cli' },
    ],
    tags: ['Go', 'CLI', 'IoT', 'GPS', 'Teltonika', 'JSON'],
  },
  {
    title: 'Chess Log',
    initials: 'CL',
    href: 'https://chesslog.chrisfarrugia.dev/',
    image: '/images/chesslog.png',
    desc: 'Personal chess study platform for storing games, organising opening repertoires, and replaying analysed moves through a fast, clean interface. Served through a Go SPA handler and deployed behind Apache as a reverse proxy, with systemd used to keep the application running reliably in production.',
    links: [{ label: 'chesslog.chrisfarrugia.dev', href: 'https://chesslog.chrisfarrugia.dev/' }],
    tags: ['Go', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Apache', 'Linux', 'systemd'],
  },
  {
    title: 'Tetris in Go',
    initials: 'TG',
    href: 'https://github.com/ChrisFarrugiaDev',
    image: '/images/tetris.png',
    portrait: true,
    desc: 'A minimalist, retro-style remake of the classic Tetris game built entirely in Go using the Ebiten game engine — a focused side project for exploring game development and rendering loops in Go.',
    links: [{ label: 'GitHub', href: 'https://github.com/ChrisFarrugiaDev' }],
    tags: ['Go', 'Ebiten'],
  },
  {
    title: 'Portfolio Website v1',
    initials: 'CF',
    href: 'https://chrisfarrugia.dev/v1',
    image: '/images/chris_farrugia_dev.png',
    desc: 'Previous version of my personal portfolio website, built to showcase my work, projects, experience, and technical background. The site was implemented with React, Vite, and SCSS, based on a design inspired by Brittany Chiang\'s portfolio and adapted with my own content, structure, and developer profile.',
    links: [{ label: 'chrisfarrugia.dev/v1', href: 'https://chrisfarrugia.dev/v1' }],
    tags: ['React', 'SCSS', 'Vite'],
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
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;
  text-decoration: none;

  @include respond-to(md) {
    grid-template-columns: 1fr;
  }

  &--dimmed { opacity: 0.4; }

  &--hovered {
    background: $bg-card-hover;
    border-color: $border-hover;
    opacity: 1;
    .card__title { color: $accent; }
    .card__arrow { transform: translate(3px, -3px); opacity: 1; }
  }
}

.card__img-wrap {
  grid-row: 1 / 3;
}

.card__img {
  width: 8rem;
  height: 4.5rem;
  object-fit: cover;
  border-radius: 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &--portrait {
    width: 4rem;
    height: 8.5rem;
    object-fit: cover;
    object-position: center 60%;
    display: block;
    margin: 0.75rem auto 0;

    @include respond-to(md) {
      margin: 0.75rem auto 0 0;
    }
  }
}

.card__img-placeholder {
  width: 8rem;
  height: 4.5rem;
  border-radius: 0.3rem;
  border: 1px solid $border;
  background: rgba(255,255,255,0.03);
  display: flex;
  align-items: center;
  justify-content: center;

  @include respond-to(md) { display: none; }
}

.card__img-initials {
  font-family: $font-mono;
  font-size: 1.1rem;
  font-weight: 600;
  color: $accent;
  letter-spacing: 0.05em;
}

.card__img-placeholder--terminal {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba($accent, 0.2);
}

.card__img-terminal {
  font-family: $font-mono;
  font-size: 1rem;
  font-weight: 600;
  color: $accent;
  opacity: 0.6;
  letter-spacing: 0.05em;

  .card--hovered & { opacity: 1; }
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card__title {
  font-family: $font-display;
  font-size: 0.975rem;
  font-weight: 500;
  color: $text-1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s;
}

.card__arrow {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  opacity: 0;
  transition: transform 0.15s, opacity 0.15s;
}

.card__desc {
  font-size: 0.85rem;
  color: $text-2;
  line-height: 1.65;
}

.card__links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.78rem;
  color: $text-1;
  font-family: $font-display;
  transition: color 0.15s;

  svg { flex-shrink: 0; }

  &:hover { color: $accent; }
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
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
