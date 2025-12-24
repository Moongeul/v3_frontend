'use client'

import TextInput from '@/components/common/TextInput'
import Button from '@/components/common/Button'
import { useState } from 'react'

interface BookSearchFieldProps {}
export default function BookSearchField({}: BookSearchFieldProps) {
  const [value, setValue] = useState<string>('')
  return (
    <TextInput
      height={48}
      placeholder={'책 검색'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      buttonElement={
        <Button width={80} size={'lg'} variant={'primary'}>
          검색
        </Button>
      }
    />
  )
}
