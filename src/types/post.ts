import { TagEnumType } from '@/types/user'

export interface WeeklyRecommendBookType {
  postId: number
  bookImage: string
  bookTitle: string
  isbn: string
  author: string
  publisher: string
  pubdate: string
  bookRating: number
  profileImage: string
  rating: number
  content: string
  readingTasteType: TagEnumType
}
