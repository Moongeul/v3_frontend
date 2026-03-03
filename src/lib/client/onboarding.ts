import { ApiCallResult } from '@/types/common'
import { AgreeTermsType } from '@/types/onboarding'

/**
 * 전화번호 인증코드 인증
 */
export const postSettingAgreeTerms = async (agreeTerms: AgreeTermsType): Promise<ApiCallResult<string>> => {
  try {
    const response = await fetch(`/api/setting/agree-terms`, {
      method: 'POST',
      body: JSON.stringify(agreeTerms),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('이용 약관 동의 데이터', data)
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
