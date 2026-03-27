import { create } from 'zustand'
import { PostVisibilityEnumType, QuoteType } from '@/types/write'
import { CreateQuestionType, EditAnswerType } from '@/types/question'

// 기존에 정의하신 타입들을 import 하세요.
// import { PostVisibilityEnumType, QuoteType } from '@/types/...';

export interface WriteDataType {
  postVisibility: PostVisibilityEnumType | null
  categoryId: number | null
  isbn: string | null
  readDate: string | null
  rating: number | null
  page: number | null
  content: string | null
  quotes: QuoteType[] | null
}

interface EditState {
  editData: WriteDataType
  questionEditData: CreateQuestionType
  answerEditData: EditAnswerType

  setQuestionField: <K extends keyof CreateQuestionType>(field: K, value: CreateQuestionType[K]) => void
  // 개별 필드 수정 함수
  setField: <K extends keyof WriteDataType>(field: K, value: WriteDataType[K]) => void
  // 여러 필드 동시 수정 함수
  setEditData: (data: Partial<WriteDataType>) => void
  // 초기화 함수
  setAnswerEditField: <K extends keyof EditAnswerType>(field: K, value: EditAnswerType[K]) => void
  resetEditData: () => void
}

const initialWriteData: WriteDataType = {
  postVisibility: null,
  categoryId: null,
  isbn: null,
  readDate: null,
  rating: null,
  page: null,
  content: null,
  quotes: [], // null보다는 빈 배열이 조작하기 편할 수 있습니다.
}

const initialQuestion = {
  isbn: '',
  content: '',
}

const initialAnswer = {
  answerId: '',
  content: '',
}

export const useEditStore = create<EditState>((set) => ({
  editData: initialWriteData,
  questionEditData: initialQuestion,
  answerEditData: initialAnswer,

  // 특정 필드 하나만 바꿀 때: setField('rating', 5)
  setField: (field, value) =>
    set((state) => ({
      editData: {
        ...state.editData,
        [field]: value,
      },
    })),

  // 여러 필드를 한꺼번에 바꿀 때 (예: API 데이터 로드 시)
  setEditData: (data) =>
    set((state) => ({
      editData: {
        ...state.editData,
        ...data,
      },
    })),

  // 특정 필드 하나만 바꿀 때: setField('rating', 5)
  setQuestionField: (field, value) =>
    set((state) => ({
      questionEditData: {
        ...state.questionEditData,
        [field]: value,
      },
    })),
  // 특정 필드 하나만 바꿀 때: setField('rating', 5)
  setAnswerEditField: (field, value) =>
    set((state) => ({
      answerEditData: {
        ...state.answerEditData,
        [field]: value,
      },
    })),

  // 데이터 초기화
  resetEditData: () => set({ editData: initialWriteData }),
}))
