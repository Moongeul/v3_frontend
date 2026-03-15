'use client'

import { Button, TextInput } from '@/components/common'
import { useBookStore } from '@/store/bookStore'

export default function BookSearchInputField() {
  const { searchValue, setSearchValue } = useBookStore((state) => state)

  return (
    <TextInput
      height={48}
      placeholder={'찾고 싶은 책을 검색해보세요.'}
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
