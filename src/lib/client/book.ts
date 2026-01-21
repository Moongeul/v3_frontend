import { APIResponseType, Paging } from '@/types/common'
import { BookType } from '@/types/book'

/**
 * 책 검색 결과 전체 보기
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

/**
 * 책 검색 결과 전체 보기
 */
export const clientFetchBookDetail = async (isbn: string): Promise<APIResponseType<BookType>> => {
  const response = await fetch(`/api/book/${isbn}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
/**
 * 책 검색 결과 전체 보기
 */
export const clientPostWishReadBookIsbn = async (isbn: string): Promise<APIResponseType<string>> => {
  const response = await fetch(`/api/bookshelf/wish-read`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isbn: isbn }),
  })

  return await response.json()
}
