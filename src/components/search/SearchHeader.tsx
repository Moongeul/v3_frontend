'use client'

import { Header } from '@/components/common'
import { useSearchStore } from '@/store/searchStore'

export default function SearchHeader() {
  const { setSearchValue } = useSearchStore()

  return (
    <Header
      path={'/home'}
      onClick={() => {
        setSearchValue('/home?tab=PUBLIC')
      }}
      headerType={'dynamic'}
    >
      검색
    </Header>
  )
}
