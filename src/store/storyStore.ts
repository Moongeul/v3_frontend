import { create } from 'zustand' // 'zustand/index' 대신 'zustand'로 충분합니다.
import { devtools } from 'zustand/middleware'
import { QuoteType } from '@/types/record'

export type StoryFontType = 'suit' | 'myeongjo' | 'memoment'
export type OptionTabType = 'quote' | 'font' | 'background'
export type MenuType = 'review' | 'quote'

interface StoryState {
  menu: MenuType
  selectedQuotes: QuoteType[]
  tab: OptionTabType
  fontType: StoryFontType
  bgColor: string

  // 업데이트 함수들
  setTab: (tab: OptionTabType) => void
  setFontType: (font: StoryFontType) => void
  setBgColor: (color: string) => void
  setMenu: (menu: MenuType) => void

  toggleQuote: (quote: QuoteType) => void
}
export const useStoryStore = create<StoryState>()(
  devtools((set) => ({
    // 1. 초기값 설정
    menu: 'review',
    fontType: 'suit',
    bgColor: '#FFFEF6', // 기본 배경색 (테마의 textFieldFill 등)
    tab: 'background',
    selectedQuotes: [], // 초기값 빈 배열

    // 2. 폰트 타입 수정 함수
    setFontType: (font) => set({ fontType: font }, false, 'story/setFontType'),

    // 3. 배경색 수정 함수
    setBgColor: (color) => set({ bgColor: color }, false, 'story/setBgColor'),

    setTab: (tab) => set({ tab: tab }, false, 'story/setTab'),

    setMenu: (menu) => set({ menu: menu }, false, 'story/setMenu'),

    toggleQuote: (quote: QuoteType) =>
      set(
        (state) => {
          const isSelected = state.selectedQuotes.some((q) => q.quoteContent === quote.quoteContent)
          const nextQuotes = isSelected
            ? state.selectedQuotes.filter((q) => q.quoteContent !== quote.quoteContent)
            : [...state.selectedQuotes, quote]

          return { selectedQuotes: nextQuotes }
        },
        false,
        'story/toggleQuote'
      ),
  }))
)
