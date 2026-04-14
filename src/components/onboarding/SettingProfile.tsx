'use client'

import { BottomButton, Spacing } from '@/components/common'
import NicknameField from '@/components/onboarding/setting-profile/NicknameField'
import ProfileImage from '@/components/onboarding/setting-profile/ProfileImage'
import RandomNicknameButton from '@/components/onboarding/setting-profile/RandomNicknameButton'
import { useOnboardingStore } from '@/store/onboardingStore'
import { patchMemberNickname, uploadFile } from '@/lib/client/onboarding'
import { useToast } from '@/components/common/toast/ToastContext'
import TestModal from '@/components/common/modal/TestModal'
import { useModalStore } from '@/store/modalStore'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { getOrGenerateGuestUuid } from '@/utils/common'

export default function SettingProfile() {
  const { nickname, successMessage, profileFile } = useOnboardingStore()
  const { modals, toggleModal, setModal } = useModalStore()
  const { success, error } = useToast()

  useEffect(() => {
    // 1. 쿠키에서 isReadingTaste 가져오기 (문자열 'true'로 저장됨)
    const uuid = getOrGenerateGuestUuid()
    const isReadingTaste = Cookies.get('isReadingTaste')
    // postReadingTestLink(uuid).then((res) => {
    //   if (res.success) {
    //     setModal('isTestModalOpen', false)
    //   }
    // })
    // 2. 값이 'true'인 경우 모달 열기
    if (isReadingTaste === 'false') {
      setModal('isTestModalOpen', true)
    }
  }, [modals.isTestModalOpen])

  const handleSubmit = async () => {
    if (profileFile) {
      const profileResult = await uploadFile(profileFile)
      if (profileResult.success) {
        success('이미지 저장 성공', '프로필 사진 저장에 성공했어요.')
      } else {
        error('이미지 저장 실패', '프로필 사진 저장에 실패했어요.')
      }
    }
    const nicknameResult = await patchMemberNickname(nickname)
    if (nicknameResult.success && nicknameResult.data) {
      success('닉네임 수정 성공', '닉네임을 수정했어요.')
      toggleModal('isTestModalOpen')
    } else {
      error('닉네임 수정 실패', '닉네임을 수정하지 못했어요.')
    }
  }

  return (
    <main>
      <TestModal />
      <div>
        <ProfileImage />
        <Spacing height={40} />
        <NicknameField />
        <RandomNicknameButton />
        <BottomButton onClick={handleSubmit} isActive={!!successMessage}>
          설정 완료
        </BottomButton>
      </div>
    </main>
  )
}
