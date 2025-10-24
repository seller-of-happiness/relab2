<template lang="pug">
section(class="section-one w-full h-full pb-[27px] tb:pb-[90px]" v-if="userStore.user")
  .flex(class="pt-16 md:pt-[170px] xl:pt-[290px] flex-col md:flex-row")
    .left(class="w-full md:w-[63.5%]")
      .title(class="fluid-font uppercase" style="--font-min: 28; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Проведу по
        br
        | wellness-треку
      .text(class="fluid-font font-light mt-1.5" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") к вашим целям по здоровью

      BaseButton(class="btn-orange mt-[97px] xl:mt-[51px] hidden md:block" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }" @click="openAuthModal()")
        span(class="z-10 relative") Как это работает?

      div(class="grid-cols-3 mt-16 max-w-[805px] gap-10 hidden md:grid")
        .item(class="max-w-[205px]")
          .icon
            svg(viewBox="0 0 23 33" class="max-w-[23px]")
              use(href="/src/assets/images/img-svg.svg#section-1-1")
          .text(class="mt-5") Наполнить клетки жизнью и энергией
        .item(class="max-w-[230px]")
          .icon
            svg(viewBox="0 0 33 33" class="max-w-[33px]")
              use(href="/src/assets/images/img-svg.svg#section-1-2")
          .text(class="mt-5") Укрепить естественную защиту
        .item(class="max-w-[170px]")
          .icon
            svg(viewBox="0 0 33 33" class="max-w-[33px]")
              use(href="/src/assets/images/img-svg.svg#section-1-3")
          .text(class="mt-5") Мягко очистить и обновить
      
    .right(class="mt-6 md:-mt-[100px] xl:-mt-[150px] w-full md:w-[32%] md:mr-[8.5%] relative pb-5 md:pb-0")
      SectionOneSvg
      div(class="flex md:block items-center justify-between mt-7 md:mt-0")
        .text(class="text-black text-left md:text-center fluid-font mt-0 xl:mt-[50px] md:ml-[50%] md:-translate-x-1/2" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") {{ userStore.user.name }} {{ userStore.user.family }}

      div(class="grid-cols-2 md:grid-cols-3 mt-16 max-w-full md:max-w-[805px] gap-10 grid md:hidden")
        .item(class="max-w-[205px]")
          .icon
            svg(viewBox="0 0 23 33" class="max-w-[23px]")
              use(href="/src/assets/images/img-svg.svg#section-1-1")
          .text(class="mt-5") Наполнить клетки жизнью и энергией
        .item(class="max-w-[230px]")
          .icon
            svg(viewBox="0 0 33 33" class="max-w-[33px]")
              use(href="/src/assets/images/img-svg.svg#section-1-2")
          .text(class="mt-5") Укрепить естественную защиту
        .item(class="max-w-[170px]")
          .icon
            svg(viewBox="0 0 33 33" class="max-w-[33px]")
              use(href="/src/assets/images/img-svg.svg#section-1-3")
          .text(class="mt-5") Мягко очистить и обновить
        .item
          .icon(class="h-[33px]")
          BaseButton(class="btn-orange block md:hidden mt-5" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }" @click="openAuthModal()")
            span(class="z-10 relative") Как это работает?
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionOneSvg from '@/components/ui/SectionOneSvg.vue'
import { useUserStore } from '@/store/userStore'
import { useModal } from '@/composables/useModal'

const userStore = useUserStore()
const { openModal } = useModal()

const openAuthModal = () => {
  openModal({ type: 'auth' })
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped lang="scss">
.section-one {
  background: url(/src/assets/images/section-1-bg.webp) no-repeat;
  background-size: cover;
  background-position: right;

  @media (max-width: 980px) {
    background: url(/src/assets/images/section-1-bg-reverse.webp) no-repeat;
    background-position: left;
    background-size: cover;
  }
}
</style>
