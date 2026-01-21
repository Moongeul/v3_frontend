import { apiFetchServer } from '@/lib/api.server'
import { APIResponseType, Paging, TestPaging } from '@/types/common'
import { BookShelfType } from '@/types/record'

export const serverFetchAllPosts = async (page: number, size: number) => {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await apiFetchServer(`/v2/post?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

export const serverFetchAllDoneReadBooks = async (
  page: number,
  size: number
): Promise<APIResponseType<TestPaging<BookShelfType[]>>> => {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await apiFetchServer(`/v2/bookshelf/done-read?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
