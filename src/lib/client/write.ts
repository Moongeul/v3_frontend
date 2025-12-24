import { ApiCallResult } from '@/types/common'
import { CategoryType, WriteDataType } from '@/types/write'

/**
 * 카테고리 생성 API
 */
export const createCategory = async (category: string): Promise<ApiCallResult<ApiCallResult<CategoryType>>> => {
  try {
    const response = await fetch(`/api/category/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: category }),
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
 * 글쓰기 API
 */
export const createPost = async (
  writeData: WriteDataType
): Promise<
  ApiCallResult<
    ApiCallResult<{
      postId: number
    }>
  >
> => {
  try {
    const response = await fetch(`/api/post/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(writeData),
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
