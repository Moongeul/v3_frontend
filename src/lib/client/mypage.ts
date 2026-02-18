import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { RecordType } from '@/types/record'
import { number } from 'framer'
import { CategoryRecordSortByType } from '@/types/mypage'

/**
 * 팔로우 API
 */
export const postFollow = async (id: number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/member/follow/${id}`, {
      method: 'POST',
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
/**
 * 언팔로우 API
 */
export const postUnFollow = async (id: number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/member/unfollow/${id}`, {
      method: 'POST',
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
/**
 * 기록 전체 보기
 */
export const clientFetchAllCategoryRecords = async (params: {
  categoryId: string
  userId?: number
  sortBy: CategoryRecordSortByType
  page: number
  size: number
}): Promise<APIResponseType<Paging<RecordType[]>>> => {
  const { page = 1, size = 20, sortBy, userId, categoryId } = params

  // userId가 존재할 때만 '&userId=값' 문자열을 생성하고, 없으면 빈 문자열을 반환합니다.
  const userIdQuery = userId ? `&userId=${userId}` : ''

  // 요청 URL 조립
  const url = `/api/member/post-stats/${categoryId}?sortBy=${sortBy}&page=${page}&size=${size}${userIdQuery}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    // 에러 핸들링을 추가하면 더 안전합니다.
    throw new Error('Failed to fetch posts')
  }

  return await response.json()
}
