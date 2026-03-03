import { ApiCallResult } from '@/types/common'
import { AgreeTermsType } from '@/types/onboarding'

/**
 * 이용약관 동의 api 호출
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

/**
 * 이미지/파일 업로드
 */
export const uploadFile = async (file: File): Promise<ApiCallResult<void>> => {
  try {
    const formData = new FormData()
    formData.append('profileImage', file)

    const response = await fetch(`/api/member/profile-image`, {
      method: 'PATCH',
      body: formData,
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
/**
 * 랜덤 닉네임 재생성 API
 */
export const postMemberNicknameRegenerate = async (): Promise<ApiCallResult<{ nickname: string }>> => {
  try {
    const response = await fetch(`/api/member/nickname/regenerate`, {
      method: 'POST',
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
    console.log('랜덤 닉네임 데이터', data)
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
/**
 * 중복확인
 */
export const fetchMemberNicknameCheck = async (
  nickname: string
): Promise<
  ApiCallResult<{
    isDuplicate: true
  }>
> => {
  try {
    const response = await fetch(`/api/member/nickname/check?nickname=${nickname}`, {
      method: 'GET',
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
    console.log('닉네임 중복 데이터', data)
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 닉네임 설정
 */
export const patchMemberNickname = async (
  nickname: string
): Promise<
  ApiCallResult<{
    nickname: string
  }>
> => {
  try {
    const response = await fetch(`/api/member/nickname`, {
      method: 'PATCH',
      body: JSON.stringify({ nickname: nickname }),
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
    console.log('닉네임 중복 데이터', data)
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
