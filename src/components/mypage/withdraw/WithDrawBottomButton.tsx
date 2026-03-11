'use client'

import { BottomButton } from '@/components/common'
import { useState } from 'react'
import WithdrawalButton from '@/components/mypage/withdraw/WithdrawalButton'
import { useMypageStore } from '@/store/mypageStore'
import { useToast } from '@/components/common/toast/ToastContext'
import { useRouter } from 'next/navigation'
import { postWithDraw } from '@/lib/client/setting'

export default function WithDrawBottomButton() {
  const { withdrawData } = useMypageStore()
  const [isAgreed, setIsAgreed] = useState(false)
  const { success, error } = useToast()
  const router = useRouter()

  const toggleAgreed = () => {
    setIsAgreed(!isAgreed)
  }

  return (
    <div>
      <WithdrawalButton isAgreed={isAgreed} toggleAgreed={toggleAgreed} />
      <BottomButton
        onClick={async () => {
          const result = await postWithDraw(withdrawData)
          if (result.success) {
            success('회원 탈퇴 성공', '회원 탈퇴에 성공했어요')
            router.push('/')
          } else {
            error('회원 탈퇴 실패', '회원 탈퇴에 실패했어요')
          }
        }}
      >
        탈퇴하기
      </BottomButton>
    </div>
  )
}
