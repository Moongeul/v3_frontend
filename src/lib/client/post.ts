import { ApiCallResult, APIResponseType } from '@/types/common'
import { LikeType } from '@/types/record'

/**
 * 전화번호 인증코드 인증
 */
export const postLikeId = async (id: number, likeType: LikeType): Promise<ApiCallResult<string>> => {
  try {
    const response = await fetch(`/api/post/like/${id}`, {
      method: 'POST',
      body: JSON.stringify({ likeType: likeType }),
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
    console.log('공감 버튼 데이터', data)
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
 * 질문 리스트 조회
 */
export const clientWritingGuide = async (): Promise<APIResponseType<string>> => {
  const response = await fetch(`/api/post/writing-guide`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 게시글 삭제
 */
export const deletePost = async (postId: string | number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'DELETE',
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
