import { BookType } from '@/types/book'
import { TagEnumType } from '@/types/user'

export interface SearchType {
  bookData: BookType[]
  userData: SearchUserDataType[]
}
export interface SearchUserDataType {
  userId: number
  profileImage: string
  nickname: string
  readingTasteType: TagEnumType
}
