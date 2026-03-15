import SettingAlarmList from '@/components/mypage/setting-alarm/SettingAlarmList'
import { fetchSettingPushAlarm } from '@/lib/server/setting'

export default async function SettingAlarmPage() {
  const result = await fetchSettingPushAlarm()
  const pushEnabled = result.data?.pushEnabled

  return (
    <main>
      <SettingAlarmList initialValue={pushEnabled} />
    </main>
  )
}
