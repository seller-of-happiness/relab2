export interface SendEmailPayload {
  eventCode: string
  countryCode: string
  languageCode: string
  email: string
  NAME: string
  NEW_USER_MEMBER_ID: string
  NEW_USER_NAME: string
  NEW_USER_EMAIL: string
  NEW_USER_PHONE: string
}

export interface SendEmailResponse {
  success: boolean
  message?: string
}

const ENDPOINT = 'https://coralclub.ru/restApi/v4/notify/sendEmail'

export async function sendEmail(
  payload: SendEmailPayload
): Promise<SendEmailResponse> {
  const formData = new URLSearchParams()
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value)
  })

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formData.toString(),
    // credentials omitted intentionally; endpoint is public per spec
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(text || `Request failed with status ${response.status}`)
  }

  // Try to parse JSON, fallback to text
  try {
    const data = await response.json()
    return {
      success: true,
      message: typeof data === 'string' ? data : undefined,
    }
  } catch {
    const text = await response.text().catch(() => '')
    return { success: true, message: text }
  }
}
