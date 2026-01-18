export interface UserInfoType {
  id: number
  name: string
  profileImage: string
  nickname: string
  readingTasteType: TagType
}
export type TagType =
  | 'EMOTIONAL_REFLECTOR'
  | 'CHATTY_READER'
  | 'TREND_HUNTER'
  | 'SYSTEMATIC_READER'
  | 'IMMERSIVE_READER'
  | 'SECRET_DIARIST'
  | 'GENRE_SPECIALIST'
  | 'RANDOM_PICKER'
