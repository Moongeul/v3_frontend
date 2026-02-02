import { BookType } from '@/types/book'
import { ProfileInfoType, TagEnumType } from '@/types/user'

export type RecordTabType = 'BOOKSHELF' | 'CALENDAR' | 'RATING' | 'REPORT' | 'WISHLIST'

export interface RecordType {
  bookInfo: BookType
  created: string
  rating: number
  content: string
  readDate: string
  quotesCnt: number
  quotes: QuoteType[]
  likesInfo: LikesInfoType
  memberInfo: ProfileInfoType
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
  borderColor: string
  backgroundColor: string
}

export interface LikesInfoType {
  relatableCount: number
  sameTasteCount: number
  impressiveExpressionCount: number
  wantToReadCount: number
  helpfulCount: number
}
