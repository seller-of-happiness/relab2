<template lang="pug">
div(class="flex flex-col justify-center items-center font-suisse p-2")
  .text(class="text-lg text-center") {{ titleText }}
  template(v-if="textLines && textLines.length")
    .text(class="text-lg font-light text-center mt-4")
      template(v-for="(line, idx) in textLines" :key="idx")
        | {{ line }}
        br
  template(v-if="showHeart")
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>

 

  BaseButton(class="btn-white flex mt-8" @click="handlePrimary")
    span(class="z-10 relative") {{ buttonText }}
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { useModal } from '@/composables/useModal'

interface Props {
  titleText?: string
  textLines?: string[]
  buttonText?: string
  buttonLink?: string
  buttonTarget?: string
  showHeart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  titleText: 'Готово!',
  textLines: () => ['Ваше сообщение отправлено. Мы скоро свяжемся.'],
  buttonText: 'Ок',
  buttonLink: '',
  buttonTarget: '_blank',
  showHeart: true,
})

const { closeModal } = useModal()

const handlePrimary = () => {
  if (props.buttonLink) {
    window.open(props.buttonLink, props.buttonTarget)
  }
  closeModal()
}

const { titleText, textLines, buttonText, showHeart } = props
</script>
<style lang="scss"></style>
