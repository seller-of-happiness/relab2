import { ref, computed, watch, Component } from 'vue'

// Для избежания циклических импортов, передаем getModalConfig как параметр
let getModalConfigFn: ((type: string) => any) | null = null

export const setModalConfigGetter = (fn: (type: string) => any) => {
  getModalConfigFn = fn
}

export interface ModalOptions {
  id?: string
  type: string
  component?: Component
  props?: Record<string, any>
  data?: any
  persistent?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
}

export interface ModalInstance extends ModalOptions {
  id: string
  isOpen: boolean
  zIndex: number
}

// Стек модальных окон
const modalStack = ref<ModalInstance[]>([])
const baseZIndex = 1000

// Счетчик для генерации уникальных ID
let modalIdCounter = 0

const generateModalId = (): string => {
  return `modal-${++modalIdCounter}-${Date.now()}`
}

export const useModal = () => {
  const activeModals = computed(() =>
    modalStack.value.filter((modal) => modal.isOpen)
  )
  const topModal = computed(
    () => activeModals.value[activeModals.value.length - 1]
  )
  const hasOpenModals = computed(() => activeModals.value.length > 0)

  const openModal = (options: ModalOptions): string => {
    const modalOptions: ModalOptions = options

    const modalId = modalOptions.id || generateModalId()
    const zIndex = baseZIndex + modalStack.value.length

    // Получаем настройки по умолчанию из менеджера модальных окон
    const defaultConfig = getModalConfigFn?.(modalOptions.type)

    const modalInstance: ModalInstance = {
      id: modalId,
      type: modalOptions.type,
      component: modalOptions.component || defaultConfig?.component,
      props: modalOptions.props || defaultConfig?.defaultProps || {},
      data: modalOptions.data,
      persistent: modalOptions.persistent ?? defaultConfig?.persistent ?? false,
      size: modalOptions.size || defaultConfig?.defaultSize || 'md',
      closeOnBackdrop:
        modalOptions.closeOnBackdrop ?? defaultConfig?.closeOnBackdrop ?? true,
      closeOnEscape:
        modalOptions.closeOnEscape ?? defaultConfig?.closeOnEscape ?? true,
      showCloseButton:
        modalOptions.showCloseButton ?? defaultConfig?.showCloseButton ?? true,
      isOpen: true,
      zIndex,
    }

    // Проверяем, не открыта ли уже модалка с таким ID
    const existingIndex = modalStack.value.findIndex(
      (modal) => modal.id === modalId
    )
    if (existingIndex !== -1) {
      modalStack.value[existingIndex] = modalInstance
    } else {
      modalStack.value.push(modalInstance)
    }

    // Блокируем скролл только при первой модалке
    if (activeModals.value.length === 1) {
      document.body.style.overflow = 'hidden'
    }

    return modalId
  }

  const closeModal = (modalId?: string) => {
    if (modalId) {
      // Закрываем конкретную модалку
      const modalIndex = modalStack.value.findIndex(
        (modal) => modal.id === modalId
      )
      if (modalIndex !== -1) {
        modalStack.value[modalIndex].isOpen = false
        // Удаляем из стека через некоторое время (для анимации)
        setTimeout(() => {
          modalStack.value.splice(modalIndex, 1)
        }, 300)
      }
    } else {
      // Закрываем верхнюю модалку
      if (topModal.value) {
        topModal.value.isOpen = false
        // Удаляем из стека через некоторое время (для анимации)
        setTimeout(() => {
          const index = modalStack.value.findIndex(
            (modal) => modal.id === topModal.value.id
          )
          if (index !== -1) {
            modalStack.value.splice(index, 1)
          }
        }, 300)
      }
    }

    // Восстанавливаем скролл только когда все модалки закрыты
    setTimeout(() => {
      if (activeModals.value.length === 0) {
        document.body.style.overflow = ''
      }
    }, 100)
  }

  const closeAllModals = () => {
    modalStack.value.forEach((modal) => {
      modal.isOpen = false
    })
    setTimeout(() => {
      modalStack.value.length = 0
      document.body.style.overflow = ''
    }, 300)
  }

  const getModal = (modalId: string): ModalInstance | undefined => {
    return modalStack.value.find((modal) => modal.id === modalId)
  }

  const isModalOpen = (modalId: string): boolean => {
    const modal = getModal(modalId)
    return modal?.isOpen || false
  }

  // Закрытие модалки по клавише Escape
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && topModal.value?.closeOnEscape) {
      closeModal()
    }
  }

  // Управление обработчиком Escape
  watch(hasOpenModals, (hasModals) => {
    if (hasModals) {
      document.addEventListener('keydown', handleEscape)
    } else {
      document.removeEventListener('keydown', handleEscape)
    }
  })

  return {
    // Computed
    activeModals,
    topModal,
    hasOpenModals,

    // Methods
    openModal,
    closeModal,
    closeAllModals,
    getModal,
    isModalOpen,
  }
}
