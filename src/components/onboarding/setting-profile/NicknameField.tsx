'use client'

import { useEffect, useState } from 'react'
import { Button, CountIndicator, Spacing, TextInput } from '@/components/common'
import { StyledNicknameWrapper } from '@/styles/onboarding/SettingProfile.styles'
import { useOnboardingStore } from '@/store/onboardingStore'
import { fetchMemberNicknameCheck, postMemberNicknameRegenerate } from '@/lib/client/onboarding'
import SuccessMessage from '@/components/common/SuccessMessage'
import ErrorMessage from '@/components/common/ErrorMessage'

export default function NicknameField() {
  const { nickname, setNickname, errorMessage, successMessage, setSuccessMessage, setErrorMessage, resetMessageState } =
    useOnboardingStore()

  // 1. 초기 렌더링 시 랜덤 닉네임 로드
  useEffect(() => {
    const fetchRandomNickname = async () => {
      // 이미 닉네임이 있다면 다시 불러오지 않으려면 조건 추가 가능
      if (nickname) return

      const result = await postMemberNicknameRegenerate()
      if (result.success && result.data) {
        setNickname(result.data.nickname) // 성공 시 스토어 업데이트
      }
    }

    fetchRandomNickname()
  }, []) // 마운트 시 1회 실행

  const checkNicknameDuplication = async () => {
    resetMessageState()

    const result = await fetchMemberNicknameCheck(nickname)
    if (result.success && result.data) {
      if (result.data.isDuplicate) {
        setErrorMessage('중복된 닉네임입니다.')
      } else {
        setSuccessMessage('사용 가능한 닉네임입니다.')
      }
    }
  }

  return (
    <div>
      <StyledNicknameWrapper>
        <TextInput
          placeholder={'ex) 동해밤바다'}
          value={nickname}
          maxLength={12}
          onChange={(e) => {
            resetMessageState()
            setNickname(e.target.value)
          }}
          rightElement={
            <CountIndicator
              textType={'textField'}
              valueLength={nickname.length} // 실제 글자 수 반영
              maxLength={12}
            />
          }
        />
        <Button onClick={checkNicknameDuplication} width={80}>
          중복확인
        </Button>
      </StyledNicknameWrapper>

      <Spacing height={8} />
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {successMessage ? <SuccessMessage message={successMessage} /> : null}
    </div>
  )
}
