'use client'

import { StyleThemeButton } from '@/styles/mypage/Theme.styles'
import { JSX } from 'react'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
interface ThemeButtonProps {
  icon: JSX.Element
  content: string
  isActive: boolean
  onClick: () => void
}

export default function ThemeButton({ icon, content, isActive, onClick }: ThemeButtonProps) {
  const theme = useTheme()
  return (
    <StyleThemeButton onClick={onClick} $isActive={isActive}>
      <>
        {icon}
        <StyleContent
          $textColor={isActive ? theme.colors.buttonTextSecondary : theme.colors.buttonActiveGhost}
          $typography={typography.buttonMd}
        >
          {content}
        </StyleContent>
      </>
    </StyleThemeButton>
  )
}
