<template>
  <!-- h-auto + block = корректное “резиновое” поведение без подрезаний -->
  <svg
    :viewBox="viewBox"
    preserveAspectRatio="xMidYMid meet"
    class="block h-auto"
    :class="props.class"
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- дублируем для совместимости со старым Safari -->
    <use :href="href" :xlink:href="href" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// важно: просим у Vite “сырой url” файла (нужен в проде)
import spriteUrl from '@/assets/images/img-svg.svg?url'

const props = defineProps<{
  name:
    | 'format'
    | 'load'
    | 'certification'
    | 'community'
    | 'logo-header'
    | 'logo-footer'
    | 'telegram'
    | 'instagram'
    | 'vk'
  class?: string
}>()

// соответствие символов их viewBox
const VIEWBOX: Record<string, string> = {
  format: '0 0 60 60',
  load: '0 0 60 60',
  certification: '0 0 60 60',
  community: '0 0 60 60',
  'logo-header': '0 0 48 15',
  'logo-footer': '0 0 584 73',
  telegram: '0 0 26 22',
  instagram: '0 0 27 26',
  vk: '0 0 29 18',
}

const href = computed(() => `${spriteUrl}#${props.name}`)
const viewBox = computed(() => VIEWBOX[props.name] ?? '0 0 60 60')
</script>
