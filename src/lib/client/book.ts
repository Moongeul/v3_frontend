import { APIResponseType, Paging } from '@/types/common'
import { BookSearchType, BookType } from '@/types/book'
import { SearchType } from '@/types/search'

/**
 * 책 검색 결과 전체 보기
 */
export const clientFetchBookResults = async (params: {
  page: number
  size: number
  query?: string
  type: BookSearchType
}): Promise<APIResponseType<Paging<SearchType>>> => {
  const { page = 0, size = 20, query, type = 'book' } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())
  searchParams.append('type', type.toString())

  if (query) {
    searchParams.append('query', query)
  }

  const response = await fetch(`/api/book/user/search?${searchParams.toString()}`, {
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
 * 읽고 싶은 책 등록
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

/**
 * 읽고 싶은 책 삭제
 */
export const clientDeleteWishReadBookIsbn = async (isbn: string): Promise<APIResponseType<string>> => {
  const response = await fetch(`/api/bookshelf/wish-read`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isbn: isbn }),
  })

  return await response.json()
}
