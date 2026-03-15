'use client'

import { useMypageStore } from '@/store/mypageStore'
import { useEffect } from 'react'
import { Button, CountIndicator, Spacing, TextInput } from '@/components/common'
import { StyledNicknameWrapper } from '@/styles/onboarding/SettingProfile.styles'
import { fetchMemberNicknameCheck, postMemberNicknameRegenerate } from '@/lib/client/onboarding'
import SuccessMessage from '@/components/common/SuccessMessage'
import ErrorMessage from '@/components/common/ErrorMessage'

interface EditNicknameFieldProps {
  initialNickname?: string
}

export default function EditNicknameField({ initialNickname }: EditNicknameFieldProps) {
  const { nickname, setNickname, errorMessage, successMessage, setSuccessMessage, setErrorMessage, resetMessageState } =
    useMypageStore()

  // 초기값 설정 및 초기값 검증 로직
  useEffect(() => {
    const initNickname = async () => {
      if (initialNickname) {
        setNickname(initialNickname)
        // 핵심: 초기 닉네임이 있으면 '사용 가능한 닉네임'으로 간주하여 성공 메시지 세팅
        setSuccessMessage('사용 가능한 닉네임입니다.')
        return
      }

      if (!nickname) {
        const result = await postMemberNicknameRegenerate()
        if (result.success && result.data) {
          setNickname(result.data.nickname)
          // 랜덤 닉네임도 초기엔 사용 가능한 상태로 세팅
          setSuccessMessage('사용 가능한 닉네임입니다.')
        }
      }
    }
    initNickname()
  }, [initialNickname, setNickname, setSuccessMessage])

  const checkNicknameDuplication = async () => {
    if (!nickname.trim()) {
      setErrorMessage('닉네임을 입력해주세요.')
      return
    }

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

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setNickname(newValue)

    // 핵심: 값이 수정되면 일단 메시지 리셋 (isActive false가 됨)
    resetMessageState()

    // 만약 수정했는데 다시 초기값과 같아진다면 자동으로 성공 메시지 복구
    if (newValue === initialNickname) {
      setSuccessMessage('사용 가능한 닉네임입니다.')
    }
  }

  return (
    <div>
      <StyledNicknameWrapper>
        <TextInput
          placeholder={'ex) 동해밤바다'}
          value={nickname}
          maxLength={12}
          onChange={handleNicknameChange}
          rightElement={<CountIndicator textType={'textField'} valueLength={nickname?.length || 0} maxLength={12} />}
        />
        <Button
          onClick={checkNicknameDuplication}
          width={80}
          // 현재 값이 초기값과 같으면 굳이 중복확인을 누를 필요 없으므로 비활성화 가능 (선택)
          disabled={!nickname.trim() || nickname === initialNickname}
        >
          중복확인
        </Button>
      </StyledNicknameWrapper>

      <Spacing height={8} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {successMessage && <SuccessMessage message={successMessage} />}
    </div>
  )
}
