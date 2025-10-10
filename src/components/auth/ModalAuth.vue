<template lang="pug">
.flex(class="flex-col md:flex-row wrapper-modal overflow-y-auto overflow-x-hidden")


    .left(class="w-full md:w-[45%] flex justify-center items-center" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }")
      img(:src="userStore.user?.avatar", alt="alt" class="max-w-[150px] md:max-w-[400px] w-full h-auto rounded-full")

    .right(class="w-full md:w-[55%] md:pl-[2.87%] h-full flex flex-col justify-between")
      div
        .title(class="fluid-font hidden md:block" style="--font-min: 32; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") Время выбирать себя
        .text(class="font-light fluid-font max-w-[640px] mt-[22px] hidden md:block" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }") Напишите мне, и мы вместе выберем комфортный вариант для вашего старта

      div(class="authForm flex flex-col mt-3 max-w-[640px] pb-7" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")
        FloatingInput(
          v-model="name"
          label="Имя"
          type="text"
          autocomplete="username"
          @focus="clearError()"
        )

        FloatingInput(
          v-model="phone"
          label="Телефон"
          type="text"
          autocomplete="phone"
          @focus="clearError()"
        )
        
        FloatingInput(
          v-model="email"
          label="email@domain.com"
          type="email"
          autocomplete="email"
          @focus="clearError()"
        )

        .error-message(v-if="error" class="text-red-500 text-sm mt-2")
          | {{ error }}

        .flex(class="items-center justify-between mt-3 md:mt-16 flex-col sm:flex-row")
          BaseButton(class="btn-orange mt-5 sm:mt-0 max-w-full md:max-w-fit" @click="login" :disabled="isLoading")
            span(class="z-10 relative") {{ isLoading ? 'Отправка...' : 'Связаться' }}

          .socials(class="flex mt-10 sm:mt-0 pl-0 sm:pl-10")
            a(:href="`https://t.me/${userStore.user?.telegram}`" v-if="userStore.user?.telegram")
              svg(viewBox="0 0 26 23")
                use(href="/src/assets/images/img-svg.svg#telegram") 
            a(:href="`https://instagram.com/${userStore.user?.instagram}`" v-if="userStore.user?.instagram")
              svg(viewBox="0 0 27 27")
                use(href="/src/assets/images/img-svg.svg#instagram") 
            a(:href="`https://vk.com/${userStore.user?.vk}`" v-if="userStore.user?.vk")
              svg(viewBox="0 0 29 19")
                use(href="/src/assets/images/img-svg.svg#vk") 
            a(:href="`https://wa.me/${userStore.user?.whatsapp}`" v-if="userStore.user?.whatsapp")
              svg(viewBox="0 0 25 25")
                use(href="/src/assets/images/img-svg.svg#whats") 
            a(:href="`https://viber.me/${userStore.user?.viber}`" v-if="userStore.user?.viber")
              svg(viewBox="0 0 25 27")
                use(href="/src/assets/images/img-svg.svg#viber") 
            a(:href="`https://linkedin.com/in/${userStore.user?.linkedin}`" v-if="userStore.user?.linkedin")
              svg(viewBox="0 0 25 24")
                use(href="/src/assets/images/img-svg.svg#in") 
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FloatingInput from '@/components/ui/FloatingInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useModal } from '@/composables/useModal'
import { useUserStore } from '@/store/userStore'
import { sendEmail } from '@/utils/sendEmail'

const userStore = useUserStore()
const { closeModal, openModal } = useModal()

const name = ref('')
const phone = ref('')
const email = ref('')
const isLoading = ref(false)
const error = ref('')

const clearError = () => {
  error.value = ''
}

const isValidEmail = (emailStr: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailStr)
}

const isValidPhone = (phoneStr: string) => {
  const phoneRegex = /^[\+]?\d[\d\s-]{3,15}$/
  return phoneRegex.test(phoneStr.replace(/\s/g, ''))
}

const login = async () => {
  clearError()

  if (!name.value.trim()) {
    error.value = 'Пожалуйста, введите ваше имя'
    return
  }

  if (!phone.value.trim()) {
    error.value = 'Пожалуйста, введите номер телефона'
    return
  }

  if (!isValidPhone(phone.value)) {
    error.value = 'Пожалуйста, введите корректный номер телефона'
    return
  }

  if (!email.value.trim()) {
    error.value = 'Пожалуйста, введите email'
    return
  }

  if (!isValidEmail(email.value)) {
    error.value = 'Пожалуйста, введите корректный email'
    return
  }

  isLoading.value = true
  try {
    const recipientEmail = userStore.user?.email || ''
    const recipientName =
      `${userStore.user?.name ?? ''} ${userStore.user?.family ?? ''}`.trim() ||
      'Получатель'

    await sendEmail({
      eventCode: 'LANDING_HEALTH_CONCEPT_ORDER_OWNER',
      countryCode: 'RU',
      languageCode: 'ru',
      email: recipientEmail,
      NAME: recipientName,
      NEW_USER_MEMBER_ID: '-',
      NEW_USER_NAME: name.value,
      NEW_USER_EMAIL: email.value,
      NEW_USER_PHONE: phone.value,
    })

    // Close current auth modal first so the congratulations modal stays visible on top
    closeModal()
    // Defer opening long enough for the previous modal to finish closing and
    // to avoid the original click event affecting the new modal
    setTimeout(() => {
      openModal({
        type: 'congratulations',
        size: 'sm',
        closeOnBackdrop: false,
        closeOnEscape: false,
        props: {
          titleText: 'Спасибо!',
          textLines: ['Ваш wellness-консультант скоро свяжется с вами.'],
          buttonText: 'Закрыть',
          showHeart: true,
        },
      })
    }, 400)
    name.value = ''
    phone.value = ''
    email.value = ''
  } catch (err) {
    error.value = 'Произошла ошибка при отправке формы. Попробуйте еще раз.'
    console.error('Ошибка отправки формы:', err)
  } finally {
    isLoading.value = false
  }
}

const goBack = () => {
  closeModal()
}
</script>

<style lang="scss" scoped>
.wrapper-modal {
  height: calc(100vh - 120px);
  @media (max-width: 767px) {
    height: fit-content;
  }
}

.field-wrapper {
  margin-top: 12px !important;
  @media (max-width: 767px) {
    margin-top: 2rem !important;
  }
}

.socials {
  a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
  svg {
    max-width: 26px;
    min-width: 20px;
  }
}
</style>
