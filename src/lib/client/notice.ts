import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { NoticeType } from '@/types/notice'

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
