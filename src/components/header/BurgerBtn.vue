<template lang="pug">
//- .right(class="mr-[7%] hidden tb:block")
//-   svg(width="120" height="22" viewBox="0 0 120 22" class="text-white max-w-24 xl:max-w-fit")
//-     use(href="/src/assets/images/img-svg.svg#logo-coral")
button.fixed.flex.items-center.justify-center.cursor-pointer(class="w-4 h-3.5 z-50 xl:top-[34px] right-4 md:right-[26px] xl:right-[34px]" :class="isScrolled ? 'scrolled' : ''" type="button" :aria-expanded="headerStore.isOpen" aria-label="Toggle menu" @click="headerStore.isOpen = !headerStore.isOpen")
  span(class="sr-only") Toggle menu
  span(class="block absolute left-0 top-1/2 h-0.5 w-4 rounded transition duration-300" :class="headerStore.isOpen ? 'translate-y-0 rotate-45 bg-black' : '-translate-y-1 bg-white'")
  span(class="block absolute left-0 top-1/2 h-0.5 w-4 bg-white rounded transition duration-300" :class="headerStore.isOpen ? 'opacity-0' : 'opacity-100'")
  span(class="block absolute left-0 top-1/2 h-0.5 w-4 rounded transition duration-300" :class="headerStore.isOpen ? 'translate-y-0 -rotate-45 bg-black' : 'translate-y-1 bg-white'")
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/store/header'

const headerStore = useHeaderStore()

interface Props {
  isScrolled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isScrolled: false,
})
</script>

<style lang="scss" scoped>
button {
  transition: all 0.35s;
  &.scrolled {
    top: 17px !important;
    span {
      background-color: #282828 !important;
    }
  }
}
</style>
