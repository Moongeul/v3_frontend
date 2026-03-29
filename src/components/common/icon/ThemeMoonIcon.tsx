'use client'

import { GrayMoonIcon } from '@/assets/svgComponents'
import { ThemeMode } from '@/context/ThemeContext'
import { DarkSelectedMoonIcon } from '@/assets/svgComponents/dark'

interface ThemeMoonIconProps {
  theme: ThemeMode
}

export default function ThemeMoonIcon({ theme }: ThemeMoonIconProps) {
  return theme === 'dark' ? <DarkSelectedMoonIcon width={32} height={32} /> : <GrayMoonIcon width={32} height={32} />
}
