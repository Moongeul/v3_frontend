'use client'

import { useRouter } from 'next/navigation'
import { StyleBannerContainer, StyleBannerGraphic, StyleBannerTitle } from '@/styles/home/Banner.styles'
import { Button } from '@/components/common'
import { BannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'

export default function Banner() {
  const router = useRouter()

  const handlePath = () => router.push('/write')

  return (
    <StyleBannerContainer onClick={handlePath}>
      <StyleBannerTitle>오늘 읽은 문장, 기록해둘래요?</StyleBannerTitle>
      <Button size={'md'} width={124} rightIcon={<WhiteRightArrowIcon width={20} height={20} />}>
        기록 시작하기
      </Button>
      <StyleBannerGraphic>
        <BannerGraphic width={132} height={66} />
      </StyleBannerGraphic>
    </StyleBannerContainer>
  )
}
