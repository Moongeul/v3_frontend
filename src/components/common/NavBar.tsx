'use client'

import { usePathname, useRouter } from 'next/navigation'
import { StyleNavContainer, StyleNavItem, StyleProfileItem, StyleWriteItem } from '@/styles/common/NavBar.styles'
import {
  NavBookshelfSelectedIcon,
  NavBookshelfUnselectedIcon,
  NavHomeSelectedIcon,
  NavHomeUnselectedIcon,
  NavRecommendSelectedIcon,
  NavRecommendUnselectedIcon,
  NavWriteIcon,
  ProfileIcon,
} from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'

export default function NavBar() {
  const router = useRouter()
  const path = usePathname()

  const onNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <StyleNavContainer>
      <StyleNavItem onClick={() => onNavigation('/home?tab=PUBLIC')}>
        {path === '/home' ? (
          <NavHomeSelectedIcon width={40} height={40} />
        ) : (
          <NavHomeUnselectedIcon width={40} height={40} />
        )}
        <StyleContent
          $textColor={path === '/home' ? baseColor.gray500 : baseColor.gray200}
          $typography={typography.badgeSm}
        >
          홈
        </StyleContent>
      </StyleNavItem>
      <StyleNavItem onClick={() => onNavigation('/book')}>
        {path === '/book' ? (
          <NavRecommendSelectedIcon width={40} height={40} />
        ) : (
          <NavRecommendUnselectedIcon width={40} height={40} />
        )}

        <StyleContent
          $textColor={path === '/book' ? baseColor.gray500 : baseColor.gray200}
          $typography={typography.badgeSm}
        >
          추천
        </StyleContent>
      </StyleNavItem>

      <StyleWriteItem onClick={() => onNavigation('/write')}>
        <NavWriteIcon width={21} height={24} />
      </StyleWriteItem>

      <StyleNavItem onClick={() => onNavigation('/record?tab=BOOKSHELF')}>
        {path === '/record' ? (
          <NavBookshelfSelectedIcon width={40} height={40} />
        ) : (
          <NavBookshelfUnselectedIcon width={40} height={40} />
        )}

        <StyleContent
          $textColor={path === '/record' ? baseColor.gray500 : baseColor.gray200}
          $typography={typography.badgeSm}
        >
          책장
        </StyleContent>
      </StyleNavItem>
      <StyleNavItem onClick={() => onNavigation('/mypage')}>
        <StyleProfileItem>
          <ProfileIcon width={28} height={28} />
        </StyleProfileItem>
        <StyleContent
          $textColor={path === '/mypage' ? baseColor.gray500 : baseColor.gray200}
          $typography={typography.badgeSm}
        >
          My
        </StyleContent>
      </StyleNavItem>
    </StyleNavContainer>
  )
}
