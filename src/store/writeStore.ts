import { create } from 'zustand'
import { WriteDataType } from '@/types/write'

// 1. 초기 상태를 상수로 분리 (초기화 시 재사용)
const initialWriteData: WriteDataType = {
  quotes: null,
  isbn: null,
  categoryId: null,
  page: null,
  content: null,
  postVisibility: 'PUBLIC',
  rating: null,
  readDate: null,
}

interface SetWriteStoreType {
  writeData: WriteDataType
}

interface ArchiveStoreType {
  writeData: WriteDataType
  setState: (params: SetWriteStoreType) => void
  resetWriteData: () => void // 2. 초기화 함수 타입 정의
}

export const useWriteStore = create<ArchiveStoreType>((set) => ({
  writeData: initialWriteData,

  setState: (params: SetWriteStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },

  // 3. 초기화 함수 구현
  resetWriteData: () => {
    set({ writeData: initialWriteData })
  },
}))
