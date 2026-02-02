import { ApiCallResult } from '@/types/common'
import { BookType } from '@/types/book'
import { apiCallServer } from '@/lib/api.server'
import { WeeklyRecommendBookType } from '@/types/post'

/**
 * 주간 추천 기록 조회 API
 */
export const fetchWeeklyRecommendBook = async (): Promise<ApiCallResult<WeeklyRecommendBookType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/post/weekly-recommendation`, {
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
