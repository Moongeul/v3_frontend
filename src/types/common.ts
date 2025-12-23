export interface APIResponseType<T> {
  status: number
  success: boolean
  message: string
  data: T
}

export interface UserType {
  role: string
  accessToken: string
  refreshToken: string
}
//api.ts의 parseJsonResponse 타입 (프론트 BFF 구조시 불러오는 responseType)
export interface ApiCallResult<T = never> {
  success: boolean
  data?: T
  error?: string
}
