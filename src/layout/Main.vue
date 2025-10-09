<template lang="pug">
main(:class="{'h-screen w-screen overflow-hidden': !hasUserParam}" v-if="userStore.user")
  SectionOne
  SectionTwo
  SectionThree
  SectionFour
  SectionFive
  SectionSix
  SectionSeven
  SectionEight
  SectionNine
  Footer

.not-user(v-if="!hasUserParam" class="z-[999999] fixed left-0 top-0 w-screen inset-0 backdrop-blur-md flex justify-center items-center")
  .text-modal(class="w-[94%] max-w-[400px] p-5 text-center flex justify-center items-center bg-white")
    |Участие в марафоне возможно только по приглашению куратора. Пожалуйста, обратитесь к вашему рекомендателю, он поможет найти куратора в вашей структуре.
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionOne from '@/components/sections/SectionOne.vue'
import SectionTwo from '@/components/sections/SectionTwo.vue'
import SectionThree from '@/components/sections/SectionThree.vue'
import SectionFour from '@/components/sections/SectionFour.vue'
import SectionFive from '@/components/sections/SectionFive.vue'
import SectionSix from '@/components/sections/SectionSix.vue'
import SectionSeven from '@/components/sections/SectionSeven.vue'
import SectionEight from '@/components/sections/SectionEight.vue'
import SectionNine from '@/components/sections/SectionNine.vue'
import Footer from '@/layout/Footer.vue'
import { inject } from 'vue'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

const userParam = inject<string | null>('userParam', null)
const hasUserParam = inject<boolean>('hasUserParam', false)
</script>

<style scoped>
.not-user {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
