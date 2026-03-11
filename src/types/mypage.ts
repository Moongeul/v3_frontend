import { TagEnumType } from '@/types/user'

export type FollowStatusType = 'NONE' | 'PENDING' | 'ACCEPTED'

export interface FollowUserInfoType {
  id: number
  profileImage: string
  nickname: string
  readingTasteType: TagEnumType
  myFollowStatus: FollowStatusType
}
export interface MyCategoryResponseType {
  totalPostCount: number
  data: MyCategoryType[]
}
export interface MyCategoryType {
  categoryId: number
  categoryTitle: string
  postCount: number
}
export type CategoryRecordSortByType = 'LATEST' | 'OLDEST' | 'RATING_HIGH' | 'RATING_LOW'

export interface WithDrawType {
  reason: string | undefined
  detailReason: string | undefined
}
