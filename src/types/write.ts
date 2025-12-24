export interface CategoryResponseType {
  categoryList: CategoryType[]
}

export interface WriteDataType {
  postVisibility: PostVisibilityEnumType | null
  categoryId: number | null
  isbn: string | null
  readDate: string | null
  rating: number | null
  page: number | null
  content: string | null
  quotes: QuoteType[] | null
}

export type PostVisibilityEnumType = 'PUBLIC' | 'FOLLOWERS' | 'PRIVATE'

export interface QuoteType {
  quoteContent: string
  pageNumber: number
}

export interface CategoryType {
  categoryId: number
  title: string
}
