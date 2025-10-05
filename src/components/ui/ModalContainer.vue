<template lang="pug">
div
  template(v-for="modal in activeModals" :key="modal.id")
    BaseModal(
      :is-open="modal.isOpen"
      :close-on-backdrop="modal.closeOnBackdrop"
      :size="modal.size"
      :z-index="modal.zIndex"
      :show-close-button="modal.showCloseButton"
      @close="() => closeModal(modal.id)"
    )
      component(
        v-if="getModalComponent(modal.type)"
        :is="getModalComponent(modal.type)"
        v-bind="modal.props"
        :modal-data="modal.data"
        :modal-id="modal.id"
        @close="() => closeModal(modal.id)"
      )
      div(v-else class="p-6")
        h3(class="text-lg font-semibold text-gray-900 mb-4") Неизвестный тип модального окна
        p(class="text-gray-600 mb-4") Тип "{{ modal.type }}" не зарегистрирован в системе модальных окон.
        button(
          class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          @click="() => closeModal(modal.id)"
        ) Закрыть
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useModal } from '@/composables/useModal'
import { useModalManager } from '@/composables/useModalManager'
import BaseModal from './BaseModal.vue'

const { activeModals, closeModal } = useModal()
const { getModalConfig } = useModalManager()

// Получаем компонент для конкретного типа модального окна
const getModalComponent = (type: string) => {
  const config = getModalConfig(type)
  return config?.component
}
</script>
