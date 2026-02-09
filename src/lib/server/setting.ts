import { apiCallServer } from '@/lib/api.server'
import { ApiCallResult } from '@/types/common'
import { PrivacyLevelType } from '@/types/setting'

/**
 * 책 리뷰 정보 조회 API
 */
export const fetchSettingPrivacyLevel = async (): Promise<ApiCallResult<{ privacyLevel: PrivacyLevelType }>> => {
  try {
    const { data, error } = await apiCallServer(`/v1/setting/privacy-level`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('책 상세 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
