import { ref, onMounted, onBeforeUnmount } from 'vue'

interface UseAnimateOnScrollOptions {
  animation?: string // название анимации animate.css
  threshold?: number // процент видимости
  once?: boolean // запускать один раз или при каждом появлении
}

export const useAnimateOnScroll = (options: UseAnimateOnScrollOptions = {}) => {
  const {
    animation = 'animate__fadeInUp',
    threshold = 0.2,
    once = true,
  } = options

  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true

            if (once) {
              observer?.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  const classes = () => {
    return isVisible.value ? `animate__animated ${animation}` : ''
  }

  return {
    target,
    isVisible,
    classes,
  }
}
