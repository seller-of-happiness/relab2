<template>
  <div class="consent-wrapper flex mt-10 sm:mt-14 flex-col sm:flex-row">
    <label class="consent-checkbox">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="handleChange"
        class="consent-input"
      />
      <span class="consent-text">
        Даю согласие на
        <a
          href="/Согласие на обработку ПнД Relab.docx"
          target="_blank"
          class="consent-link"
          @click.stop
        >
          обработку персональных данных
        </a>
      </span>
    </label>

    <label class="consent-checkbox ml-0 sm:ml-6">
      <input
        type="checkbox"
        :checked="privacyModelValue"
        @change="handlePrivacyChange"
        class="consent-input"
      />
      <span class="consent-text">
        С
        <a
          href="/Политика конфиденциальности Relab.docx"
          target="_blank"
          class="consent-link"
          @click.stop
        >
          политикой конфиденциальности
        </a>
        ознакомлен
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  privacyModelValue: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:privacyModelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}

const handlePrivacyChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:privacyModelValue', target.checked)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.consent-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: $gray-700;
  margin-bottom: 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.consent-input {
  width: 1rem;
  height: 1rem;
  margin: 0;
  cursor: pointer;
  accent-color: $black;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.consent-text {
  flex: 1;
}

.consent-link {
  color: $black;
  text-decoration: underline;
  transition: $transition-all;

  &:hover {
    color: $gray-600;
  }

  &:focus {
    outline: 2px solid $black;
    outline-offset: 2px;
  }
}

@media (max-width: 767px) {
  .consent-checkbox {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
}
</style>
