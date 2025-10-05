import { ref } from 'vue'
import { defineStore } from 'pinia'

interface MenuItem {
  name: string
  active: boolean
  anchor: string
}

export const useHeaderStore = defineStore('headerStore', () => {
  const isOpen = ref<boolean>(false)
  const menuItems = ref<MenuItem[]>([
    {
      name: 'Главная',
      active: true,
      anchor: '#top',
    },
    {
      name: 'О <span class="font-medium">re:lab</span>',
      active: false,
      anchor: '#about',
    },
    {
      name: 'Программа',
      active: false,
      anchor: '#program',
    },
    {
      name: 'Преимущества',
      active: false,
      anchor: '#advantages',
    },
    {
      name: 'Как попасть',
      active: false,
      anchor: '#how-to-get',
    },
    {
      name: 'FAQ',
      active: false,
      anchor: '#faq',
    },
    {
      name: 'Контакты',
      active: false,
      anchor: '#contacts',
    },
  ])

  return { menuItems, isOpen }
})
