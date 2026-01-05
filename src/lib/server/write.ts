import { ApiCallResult } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { CategoryResponseType } from '@/types/write'

/**
 * 내 카테고리 전체 조회 API
 */
export const getCategory = async (): Promise<ApiCallResult<CategoryResponseType>> => {
  try {
    const { data, error } = await apiCallServer('/v2/category', {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Failed to fetch session absence:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
