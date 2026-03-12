import { create } from 'zustand' // 'zustand/index' 대신 'zustand'로 충분합니다.
import { devtools } from 'zustand/middleware'

interface SearchState {
  searchValue: string

  // 업데이트 함수들
  setSearchValue: (searchValue: string) => void
}
export const useSearchStore = create<SearchState>()(
  devtools((set) => ({
    // 1. 초기값 설정
    searchValue: '',

    // 2. 폰트 타입 수정 함수
    setSearchValue: (searchValue) => set({ searchValue: searchValue }, false, 'story/setSearchValue'),
  }))
)
