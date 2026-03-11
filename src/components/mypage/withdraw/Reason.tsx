'use client'

import { typography } from '@/styles/theme'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { CountIndicator, Spacing, TextInput } from '@/components/common'
import WithdrawDropDown from '@/components/common/dropdown/WithdrawDropDown'
import { useMypageStore } from '@/store/mypageStore'

export default function Reason() {
  const theme = useTheme()
  const { withdrawData, updateWithdrawData } = useMypageStore()

  return (
    <div>
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.bodyMd}>
        떠나시는 이유를 알려주세요.
      </StyleContent>
      <Spacing height={8} />
      <WithdrawDropDown />
      <Spacing height={8} />
      {withdrawData.reason === '기타' ? (
        <TextInput
          onChange={(e) => {
            updateWithdrawData('detailReason', e.target.value)
          }}
          rightElement={<CountIndicator textType={'textArea'} maxLength={2000} valueLength={10} />}
          placeholder={
            '서비스 탈퇴 사유에 대해 알려주세요.\n' + '고객님의 소중한 피드백을 담아 더 나은 서비스로 보답하겠습니다.'
          }
          textType={'textArea'}
        />
      ) : null}
    </div>
  )
}
