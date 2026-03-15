'use client'

import Cookies from 'js-cookie'
import { TestBannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'
import { Button } from '@/components/common'
import { Banner } from '@/components/home'

export default function TestBanner() {
  const isReadingTaste = Cookies.get('isReadingTaste')

  return isReadingTaste === 'false' ? (
    <Banner
      path={'/test?step=onboarding'}
      graphic={<TestBannerGraphic width={114} height={81} />}
      button={
        <Button size={'md'} width={139} rightIcon={<WhiteRightArrowIcon width={20} height={20} />}>
          독서 취향 테스트
        </Button>
      }
      content={'나의 독서 취향이 궁금하다면?'}
    />
  ) : null
}
