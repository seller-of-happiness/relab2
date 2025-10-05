import { scrollToSection, type ScrollToSectionOptions } from '@/utils/scroll'

/**
 * Композабл для работы с прокруткой
 */
export const useScroll = () => {
  /**
   * Прокрутка к секции
   */
  const scrollTo = (options: ScrollToSectionOptions) => {
    scrollToSection(options)
  }

  /**
   * Прокрутка к секции с простыми параметрами
   */
  const scrollToAnchor = (anchor: string, offset = 0) => {
    scrollToSection({ anchor, offset })
  }

  /**
   * Прокрутка наверх страницы
   */
  const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior,
    })
  }

  /**
   * Проверка, виден ли элемент в viewport
   */
  const isElementInViewport = (selector: string): boolean => {
    const element = document.querySelector(selector)
    if (!element) return false

    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  /**
   * Получение позиции элемента относительно верха страницы
   */
  const getElementPosition = (selector: string): number => {
    const element = document.querySelector(selector)
    if (!element) return 0

    return element.getBoundingClientRect().top + window.pageYOffset
  }

  return {
    scrollTo,
    scrollToAnchor,
    scrollToTop,
    isElementInViewport,
    getElementPosition,
  }
}
