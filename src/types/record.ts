import { BookType } from '@/types/book'

export type RecordTabType = 'BOOKSHELF' | 'CALENDAR' | 'RATING' | 'REPORT' | 'WISHLIST'

export interface RecordType {
  bookInfo: BookType
  rating: number
  content: string
  quotes: QuoteType[]
}

export interface QuoteType {
  quoteContent: string
  pageNumber: number
}

export interface BookShelfType {
  articleId: number
  isbn: string
  title: string
  ratingAverage: number
  ratingCount: number
  weight: number
  height: number
  postCount: number
}
