'use client'

import { BottomButton, Header, PageLayout, Spacing } from '@/components/common'
import NicknameField from '@/components/onboarding/setting-profile/NicknameField'
import ProfileImage from '@/components/onboarding/setting-profile/ProfileImage'
import RandomNicknameButton from '@/components/onboarding/setting-profile/RandomNicknameButton'
import { useOnboardingStore } from '@/store/onboardingStore'
import { patchMemberNickname, uploadFile } from '@/lib/client/onboarding'
import { useToast } from '@/components/common/toast/ToastContext'
import TestModal from '@/components/common/modal/TestModal'
import { useModalStore } from '@/store/modalStore'

export default function SettingProfile() {
  const { nickname, successMessage, profileFile } = useOnboardingStore()
  const { modals, toggleModal } = useModalStore()
  const { success, error } = useToast()

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
      {modals.isTestModalOpen ? <TestModal /> : null}
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
