'use client'

import { TextInput, Button, Spacing } from '@/components/common'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function BookSearchField() {
  const router = useRouter()
  const loginMemberId = Cookies.get('memberId')
  const onNavigation = () => {
    router.push('/book/search')
  }
  return (
    <>
      <Spacing height={72} />
      <TextInput
        height={48}
        placeholder={'찾고 싶은 책을 검색해보세요.'}
        onClick={onNavigation}
        buttonElement={
          <Button width={80} size={'lg'} variant={'primary'}>
            검색
          </Button>
        }
      />
    </>
  )
}
