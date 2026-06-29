<template>
  <div class="tech" ref="techRef">
    <span
      ref="tooltipRef"
      class="tech__tooltip"
      :class="{ 'tech__tooltip--visible': hoveredLabel }"
      :style="{ left: tooltipLeft }"
    >{{ hoveredLabel }}</span>
    <ul class="tech__list">
      <li
        v-for="icon in icons"
        :key="icon.id"
        class="tech__item"
        :class="icon.noBorder ? 'tech__item--no-border' : ''"
        @mouseenter="onEnter($event, icon.label)"
        @mouseleave="hoveredLabel = ''"
      >
        <svg class="tech__svg">
          <use :href="`/svg/sprite.svg#icon-${icon.id}`" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const techRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const hoveredLabel = ref('')
const tooltipLeft = ref('0px')

async function onEnter(e: MouseEvent, label: string) {
  hoveredLabel.value = label
  await nextTick()
  const item = e.currentTarget as HTMLElement
  const container = techRef.value
  const tooltip = tooltipRef.value
  if (!container || !tooltip) return
  const itemRect = item.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()
  const tooltipHalfW = tooltip.offsetWidth / 2
  const centerX = itemRect.left + itemRect.width / 2 - containerRect.left
  const clamped = Math.max(tooltipHalfW, Math.min(containerRect.width - tooltipHalfW, centerX))
  tooltipLeft.value = `${clamped}px`
}

const icons = [
  { id: 'javascript',  label: 'JavaScript',  noBorder: false },
  { id: 'typescript',  label: 'TypeScript',  noBorder: false },
  { id: 'vue',         label: 'Vue.js',      noBorder: false },
  { id: 'react',       label: 'React',       noBorder: true  },
  { id: 'sass',        label: 'SASS',        noBorder: false },
  { id: 'node-js',     label: 'Node.js',     noBorder: false },
  { id: 'php',         label: 'PHP',         noBorder: false },
  { id: 'laravel',     label: 'Laravel',     noBorder: true  },
  { id: 'go',          label: 'Go',          noBorder: false },
  { id: 'mysql',       label: 'MySQL',       noBorder: false },
  { id: 'postgresql',  label: 'PostgreSQL',  noBorder: false },
  { id: 'redis',       label: 'Redis',       noBorder: true  },
  { id: 'mongodb',     label: 'MongoDB',     noBorder: false },
  { id: 'rabbitmq',    label: 'RabbitMQ',    noBorder: false },
  { id: 'kafka',       label: 'Kafka',       noBorder: false },
  { id: 'docker',      label: 'Docker',      noBorder: true  },
  { id: 'git',         label: 'Git',         noBorder: false },
  { id: 'apache',      label: 'Apache',      noBorder: false },
  { id: 'bash',        label: 'Bash',        noBorder: false },
  { id: 'linux',       label: 'Linux',       noBorder: true  },
  { id: 'aws',         label: 'AWS',         noBorder: false },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.tech {
  position: relative;
  padding-top: 1.1rem;
}

.tech__tooltip {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  font-family: $font-mono;
  font-size: 0.55rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: rgba($text-2, 0.55);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;

  &--visible {
    opacity: 1;
  }
}

.tech__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1.7rem, 1fr));
  gap: 0.35rem;
  align-items: center;
}

.tech__item {
  width: 1.5rem;
  height: 1.5rem;
  padding: 2px;
  border: 0.5px solid $text-2;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s, border-color 0.2s;

  &:hover {
    opacity: 1;
    border-color: $accent;
  }

  &--no-border {
    border: none;
    width: 1.75rem;
    height: 1.75rem;
    padding: 0;
    margin: -0.15rem;
  }
}

.tech__svg {
  width: 100%;
  height: 100%;
  fill: $text-2;
  color: $text-2;

  .tech__item:hover & {
    fill: $text-1;
    color: $text-1;
  }
}
</style>
