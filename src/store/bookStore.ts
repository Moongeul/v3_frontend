import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BookState {
  searchValue: string
  setSearchValue: (searchValue: string) => void
}

const initialBook = {
  searchValue: '',
}

export const useBookStore=create<BookState> ()(
  devtools((set) => ({
    // 초기값
    login: initialBook.searchValue,

    setSearchValue: (searchValue) =>
      set(() => ({
        searchValue: searchValue,
      })),
  }))
)
