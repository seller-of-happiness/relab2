/**
 * Утилиты для работы с прокруткой страницы
 */

export interface ScrollToSectionOptions {
  /** Селектор элемента для прокрутки */
  anchor: string
  /** Функция для закрытия меню (опционально) */
  closeMenu?: () => void
  /** Задержка перед прокруткой в мс (по умолчанию 100) */
  delay?: number
  /** Отступ сверху в пикселях (для фиксированного header) */
  offset?: number
  /** Поведение прокрутки (по умолчанию 'smooth') */
  behavior?: ScrollBehavior
  /** Выравнивание блока (по умолчанию 'start') */
  block?: ScrollLogicalPosition
}

/**
 * Плавная прокрутка к секции с опциональным закрытием меню
 */
export const scrollToSection = (options: ScrollToSectionOptions) => {
  const {
    anchor,
    closeMenu,
    delay = 100,
    offset = 0,
    behavior = 'smooth',
    block = 'start',
  } = options

  // Закрываем меню если функция передана
  if (closeMenu) {
    closeMenu()
  }

  // Задержка для завершения анимации закрытия меню
  setTimeout(() => {
    const element = document.querySelector(anchor)

    if (!element) {
      console.warn(`Element with selector "${anchor}" not found`)
      return
    }

    if (offset > 0) {
      // Прокрутка с учетом offset (для фиксированного header)
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: elementPosition,
        behavior,
      })
    } else {
      // Простая прокрутка без offset
      element.scrollIntoView({
        behavior,
        block,
      })
    }
  }, delay)
}

/**
 * Простая прокрутка к элементу без дополнительных опций
 */
export const simpleScrollTo = (anchor: string, offset = 0) => {
  scrollToSection({ anchor, offset })
}

/**
 * Прокрутка к элементу с закрытием меню (для header меню)
 */
export const scrollToSectionWithMenuClose = (
  anchor: string,
  closeMenu: () => void,
  offset = 0
) => {
  scrollToSection({ anchor, closeMenu, offset })
}
