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

type ThemeInteractionIconType =
  | 'SameTasteType'
  | 'ImpressiveExpressionType'
  | 'WantToReadType'
  | 'RelatableType'
  | 'HelpfulType'

interface ThemeInteractionIconProps {
  type: 'SameTasteType' | 'ImpressiveExpressionType' | 'WantToReadType' | 'RelatableType' | 'HelpfulType'
}
export default function ThemeInteractionIcon({ type }: ThemeInteractionIconProps) {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  const renderThemeIcon = (type: ThemeInteractionIconType) => {
    switch (type) {
      case 'SameTasteType':
        return isDarkMode ? <DarkSameTasteIcon width={20} height={20} /> : <SameTasteIcon width={20} height={20} />
      case 'ImpressiveExpressionType':
        return isDarkMode ? (
          <DarkImpressiveExpressionIcon width={20} height={20} />
        ) : (
          <ImpressiveExpressionIcon width={20} height={20} />
        )
      case 'WantToReadType':
        return isDarkMode ? <DarkWantToReadIcon width={20} height={20} /> : <WantToReadIcon width={20} height={20} />
      case 'HelpfulType':
        return isDarkMode ? <DarkHelpfulIcon width={20} height={20} /> : <HelpfulIcon width={20} height={20} />
      case 'RelatableType':
        return isDarkMode ? <DarkRelatableIcon width={20} height={20} /> : <RelatableIcon width={20} height={20} />
    }
  }
  return renderThemeIcon(type)
}
