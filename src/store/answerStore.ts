import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CreateAnswerType } from '@/types/question'

interface AnswerState {
  createAnswer: Partial<CreateAnswerType>
  updateAnswer: <K extends keyof CreateAnswerType>(field: K, value: CreateAnswerType[K]) => void
}
const initCreateAnswer = { questionId: 0, content: '' }

export const useAnswerStore = create<AnswerState>()(
  devtools((set, get) => ({
    createAnswer: initCreateAnswer,
    // 회원가입 데이터 업데이트
    updateAnswer: (field, value) =>
      set(
        (state) => ({
          createAnswer: { ...state.createAnswer, [field]: value },
        }),
        false,
        `answer/update_${field}`
      ),
  }))
)
