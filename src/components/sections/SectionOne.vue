<template lang="pug">
section(class="section-one w-full h-full pb-[27px] xl:pb-10" v-if="userStore.user")
  .flex(class="pt-16 md:pt-[278px] xl:pt-[420px] flex-col md:flex-row")
    .left(class="w-full md:w-[63.5%]")
      .title(class="fluid-font uppercase" style="--font-min: 28; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Проведу по
        br
        | wellness-треку
      .text(class="fluid-font font-light mt-1.5" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") к вашим целям по здоровью

      .flex(class="mt-5 md:mt-[80px] xl:mt-[138px] gap-0 xl:gap-[13.5%] flex-col md:flex-row")
        .text(class="fluid-font font-light max-w-[290px] xl:max-w-[345px]" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-09s' }") Персонализированный подход к&nbsp;осознанной заботе о&nbsp;себе
        .text(class="fluid-font font-light mt-5 md:mt-0 max-w-[245px] xl:max-w-[290px]" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-06s' }") Система из трех этапов с&nbsp;моей личной поддержкой
      
      BaseButton(class="btn-orange mt-[97px] xl:mt-[150px] hidden md:block" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }" @click="openAuthModal()")
        span(class="z-10 relative") Как это работает? 

    .right(class="mt-6 md:-mt-[100px] xl:-mt-[150px] w-full md:w-[32%] md:mr-[8.5%] relative pb-5 md:pb-0")
      SectionOneSvg
      div(class="flex md:block items-center justify-between mt-7 md:mt-0")
        BaseButton(class="btn-orange block md:hidden" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }")
          span(class="z-10 relative") Как это работает?
        .text(class="text-black md:text-white text-center fluid-font relative md:absolute md:bottom-5 md:ml-[50%] md:-translate-x-1/2" style="--font-min: 12; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") {{ userStore.user.name }} {{ userStore.user.family }}
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
</script>

<style scoped lang="scss">
.section-one {
  background: url(/src/assets/images/section-1-bg.jpg) no-repeat;
  background-size: cover;
  background-position: right;
}
</style>
