<template lang="pug">
section(class="section-two w-full h-full px-10 md:pt-[50px] xl:pt-[84px] pb-5 xl:pb-[98px]")
  .flex(class="flex-col md:flex-row pt-16 md:pt-0 md:gap-[9%] xl:gap-[12.65%]")
    .title(class="fluid-font" style="--font-min: 28; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Знакомы ли вам
      br
      | такие cостояния?
    .text(class="fluid-font hidden md:block font-light max-w-[310px] tb:max-w-[475px] xl:max-w-[650px] mt-3" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }") <span class="font-normal">Если вы узнали себя —</span> я знаю, как помочь решить эти задачи. Системно и с поддержкой.

  .states(class="gap-x-5 xl:gap-x-10 grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-[76px] xl:mt-[137px]")
    .flex(class="flex-col w-full")
      template(v-for="(item, index) in states" :key="item")
        .item(v-if="index < 3" class="items-center mb-8 md:mb-10" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
          div(class="flex flex-col-reverse md:flex-row md:px-8 py-4 xl:px-12 xl:py-6 justify-between md:items-center border-b md:border border-gray md:rounded-full w-full")
            .text(class="fluid-font font-light" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-html="item")
            svg(viewBox="0 0 48 48" class="max-w-[32px] xl:max-w-[48px] mb-6 md:mb-0")
              use(href="/src/assets/images/img-svg.svg#orange-circle")
    
    .flex(class="flex-col w-full")
      template(v-for="(item, index) in states" :key="item")
        .item(v-if="index > 2" class="mb-8 md:mb-10" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
          div(class="flex flex-col-reverse md:flex-row md:px-8 py-4 xl:px-12 xl:py-6 justify-between md:items-center border-b md:border border-gray md:rounded-full w-full")
            .text(class="fluid-font font-light" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-html="item")
            svg(viewBox="0 0 48 48" class="max-w-[32px] xl:max-w-[48px] mb-6 md:mb-0")
              use(href="/src/assets/images/img-svg.svg#orange-circle") 

</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionOneSvg from '@/components/ui/SectionOneSvg.vue'

const states = ref<Array<string>>([
  'Утро начинается с усталости, а не с бодрости',
  'Забота о себе постоянно откладывается «на потом»',
  'Начинаете что-то делать для здоровья, но быстро бросаете',
  'Часто едите на бегу, нет стабильности в питании',
  'Чувствуете себя загнанным в колесе, без сил и времени для себя',
  'Иммунитет подводит — организм слабо сопротивляется<br> нагрузкам и стрессу',
])
</script>

<style scoped lang="scss">
.states {
  .item {
    div {
      transform: scale(1);
      transition: all 0.35s !important;
      &:hover {
        transform: scale(0.985) !important;
        transition: all 0.35s;
      }

      @media (max-width: 1280px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>
