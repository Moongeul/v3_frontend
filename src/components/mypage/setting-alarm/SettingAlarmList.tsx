'use client'

import ToggleItem from '@/components/mypage/privacy/ToggleItem'
import { useRouter } from 'next/navigation'
import { patchSettingPush } from '@/lib/client/setting'
import { useState } from 'react'
import { useToast } from '@/components/common/toast/ToastContext'

interface SettingAlarmListProps {
  initialValue: boolean | undefined
}

export default function SettingAlarmList({ initialValue }: SettingAlarmListProps) {
  const router = useRouter()
  const { success, error } = useToast()
  const [isPushEnabled, setIsPushEnabled] = useState(initialValue)

  const handleUpdate = async (isPushEnabled: boolean | undefined) => {
    try {
      const result = await patchSettingPush(!isPushEnabled)
      if (result.success) {
        success('푸시 알림 설정 성공', '푸시 알림 설정에 성공하였습니다. ')
      } else {
        error('푸시 알림 설정 실패', '푸시 알림 설정에 실패하였습니다. ')
      }
      router.refresh()
    } catch (e) {
      error('푸시 알림 설정 실패', '푸시 알림 설정에 실패하였습니다. ')
    }
  }
  if (isPushEnabled !== undefined)
    return (
      <>
        <ToggleItem onClick={() => handleUpdate(isPushEnabled)} checked={isPushEnabled} content={'푸시 알림 허용'} />
      </>
    )
}
