'use client'

import Cookies from 'js-cookie'
import { TestBannerGraphic, WhiteRightArrowIcon, WriteBannerGraphic } from '@/assets/svgComponents'
import { Button } from '@/components/common'
import { Banner } from '@/components/home'

export default function HomeBanner() {
  const isReadingTaste = Cookies.get('isReadingTaste')
  const loginMemberId = Cookies.get('memberId')

  return loginMemberId ? (
    isReadingTaste === 'false' ? (
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
    ) : (
      <Banner
        content={'오늘 읽은 문장, 기록해둘래요?'}
        graphic={<WriteBannerGraphic width={132} height={66} />}
        button={
          <Button size={'md'} width={124} rightIcon={<WhiteRightArrowIcon width={20} height={20} />}>
            기록 시작하기
          </Button>
        }
        path={'/write'}
      />
    )
  ) : (
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
  )
}
