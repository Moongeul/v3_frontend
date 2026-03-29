import { APIResponseType, BookShelfPaging, Paging } from '@/types/common'
import { BookShelfType, CalendarType, RecordType } from '@/types/record'
import { BookType } from '@/types/book'
import { CategoryRecordSortByType } from '@/types/mypage'

/**
 * 기록 전체 보기
 */
export const clientFetchAllPosts = async (params: {
  page: number
  size: number
  postVisibility: 'PUBLIC' | 'FOLLOWERS' | 'PRIVATE'
}): Promise<APIResponseType<Paging<RecordType[]>>> => {
  const { page = 1, size = 20, postVisibility = 'PUBLIC' } = params

  const searchParams = new URLSearchParams()
  searchParams.append('postVisibility', postVisibility)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/post?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
/**
 * 기록 전체 보기
 */
export const clientFetchAllDoneReadBooks = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<BookShelfType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/bookshelf/done-read?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 읽은 책 캘린더 조회 API
 */
export const clientFetchAllDoneReadCalendar = async (params: {
  userId?: number
  year: number
  month: number
}): Promise<APIResponseType<CalendarType>> => {
  const { userId, year = 2026, month = 3 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('year', year.toString())
  searchParams.append('month', month.toString())

  if (userId) {
    searchParams.append('userId', userId.toString())
  }

  const response = await fetch(`/api/bookshelf/done-read/calendar?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 읽고 싶은 책 전체 보기
 */
export const clientFetchAllWishReadBooks = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<BookType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/bookshelf/wish-read?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 읽은 책 별점 구간 상세 조회 API
 */
export const clientFetchAllRatingRangeRecords = async (params: {
  range: string
  userId?: number
  sortBy: CategoryRecordSortByType
  page: number
  size: number
}): Promise<APIResponseType<Paging<RecordType[]>>> => {
  const { page = 1, size = 20, sortBy, userId, range } = params
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())
  searchParams.append('sortBy', sortBy.toString())
  searchParams.append('range', range.toString())

  if (userId) {
    searchParams.append('userId', userId.toString())
  }

  // 요청 URL 조립
  const url = `/api/bookshelf/done-read/rating-summary/details?${searchParams.toString()}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    // 에러 핸들링을 추가하면 더 안전합니다.
    throw new Error('Failed to fetch posts')
  }

  return await response.json()
}

/**
 * 읽은 책별 기록 리스트 조회 API
 */
export const clientBookShelfDoneReadPosts = async (params: {
  page: number
  size: number
  userId?: string
  isbn: string
}): Promise<APIResponseType<BookShelfPaging<RecordType[]>>> => {
  const { page = 1, size = 20, userId, isbn } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  if (userId) {
    searchParams.append('userId', userId.toString())
  }

  const response = await fetch(`/api/bookshelf/done-read/${isbn}/posts?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
