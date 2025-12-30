'use client'

import { useBookStore } from '@/store/bookStore'
import { TextInput, Button } from '@/components/common'

export default function BookSearchField() {
  const { searchValue, setSearchValue } = useBookStore((state) => state)
  return (
    <TextInput
      height={48}
      placeholder={'책 검색'}
      value={searchValue ?? ''}
      onChange={(e) => setSearchValue(e.target.value)}
      buttonElement={
        <Button width={80} size={'lg'} variant={'primary'}>
          검색
        </Button>
      }
    />
  )
}
