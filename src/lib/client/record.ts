import { APIResponseType, Paging, TestPaging } from '@/types/common'
import { BookShelfType, RecordType } from '@/types/record'

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
}): Promise<APIResponseType<TestPaging<BookShelfType[]>>> => {
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
