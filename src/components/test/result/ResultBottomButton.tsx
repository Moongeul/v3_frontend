'use client'

import { ShareButton, StyleResultBottomButtonContainer } from '@/styles/test/Result.styles'
import { Button } from '@/components/common'
import { ChangeIcon, PrimaryShareIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { handleShare } from '@/utils/test'

export default function ResultBottomButton() {
  const router = useRouter()

  const onNavigate = () => {
    router.push('/test?step=onboarding')
  }

  return (
    <StyleResultBottomButtonContainer>
      <Button
        onClick={onNavigate}
        variant={'outline'}
        size={'lg'}
        leftIcon={<ChangeIcon width={24} height={24} />}
        width={52}
      />
      <ShareButton>
        <Button
          onClick={handleShare}
          variant={'outline'}
          size={'lg'}
          leftIcon={<PrimaryShareIcon width={20} height={20} />}
        >
          공유하기
        </Button>
      </ShareButton>
    </StyleResultBottomButtonContainer>
  )
}
