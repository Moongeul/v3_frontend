import { TagKorType } from '@/types/user'

export interface TestAnswerType {
  answers: {
    1: 'A' | 'B'
    2: 'A' | 'B'
    3: 'A' | 'B'
    4: 'A' | 'B'
    5: 'A' | 'B'
    6: 'A' | 'B'
    7: 'A' | 'B'
    8: 'A' | 'B'
    9: 'A' | 'B'
    10: 'A' | 'B'
    11: 'A' | 'B'
    12: 'A' | 'B'
  }
}
export interface TestResultType {
  readingTasteType: TagKorType
  intro: string
}
