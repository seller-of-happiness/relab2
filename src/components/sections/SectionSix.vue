<template lang="pug">
section(class="section-six w-full h-full pt-[102px] xl:pt-[193px] pb-[110px]" id="section-six")
  .title(class="fluid-font mt-16 md:mt-0" style="--font-min: 32; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }") Как вы хотите начать?

  .items(class="gap-x-5 tb:gap-x-[50px] grid grid-cols-1 md:grid-cols-3 mt-[80px] xl:mt-[147px]")
      .item(class="flex flex-col justify-between mb-7 md:mb-0" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
        div
          .name(class="fluid-font mb-6" style="--font-min: 14; --font-mid: 18; --font-max: 32; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Начать путь к здоровью
          picture(class="mt-16 tb:mt-8")
            source(srcset="@/assets/images/section-6-1.webp" type="image/webp")
            img(src="@/assets/images/section-6-1.png" alt="" class="section-image" loading="lazy")
          .text(class="fluid-font mt-8 -tracking-05" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Первый шаг к здоровью на клеточном уровне на 30 дней. Идеально, чтобы понять процесс и почувствовать первые изменения.
        //- BaseButton(class="btn-ghost mt-6 w-fit" :link="true" :url="url")
        //-   span(class="z-10 relative") Купить

      .item(class="flex flex-col justify-between mb-7 md:mb-0" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-06s' }")
        div
          .name(class="fluid-font mb-6" style="--font-min: 14; --font-mid: 18; --font-max: 32; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Пройти полный wellness-путь
          picture(class="mt-16 tb:mt-8")
            source(srcset="@/assets/images/section-6-2.webp" type="image/webp")
            img(src="@/assets/images/section-6-2.png" alt="" class="section-image" loading="lazy")
          .text(class="fluid-font mt-8" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Все 3 этапа для глубокого и комплексного преображения самочувствия под моим постоянным руководством.
        //- BaseButton(class="btn-ghost mt-6 w-fit" :link="true" :url="urlBIG")
        //-   span(class="z-10 relative") Начать полный путь

      .item(class="flex flex-col justify-between mb-7 md:mb-0" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-09s' }")
        div
          .name(class="fluid-font mb-6" style="--font-min: 14; --font-mid: 18; --font-max: 32; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Проконсультироваться
          picture(class="mt-16 tb:mt-8")
            source(srcset="@/assets/images/section-6-3.webp" type="image/webp")
            img(src="@/assets/images/section-6-3.png" alt="" class="section-image" loading="lazy")
          .text(class="fluid-font mt-8" style="--font-min: 14; --font-mid: 14; --font-max: 22; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2") Бесплатная 15-минутная консультация. Я отвечу на ваши вопросы и помогу принять решение.
        BaseButton(class="btn-orange mt-6 w-fit" @click="scrollTo('section-nine')")
          span(class="z-10 relative") Связаться

</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { computed } from 'vue'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

const url = computed(
  () =>
    `https://coral.club/shop/shop_basket.php?&80362=1&8036007=1&80360721=1&8036121=1&8036221=1&80360021=1&80360121=1&8036025=1&80360252=1&803604=1&80360421=1&80361=1&803600=1&803601=1&REF_MEMBER=${userStore.user?.chk}&REF_CODE=${userStore.user?.ref}&TYPE=REF-BASKET-V2&triggerBuyProduct=relab`
)

const urlBIG = computed(
  () =>
    `https://coral.club/shop/shop_basket.php?&80362=1&8036007=1&80360721=1&8036121=1&8036221=1&80360021=1&80360121=1&8036025=1&80360252=1&803604=1&80360421=1&80361=1&803600=1&803601=1&80322=1&803204=1&80320=1&80321=1&803200=1&803201=1&120060=1&120061=1&120600=1&120604=1&REF_MEMBER=${userStore.user?.chk}&REF_CODE=${userStore.user?.ref}&TYPE=REF-BASKET-V2&triggerBuyProduct=relab`
)

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped lang="scss"></style>
