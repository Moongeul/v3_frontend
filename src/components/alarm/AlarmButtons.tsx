'use client'

import { StyledButtonWrapper } from '@/styles/alarm/Alarm.styles'
import { Button } from '@/components/common'
import { useToast } from '@/components/common/toast/ToastContext'
import { postFollowAccept } from '@/lib/client/mypage'
import { useRouter } from 'next/navigation'

interface AlarmButtonsProps {
  relatedId: number
}

export default function AlarmButtons({ relatedId }: AlarmButtonsProps) {
  const router = useRouter()
  const { success, error } = useToast()

  const handleAccept = async () => {
    const result = await postFollowAccept({ followerId: relatedId, status: 'ACCEPT' })
    if (result.success) {
      success('수락 성공', '팔로우 수락에 성공했어요.')
      router.refresh()
    } else {
      error('팔로우 수락 실패', '팔로우 수락하지 못했어요.')
    }
  }

  const handleDelete = async () => {
    const result = await postFollowAccept({ followerId: relatedId, status: 'DELETE' })
    if (result.success) {
      success('거절 성공', '팔로우 거절했어요.')
      router.refresh()
    } else {
      error('팔로우 거절 실패', '팔로우 거절하지 못했어요.')
    }
  }

  return (
    <StyledButtonWrapper>
      <Button onClick={handleAccept} variant={'primary'} size={'sm'} width={64}>
        승인
      </Button>
      <Button onClick={handleDelete} variant={'secondary'} size={'sm'} isActive={false} width={64}>
        삭제
      </Button>
    </StyledButtonWrapper>
  )
}
