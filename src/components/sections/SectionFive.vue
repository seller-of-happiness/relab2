<template lang="pug">
section(class="section-five w-full h-full pt-10 xl:pt-[80px] px-10")
  .title(class="fluid-font" style="--font-min: 32; --font-mid: 60; --font-max: 90; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Wellness-трек со мной — это
  div(class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5 tb:gap-10 xl:gap-[60px] mt-[54px] xl:mt-[97px]")
    .item(class="px-[30px] py-6 xl:pt-10 xl:pb-[60px] w-full max-w-full rounded-xl" v-for="(item, index) in items" :key="index" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: item.delay }")
      .wrapper(class="flex flex-col")
        SvgIcon(:name="item.svg" class="text-white w-full max-w-[40px] xl:max-w-[60px]")
        .name(class="fluid-font mt-4 xl:mt-8" style="--font-min: 17; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") {{ item.name }}
        .text(class="fluid-font mt-1 xl:mt-3" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-html="item.text")

  .text(class="mb-10 md:mb-0 mt-10 xl:mt-[130px] fluid-font max-w-[715px]" style="--font-min: 16; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }") Моя задача — сделать ваш wellness-трек простым, понятным и результативным. Чтобы вам оставалось только получать удовольствие от процесса и реальные результаты.

  .line(class="w-full border border-gray mt-[21px]" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'

interface Item {
  svg: string
  name: string
  text: string
  delay: string
}
const items = ref<Item[]>([
  {
    svg: 'section-5-1',
    name: 'Новые привычки',
    text: 'Норма воды, шагов, сна — все это станет не пугающими словами, а приятными ритуалами, которые приносят результаты.',
    delay: 'animate__delay-03s',
  },
  {
    svg: 'section-5-2',
    name: 'Сообщество и поддержка',
    text: 'Для вас я создам уютное пространство для общения с единомышленниками в закрытом чате.',
    delay: 'animate__delay-06s',
  },

  {
    svg: 'section-5-3',
    name: 'Изменения в теле и ощущениях',
    text: 'Вы почувствуете и увидите: больше энергии, легкость в теле, ясность в голове, ощущение обновления. А я помогу их зафиксировать. ',
    delay: 'animate__delay-09s',
  },
  {
    svg: 'section-5-4',
    name: 'Консультации',
    text: 'Моя полная поддержка в мессенджере. Все ваши вопросы не останутся без ответа.',
    delay: 'animate__delay-03s',
  },
  {
    svg: 'section-5-5',
    name: 'Забота и режим',
    text: 'Здесь, наконец, вы обретете удобную систему заботы о себе, научитесь делать это регулярно и не бросать.  ',
    delay: 'animate__delay-06s',
  },
  {
    svg: 'section-5-6',
    name: 'Максимум полезного контента',
    text: 'Передам все знания по холистическому подходу к здоровью и продуктам, а также чек-листы и памятки, которые помогут закрепить привычки.',
    delay: 'animate__delay-09s',
  },
])
</script>

<style scoped lang="scss">
.item {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 210, 141, 15%) 0%,
    rgba(255, 130, 54, 5%) 5%,
    #ffffff 100%
  );
}
</style>
