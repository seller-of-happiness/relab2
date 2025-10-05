import { modalManager } from '@/composables/useModalManager'
import { setModalConfigGetter } from '@/composables/useModal'

// Импортируем компоненты модальных окон
import ModalAuth from '@/components/auth/ModalAuth.vue'
import ModalCongratulations from '@/components/ui/ModalCongratulations.vue'

// Регистрируем все модальные окна в системе
export const setupModals = () => {
  // Устанавливаем связь между useModal и useModalManager
  setModalConfigGetter(modalManager.getModalConfig)
  // Регистрация модального окна авторизации
  modalManager.registerModal('auth', {
    component: ModalAuth,
    defaultSize: 'xl',
    closeOnBackdrop: true,
    closeOnEscape: true,
    persistent: false,
  })

  modalManager.registerModal('congratulations', {
    component: ModalCongratulations,
    defaultSize: 'sm',
    closeOnBackdrop: true,
    closeOnEscape: true,
    persistent: false,
    showCloseButton: false,
  })
}

// Вспомогательные функции для быстрого вызова популярных модальных окон
export const modalHelpers = {
  // Открыть модальное окно авторизации
  openAuth: (data?: any) => {
    const { openModal } = require('@/composables/useModal').useModal()
    return openModal({
      type: 'auth',
      data,
    })
  },
}
