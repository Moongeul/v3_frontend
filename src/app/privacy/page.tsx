import PrivacyList from '@/components/mypage/setting/PrivacyList'
import { fetchSettingPrivacyLevel } from '@/lib/server/setting'
import { Spinner } from '@/components/common'

export default async function PrivacyPage() {
  const result = await fetchSettingPrivacyLevel()
  const privacyLevel = result.data?.privacyLevel

  if (!privacyLevel) return <Spinner />
  return (
    <main>
      <PrivacyList initialPrivacy={privacyLevel} />
    </main>
  )
}
