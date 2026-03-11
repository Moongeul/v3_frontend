'use client'

import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/common'

export default function OnboardingHeader() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'terms'

  const renderHeaderTitle = () => {
    switch (tab) {
      case 'terms':
        return '이용약관 동의'
      case 'profile':
        return '프로필 설정'
      default:
        return '이용약관 동의'
    }
  }

  return <Header headerType={'dynamic'}>{renderHeaderTitle()}</Header>
}
