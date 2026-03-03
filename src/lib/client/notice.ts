import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { NoticeType, WriteNoticeType } from '@/types/notice'

export const clientFetchAllNotices = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<NoticeType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/setting/notice?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 공지사항 생성 API
 */
export const createNotice = async (writeNoticeData: WriteNoticeType): Promise<ApiCallResult<NoticeType>> => {
  try {
    const response = await fetch(`/api/setting/notice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(writeNoticeData),
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
