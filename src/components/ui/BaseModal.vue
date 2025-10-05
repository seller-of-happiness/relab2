<template lang="pug">
Teleport(to="body")
  div(
    class="fixed inset-0 flex items-center justify-center p-4"
    :class="{ 'pointer-events-auto': isOpen, 'pointer-events-none': !isOpen }"
    :aria-hidden="!isOpen"
    :style="{ zIndex: zIndex }"
    @click="handleBackdropClick"
  )
    div(class="absolute inset-0 modal-backdrop bg-black/30" :class="{ 'backdrop-visible': backdropVisible }")
    Transition(name="modal-panel" appear)
      div(
        v-show="showPanel"
        ref="modalContent"
        class="relative modal-panel bg-white mx-auto rounded-3xl shadow-xl transform transition-all p-8"
        :class="[modalSizeClasses, modalClasses]"
        @click.stop
      )
        button(
          v-if="showCloseButton"
          class="absolute close-btn top-8 right-8 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          @click="emit('close')"
          type="button"
          aria-label="Закрыть модальное окно"
        )
          svg(
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-black hover:text-gray-700 transition-colors"
          )
            path(
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            )
        slot
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

interface Props {
  isOpen: boolean
  closeOnBackdrop?: boolean
  modalClasses?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  zIndex?: number
  showCloseButton?: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  closeOnBackdrop: true,
  modalClasses: '',
  size: 'md',
  zIndex: 1000,
  showCloseButton: true,
})

const emit = defineEmits<Emits>()

const modalContent = ref<HTMLElement>()
const showPanel = ref(false)
const backdropVisible = ref(false)

watch(
  () => props.isOpen,
  async (isOpening) => {
    if (isOpening) {
      backdropVisible.value = true
      await nextTick()
      showPanel.value = true
    } else {
      showPanel.value = false
      // После завершения анимации панели скрываем фон
      setTimeout(() => {
        backdropVisible.value = false
      }, 360)
    }
  },
  { immediate: true }
)

// Динамические классы для размеров модального окна
const modalSizeClasses = computed(() => {
  const sizeClasses = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-md',
    lg: 'w-full max-w-2xl',
    xl: 'w-full max-w-[1680px]',
    full: 'w-full h-full max-w-none rounded-none',
  }
  return sizeClasses[props.size]
})

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    emit('close')
  }
}
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-backdrop {
  opacity: 0;
  transition: opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  will-change: opacity, backdrop-filter;
  transform: translateZ(0);
}

.backdrop-visible {
  opacity: 1;
}

.modal-backdrop {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  will-change: opacity, backdrop-filter;
  transform: translateZ(0);
}

.modal-panel-enter-active,
.modal-panel-leave-active {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.modal-panel-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

.modal-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .modal-enter-active .modal-backdrop,
  .modal-leave-active .modal-backdrop,
  .modal-enter-active .modal-panel,
  .modal-leave-active .modal-panel {
    transition: none !important;
  }
}
</style>
