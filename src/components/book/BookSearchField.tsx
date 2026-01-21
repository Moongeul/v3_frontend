'use client'

import { TextInput, Button } from '@/components/common'
import { useRouter } from 'next/navigation'

export default function BookSearchField() {
  const router = useRouter()
  const onNavigation = () => {
    router.push('/book/search')
  }
  return (
    <TextInput
      height={48}
      placeholder={'책 검색'}
      onClick={onNavigation}
      buttonElement={
        <Button width={80} size={'lg'} variant={'primary'}>
          검색
        </Button>
      }
    />
  )
}
