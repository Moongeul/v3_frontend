'use client'

import { Header } from '@/components/common'
import { useSearchStore } from '@/store/searchStore'
import { useRouter } from 'next/navigation'

export default function SearchHeader() {
  const router = useRouter()

  const { setSearchValue } = useSearchStore()

  return (
    <Header
      onClick={() => {
        router.push('/home?tab=PUBLIC')
        setSearchValue('')
      }}
      headerType={'dynamic'}
    >
      검색
    </Header>
  )
}
