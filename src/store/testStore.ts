import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// 타입을 명확하게 정의하여 자동 완성을 돕습니다.
type StepType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type AnswerType = 'A' | 'B'

interface TestAnswerType {
  answers: Record<StepType, AnswerType | null> // 초기값은 null일 수 있음
}

interface TestState {
  testAnswers: TestAnswerType
  // 특정 단계(step)의 답변(value)만 변경하는 함수
  setTestAnswer: (step: StepType, value: AnswerType) => void
  resetAnswers: () => void
}

const initialAnswers: TestAnswerType = {
  answers: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
  },
}

export const useTestStore = create<TestState>()(
  devtools((set) => ({
    testAnswers: initialAnswers,

    setTestAnswer: (step, value) =>
      set((state) => ({
        testAnswers: {
          ...state.testAnswers,
          answers: {
            ...state.testAnswers.answers,
            [step]: value,
          },
        },
      })),

    resetAnswers: () => set({ testAnswers: initialAnswers }),
  }))
)
