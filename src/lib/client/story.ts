import { APIResponseType, Paging } from '@/types/common'
import { StoryDetailType } from '@/types/story'

/**
 * 스토리 전체 보기
 */
export const clientFetchAllStory = async (params: {
  page: number
  size: number
  postVisibility: 'PUBLIC' | 'FOLLOWERS' | 'PRIVATE'
}): Promise<APIResponseType<Paging<StoryDetailType[]>>> => {
  const { page = 1, size = 20, postVisibility = 'PUBLIC' } = params

  const searchParams = new URLSearchParams()
  searchParams.append('postVisibility', postVisibility)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/story?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
