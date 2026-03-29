'use client'

import { GraySystemIcon } from '@/assets/svgComponents'
import { ThemeMode } from '@/context/ThemeContext'
import { DarkSelectedSystemIcon } from '@/assets/svgComponents/dark'

interface ThemeSystemIconProps {
  theme: ThemeMode
}

export default function ThemeSystemIcon({ theme }: ThemeSystemIconProps) {
  return theme === 'system' ? (
    <DarkSelectedSystemIcon width={32} height={32} />
  ) : (
    <GraySystemIcon width={32} height={32} />
  )
}
