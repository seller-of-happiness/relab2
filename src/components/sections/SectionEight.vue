<template lang="pug">
section(class="section-six w-full h-full mt-10 pb-[26px] xl:pb-10" id="program")
  .main-container.flex.flex-col
    .flex(class="justify-between items-center gap-[3%] gap-0 flex-col-reverse md:flex-row")
      .left(class="w-full max-w-[610px]")
        .title(class="fluid-font -mt-[38px] md:text-nowrap mt-7 md:mt-0" style="--font-min: 32; --font-mid: 40; --font-max: 60; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
          | Продукты, которым
          br
          | я&nbsp;доверяю
        .text(class="fluid-font mt-2.5 font-light hidden md:block" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }") Я и еще тысячи людей уже прошли wellness-трек и получили результаты. Но мое доверие к продуктам Coral Club больше основано на: 

      .right(class="w-full max-w-[1160px] md:block image-container rounded-xl" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }")
        picture(class="mt-16 tb:mt-8")
          source(srcset="@/assets/images/SectionEight.webp" type="image/webp")
          img(src="@/assets/images/SectionEight.png" alt="" class="section-image" loading="lazy")
    .flex(class="flex-col mt-10 lg:mt-[15px] xl:mt-[118px]")
      .flex(class="flex-col md:flex-row justify-between pt-4 min-h-[90px] xl:min-h-[146px] md:border-b border-[#d7d5d8] lg:gap-[35.4%] xl:gap-0 mb-16 md:mb-0 item-row" v-for="(item, index) in items" :key="index" :class="{ 'md:border-t': index == 0 }" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
        .left(class="mr-6 lg:mr-0 pb-4 md:pb-0 mb-4 md:mb-0 border-b border-[#d7d5d8] md:border-0")
          .text(class="fluid-font" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;")
            | {{ `0${index + 1}` }}
        .right(class="w-full max-w-[1160px]")
          .flex(class="flex-col md:flex-row")
            .text(class="fluid-font w-full max-w-[800px]" style="--font-min: 12; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2;" v-html="item.text")

</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  text: string
}

const items = ref<Item[]>([
  {
    text: 'Многолетнем опыте. Более 27 лет компания собирает опыт нутрициологов со всего мира в комплексные решения и помогает людям осознанно заботиться о здоровье.',
  },
  {
    text: 'Передовых технологиях производства. Coral Club производит продукты в 14 странах на сертифицированных площадках Америки, Европы и Азии (GMP, ISO, HACCP).',
  },
  {
    text: 'Подходе к качеству. Каждый продукт проходит многоступенчатое тестирование и не содержит ГМО, гормоны, глютен, консерванты, фталаты и пестициды.',
  },
  {
    text: 'Доверии миллионов. Сотни тысяч людей в 20+ странах выбирают продукты компании, и эти цифры только растут.',
  },
])
</script>

<style scoped lang="scss">
.image-container {
  overflow: hidden;
}

.section-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  .image-container:hover & {
    transform: scale(1.05);
  }
}

// Эффект для заголовков при наведении на строку
.item-row {
  cursor: pointer;

  .item-title {
    transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: left center;
  }

  &:hover {
    .item-title {
      transform: scale(1.06);
    }
  }
}

// Для мобильных устройств уменьшаем эффекты
@media (max-width: 768px) {
  .section-image {
    .image-container:hover & {
      transform: scale(1);
    }
  }

  .item-row:hover .item-title {
    transform: scale(1);
  }
}

// Для планшетов
@media (min-width: 769px) and (max-width: 1024px) {
  .item-row:hover .item-title {
    transform: scale(1);
  }
}
</style>
