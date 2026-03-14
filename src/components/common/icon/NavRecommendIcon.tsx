import { DarkSelectedHomeIcon } from '@/assets/svgComponents/dark'
import { NavHomeSelectedIcon } from '@/assets/svgComponents' // 아이콘 경로 확인

interface NavRecommendIconProps {
  path: string
  isDarkMode: boolean // 다크모드 여부를 프롭으로 받거나 context에서 가져옵니다.
}

export default function NavRecommendIcon({ path, isDarkMode }: NavRecommendIconProps) {
  const isSelected = path === '/home'

  return isSelected ? (
    isDarkMode ? (
      <DarkSelectedHomeIcon width={40} height={40} />
    ) : (
      <NavHomeSelectedIcon width={40} height={40} />
    )
  ) : isDarkMode ? (
    <NavHomeSelectedIcon width={40} height={40} />
  ) : (
    <NavHomeSelectedIcon width={40} height={40} />
  )
}
