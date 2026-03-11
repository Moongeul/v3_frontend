'use client'

import { Spacing } from '@/components/common'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { PolicyTable, TableContainer } from '@/styles/mypage/Policy.styles'

export default function PoliciesMarketing() {
  const theme = useTheme()

  return (
    <main>
      <StyleContent $typography={typography.bodySm} $textColor={theme.colors.headerText}>
        {`뭉글은 서비스 개선, 신기능 안내, 이벤트 정보, 맞춤형 콘텐츠 추천 등의 마케팅 목적으로 개인정보를 이용할 수 있습니다.\n\n해당 동의는 서비스 이용에 필수가 아니며, 언제든 철회할 수 있습니다.\n\n\n[주요 안내사항]\n\n• 본 동의는 선택 사항이며, 동의하지 않아도 기본 서비스 이용에는 영향이 없습니다.\n\n• 마케팅 정보 수신 동의는 언제든 앱 내 설정에서 철회할 수 있습니다.\n\n• 철회 신청 시 즉시 마케팅 정보 수신이 중단됩니다.`}
      </StyleContent>

      <Spacing height={32} />

      {/* 표 섹션 */}
      <TableContainer>
        <StyleContent $typography={typography.bodySm} $textColor={theme.colors.headerText}>
          수집 정보
        </StyleContent>
        <Spacing height={12} />
        <PolicyTable $textColor={theme.colors.headerText} $borderColor={theme.colors.textFieldDefaultLine}>
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>이용목적</td>
              <td>신기능 안내, 이벤트 정보, 서비스 관련 공지사항, 프로모션 및 마케팅</td>
            </tr>
            <tr>
              <td>이용 정보</td>
              <td>사용자 성명, 사용자 활동 통계(독서 통계 등), 앱 내 알림</td>
            </tr>
            <tr>
              <td>제공 수단</td>
              <td>앱 내 알림, 이메일(해당하는 경우), 푸시 알림</td>
            </tr>
            <tr>
              <td>보유 기간</td>
              <td>동의 철회 시까지</td>
            </tr>
          </tbody>
        </PolicyTable>
      </TableContainer>

      <Spacing height={60} />
    </main>
  )
}
// --- 스타일 컴포넌트 수정 ---
