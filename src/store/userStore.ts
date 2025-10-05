import { ref } from 'vue'
import { defineStore } from 'pinia'
import { log } from 'console'
import CryptoJS from 'crypto-js'

interface User {
  message: string
  rankLevel: number
  requiredLevel: number
  requiredRank: string
  success: boolean
  userRank: string
  avatar?: string
  // Дополнительные данные пользователя из API
  id?: string
  chk?: string
  family?: string
  name?: string
  ref?: string
  vk?: string
  facebook?: string
  instagram?: string
  mobile?: string
  email?: string
  lang?: string
  lang_dhp?: string
  lang_alive?: string
  linkedin?: string
  telegram?: string
  whatsapp?: string
}

interface UserApiResponse {
  status: boolean
  data: {
    // Числовые индексы (0, 1, 2, 3...)
    [key: number]: string
    // Именованные поля
    id: string
    chk: string
    family: string
    name: string
    ref: string
    vk: string
    facebook: string
    instagram: string
    mobile: string
    email: string
    lang: string
    lang_dhp: string
    lang_alive: string
    linkedin: string
    telegram: string
    whatsapp: string
  }
}

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>()

  const setUser = (data: User) => {
    console.log(data)
    user.value = data
  }

  // Get memberId from URL parameters
  const getMemberIdFromUrl = (): string | null => {
    const urlParams = new URLSearchParams(window.location.search)
    const memberId = urlParams.get('user')
    console.log('Current URL:', window.location.href)
    console.log('URL search params:', window.location.search)
    console.log('Extracted memberId:', memberId)
    return memberId
  }

  // Generate hash for avatar request
  const generateAvatarHash = (memberId: string): string => {
    return CryptoJS.MD5(memberId + 'Sec_T6vb1J').toString()
  }

  // Fetch avatar from server
  const fetchAvatar = async (memberId: string): Promise<string | null> => {
    try {
      const hash = generateAvatarHash(memberId)
      // Используем локальный прокси вместо прямого запроса
      const proxyUrl = `/avatar/${memberId}/${hash}`
      const avatarUrl = `https://ru.coralorder.online/restApi/avatar/${memberId}/${hash}`

      console.log('Fetching avatar from proxy:', proxyUrl)
      console.log('Generated hash:', hash)

      const response = await fetch(proxyUrl)
      console.log('Response status:', response.status)

      if (response.ok) {
        const data = await response.json()
        console.log('Server response:', data)

        // Извлекаем src из ответа сервера
        if (data && data.src) {
          console.log('Avatar src from server:', data.src)
          return data.src
        } else {
          console.warn('No src field in server response')
          return null
        }
      } else {
        console.warn(
          'Failed to fetch avatar:',
          response.status,
          response.statusText
        )
        return null
      }
    } catch (error) {
      console.error('Error fetching avatar:', error)
      return null
    }
  }

  // Filter out numeric indices from API response data
  const filterUserData = (data: any): any => {
    const filteredData: any = {}

    // Копируем только именованные поля, исключая числовые индексы
    Object.keys(data).forEach((key) => {
      // Проверяем, что ключ не является числом
      if (isNaN(Number(key))) {
        filteredData[key] = data[key]
      }
    })

    return filteredData
  }

  // Fetch additional user data from API
  const fetchUserData = async (
    chk: string
  ): Promise<UserApiResponse | null> => {
    try {
      const apiUrl = `https://dhp.coral-club.com/api/user.php?chk=${chk}`
      console.log('Fetching user data from:', apiUrl)

      const response = await fetch(apiUrl)
      console.log('User data response status:', response.status)

      if (response.ok) {
        const data: UserApiResponse = await response.json()
        console.log('User data response:', data)

        if (data.status && data.data) {
          // Фильтруем данные, убирая числовые индексы
          const filteredData = filterUserData(data.data)
          console.log('Filtered user data:', filteredData)

          return {
            ...data,
            data: filteredData,
          }
        } else {
          console.warn('Invalid user data response structure')
          return null
        }
      } else {
        console.warn(
          'Failed to fetch user data:',
          response.status,
          response.statusText
        )
        return null
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      return null
    }
  }

  // Load user data with avatar and additional data
  const loadUserWithAvatar = async (userData: User) => {
    const memberId = getMemberIdFromUrl()

    if (memberId) {
      // Загружаем аватар
      const avatarUrl = await fetchAvatar(memberId)
      if (avatarUrl) {
        userData.avatar = avatarUrl
      }

      // Загружаем дополнительные данные пользователя
      const userApiData = await fetchUserData(memberId)
      if (userApiData && userApiData.data) {
        // Объединяем данные из API с существующими данными пользователя
        userData = {
          ...userData,
          ...userApiData.data,
        }
      }
    }

    setUser(userData)
  }

  // Initialize avatar and user data loading on page load
  const initializeAvatar = async () => {
    const memberId = getMemberIdFromUrl()
    console.log('Initializing avatar and user data for memberId:', memberId)

    if (memberId) {
      // Загружаем аватар и дополнительные данные параллельно
      const [avatarUrl, userApiData] = await Promise.all([
        fetchAvatar(memberId),
        fetchUserData(memberId),
      ])

      console.log('Avatar URL:', avatarUrl)
      console.log('User API data:', userApiData)

      // Если пользователь уже есть, обновляем его данные
      if (user.value) {
        if (avatarUrl) {
          user.value.avatar = avatarUrl
        }
        if (userApiData && userApiData.data) {
          user.value = {
            ...user.value,
            ...userApiData.data,
          }
        }
      } else {
        // Если пользователя нет, создаем объект с аватаром и дополнительными данными
        const userData: User = {
          message: '',
          rankLevel: 0,
          requiredLevel: 0,
          requiredRank: '',
          success: true,
          userRank: '',
        }

        if (avatarUrl) {
          userData.avatar = avatarUrl
        }

        if (userApiData && userApiData.data) {
          Object.assign(userData, userApiData.data)
        }

        setUser(userData)
      }
    } else {
      console.log('No memberId found in URL')
    }
  }

  return {
    user,
    setUser,
    getMemberIdFromUrl,
    generateAvatarHash,
    fetchAvatar,
    fetchUserData,
    loadUserWithAvatar,
    initializeAvatar,
  }
})
