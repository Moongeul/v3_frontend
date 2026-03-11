'use client'

import { useRouter } from 'next/navigation'
import { putPrivacyLevel } from '@/lib/client/setting'
import { PrivacyLevelType } from '@/types/setting'
import ToggleItem from '@/components/mypage/privacy/ToggleItem'

export default function PrivacyList({ initialPrivacy }: { initialPrivacy: PrivacyLevelType | undefined }) {
  const router = useRouter()

  const handleUpdate = async (level: PrivacyLevelType) => {
    try {
      await putPrivacyLevel(level)
      // 데이터가 변경되었으므로 서버 컴포넌트를 다시 fetch하게 함
      router.refresh()
    } catch (error) {
      console.error('설정 변경 실패', error)
    }
  }

  return (
    <>
      <ToggleItem onClick={() => handleUpdate('PUBLIC')} checked={initialPrivacy === 'PUBLIC'} content={'전체 공개'} />
      <ToggleItem
        onClick={() => handleUpdate('FOLLOWER_ONLY')}
        checked={initialPrivacy === 'FOLLOWER_ONLY'}
        content={'팔로워에게만 일부 공개'}
      />
      <ToggleItem onClick={() => handleUpdate('PRIVATE')} checked={initialPrivacy === 'PRIVATE'} content={'비공개'} />
    </>
  )
}
