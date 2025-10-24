<template lang="pug">
section(class="section-two w-full h-full px-10 md:pt-[50px] xl:pt-[100px] pb-16 xl:pb-36")
  .flex(class="flex-col md:flex-row")
    .flex(class="flex-col mb-10 md:mb-0 pt-16 md:pt-0 w-1/2")
      .title(class="fluid-font" style="--font-min: 28; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Знакомы ли вам
        br
        | такие cостояния?
      .text(class="fluid-font hidden md:block font-light max-w-[310px] tb:max-w-[475px] xl:max-w-[650px] mt-10" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }") <span class="font-normal">Если вы узнали себя —</span> я знаю, как помочь решить эти задачи. Системно и с поддержкой.

    .states(class="grid grid-cols-1 w-full md:w-1/2")
      .flex(class="flex-col w-full")
        template(v-for="(item, index) in states" :key="item")
          .item(class="items-center mb-8 md:mb-10" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
            div(class="flex flex-row-reverse md:flex-row px-0 md:px-12 md:py-3 justify-end md:justify-between items-center bg-transparent md:bg-[#FFF7F0] md:rounded-full w-full")
              .text(class="fluid-font font-light" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-html="item")
              svg(viewBox="0 0 48 48" class="max-w-[32px] xl:max-w-[48px] md:mb-0 mr-4 md:mr-0")
                use(href="/src/assets/images/img-svg.svg#orange-circle")
        
        .text(class="fluid-font block md:hidden font-light mt-10" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }") <span class="font-normal">Если вы узнали себя —</span> я знаю, как помочь решить эти задачи. Системно и с поддержкой.
        
        BaseButton(class="btn-orange mt-12 max-w-fit" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }" @click="openAuthModal()")
          span(class="z-10 relative") Хочу начать
  
  .line(class="h-0.5 bg-[#DADADA] w-full mt-8 hidden md:block")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionOneSvg from '@/components/ui/SectionOneSvg.vue'
import { useModal } from '@/composables/useModal'

const { openModal } = useModal()

const openAuthModal = () => {
  openModal({ type: 'auth' })
}

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
