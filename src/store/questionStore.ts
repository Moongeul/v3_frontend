import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CreateQuestionType } from '@/types/question'

interface QuestionState {
  question: CreateQuestionType
  setQuestion: (question: Partial<CreateQuestionType>) => void
}

const initialQuestion = {
  isbn: '',
  content: '',
}

export const useQuestionStore = create<QuestionState>()(
  devtools((set) => ({
    // 초기값
    question: initialQuestion,

    setQuestion: (question) =>
      set((state) => ({
        question: {
          ...state.question,
          ...question,
        },
      })),
  }))
)
