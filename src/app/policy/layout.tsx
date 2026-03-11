// src/app/policy/layout.tsx
import { PageLayout, Spacing } from '@/components/common'
import { Suspense } from 'react'
import PolicyHeader from '@/components/mypage/setting/policy/PolicyHeader'

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* useSearchParams를 사용하는 컴포넌트는 Suspense로 감싸야 빌드 에러가 안 납니다 */}
      <Suspense fallback={<div>Loading...</div>}>
        <PolicyHeader />
      </Suspense>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
