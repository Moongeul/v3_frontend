import { DarkSelectedHomeIcon, DarkUnselectedHomeIcon } from '@/assets/svgComponents/dark'
import { NavHomeSelectedIcon, NavHomeUnselectedIcon } from '@/assets/svgComponents'

interface NavHomeIconProps {
  path: string
  isDarkMode: boolean
}

export default function NavHomeIcon({ path, isDarkMode }: NavHomeIconProps) {
  const isSelected = path === '/home'

  // 1. 선택 여부에 따른 아이콘 결정
  if (isSelected) {
    return isDarkMode ? <DarkSelectedHomeIcon width={40} height={40} /> : <NavHomeSelectedIcon width={40} height={40} />
  }

  // 2. 선택되지 않았을 때의 아이콘 결정
  return isDarkMode ? (
    <DarkUnselectedHomeIcon width={40} height={40} />
  ) : (
    <NavHomeUnselectedIcon width={40} height={40} />
  )
}
