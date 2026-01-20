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
