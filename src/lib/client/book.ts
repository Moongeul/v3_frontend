import { APIResponseType, Paging } from '@/types/common'
import { BookType } from '@/types/book'

/**
 * 공고 전체 보기
 */
export const clientFetchBookResults = async (params: {
  page: number
  size: number
  query?: string
}): Promise<APIResponseType<Paging<BookType[]>>> => {
  const { page = 0, size = 20, query } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  if (query) {
    searchParams.append('query', query)
  }

  const response = await fetch(`/api/book/search?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
