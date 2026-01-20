'use client'

import { Button } from '@/components/common'
import { PrimaryShareIcon } from '@/assets/svgComponents'
import { handleShare } from '@/utils/test'
import { StyleResultBottomButtonContainer } from '@/styles/test/Result.styles'

export default function AllResultShareButton() {
  return (
    <StyleResultBottomButtonContainer>
      <Button
        onClick={handleShare}
        variant={'outline'}
        size={'lg'}
        leftIcon={<PrimaryShareIcon width={20} height={20} />}
      >
        테스트 공유하기
      </Button>
    </StyleResultBottomButtonContainer>
  )
}
