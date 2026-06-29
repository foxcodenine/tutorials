# SPEC.md — personal-website-v2

Current state of all content and configuration. Use this as the source of truth for what the site currently says and shows.

---

## Left Panel

**Name:** Christopher Farrugia
**Role:** Backend & Cloud Software Engineer
**Tagline:** I build scalable software — from web platforms to backend services and Linux-powered microservices.
**Stack line:** Go · TypeScript · AWS · Linux · Microservices

**Nav links:**
- About → `#about`
- Experience → `#experience`
- Certifications → `#certifications`
- Side Projects → `#projects`
- CV & Contact → `#contact`

**Social links:** GitHub (ChrisFarrugiaDev), LinkedIn

---

## About Section (`#about`)

4 paragraphs covering:
- Backend-focused full-stack developer, nearly 4 years, IoT fleet-management platform
- Stack: Go, TypeScript/Node.js, Vue.js, Laravel, PostgreSQL/MySQL, Redis, RabbitMQ, Kafka, Docker, Linux
- Real-time telemetry pipelines, TCP/UDP, microservices, event-driven systems
- AWS Certified Solutions Architect – Associate, cloud-native direction

---

## Experience Section (`#experience`)

**Software Developer · IoT Solutions Malta**
September 2022 – Present

- Sole → lead developer behind fleet-management platform: 600+ companies, 3,000+ vehicles
- Real-time telemetry pipelines (Teltonika trackers, parking sensors, level sensors, IoT Pro devices)
- TCP/UDP parsers → RabbitMQ / Kafka → Redis caching
- IoT Pro sensor integration: temperature, humidity, pressure, radar, generator — FOTA, uplinks/downlinks, ThingsBoard
- Linux server admin, Docker deployments, SSL, monitoring, incident response
- Vue.js frontends for fleet dashboard, device management, reporting

Cards render as `<div>` (not `<a>`) — no external link.

---

## Certifications Section (`#certifications`)

| Cert | Credly link |
|------|-------------|
| AWS Certified Solutions Architect – Associate | https://www.credly.com/badges/7d46d91e-157c-4f87-9332-d763a7e7da39 |
| LPIC-1 Linux Administrator | https://www.credly.com/badges/d1a932e2-effc-4df9-842c-dda349770ccd |
| Zend Certified Engineer PHP 7.1 | No link |
| MQF Level 5 VET Award | No link |

AWS and LPIC-1 cards are `<a>` links. Others are `<div>`.

---

## Projects Section (`#projects`)

### 1. iotrack.live
- **href:** https://iotrack.live
- **image:** `/images/iotrack_live.png`
- **desc:** Personal project focused on fleet tracking, telemetry processing, and IoT device management across vehicles, assets, and connected devices. Includes live maps, dashboards, reporting, device monitoring, and backend services for telemetry ingestion, messaging, and data processing. Built with an event-driven microservice architecture and designed as a Docker-based, Linux-hosted platform to strengthen hands-on experience with backend services, infrastructure, deployment, and scalable event-driven systems.
- **tags:** Vue.js, TypeScript, Go, Node.js, Fastify, Prisma, PostgreSQL, Redis, RabbitMQ, Socket.IO, Zod, Docker, SASS, Linux
- **links:** iotrack.live

### 2. Teltonika Codec CLI Tools
- **href:** none (renders as `<div>`)
- **placeholder:** `terminal` (shows `>_` box)
- **desc:** A pair of lightweight Go CLI tools for parsing raw Teltonika GPS device packets — one for Codec 8 / Codec 8 Extended and one for Codec 12 GPRS command responses. Each accepts a hex string and outputs structured JSON, designed to slot into fleet tracking and IoT ingestion pipelines via Node.js, PHP, or Python subprocess calls.
- **tags:** Go, CLI, IoT, GPS, Teltonika, JSON
- **links:** codec8-cli (GitHub), codec12-cli (GitHub)

### 3. Chess Log
- **href:** https://chesslog.chrisfarrugia.dev/
- **image:** `/images/chesslog.png`
- **desc:** Personal chess study platform for storing games, organising opening repertoires, and replaying analysed moves through a fast, clean interface. Served through a Go SPA handler and deployed behind Apache as a reverse proxy, with systemd used to keep the application running reliably in production.
- **tags:** Go, Vue 3, TypeScript, PostgreSQL, Apache, Linux, systemd
- **links:** chesslog.chrisfarrugia.dev

### 4. Tetris in Go
- **href:** https://github.com/ChrisFarrugiaDev
- **image:** `/images/tetris.png`
- **portrait:** true (taller crop, `object-position: center 60%`)
- **desc:** A minimalist, retro-style remake of the classic Tetris game built entirely in Go using the Ebiten game engine — a focused side project for exploring game development and rendering loops in Go.
- **tags:** Go, Ebiten
- **links:** GitHub

### 5. Portfolio Website v1
- **href:** https://chrisfarrugia.dev/v1
- **image:** `/images/chris_farrugia_dev.png`
- **desc:** Previous version of my personal portfolio website, built to showcase my work, projects, experience, and technical background. The site was implemented with React, Vite, and SCSS, based on a design inspired by Brittany Chiang's portfolio and adapted with my own content, structure, and developer profile.
- **tags:** React, SCSS, Vite
- **links:** chrisfarrugia.dev/v1

---

## Contact Section (`#contact`)

Compact link list with label + description grid (`8rem 1fr`):

| Label | Description |
|-------|-------------|
| View CV | chrisfarrugia.dev/cv |
| Email | chris12aug@yahoo.com |
| LinkedIn | linkedin.com/in/christopher-farrugia-3a51184b |
| GitHub | github.com/foxcodenine |
| Portfolio | ChrisFarrugiaDev |

---

## TechIcons (LeftPanel)

Icons in order (21 total):
javascript, typescript, vue, react (noBorder), sass, node-js, php, laravel (noBorder), go, mysql, postgresql, redis (noBorder), mongodb, rabbitmq, kafka, docker (noBorder), git, apache, bash, linux (noBorder), aws

---

## Favicon

SVG: dark rounded square + green corner brackets + "CF" monogram in `#7effa6`.

---

## Meta / OG tags (index.html)

- **title:** Christopher Farrugia · Full-Stack Engineer
- **og:title:** Christopher Farrugia — Backend-Focused Full-Stack Engineer
- **og:description:** Backend engineer specialising in Go, TypeScript, AWS, Linux, microservices, and IoT. Based in Malta.
- **og:image:** /profile.jpeg
- **twitter:card:** summary_large_image
