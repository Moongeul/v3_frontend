import { DarkSelectedBookshelfIcon, DarkUnselectedBookshelfIcon } from '@/assets/svgComponents/dark'
import { NavBookshelfSelectedIcon, NavBookshelfUnselectedIcon, NavHomeUnselectedIcon } from '@/assets/svgComponents' // 아이콘 경로 확인

interface NavBookShelfIconProps {
  path: string
  isDarkMode: boolean // 다크모드 여부를 프롭으로 받거나 context에서 가져옵니다.
}

export default function NavBookShelfIcon({ path, isDarkMode }: NavBookShelfIconProps) {
  const isSelected = path === '/record'

  // 1. 선택 여부에 따른 아이콘 결정
  if (isSelected) {
    return isDarkMode ? (
      <DarkSelectedBookshelfIcon width={40} height={40} />
    ) : (
      <NavBookshelfSelectedIcon width={40} height={40} />
    )
  }

  // 2. 선택되지 않았을 때의 아이콘 결정
  return isDarkMode ? (
    <DarkUnselectedBookshelfIcon width={40} height={40} />
  ) : (
    <NavBookshelfUnselectedIcon width={40} height={40} />
  )
}
