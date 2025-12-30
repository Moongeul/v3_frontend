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
  books: T
}

export interface UserType {
  role: string
  accessToken: string
  refreshToken: string
}

export interface ApiCallResult<T = never> {
  success: boolean
  data?: T
  error?: string
}
