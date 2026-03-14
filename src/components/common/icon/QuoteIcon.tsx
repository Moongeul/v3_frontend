'use client'

import { useTheme } from '@emotion/react'
import { DoubleQuoteLeftIcon, DoubleQuoteRightIcon } from '@/assets/svgComponents'
import { DarkDoubleQuoteLeftIcon, DarkDoubleQuoteRightIcon } from '@/assets/svgComponents/dark'

interface QuoteIconProps {
  type: 'left' | 'right'
}

export default function QuoteIcon({ type }: QuoteIconProps) {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return type === 'left' ? (
    isDarkMode ? (
      <DarkDoubleQuoteLeftIcon width={8} height={8} />
    ) : (
      <DoubleQuoteLeftIcon width={8} height={8} />
    )
  ) : isDarkMode ? (
    <DarkDoubleQuoteRightIcon width={8} height={8} />
  ) : (
    <DoubleQuoteRightIcon width={8} height={8} />
  )
}
