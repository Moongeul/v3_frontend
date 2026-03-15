'use client'

import { Button } from '@/components/common'
import { ChangeBlackIcon } from '@/assets/svgComponents'
import { postMemberNicknameRegenerate } from '@/lib/client/onboarding'
import { useOnboardingStore } from '@/store/onboardingStore'
import { StyledRandomNicknameButtonWrapper } from '@/styles/onboarding/SettingProfile.styles'

export default function EditRandomNicknameButton() {
  const { setNickname, resetMessageState } = useOnboardingStore()

  const handleFetchData = async () => {
    resetMessageState()

    const result = await postMemberNicknameRegenerate()
    if (result.success && result.data) {
      setNickname(result.data.nickname)
    }
  }
  return (
    <StyledRandomNicknameButtonWrapper>
      <Button
        onClick={handleFetchData}
        size={'sm'}
        variant={'ghost'}
        leftIcon={<ChangeBlackIcon width={20} height={20} />}
      >
        랜덤 닉네임 재설정
      </Button>
    </StyledRandomNicknameButtonWrapper>
  )
}
