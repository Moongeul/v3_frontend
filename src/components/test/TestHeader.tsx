'use client'

import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/common'
import ShareIcon from '@/components/common/icon/ShareIcon'

export function TestHeader() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  const rightIcon = step === 'onboarding' ? <ShareIcon /> : undefined

  return (
    <Header headerType={'dynamic'} rightIcon={rightIcon}>
      취향테스트
    </Header>
  )
}
