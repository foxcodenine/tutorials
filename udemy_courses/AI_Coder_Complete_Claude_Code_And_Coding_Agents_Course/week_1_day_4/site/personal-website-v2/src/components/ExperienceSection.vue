<template>
  <section id="experience" class="section">
    <div class="section__label">Experience</div>

    <div class="cards" @mouseenter="dimAll" @mouseleave="resetAll">
      <div v-for="job in jobs" :key="job.company" class="card"
        :class="{ 'card--dimmed': dimmed && hoveredCard !== job.company, 'card--hovered': hoveredCard === job.company }"
        @mouseenter="hoveredCard = job.company" @mouseleave="hoveredCard = null">

        <div class="card__dates">{{ job.dates }}</div>
        <div class="card__body">
          <div class="card__title">
            {{ job.role }} · {{ job.company }}
          </div>
          <p v-for="(desc, i) in job.descriptions" :key="i" class="card__desc">{{ desc }}</p>
          <div class="card__tags">
            <span class="tag" v-for="t in job.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dimmed = ref(false)
const hoveredCard = ref<string | null>(null)
const dimAll = () => { dimmed.value = true }
const resetAll = () => { dimmed.value = false; hoveredCard.value = null }

const jobs = [
  {
    company: 'IoT Solutions Malta',
    role: 'Software Developer',
    dates: 'Sep 2022 — Present',
    descriptions: [
      'Software Developer and, for the first two and a half years, the sole developer responsible for designing, building, and scaling the company\'s production IoT fleet-management platform, used by 600+ companies and 3,000+ vehicles. Still the main developer behind the fleet-tracking platform, working across system architecture, backend services, microservices, frontend integration, and Linux-based infrastructure.',

      'Built real-time data pipelines for connected devices including Teltonika trackers, custom parking sensors, level sensors, and in-house IoT Pro devices. Developed Linux-based parsers to receive TCP/UDP payloads, decode telemetry, and route structured data through RabbitMQ and Kafka, with Redis used for caching and synchronisation.',

      'Worked on the cloud integration of the in-house IoT Pro sensor line, covering temperature, humidity, pressure, radar, and generator sensors. Built parsers, handled FOTA updates, downlinks, and uplinks, and integrated devices with ThingsBoard and the company\'s tracking platform using REST APIs, RabbitMQ, and Kafka.',

      'Contributed to external projects including machine data collection for the Malta Gaming Authority and a Laravel dashboard for Marine Hound to visualise harbour-emission data. Also managed Linux servers, Docker deployments, SSL configuration, system monitoring, and production troubleshooting to help keep production systems reliable, scalable, and secure.',
    ],
    tags: ['Go', 'TypeScript', 'Node.js', 'Vue.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'Kafka', 'Docker', 'Linux', 'TCP/UDP', 'ThingsBoard', 'IoT'],
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
    gap: 0.5rem;
  }

  &--dimmed {
    opacity: 0.4;
  }

  &--hovered {
    background: $bg-card-hover;
    border-color: $border-hover;
    opacity: 1;

    .card__title {
      color: $accent;
    }

    .card__arrow {
      transform: translate(3px, -3px);
      opacity: 1;
    }
  }
}

.card__dates {
  padding-top: 0.2rem;
  font-family: $font-mono;
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  color: $text-2;
  text-transform: uppercase;
  white-space: nowrap;

  @include respond-to(md) {
    white-space: normal;
  }
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
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
