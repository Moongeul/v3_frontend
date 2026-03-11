// src/app/policy/page.tsx
import PolicyHome from '@/components/mypage/setting/policy/PolicyHome'
import PolicyService from '@/components/mypage/setting/policy/PolicyService'
import PolicyInfo from '@/components/mypage/setting/policy/PolicyInfo'
import PoliciesMarketing from '@/components/mypage/setting/policy/PolicyMarketing'

type PolicyType = 'home' | 'service' | 'info' | 'marketing'

// 헬퍼 함수: 타입을 안전하게 반환
function FindPolicyTypeSwitcher({ type }: { type: PolicyType }) {
  switch (type) {
    case 'home':
      return <PolicyHome />
    case 'service':
      return <PolicyService />
    case 'info':
      return <PolicyInfo />
    case 'marketing':
      return <PoliciesMarketing />
    default:
      return <PolicyHome />
  }
}

interface PolicyPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PolicyPage({ searchParams }: PolicyPageProps) {
  const sParams = await searchParams

  // 쿼리 스트링이 없거나 배열인 경우를 대비해 안전하게 타입 추출
  const rawType = Array.isArray(sParams.type) ? sParams.type[0] : sParams.type
  const type = (rawType as PolicyType) || 'home'

  return (
    <main>
      {/* type이 'home'으로 정확히 넘어가는지 확인 */}
      <FindPolicyTypeSwitcher type={type} />
    </main>
  )
}
