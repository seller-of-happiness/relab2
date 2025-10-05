import type { Directive } from 'vue'

interface AnimateOptions {
  animation?: string
  delay?: string
  once?: boolean
  threshold?: number
}

export const vAnimateOnScroll: Directive<
  HTMLElement,
  string | AnimateOptions | undefined
> = (el, binding) => {
  let options: AnimateOptions = {}

  if (typeof binding.value === 'string') {
    options.animation = binding.value
  } else if (typeof binding.value === 'object') {
    options = binding.value
  }

  const {
    animation = 'animate__fadeInUp',
    delay,
    once = true,
    threshold = 0.2,
  } = options

  el.style.opacity = '0'

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.classList.add('animate__animated', animation)

          if (delay) el.classList.add(delay)

          if (once) observer.unobserve(el)
        } else if (!once) {
          el.style.opacity = '0'
          el.classList.remove('animate__animated', animation)
          if (delay) el.classList.remove(delay)
        }
      })
    },
    { threshold }
  )

  observer.observe(el)
}
