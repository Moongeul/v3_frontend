import { BookType } from '@/types/book'
import { ProfileInfoType } from '@/types/user'

export type RecordTabType = 'BOOKSHELF' | 'CALENDAR' | 'RATING' | 'REPORT' | 'WISHLIST'

export interface RecordType {
  postId: number
  bookInfo: BookType
  created: string
  rating: number
  content: string
  readDate: string
  quotesCnt: number
  quotes: QuoteType[]
  likesCnt: LikesCntType
  myLikesStatus: MyLikesStatusType
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

export interface LikesCntType {
  relatableCount: number
  sameTasteCount: number
  impressiveExpressionCount: number
  wantToReadCount: number
  helpfulCount: number
}
export type LikeType = 'RELATABLE' | 'SAME_TASTE' | 'IMPRESSIVE_EXPRESSION' | 'WANT_TO_READ' | 'HELPFUL'

export interface MyLikesStatusType {
  relatableCount: boolean
  sameTasteCount: boolean
  impressiveExpressionCount: boolean
  wantToReadCount: boolean
  helpfulCount: boolean
}
export interface CalendarType {
  year: number
  month: number
  data: CalendarDateType[]
}

export interface CalendarDateType {
  day: number
  postId: number
  isbn: string
  bookImage: string
  count: number
}
