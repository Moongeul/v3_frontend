'use client'

import { useTheme } from '@emotion/react'
import {
  DarkHelpfulIcon,
  DarkImpressiveExpressionIcon,
  DarkRelatableIcon,
  DarkSameTasteIcon,
  DarkWantToReadIcon,
} from '@/assets/svgComponents/dark'
import {
  HelpfulIcon,
  ImpressiveExpressionIcon,
  RelatableIcon,
  SameTasteIcon,
  WantToReadIcon,
} from '@/assets/svgComponents'
import { LikeType } from '@/types/record'

interface ThemeInteractionIconProps {
  type: LikeType
  width?: number
  height?: number
}
export default function ThemeInteractionIcon({ type, width = 20, height = 20 }: ThemeInteractionIconProps) {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  const renderThemeIcon = (type: LikeType) => {
    switch (type) {
      case 'SAME_TASTE':
        return isDarkMode ? (
          <DarkSameTasteIcon width={width} height={height} />
        ) : (
          <SameTasteIcon width={height} height={height} />
        )
      case 'IMPRESSIVE_EXPRESSION':
        return isDarkMode ? (
          <DarkImpressiveExpressionIcon width={width} height={height} />
        ) : (
          <ImpressiveExpressionIcon width={width} height={height} />
        )
      case 'WANT_TO_READ':
        return isDarkMode ? (
          <DarkWantToReadIcon width={width} height={height} />
        ) : (
          <WantToReadIcon width={height} height={height} />
        )
      case 'HELPFUL':
        return isDarkMode ? (
          <DarkHelpfulIcon width={width} height={height} />
        ) : (
          <HelpfulIcon width={height} height={height} />
        )
      case 'RELATABLE':
        return isDarkMode ? (
          <DarkRelatableIcon width={width} height={height} />
        ) : (
          <RelatableIcon width={height} height={height} />
        )
    }
  }
  return renderThemeIcon(type)
}
