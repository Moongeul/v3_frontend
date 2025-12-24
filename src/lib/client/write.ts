import { ApiCallResult, APIResponseType } from '@/types/common'
import { CategoryResponseType, CategoryType, WriteDataType } from '@/types/write'

/**
 *
 */
export const postCategory = async (category: string): Promise<ApiCallResult<ApiCallResult<CategoryType>>> => {
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

export const getCategory = async (page: number, size: number): Promise<ApiCallResult<CategoryResponseType>> => {
  try {
    const response = await fetch(`/api/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      return { success: false, error: error.error || 'Failed to submit' }
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
