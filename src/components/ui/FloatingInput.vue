<template>
  <div class="field-wrapper">
    <div class="field-floating">
      <input
        class="input-floating px-2"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
      />
      <label class="label-floating">{{ label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  type?: string
  placeholder?: string
  autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: ' ',
  autocomplete: 'off',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.input-floating {
  width: 100%;
  border: 0;
  border-bottom: 1px solid $gray-300;
  background-color: transparent;
  padding-top: 0.75rem;
  padding-bottom: 0.5rem;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-bottom-color: $black;
  }
}

.label-floating {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: $gray-500;
  transition: $transition-all;
  pointer-events: none;
  font-size: 1rem;
  line-height: 1.5rem;
}

.input-floating:focus + .label-floating,
.input-floating:-webkit-autofill + .label-floating,
.input-floating:not(:placeholder-shown) + .label-floating {
  top: -1rem;
  transform: none;
  font-size: 0.75rem;
  line-height: 1rem;
}

.field-floating {
  position: relative;
}

.field-wrapper {
  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
}
</style>
