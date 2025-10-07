<template lang="pug">
section(class="section-three w-full h-full px-10 pt-9 xl:pt-[18px] pb-[34px] xl:pb-16 z-20 relative" id="section-three")
  .flex(class="flex-col")
    .title(class="fluid-font" style="--font-min: 28; --font-mid: 40; --font-max: 60; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Ваше решение — системная
      br(class="hidden md:block")
      | поддержка организма
    .text(class="font-light fluid-font max-w-[720px] mt-[18px] xl:mt-[28px]" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-06s' }") Многие воспринимают wellness как тренд. Я рассматриваю его как систему: целостный подход, профилактика и&nbsp;долгосрочный баланс, заложенные в&nbsp;Концепции Здоровья.

  .flex(class="flex-col-reverse items-center tb:flex-row")
    .left(class="flex flex-col items-center tb:items-start w-full tb:w-1/3 tb:pr-[4%]" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-09s' }")
      .item(class="fluid-font py-2 px-[26px] xl:py-5 xl:px-10 border border-gray rounded-full bg-white text-[rgba(40, 40, 40, 1)] tb:max-w-[290px] xl:max-w-[428px] mt-10 tb:mt-[87px] xl:mt-[124px] xl:min-w-[286px]" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Здоровье — это система, где все процессы взаимосвязаны.
      .item(class="fluid-font py-2 px-[26px] xl:py-5 xl:px-10 border border-gray rounded-full bg-white text-[rgba(40, 40, 40, 1)] tb:max-w-[456px] mt-5 tb:mt-[54px] xl:mt-[76px] xl:min-w-[290px]" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Важно работать не с&nbsp;симптомами, а&nbsp;с&nbsp;причинами.
      .item(class="fluid-font py-2 px-[26px] xl:py-5 xl:px-10 border border-gray rounded-full bg-white text-[rgba(40, 40, 40, 1)] mt-5 block tb:hidden" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Только так организм может сохранять устойчивость и&nbsp;ресурс в&nbsp;долгосрочной перспективе.

      .text(class="font-light bottom-text fluid-font tb:max-w-[547px] mt-16 tb:mt-[154px] mb-10 md:mb-0 xl:mt-[220px]" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;") Wellness-трек — практическая реализация этой концепции, которая помогает закрепить этот подход в реальной жизни.
    .middle(class="w-full tb:w-1/3 min-w-auto  max-w-[700px]" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
      img(src="@/assets/images/section-3-1.png", alt="alt" class="mt-16 tb:mt-8")
    .right(class="w-1/3 pl-[4%] hidden tb:block" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-09s' }")
      .item(class="fluid-font py-2 px-[26px] xl:py-5 xl:px-10 border border-gray rounded-full bg-white text-[rgba(40, 40, 40, 1)] max-w-[506px] mt-[68px] xl:mt-[94px] xl:min-w-[335px]" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Только так организм может сохранять устойчивость и&nbsp;ресурс в&nbsp;долгосрочной перспективе.

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section-three {
  background: url(/src/assets/images/section-3-bg.jpg) no-repeat;
  background-size: cover;
}

.gradient-text {
  background: linear-gradient(90deg, #ff6b35 0%, #ff8b4d 50%, #ffc700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 24px;

  @media (max-width: 1280px) {
    line-height: 19px;
    font-size: 14px;
  }
}

@media (max-width: 1280px) {
  .bottom-text {
    line-height: 21px;
    font-size: 16px;
  }
}
</style>
