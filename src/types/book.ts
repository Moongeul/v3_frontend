import { LikesCntType } from '@/types/record'
import { QuoteType } from '@/types/write'
import { TagEnumType } from '@/types/user'

export type BookSearchType = 'book' | 'user' | 'all'

export interface BookType {
  isbn: string
  bookImage: string
  title: string
  author: string
  publisher: string
  description: string
  ratingAverage: number
  pubdate: string
  ratingCount: number
}
export interface BookReviewType {
  postId: number
  nickname: string
  readingTasteType: TagEnumType
  profileImage: string
  createdAt: string
  rating: number
  content: string
  quotes: QuoteType[]
  likesCnt: LikesCntType
}
