import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { StoryDetailType } from '@/types/story'

/**
 * 스토리 전체 보기
 */
export const clientFetchAllStory = async (params: {
  page: number
  size: number
  postVisibility: 'PUBLIC' | 'FOLLOWERS' | 'PRIVATE'
}): Promise<APIResponseType<Paging<StoryDetailType[]>>> => {
  const { page = 1, size = 20, postVisibility = 'PUBLIC' } = params

  const searchParams = new URLSearchParams()
  searchParams.append('postVisibility', postVisibility)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/story?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 스토리 삭제 API
 */
export const deleteStory = async (storyId: string | number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/story/${storyId}`, {
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
