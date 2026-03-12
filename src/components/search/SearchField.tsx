'use client'

import { KeyboardEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, TextInput } from '@/components/common'
import { useSearchStore } from '@/store/searchStore'

export default function SearchField() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Zustand 스토어에서 상태와 액션 가져오기
  const { searchValue, setSearchValue } = useSearchStore()

  return (
    <TextInput
      value={searchValue}
      // TextInput 내부 input/textarea 공통 대응을 위해 타입 단언 또는 가공
      onChange={(e) => setSearchValue(e.target.value)}
      height={48}
      placeholder={'책 검색'}
    />
  )
}
