import { ApiCallResult } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { StoryDetailType } from '@/types/story'

/**
 * 책 상세 정보 조회 API
 */
export const fetchStoryDetail = async (storyId: string): Promise<ApiCallResult<StoryDetailType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/story/${storyId}`, {
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
