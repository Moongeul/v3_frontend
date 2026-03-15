'use client'

import { useTheme } from '@emotion/react'
import { DarkCommentIcon } from '@/assets/svgComponents/dark'
import { CommentIcon } from '@/assets/svgComponents'

export default function ThemeCommentIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'
  return isDarkMode ? <DarkCommentIcon width={20} height={20} /> : <CommentIcon width={20} height={20} />
}
