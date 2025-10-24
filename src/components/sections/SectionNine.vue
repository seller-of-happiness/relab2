<template lang="pug">
section(class="section-nine w-full h-full pt-0 md:pt-[62px] pb-[80px]" id="section-nine")
  .flex(class="flex-col md:flex-row")
    .title(class="fluid-font block md:hidden" style="--font-min: 32; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") Время выбирать себя
    .text(class="font-light fluid-font max-w-[640px] mt-[22px] block md:hidden" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }") Напишите мне, и мы вместе выберем комфортный вариант для вашего старта

    .left(class="w-full md:w-[45%] flex justify-center pt-[93px]" v-if="userStore.user" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }")
      img(:src="userStore.user?.avatar", alt="alt" class="max-w-[400px] w-full h-fit rounded-full" loading="lazy")

    .right(class="w-full md:w-[55%] pl-[2.87%]")
      .title(class="fluid-font hidden md:block" style="--font-min: 32; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") Время выбирать себя
      .text(class="font-light fluid-font max-w-[640px] mt-[22px] hidden md:block" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }") Напишите мне, и мы вместе выберем комфортный вариант для вашего старта

      div(class="authForm flex flex-col mt-12 md:mt-[217px] max-w-[640px]" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")
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

      ConsentCheckbox(
        v-model="consent"
        v-model:privacy-model-value="privacyConsent"
      )

      // Отображение ошибки
      .error-message(v-if="error" class="text-red-500 text-sm mt-2 mb-4")
        | {{ error }}

      BaseButton(class="btn-orange mt-16 max-w-fit" @click="login" :disabled="isLoading")
        span(class="z-10 relative") {{ isLoading ? 'Отправка...' : 'Связаться' }}

      .flex(class="items-start sm:items-center justify-between mt-12 md:mt-[164px] flex-col sm:flex-row")
        .text(class="font-light fluid-font max-w-[355px]" style="--font-min: 13; --font-mid: 14; --font-max: 22;" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") С заботой о вашем результате, Ваш личный wellness-консультант
        
        .socials(class="flex mt-10 sm:mt-0 pl-0 sm:pl-10" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }")
          a(:href="`https://t.me/${userStore.user?.telegram}`" v-if="userStore.user?.telegram")
            svg(viewBox="0 0 26 23")
              use(href="/src/assets/images/img-svg.svg#telegram") 
          a(:href="`https://wa.me/${userStore.user?.whatsapp}`" v-if="userStore.user?.whatsapp")
            svg(viewBox="0 0 25 25")
              use(href="/src/assets/images/img-svg.svg#whats") 
          a(:href="`https://instagram.com/${userStore.user?.instagram}`" v-if="userStore.user?.instagram")
            svg(viewBox="0 0 27 27")
              use(href="/src/assets/images/img-svg.svg#instagram") 
          a(:href="`https://vk.com/${userStore.user?.vk}`" v-if="userStore.user?.vk")
            svg(viewBox="0 0 29 19")
              use(href="/src/assets/images/img-svg.svg#vk") 
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
import ConsentCheckbox from '@/components/ui/ConsentCheckbox.vue'
import { useUserStore } from '@/store/userStore'
import { sendEmail } from '@/utils/sendEmail'
import { useModal } from '@/composables/useModal'

const userStore = useUserStore()
// Реактивные переменные для формы
const name = ref('')
const phone = ref('')
const email = ref('')
const consent = ref(false)
const privacyConsent = ref(false)
const isLoading = ref(false)
const error = ref('')

// Функция для очистки ошибок
const clearError = () => {
  error.value = ''
}

// Функция валидации email
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Функция валидации телефона
const isValidPhone = (phone: string) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Функция обработки отправки формы
const login = async () => {
  // Очищаем предыдущие ошибки
  clearError()

  // Валидация полей
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

  if (!consent.value) {
    error.value = 'Необходимо дать согласие на обработку персональных данных'
    return
  }

  if (!privacyConsent.value) {
    error.value = 'Необходимо ознакомиться с политикой конфиденциальности'
    return
  }

  // Устанавливаем состояние загрузки
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
      email: recipientEmail, // получатель (консультант)
      NAME: recipientName,
      NEW_USER_MEMBER_ID: '-',
      NEW_USER_NAME: name.value,
      NEW_USER_EMAIL: email.value,
      NEW_USER_PHONE: phone.value,
    })

    const { openModal } = useModal()
    openModal({
      type: 'congratulations',
      size: 'sm',
      props: {
        titleText: 'Спасибо!',
        textLines: ['Ваш wellness-консультант скоро свяжется с вами.'],
        buttonText: 'Закрыть',
        showHeart: true,
      },
    })

    name.value = ''
    phone.value = ''
    email.value = ''
    consent.value = false
    privacyConsent.value = false
  } catch (err) {
    error.value = 'Произошла ошибка при отправке формы. Попробуйте еще раз.'
    console.error('Ошибка отправки формы:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped lang="scss">
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
