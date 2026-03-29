'use client'

import { GraySunIcon, SecondarySunIcon } from '@/assets/svgComponents'
import { ThemeMode } from '@/context/ThemeContext'

interface ThemeSunIconProps {
  theme: ThemeMode
}

export default function ThemeSunIcon({ theme }: ThemeSunIconProps) {
  return theme === 'light' ? <SecondarySunIcon width={32} height={32} /> : <GraySunIcon width={32} height={32} />
}
