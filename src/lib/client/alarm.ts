import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { AlarmType } from '@/types/alarm'

export const clientFetchAllAlarms = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<AlarmType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/notification?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 미확인 알림 존재 여부 조회 API
 */
export const notificationUnRead = async (): Promise<
  ApiCallResult<
    ApiCallResult<{
      exist: boolean
      count: number
    }>
  >
> => {
  try {
    const response = await fetch(`/api/notification/unread`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
