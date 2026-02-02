import { TagEnumType } from '@/types/user'

export interface WeeklyRecommendBookType {
  postId: number
  bookImage: string
  authorName: string
  profileImage: string
  rating: number
  content: string
  readingTasteType: TagEnumType
}
