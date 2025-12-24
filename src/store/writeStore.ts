import { create } from 'zustand'
import { WriteDataType } from '@/types/write'

interface SetWriteStoreType {
  writeData: WriteDataType
}

interface ArchiveStoreType {
  writeData: WriteDataType
  setState: (params: SetWriteStoreType) => void
}

export const useWriteStore = create<ArchiveStoreType>((set) => ({
  writeData: {
    quotes: null,
    isbn: null,
    categoryId: null,
    page: null,
    content: null,
    postVisibility: 'PUBLIC',
    rating: null,
    readDate: null,
  },
  setState: (params: SetWriteStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
