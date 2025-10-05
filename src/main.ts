import { createApp } from 'vue'
import './assets/styles/tailwind.css'
import './assets/styles/styles.scss'
import 'animate.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupModals } from './plugins/modals'
import { vAnimateOnScroll } from './directives/animateOnScroll'
import { useUserStore } from './store/userStore'

const pinia = createPinia()

// Инициализируем систему модальных окон
setupModals()

const app = createApp(App)
app.directive('animate-on-scroll', vAnimateOnScroll)
app.use(pinia)

// Инициализируем аватар после монтирования приложения
app.mount('#app')

// Запускаем инициализацию аватара после монтирования
const userStore = useUserStore()
console.log('Starting avatar initialization...')
userStore.initializeAvatar()
