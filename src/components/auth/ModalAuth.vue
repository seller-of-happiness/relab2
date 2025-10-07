<template lang="pug">
.flex(class="flex-col md:flex-row wrapper-modal overflow-y-auto overflow-x-hidden")


    .left(class="w-full md:w-[45%] flex justify-center items-center" v-animate-on-scroll="{ animation: 'animate__fadeInLeft', delay: 'animate__delay-03s' }")
      img(:src="userStore.user?.avatar", alt="alt" class="max-w-[300px] md:max-w-[700px] w-full h-fit rounded-full")

    .right(class="w-full md:w-[55%] md:pl-[2.87%] h-full flex flex-col justify-between")
      .title(class="fluid-font hidden md:block" style="--font-min: 32; --font-mid: 52; --font-max: 80; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }") Время выбирать себя
      .text(class="font-light fluid-font max-w-[640px] mt-[22px] hidden md:block" style="--font-min: 14; --font-mid: 16; --font-max: 24; --lh-min: 1.0;  --lh-mid: 1.2; --lh-max: 1.2" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-06s' }") Напишите мне и расскажите о вашей главной цели, а я подберу для вас наилучший вариант старта.

      div(class="authForm flex flex-col mt-3 max-w-[640px]" v-animate-on-scroll="{ animation: 'animate__fadeInRight', delay: 'animate__delay-03s' }")
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

        // Отображение ошибки
        .error-message(v-if="error" class="text-red-500 text-sm mt-2")
          | {{ error }}

        BaseButton(class="btn-orange mt-5 md:mt-16 max-w-full md:max-w-fit" @click="login" :disabled="isLoading")
          span(class="z-10 relative") {{ isLoading ? 'Отправка...' : 'Связаться' }}
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
    const memberId =
      userStore.user?.id || userStore.getMemberIdFromUrl() || 'Нет данных'

    await sendEmail({
      eventCode: 'LANDING_HEALTH_CONCEPT_ORDER_OWNER',
      countryCode: 'RU',
      languageCode: 'ru',
      email: recipientEmail,
      NAME: recipientName,
      NEW_USER_MEMBER_ID: memberId,
      NEW_USER_NAME: name.value,
      NEW_USER_EMAIL: email.value,
      NEW_USER_PHONE: phone.value,
    })

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
    closeModal()
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
}

.field-wrapper {
  margin-top: 12px !important;
}
</style>
