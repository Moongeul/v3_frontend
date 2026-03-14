'use client'

import { ProfileIcon } from '@/assets/svgComponents'
import { DarkProfileIcon } from '@/assets/svgComponents/dark'

interface NavProfileIconProps {
  isDarkMode: boolean
}

export default function NavProfileIcon({ isDarkMode }: NavProfileIconProps) {
  return isDarkMode ? <DarkProfileIcon width={28} height={28} /> : <ProfileIcon width={28} height={28} />
}
