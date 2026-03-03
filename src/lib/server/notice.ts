import { apiCallServer } from '@/lib/api.server'
import { ApiCallResult } from '@/types/common'
import { NoticeType } from '@/types/notice'

/**
 * 공지사항 상세 정보 조회
 */
export const fetchNoticeDetailData = async (id: string): Promise<ApiCallResult<NoticeType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/setting/notice/${id}`, {
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
