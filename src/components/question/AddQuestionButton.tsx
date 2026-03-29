'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/common'
import { AddWhiteIcon } from '@/assets/svgComponents'
import Cookies from 'js-cookie'

export default function AddQuestionButton() {
  const router = useRouter()
  const loginMemberId = Cookies.get('memberId')
  return loginMemberId ? (
    <Button
      onClick={() => {
        router.push('/question/write')
      }}
      variant={'primary'}
      size={'sm'}
      isActive={true}
      width={100}
      leftIcon={<AddWhiteIcon width={20} height={20} />}
    >
      질문 추가
    </Button>
  ) : (
    <div style={{ width: 20, height: 20 }} />
  )
}
