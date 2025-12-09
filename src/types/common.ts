export interface APIResponseType <T>{
  status: number
  success: boolean
  message: string
  data: T
}

export interface UserType{
  role: string
  accessToken: string
  refreshToken: string
}
