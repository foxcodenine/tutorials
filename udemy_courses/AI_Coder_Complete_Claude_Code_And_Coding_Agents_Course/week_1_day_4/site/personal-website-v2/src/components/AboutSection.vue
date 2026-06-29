<template>
  <section id="about" class="section">
    <div class="section__label">About</div>

    <div class="about">
      <p class="about__p"> I'm a backend-focused Full-Stack Software Developer with <strong>nearly 4 years of
          professional experience</strong> designing, building, and maintaining production systems for real-world
        environments. </p>
      <p class="about__p"> My work is primarily backend-focused, with strong full-stack capabilities across <strong>Go,
          TypeScript/Node.js, Vue.js, Laravel, PostgreSQL/MySQL, Redis, RabbitMQ, Docker, Linux, and AWS</strong>. I
        focus particularly on backend services, APIs, messaging, microservices, and scalable system architecture. </p>
      <p class="about__p"> I have extensive experience with <strong>IoT integrations</strong> and have built real-time
        systems supporting connected devices, telemetry pipelines, TCP/UDP data processing, and operational workflows in
        live production environments. </p>
      <p class="about__p"> I'm especially interested in <strong>Go, TypeScript, AWS, event-driven systems, and
          cloud-native backend engineering</strong> — building reliable services that connect hardware, software,
        infrastructure, and real-time data flows. </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

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

  @media (max-width: 1024px) {
    display: block;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
}

.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__p {
  font-size: 0.85rem;
  color: $text-2;
  line-height: 1.65;

  strong {
    color: $text-1;
    font-weight: 500;
  }
}
</style>
