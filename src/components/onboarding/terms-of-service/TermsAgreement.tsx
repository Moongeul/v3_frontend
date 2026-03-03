'use client'

import { typography } from '@/styles/theme'
import Label from '../../common/Label'
import {
  StyleAllAgreementBox,
  StyleContainer,
  StyleDivider,
  StyleList,
  StyleTermItem,
  StyleTermItemContainer,
} from '@/styles/onboarding/TermsOfService.styles'
import { CheckIcon, HeaderRightArrowIcon, UncheckIcon } from '@/assets/svgComponents'
import { useTheme } from '@emotion/react'
import { AgreeTermsType, useOnboardingStore } from '@/store/onboardingStore' // 경로 확인 필요

// id를 AgreeTermsType의 key와 일치시킵니다.
const TERMS_DATA: { id: keyof AgreeTermsType; label: string; required: boolean }[] = [
  { id: 'serviceTermsAgree', label: '서비스 이용약관 동의(필수)', required: true },
  { id: 'privatePolicyAgree', label: '개인 정보 수집 및 이용 동의(필수)', required: true },
  { id: 'marketingAgree', label: '마케팅 정보 수신 동의(선택)', required: false },
]

export default function TermsAgreement() {
  const theme = useTheme()

  // Zustand Store 연결
  const { agreeTerms, setAgreeTerm, setAllAgreeTerms } = useOnboardingStore()

  // [로직] 전체 동의 여부 계산
  const isAllChecked = Object.values(agreeTerms).every((val) => val)

  // [핸들러] 개별 항목 클릭
  const handleTermClick = (id: keyof AgreeTermsType) => {
    setAgreeTerm(id, !agreeTerms[id])
  }

  // [핸들러] 전체 동의 클릭
  const handleAllClick = () => {
    setAllAgreeTerms(!isAllChecked)
  }

  return (
    <StyleContainer>
      {/* 전체 동의 섹션 */}
      <StyleAllAgreementBox onClick={handleAllClick}>
        {isAllChecked ? <CheckIcon width={18} height={18} /> : <UncheckIcon width={18} height={18} />}
        <Label labelStyle={typography.subtitleMd} labelColor={theme.colors.headerText}>
          전체 동의
        </Label>
      </StyleAllAgreementBox>

      <StyleDivider />

      {/* 개별 항목 리스트 */}
      <StyleList>
        {TERMS_DATA.map((term) => (
          <StyleTermItemContainer key={term.id} onClick={() => handleTermClick(term.id)}>
            <StyleTermItem>
              {agreeTerms[term.id] ? <CheckIcon width={18} height={18} /> : <UncheckIcon width={18} height={18} />}
              <Label
                labelStyle={typography.buttonMd}
                labelColor={agreeTerms[term.id] ? theme.colors.buttonActiveGhost : theme.colors.textFieldFocusLine}
              >
                {term.label}
              </Label>
            </StyleTermItem>
            <HeaderRightArrowIcon
              width={20}
              height={20}
              // stroke나 fill이 빠져있다면 여기서 추가
              onClick={(e) => {
                e.stopPropagation()
                // TODO: 이용 약관 페이지로 이동
              }}
            />
          </StyleTermItemContainer>
        ))}
      </StyleList>
    </StyleContainer>
  )
}
