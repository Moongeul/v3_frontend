export interface APIResponseType<T> {
  status: number
  success: boolean
  message: string
  data: T
}

export interface Paging<T> {
  total: number
  page: number
  size: number
  totalPages: number
  isLast: boolean
  data: T
}
export interface TestPaging<T> {
  total: number
  page: number
  size: number
  totalPages: number
  isLast: boolean
  books: T
}

export interface UserType {
  memberId: number
  role: string
  accessToken: string
  refreshToken: string
  isReadingTaste: boolean
}

export interface ApiCallResult<T = never> {
  success: boolean
  data?: T
  error?: string
}
