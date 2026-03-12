'use client'

import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import ViewMoreButton from '@/components/search/ViewMoreButton'
import AllUserList from '@/components/search/all/AllUserList'
import AllBookList from '@/components/search/all/AllBookList'

export default function All() {
  const theme = useTheme()
  return (
    <main>
      <Label
        labelElement={<ViewMoreButton path={'/search?tab=USER'} />}
        labelColor={theme.colors.headerText}
        labelStyle={typography.subtitleMd}
      >
        사용자
      </Label>

      <Spacing height={4} />
      <AllUserList />

      <Spacing height={20} />

      <Label
        labelElement={<ViewMoreButton path={'/search?tab=BOOK'} />}
        labelColor={theme.colors.headerText}
        labelStyle={typography.subtitleMd}
      >
        도서
      </Label>

      <Spacing height={4} />
      <AllBookList />
    </main>
  )
}
