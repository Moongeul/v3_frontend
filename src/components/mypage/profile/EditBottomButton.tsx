'use client'

import { BottomButton } from '@/components/common'
import { patchMemberNickname, uploadFile } from '@/lib/client/onboarding'
import { useMypageStore } from '@/store/mypageStore'
import { useToast } from '@/components/common/toast/ToastContext'
import { useRouter } from 'next/navigation'

export default function EditBottomButton() {
  const router = useRouter()

  const { nickname, successMessage, profileFile } = useMypageStore()
  const { success, error } = useToast()
  const handleSubmit = async () => {
    if (profileFile) {
      const profileResult = await uploadFile(profileFile)
      if (profileResult.success) {
        success('이미지 저장 성공', '프로필 사진 저장에 성공했어요.')
        router.push('/mypage')
      } else {
        error('이미지 저장 실패', '프로필 사진 저장에 실패했어요.')
      }
    }
    const nicknameResult = await patchMemberNickname(nickname)
    if (nicknameResult.success && nicknameResult.data) {
      success('닉네임 수정 성공', '닉네임을 수정했어요.')
      router.push('/mypage')
    } else {
      error('닉네임 수정 실패', '닉네임을 수정하지 못했어요.')
    }
  }
  return (
    <BottomButton onClick={handleSubmit} isActive={!!successMessage}>
      설정 완료
    </BottomButton>
  )
}
