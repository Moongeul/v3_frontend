import { APIResponseType, Paging } from '@/types/common'
import { AlarmType } from '@/types/alarm'

export const clientFetchAllAlarms = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<AlarmType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/notification?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
