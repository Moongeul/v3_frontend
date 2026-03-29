'use client'

import ThemeButton from '@/components/mypage/setting/theme/ThemeButton'
import { useMyTheme } from '@/context/ThemeContext' // 수정됨
import { StyledThemeButtonList } from '@/styles/mypage/Theme.styles'
import ThemeSunIcon from '@/components/common/icon/ThemeSunIcon'
import ThemeMoonIcon from '@/components/common/icon/ThemeMoonIcon'
import ThemeSystemIcon from '@/components/common/icon/ThemeSystemIcon'

export default function ThemeButtonList() {
  const { theme, setTheme } = useMyTheme() // 전역 상태 사용

  return (
    <StyledThemeButtonList>
      <ThemeButton
        onClick={() => setTheme('light')}
        content={'라이트'}
        isActive={theme === 'light'}
        icon={<ThemeSunIcon theme={theme} />}
      />
      <ThemeButton
        onClick={() => setTheme('dark')}
        content={'다크'}
        isActive={theme === 'dark'}
        icon={<ThemeMoonIcon theme={theme} />}
      />
      <ThemeButton
        onClick={() => setTheme('system')}
        content={'시스템'}
        isActive={theme === 'system'}
        icon={<ThemeSystemIcon theme={theme} />}
      />
    </StyledThemeButtonList>
  )
}
