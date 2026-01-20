'use client'

import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/common'
import { GrayShareIcon } from '@/assets/svgComponents'
import { handleShare } from '@/utils/test'

export function TestHeader() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  const rightIcon = step === 'onboarding' ? <GrayShareIcon onClick={handleShare} width={36} height={36} /> : undefined

  return (
    <Header headerType={'dynamic'} rightIcon={rightIcon}>
      취향테스트
    </Header>
  )
}
