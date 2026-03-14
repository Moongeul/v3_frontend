'use client'

import { useTheme } from '@emotion/react'
import { GrayShareIcon } from '@/assets/svgComponents'
import { handleShare } from '@/utils/test'
import { DarkShareIcon } from '@/assets/svgComponents/dark'

export default function ShareIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return isDarkMode ? (
    <DarkShareIcon onClick={handleShare} width={36} height={36} />
  ) : (
    <GrayShareIcon onClick={handleShare} width={36} height={36} />
  )
}
