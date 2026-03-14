import { DarkSelectedBookIcon, DarkUnselectedBookIcon } from '@/assets/svgComponents/dark'
import { NavRecommendSelectedIcon, NavRecommendUnselectedIcon } from '@/assets/svgComponents' // 아이콘 경로 확인

interface NavRecommendIconProps {
  path: string
  isDarkMode: boolean // 다크모드 여부를 프롭으로 받거나 context에서 가져옵니다.
}

export default function NavRecommendIcon({ path, isDarkMode }: NavRecommendIconProps) {
  const isSelected = path === '/book'
  // 1. 선택 여부에 따른 아이콘 결정
  if (isSelected) {
    return isDarkMode ? (
      <DarkSelectedBookIcon width={40} height={40} />
    ) : (
      <NavRecommendSelectedIcon width={40} height={40} />
    )
  }

  // 2. 선택되지 않았을 때의 아이콘 결정
  return isDarkMode ? (
    <DarkUnselectedBookIcon width={40} height={40} />
  ) : (
    <NavRecommendUnselectedIcon width={40} height={40} />
  )
}
