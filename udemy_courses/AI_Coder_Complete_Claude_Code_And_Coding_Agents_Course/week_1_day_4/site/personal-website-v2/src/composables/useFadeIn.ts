import { onMounted, onUnmounted } from 'vue'

export function useFadeIn() {
  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
