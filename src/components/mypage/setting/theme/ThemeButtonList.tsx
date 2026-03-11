// src/components/mypage/setting/theme/ThemeButtonList.tsx
'use client'

import ThemeButton from '@/components/mypage/setting/theme/ThemeButton'
import { useMyTheme } from '@/context/ThemeContext' // 수정됨
import {
  GrayMoonIcon,
  GraySunIcon,
  GraySystemIcon,
  SecondaryMoonIcon,
  SecondarySunIcon,
  SecondarySystemIcon,
} from '@/assets/svgComponents'
import { StyledThemeButtonList } from '@/styles/mypage/Theme.styles'

export default function ThemeButtonList() {
  const { theme, setTheme } = useMyTheme() // 전역 상태 사용

  return (
    <StyledThemeButtonList>
      <ThemeButton
        onClick={() => setTheme('light')}
        content={'라이트'}
        isActive={theme === 'light'}
        icon={theme === 'light' ? <SecondarySunIcon width={32} height={32} /> : <GraySunIcon width={32} height={32} />}
      />
      <ThemeButton
        onClick={() => setTheme('dark')}
        content={'다크'}
        isActive={theme === 'dark'}
        icon={theme === 'dark' ? <SecondaryMoonIcon width={32} height={32} /> : <GrayMoonIcon width={32} height={32} />}
      />
      <ThemeButton
        onClick={() => setTheme('system')}
        content={'시스템'}
        isActive={theme === 'system'}
        icon={
          theme === 'system' ? (
            <SecondarySystemIcon width={32} height={32} />
          ) : (
            <GraySystemIcon width={32} height={32} />
          )
        }
      />
    </StyledThemeButtonList>
  )
}
