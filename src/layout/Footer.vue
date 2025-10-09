<template lang="pug">
footer(class="pt-8 pb-[50px]" id="contacts")
  section
    .top(class="w-full pt-2")
      .title(class="fluid-font leading-8 md:leading-44 xl:leading-56" style="--font-min: 32; --font-mid: 32; --font-max: 48; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInUp', delay: 'animate__delay-03s' }")
        | Остались вопросы по работе wellness-консультанта?
        br
        span(class="hidden md:inline-block") 
          | Напишите или позвоните в Coral Club:
          br
          a(href="tel:8(800)1000577" class="underline") 8(800)1000577
        span(class="text-sm mt-8 inline-block md:hidden") 
          | Напишите или позвоните в Coral Club:
          br
          a(href="tel:8(800)1000577" class="underline") 8(800)1000577

      //- .social.gap-8.w-full(class="flex tb:hidden mt-8")
      //-   a(class="social-link" href="#")
      //-     svg(width="26" height="22" viewBox="0 0 26 22" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#telegram")
      //-   a(class="social-link" href="#")
      //-     svg(width="27" height="26" viewBox="0 0 27 26" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#instagram")
      //-   a(class="social-link" href="#")
      //-     svg(width="28" height="18" viewBox="0 0 28 18" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#vk")
    
    //- .middle(class="flex justify-between mt-10 tb:mt-[120px] xl:mt-[192px] flex-col md:flex-row")
    //-   nav(class="w-full max-w-[584px]")
    //-     ul(class="footer-menu font-light fluid-font text-black leading-24 xl:leading-30 columns-2 md:columns-1" style="--font-min: 12; --font-max: 22;")
    //-       li(class="footer-menu-item" v-for="(item, index) in headerStore.menuItems")
    //-         a(class="footer-menu-link" href="#" @click.prevent="handleMenuClick(item.anchor)" v-html="item.name" :key="index")
      
    //-   .flex.w-full.justify-center
      
    //-   .info.flex.flex-col.gap-4(class="fluid-font text-black leading-30 w-full max-w-[540px] mt-10 md:mt-0" style="--font-min: 12; --font-max: 22;")
    //-     ul(class="columns-2 md:columns-1")
    //-       li
    //-         a(class="footer-info-link leading-1" href="/Система_правил_проекта_re_lab_искусство_wellness_сопровождения_1.pdf" target="_blank")
    //-           | Правила участия
    //-     .contacts
    //-       div(class='font-light') <span class='font-normal'>Телефон:</span> <a href="tel:8-800-100-05-77">8-800-100-05-77</a>
    //-       div <a href="mailto:info@coral-club.com">info@coral-club.com</a>

    .bottom(class="mt-10 md:mt-[216px] flex justify-between items-start md:items-end flex-col md:flex-row")
      .logo(class="w-full max-w-[284px] md:max-w-[584px]" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }")
        svg(viewBox="0 0 584 73" class="text-[#bfbdbe]")
          use(href="/src/assets/images/img-svg.svg#logo-footer")
      //- .social.gap-8.w-full.justify-center(class="hidden tb:flex")
      //-   a(class="social-link" href="#")
      //-     svg(width="26" height="22" viewBox="0 0 26 22" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#telegram")
      //-   a(class="social-link" href="#")
      //-     svg(width="27" height="26" viewBox="0 0 27 26" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#instagram")
      //-   a(class="social-link" href="#")
      //-     svg(width="28" height="18" viewBox="0 0 28 18" class="text-white")
      //-       use(href="/src/assets/images/img-svg.svg#vk")
      .copyright(class="font-light w-full max-w-[540px] mt-5 md:mt-0" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")
        | <span class="font-normal fluid-font text-black leading-30" style="--font-min: 12; --font-max: 22;">1999 - 2025 © Coral Club. </span> 
        | <span class="font-light fluid-font text-black leading-30" style="--font-min: 12; --font-max: 22;">Все права защищены.</span>

</template>

<script setup lang="ts">
import { useHeaderStore } from '@/store/header'
import { useScroll } from '@/composables/useScroll'

const headerStore = useHeaderStore()
const { scrollTo } = useScroll()

// Константа для offset (высота фиксированного header, если есть)
const HEADER_OFFSET = 0

const handleMenuClick = (anchor: string) => {
  scrollTo({
    anchor,
    closeMenu: () => (headerStore.isOpen = false),
    offset: HEADER_OFFSET,
    delay: 100,
  })
}
</script>

<style scoped lang="scss">
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    animation: wobble 0.6s ease-in-out;
  }
}

@keyframes wobble {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-6deg);
  }
  50% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
