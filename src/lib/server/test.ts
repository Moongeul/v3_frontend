import { apiCallServer } from '@/lib/api.server'
import { ApiCallResult } from '@/types/common'

/**
 * 독서 취향 테스트 참여자 수 반환 API
 */
export const fetchReadingTasteTotalCount = async (): Promise<ApiCallResult<{ totalParticipants: number }>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/reading-taste/total-count`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('독서 취향 테스트 참여자수 반환 실패', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
