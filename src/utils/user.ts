import { TagEnumType, TagKorType } from '@/types/user'

export const convertEnumToKorTag = (tag: TagEnumType | undefined): TagKorType | undefined => {
  switch (tag) {
    case 'CHATTY_READER':
      return '수다쟁이 독서가'
    case 'EMOTIONAL_REFLECTOR':
      return '감성 사색 정리러'
    case 'TREND_HUNTER':
      return '신상 헌터'
    case 'SYSTEMATIC_READER':
      return '정리왕 서평러'
    case 'IMMERSIVE_READER':
      return '넷플릭스급 몰입러'
    case 'SECRET_DIARIST':
      return '비밀 일기장 주인'
    case 'GENRE_SPECIALIST':
      return '장르 고인물'
    case 'RANDOM_PICKER':
      return '랜덤 피커'
  }
}
export const convertKorToEnumTag = (tag: TagKorType | undefined): TagEnumType | undefined => {
  switch (tag) {
    case '수다쟁이 독서가':
      return 'CHATTY_READER'
    case '감성 사색 정리러':
      return 'EMOTIONAL_REFLECTOR'
    case '신상 헌터':
      return 'TREND_HUNTER'
    case '정리왕 서평러':
      return 'SYSTEMATIC_READER'
    case '넷플릭스급 몰입러':
      return 'IMMERSIVE_READER'
    case '비밀 일기장 주인':
      return 'SECRET_DIARIST'
    case '장르 고인물':
      return 'GENRE_SPECIALIST'
    case '랜덤 피커':
      return 'RANDOM_PICKER'
  }
}
