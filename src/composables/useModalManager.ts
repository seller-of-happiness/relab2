import { Component, markRaw } from 'vue'

// Интерфейс для регистрации модального компонента
export interface ModalComponentConfig {
  component: Component
  defaultProps?: Record<string, any>
  defaultSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  persistent?: boolean
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
}

// Реестр зарегистрированных модальных компонентов
const modalRegistry = new Map<string, ModalComponentConfig>()

export const useModalManager = () => {
  // Регистрация нового типа модального окна
  const registerModal = (type: string, config: ModalComponentConfig) => {
    modalRegistry.set(type, {
      ...config,
      component: markRaw(config.component), // markRaw для предотвращения ненужной реактивности
    })
  }

  // Получение конфигурации модального окна
  const getModalConfig = (type: string): ModalComponentConfig | undefined => {
    return modalRegistry.get(type)
  }

  // Проверка, зарегистрирован ли тип модального окна
  const isModalRegistered = (type: string): boolean => {
    return modalRegistry.has(type)
  }

  // Получение всех зарегистрированных типов
  const getRegisteredTypes = (): string[] => {
    return Array.from(modalRegistry.keys())
  }

  // Удаление регистрации модального окна
  const unregisterModal = (type: string): boolean => {
    return modalRegistry.delete(type)
  }

  // Очистка всех регистраций
  const clearRegistry = () => {
    modalRegistry.clear()
  }

  return {
    registerModal,
    getModalConfig,
    isModalRegistered,
    getRegisteredTypes,
    unregisterModal,
    clearRegistry,
  }
}

// Singleton instance для глобального доступа
export const modalManager = useModalManager()
