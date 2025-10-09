<template lang="pug">
section(class="section-four w-full h-full px-10 xl:pb-[96px] ")
  .flex(class="flex-col md:flex-row")
    .left(class="flex-col justify-between w-ful md:w-1/2 pr-10")
      .top(class="mt-[98px] xl:mt-[140px]")
        .title(class="fluid-font" style="--font-min: 28; --font-mid: 40; --font-max: 60; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Три этапа заботы о&nbsp;себе 
          br(class="hidden tb:block")
          | с&nbsp;моей поддержкой

        .text(class="font-light fluid-font max-w-[600px] mt-[18px] xl:mt-[28px]" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-06s' }") Вместе мы пройдем комфортный и понятный путь из 3 этапов — гидратация, защита и очищение. Все уже продумано за вас: система, продукты, этапы. 

      .bottom(class="mt-[248px] xl:mt-[404px] hidden md:block")
        .text(class="font-light fluid-font max-w-[450px] xl:max-w-[600px]" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }") Моя роль — сделать так, чтобы этот путь подошел именно вам, чтобы вы чувствовали поддержку и видели изменения.
        BaseButton(class="btn-orange mt-[42px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }" @click="scrollTo('section-nine')")
          span(class="z-10 relative") Хочу начать
    .right(class="w-full md:w-1/2")
      .left(class="hidden md:block")
      .container(class="w-full max-w-full md:max-w-[428px] xl:max-w-[640px] max-h-[822px] px-10 py-16 md:py-0" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")

        .card-wrapper(class="mb-8 xl:mb-12 md:mt-[257px] xl:mt-[360px]")
          .card(class="rounded-xl m-0.5 p-6 xl:py-[34px] xl:px-[30px] relative z-10 shadow-gradient-warm")
            div(class="text-gray-400 mb-2" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") 1 месяц
            .text(class="mb-3 xl:mb-[58px] fluid-font" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Наполним ваши клетки жизнью
            .text(class="fluid-font" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2")
              | Вы научитесь правильно поддерживать водный баланс 
              | и подготовите организм к дальнейшему восстановлению.
        
        .card-wrapper(class="mb-8 xl:mb-12")
          .card(class="rounded-xl m-0.5 p-6 relative z-10 shadow-gradient-warm")
            div(class="text-gray-400 mb-2" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") 1 месяц
            .text(class="mb-3 xl:mb-[58px] fluid-font" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Укрепим естественную защиту
            .text(class="fluid-font" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2")
              | Мы снижаем уровень воспаления в организме и повышаем 
              | его устойчивость к стрессовым факторам.

        .card-wrapper(class="md:mb-[346px]")
          .card(class="rounded-xl m-0.5 p-6 relative z-10 shadow-gradient-warm")
            div(class="text-gray-400 mb-2" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") 1 месяц
            .text(class="mb-3 xl:mb-[58px] fluid-font" style="--font-min: 14; --font-mid: 18; --font-max: 28; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Мягко очистим и обновим
            .text(class="fluid-font" style="--font-min: 12; --font-mid: 13; --font-max: 20; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2")
              |Вы почувствуете легкость и энергию, а я помогу пройти этот процесс максимально комфортно и эффективно
      
      .bottom(class="block md:hidden mb-16")
        .text(class="font-light fluid-font max-w-[450px] xl:max-w-[600px]" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }") Моя роль — сделать так, чтобы этот путь подошел именно вам, чтобы вы чувствовали поддержку и видели изменения.
        BaseButton(class="btn-orange mt-[42px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }" @click="scrollTo('section-nine')")
          span(class="z-10 relative") Хочу начать
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { ref } from 'vue'

const scrollTo = (id: string) => {
  console.log(id)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped lang="scss">
.right {
  position: relative;

  .left {
    background: url(/src/assets/images/section-4-1.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: -105px;
    height: 100%;
    width: 216px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 30%;
    width: 100%;
    z-index: 80;
    pointer-events: none;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &::before {
    background: linear-gradient(
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgb(255, 255, 255) 100%
    );
    transform: rotate(180deg);
    top: 0;
  }

  &::after {
    background: linear-gradient(
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgb(255, 255, 255) 100%
    );
    height: 50%;
    bottom: 0;
  }

  .container {
    overflow-y: auto;
    height: 100%;
    scroll-behavior: smooth;

    // Скрываем полосу прокрутки для WebKit браузеров
    &::-webkit-scrollbar {
      display: none;
    }

    // Скрываем полосу прокрутки для Firefox
    scrollbar-width: none;

    .card-wrapper {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        padding: 2px;
        background: linear-gradient(
          90deg,
          #feb6c3 0%,
          #ff8236 50%,
          #ffcd00 100%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: 5;
      }
    }

    .shadow-gradient-warm {
      box-shadow: 0 4px 16px -2px rgba(254, 182, 195, 0.3),
        0 8px 24px -4px rgba(255, 130, 54, 0.25),
        0 12px 32px -6px rgba(255, 205, 0, 0.2);
    }
  }
}
</style>
