import { apiCallServer } from '@/lib/api.server'
import { ApiCallResult } from '@/types/common'

/**
 * 미확인 알림 존재 여부 조회 API
 */
export const fetchUnReadNotification = async (): Promise<ApiCallResult<{ exist: boolean; count: number }>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/notification/unread`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('안읽은 알림 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
