export interface UserInfoType {
  id: number
  name: string
  profileImage: string
  nickname: string
  readingTasteType: TagEnumType
}
export type TagEnumType =
  | 'EMOTIONAL_REFLECTOR' // 감성 사색 정리러
  | 'CHATTY_READER' //수다쟁이 독서가
  | 'TREND_HUNTER' // 신상 헌터
  | 'SYSTEMATIC_READER' //정리왕 서평러
  | 'IMMERSIVE_READER' //  넷플릭스급 몰입러
  | 'SECRET_DIARIST' // 비밀 일기장 주인
  | 'GENRE_SPECIALIST' //장르 고인물
  | 'RANDOM_PICKER' //랜덤 피커

export type TagKorType =
  | '감성 사색 정리러'
  | '수다쟁이 독서가'
  | '신상 헌터'
  | '정리왕 서평러'
  | '넷플릭스급 몰입러'
  | '비밀 일기장 주인'
  | '장르 고인물'
  | '랜덤 피커'

export interface ProfileInfoType {
  id: number
  nickname: string
  profileImage: string
  readingTasteType: TagEnumType
}
