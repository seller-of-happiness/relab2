<template lang="pug">
header(
  :class="['px-4 md:px-[26px] xl:px-[35px] flex items-center justify-between z-[100] w-full transition-all duration-300', isScrolled ? 'fixed top-0 h-[70px] bg-white backdrop-blur-sm' : 'absolute h-[50px] xl:h-[106px]']")
  div(class="w-full max-w-[36px] md:max-w-[55px] xl:max-w-[81px]")
    svg(viewBox="0 0 81 25" :class="['transition-all duration-300', isScrolled ? 'max-w-[174px] text-black' : 'max-w-[174px] xl:max-w-[276px] text-black']")
      use(href="/src/assets/images/img-svg.svg#logo-header")
  svg(viewBox="0 0 134 32" class="max-w-[56px] md:max-w-[130px]")
    use(href="/src/assets/images/img-svg.svg#logo-coral")
  BaseButton(class="btn-text fluid-font font-light md:-mt-[15px]" style="--font-min: 12; --font-max: 22;" @click="openAuthModal()")
    span(class="z-10 relative") Связаться →
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useModal } from '@/composables/useModal'

const { openModal } = useModal()

const openAuthModal = () => {
  openModal({ type: 'auth' })
}
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
