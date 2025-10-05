<template lang="pug">
section(class="section-seven w-full h-full px-10 pt-[82px] pb-[144px]")
  .title(class="fluid-font mt-12 md:mt-0" style="--font-min: 32; --font-mid: 40; --font-max: 60; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Продукты, которые
    br
    | дают результаты

  .slider(class="gap-[18px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-[105px] min-h-[600px]")
      //- .item(class="w-full flex flex-col justify-end rounded-[22px] overflow-hidden p-[38px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
      //-   div(class="text-white")
      //-     .quote(class="mt-[80px]")
      //-         svg(viewBox="0 0 19 19" class="max-w-[19px]")
      //-           use(href="/src/assets/images/img-svg.svg#quote")
      //-     .text(class="fluid-font mt-4 " style="--font-min: 14; --font-max: 26;") Избавился от хронической усталости за 30 дней!
      //-     .name(class="fluid-font mt-8" style="--font-min: 16; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Иван Петров
      //-     .position(class="fluid-font font-light mt-2" style="--font-min: 14; --font-mid: 12; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Нутрициолог

      .item(class="w-full rounded-[22px] overflow-hidden p-[38px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
        div(class="flex flex-col h-full")
          .top
            .avatar(class="rounded-full w-[94px] h-[94px]")
              img(src="@/assets/images/section-7-a1.png", alt="alt")
          .middle
            .quote(class="mt-[80px]")
              svg(viewBox="0 0 19 19" class="max-w-[19px]")
                use(href="/src/assets/images/img-svg.svg#quote")
          .bottom(class="flex flex-col justify-between h-full")(class="flex flex-col justify-between h-full")
            .text(class="fluid-font mt-4" style="--font-min: 18; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Прошла путь от усталости и подавленности до устойчивого спокойного состояния. А еще у меня нормализовался цикл!
            div
              .name(class="fluid-font mt-8" style="--font-min: 16; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Анна
              .position(class="fluid-font font-light mt-2" style="--font-min: 14; --font-mid: 12; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") 26 лет

      .item(class="w-full rounded-[22px] overflow-hidden p-[38px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }")
        div(class="flex flex-col justify-between h-full")
          .top
            .avatar(class="rounded-full w-[94px] h-[94px]")
              img(src="@/assets/images/section-7-a2.png", alt="alt")
          .middle
            .quote(class="mt-[80px]")
              svg(viewBox="0 0 19 19" class="max-w-[19px]")
                use(href="/src/assets/images/img-svg.svg#quote")
          .bottom(class="flex flex-col justify-between h-full")
            .text(class="fluid-font mt-4" style="--font-min: 18; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Минус 10 кг без откатов и желания наесться сладкого. Стало больше энергии и отличное самочувствие!
            div
              .name(class="fluid-font mt-8" style="--font-min: 16; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Раиса
              .position(class="fluid-font font-light mt-2" style="--font-min: 14; --font-mid: 12; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") 60 лет

      .item(class="w-full rounded-[22px] overflow-hidden p-[38px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-09s' }")
        div(class="flex flex-col justify-between h-full")
          .top
            .avatar(class="rounded-full w-[94px] h-[94px]")
              img(src="@/assets/images/section-7-a3.png", alt="alt")
          .middle
            .quote(class="mt-[80px]")
              svg(viewBox="0 0 19 19" class="max-w-[19px]")
                use(href="/src/assets/images/img-svg.svg#quote")
          .bottom(class="flex flex-col justify-between h-full")
            .text(class="fluid-font mt-4" style="--font-min: 18; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") После программы прошла тяжесть в теле, улучшился сон и стала бодрее по утрам. Появилось ощущение легкости, которого давно не было.
            div
              .name(class="fluid-font mt-8" style="--font-min: 16; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Наталья
              .position(class="fluid-font font-light mt-2" style="--font-min: 14; --font-mid: 12; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") 38 лет

      .item(class="w-full rounded-[22px] overflow-hidden p-[38px] mb-7 md:mb-0" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-12s' }")
        div(class="flex flex-col justify-between h-full")
          .top
            .avatar(class="rounded-full w-[94px] h-[94px]")
              img(src="@/assets/images/section-7-a4.png", alt="alt")
          .middle
            .quote(class="mt-[80px]")
              svg(viewBox="0 0 19 19" class="max-w-[19px]")
                use(href="/src/assets/images/img-svg.svg#quote")
          .bottom(class="flex flex-col justify-between h-full")
            .text(class="fluid-font mt-4" style="--font-min: 18; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Впервые за долгое время ощутила, как тело благодарит за заботу. Больше не хочется сладкого и бессмысленных перекусов — пришло ощущение баланса.
            div
              .name(class="fluid-font mt-8" style="--font-min: 16; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Елена
              .position(class="fluid-font font-light mt-2" style="--font-min: 14; --font-mid: 12; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") 34 года
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style scoped lang="scss">
.section-seven {
  background: linear-gradient(
    #ffffff 0%,
    rgba(255, 130, 54, 5%) 95%,
    rgba(255, 210, 141, 15%) 100%
  );
}

.slider {
  position: relative;

  .item {
    position: relative;
    // &:first-child {
    //   background: url(/src/assets/images/section-7-1.png) no-repeat;
    //   background-size: cover;
    // }

    > div {
      transform: scale(1);
      z-index: 3;
      position: relative;
      transition: all 0.45s;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      z-index: 1;
      background: url(/src/assets/images/section-7-bg.jpg) no-repeat;
      background-size: cover;
    }

    &::after {
      z-index: 2;
      background: #fff;
      opacity: 1;
      transition: all 0.45s;
    }

    &:hover {
      > div {
        transform: scale(1.03);
      }

      &::after {
        opacity: 0;
      }
    }
  }
}
</style>
