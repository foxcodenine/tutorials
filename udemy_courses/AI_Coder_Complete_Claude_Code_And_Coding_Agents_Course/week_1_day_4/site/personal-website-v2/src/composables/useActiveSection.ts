import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0])

  let observer: IntersectionObserver

  const onScroll = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80
    if (nearBottom) {
      activeSection.value = sectionIds[sectionIds.length - 1]
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScroll)
  })

  return { activeSection }
}
