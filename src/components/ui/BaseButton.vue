<template>
  <component
    :is="link ? 'a' : 'button'"
    :href="link ? url : undefined"
    :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined"
    class="text-xs xl:text-2xl"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  link?: boolean
  url?: string
}

withDefaults(defineProps<Props>(), {
  link: false,
  url: '',
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

%btn-base {
  padding: $padding-btn;
  border-radius: $border-radius-full;
  overflow: hidden;
  line-height: 1;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  transition: $transition-all;
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1280px) {
    padding: $padding-btn-1280;
  }

  &:focus {
    outline: none;
  }
}

.btn-text {
  @extend %btn-base;
  background-color: transparent;
  text-transform: capitalize;
  padding: 0;
  letter-spacing: 0.3px;
}

.btn-orange {
  @extend %btn-base;
  background: linear-gradient(90deg, #ffd0b8 0%, #ff8236 50%, #ffcd00 100%);
  color: white;
  padding: 12px 48px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    filter: drop-shadow(0 6px 16px rgba(255, 130, 54, 0.5))
      drop-shadow(0 4px 10px rgba(255, 205, 0, 0.4))
      drop-shadow(0 2px 6px rgba(254, 182, 195, 0.3));
  }

  &:active {
    transform: translateY(0);
  }
}

.btn-ghost {
  @extend %btn-base;
  color: #282828;
  padding: 12px 48px;
  font-weight: 400;
  position: relative;
  transition: all 0.45s;
  transform: scale(1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: all 0.45s;
  }

  &::before {
    background: linear-gradient(90deg, #ffd0b8 0%, #ff8236 50%, #ffcd00 100%);
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &::after {
    background-color: #fff;
    z-index: 2;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    left: 3px;
    top: 3px;
    border-radius: 48px;
  }

  span {
    position: relative;
    z-index: 3;
  }

  &:hover {
    transform: scale(1.02);
    color: #fff;
    filter: drop-shadow(0 6px 16px rgba(255, 130, 54, 0.5))
      drop-shadow(0 4px 10px rgba(255, 205, 0, 0.4))
      drop-shadow(0 2px 6px rgba(254, 182, 195, 0.3));

    &::after {
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
