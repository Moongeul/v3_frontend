import { LikesCntType } from '@/types/record'
import { QuoteType } from '@/types/write'
import { TagEnumType } from '@/types/user'
import { fetchMostRecordedBook } from '@/lib/server/book'

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
  isWishRead: boolean
}
export interface BookReviewType {
  postId: number
  nickname: string
  memberId: number
  readingTasteType: TagEnumType
  profileImage: string
  createdAt: string
  rating: number
  content: string
  quotes: QuoteType[]
  likesCnt: LikesCntType
}
export interface BestSellerType {
  isbn: string
  bookImage: string
  title: string
  author: string
}
export interface MostRecordedBookType {
  postId: number
  bookImage: string
  bookTitle: string
  isbn: string
  author: string
  publisher: string
  pubdate: string
  bookRating: number
  rating: number
  content: string
}
