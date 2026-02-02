import { ProfileInfoType } from '@/types/user'

export interface CreateQuestionType {
  isbn: string
  content: string
}

export interface QuestionType {
  questionId: number
  content: string
  commentCnt: number
  createdAt: string
  myArticle: boolean
  bookInfo: QuestionBookInfoType
  participantCount: number
  participantProfileImages: string[]
}

export interface QuestionBookInfoType {
  isbn: string
  bookImage: string
  title: string
  author: string
  publisher: string
  pubdate: string
  ratingAverage: number
}

export interface CreateAnswerType {
  questionId: number
  content: string
}

export interface AnswerType {
  answerId: number
  content: string
  createdAt: string
  myAnswer: boolean
  memberInfo: ProfileInfoType
}
