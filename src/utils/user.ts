import { TagType } from '@/types/user'

export const convertTag = (tag: TagType | undefined) => {
  switch (tag) {
    case 'CHATTY_READER':
      return '수다쟁이 책러'
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
    default:
      return '기타'
  }
}
