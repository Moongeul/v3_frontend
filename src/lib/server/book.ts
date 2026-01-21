import { ApiCallResult } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { BookType } from '@/types/book'

/**
 * 책 상세 정보 조회 API
 */
export const fetchBookDetailInfo = async (isbn: string | string[]): Promise<ApiCallResult<BookType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/book/${isbn}`, {
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
