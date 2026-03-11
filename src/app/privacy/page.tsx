import PrivacyList from '@/components/mypage/setting/PrivacyList'
import { fetchSettingPrivacyLevel } from '@/lib/server/setting'

export default async function PrivacyPage() {
  const result = await fetchSettingPrivacyLevel()
  const privacyLevel = result.data?.privacyLevel

  return (
    <main>
      <PrivacyList initialPrivacy={privacyLevel} />
    </main>
  )
}
