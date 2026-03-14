'use client'

import { useBookStore } from '@/store/bookStore'
import { useWriteStore } from '@/store/writeStore'
import SubmitButton from '@/components/write/SubmitButton'
import Header from '../common/Header'

export default function WriteHeader() {
  const { setSearchValue } = useBookStore((state) => state)
  const { resetWriteData } = useWriteStore((state) => state)
  return (
    <Header
      onClick={() => {
        setSearchValue('')
        resetWriteData()
      }}
      path={'/home?tab=PUBLIC'}
      headerType={'dynamic'}
      rightIcon={<SubmitButton />}
    >
      글쓰기
    </Header>
  )
}
