'use client'

import { usePathname, useRouter } from 'next/navigation'
import { StyleNavContainer, StyleNavItem, StyleProfileItem, StyleWriteItem } from '@/styles/common/NavBar.styles'
import {
  NavBookshelfSelectedIcon,
  NavBookshelfUnselectedIcon,
  NavRecommendSelectedIcon,
  NavRecommendUnselectedIcon,
  NavWriteIcon,
  ProfileIcon,
} from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import NavHomeIcon from '@/components/common/icon/NavHomeIcon'
import { useTheme } from '@emotion/react'
import NavRecommendIcon from '@/components/common/icon/NavRecommendIcon'
import NavBookShelfIcon from '@/components/common/icon/NavBookShelfIcon'
import NavProfileIcon from '@/components/common/icon/NavProfileIcon'

export default function NavBar() {
  const router = useRouter()
  const path = usePathname()
  const theme = useTheme()

  // 현재 테마가 다크모드인지 확인 (테마 구조에 따라 theme.isDark 혹은 theme.mode === 'dark' 등으로 변경)
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  const onNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <StyleNavContainer>
      <StyleNavItem onClick={() => onNavigation('/home?tab=PUBLIC')}>
        <NavHomeIcon path={path} isDarkMode={isDarkMode} />
        <StyleContent
          $textColor={path === '/home' ? theme.colors.textFieldFilledLine : theme.colors.textFieldDefaultLine}
          $typography={typography.badgeSm}
        >
          홈
        </StyleContent>
      </StyleNavItem>
      <StyleNavItem onClick={() => onNavigation('/book')}>
        <NavRecommendIcon path={path} isDarkMode={isDarkMode} />
        <StyleContent
          $textColor={path === '/book' ? theme.colors.textFieldFilledLine : theme.colors.textFieldDefaultLine}
          $typography={typography.badgeSm}
        >
          추천
        </StyleContent>
      </StyleNavItem>

      <StyleWriteItem onClick={() => onNavigation('/write')}>
        <NavWriteIcon width={21} height={24} />
      </StyleWriteItem>

      <StyleNavItem onClick={() => onNavigation('/record?tab=BOOKSHELF')}>
        <NavBookShelfIcon path={path} isDarkMode={isDarkMode} />

        <StyleContent
          $textColor={path === '/record' ? theme.colors.textFieldFilledLine : theme.colors.textFieldDefaultLine}
          $typography={typography.badgeSm}
        >
          책장
        </StyleContent>
      </StyleNavItem>
      <StyleNavItem onClick={() => onNavigation('/mypage')}>
        <StyleProfileItem>
          <NavProfileIcon isDarkMode={isDarkMode} />
        </StyleProfileItem>
        <StyleContent
          $textColor={path === '/mypage' ? theme.colors.textFieldFilledLine : theme.colors.textFieldDefaultLine}
          $typography={typography.badgeSm}
        >
          My
        </StyleContent>
      </StyleNavItem>
    </StyleNavContainer>
  )
}
