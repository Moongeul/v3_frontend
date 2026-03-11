'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Spacing } from '@/components/common'
import { useTheme } from '@emotion/react'

export default function PolicyInfo() {
  const theme = useTheme()

  return (
    <main>
      <StyleContent $typography={typography.bodySm} $textColor={theme.colors.headerText}>
        {`뭉글 서비스는 소셜 로그인을 통해 아래의 개인정보를 수집합니다.\n\n아래 정보의 수집 및 이용에 동의하셔야 서비스 가입 및 이용이 가능합니다.\n\n\n[선택한 로그인 서비스별 수집 정보]\n\n① 구글(Google Sign-in)로 가입하는 경우\n\n• 필수 수집 정보:\n- 성명: 회원 식별, 서비스 제공 (회원 탈퇴 시까지 보유)\n- 프로필 이미지: 프로필 표시 (회원 탈퇴 시까지 보유)\n- 소셜 고유 아이디: 중복 가입 방지, 회원 관리 (회원 탈퇴 후 90일까지 보유)\n- 이메일 주소: 서비스 제공, 연락처 (회원 탈퇴 시까지 보유)\n- 서비스 이용 기록: 서비스 개선, 통계 분석 (회원 탈퇴 시까지 보유)\n\n\n② 카카오(카카오 로그인)로 가입하는 경우\n\n• 필수 수집 정보:\n- 성명: 회원 식별, 서비스 제공 (회원 탈퇴 시까지 보유)\n- 프로필 이미지: 프로필 표시 (회원 탈퇴 시까지 보유)\n- 소셜 고유 아이디: 중복 가입 방지, 회원 관리 (회원 탈퇴 후 90일까지 보유)\n- 서비스 이용 기록: 서비스 개선, 통계 분석 (회원 탈퇴 시까지 보유)\n\n• 선택 수집 정보:\n- 이메일 주소*: 서비스 제공, 연락처 (회원 탈퇴 시까지 보유)\n\n* 카카오 비즈니스 앱 인증 후 수집 가능합니다.\n* 현재 뭉글은 카카오 비즈니스 앱 미인증 상태이므로 이메일 수집이 불가능합니다.\n* 추후 비즈니스 앱 인증 후 이메일 수집을 추가할 계획입니다.\n\n\n③ 애플(Sign in with Apple)로 가입하는 경우\n\n• 필수 수집 정보:\n- 성명: 회원 식별, 서비스 제공 (회원 탈퇴 시까지 보유)\n- 소셜 고유 아이디: 중복 가입 방지, 회원 관리 (회원 탈퇴 후 90일까지 보유)\n- 이메일 주소*: 서비스 제공, 연락처 (회원 탈퇴 시까지 보유)\n- 서비스 이용 기록: 서비스 개선, 통계 분석 (회원 탈퇴 시까지 보유)\n\n• 주의사항:\n* 애플 로그인은 프로필 이미지를 제공하지 않습니다.\n* 사용자가 이메일을 비공개로 설정한 경우, 애플의 Privacy Relay 서비스를 통해 임시 이메일(xxxxxXXXX@privaterelay.appleid.com)이 제공됩니다.\n* 비공개 이메일은 사용자가 애플의 개인정보 보호 기능을 사용했음을 의미합니다.`}
      </StyleContent>
      <Spacing height={60} />
    </main>
  )
}
