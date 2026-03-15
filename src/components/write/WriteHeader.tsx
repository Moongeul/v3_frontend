'use client'

import { useBookStore } from '@/store/bookStore'
import { useWriteStore } from '@/store/writeStore'
import SubmitButton from '@/components/write/SubmitButton'
import Header from '../common/Header'
import { useRouter } from 'next/navigation'

export default function WriteHeader() {
  const router = useRouter()
  const { setSearchValue } = useBookStore((state) => state)
  const { resetWriteData } = useWriteStore((state) => state)
  return (
    <Header
      onClick={() => {
        router.push('/home?tab=PUBLIC')
        setSearchValue('')
        resetWriteData()
      }}
      headerType={'dynamic'}
      rightIcon={<SubmitButton />}
    >
      글쓰기
    </Header>
  )
}
