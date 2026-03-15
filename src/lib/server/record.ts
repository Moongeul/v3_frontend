import { apiFetchServer } from '@/lib/api.server'
import { APIResponseType, Paging } from '@/types/common'
import { BookShelfType, RecordType } from '@/types/record'
import { BookType } from '@/types/book'

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
  size: number,
  userId?: string
): Promise<APIResponseType<Paging<BookShelfType[]>>> => {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  if (userId) {
    searchParams.append('userId', userId.toString())
  }

  const response = await apiFetchServer(`/v2/bookshelf/done-read?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

export const serverFetchAllDoneReadRatingSummary = async (
  userId?: string
): Promise<APIResponseType<{ totalBooks: number; data: { range: string; count: number }[] }>> => {
  const searchParams = new URLSearchParams()
  if (userId) {
    searchParams.append('userId', userId.toString())
  }

  const response = await apiFetchServer(`/v2/bookshelf/done-read/rating-summary?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

export const serverFetchAllWishReadBooks = async (
  page: number,
  size: number
): Promise<APIResponseType<Paging<BookType[]>>> => {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await apiFetchServer(`/v2/bookshelf/wish-read?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

export const serverFetchPostDetail = async (postId: number): Promise<APIResponseType<RecordType>> => {
  const response = await apiFetchServer(`/v2/post/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
