import { create } from 'zustand'
import { AgreeTermsType } from '@/types/onboarding'

interface OnboardingState {
  agreeTerms: AgreeTermsType
  profilePreview: string | null
  profileFile: File | null
  nickname: string // 닉네임 상태 추가
  errorMessage: string | undefined
  successMessage: string | undefined

  setAgreeTerm: (key: keyof AgreeTermsType, value: boolean) => void
  setAllAgreeTerms: (value: boolean) => void
  setProfileImage: (file: File | null, preview: string | null) => void

  // 닉네임 설정 함수 추가
  setNickname: (nickname: string) => void
  setErrorMessage: (message: string) => void
  setSuccessMessage: (message: string) => void
  resetMessageState: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  agreeTerms: {
    serviceTermsAgree: false,
    privatePolicyAgree: false,
    marketingAgree: false,
  },
  profilePreview: null,
  profileFile: null,
  nickname: '', // 초기값은 빈 문자열
  errorMessage: undefined,
  successMessage: undefined,

  setAgreeTerm: (key, value) =>
    set((state) => ({
      agreeTerms: {
        ...state.agreeTerms,
        [key]: value,
      },
    })),

  setAllAgreeTerms: (value) =>
    set(() => ({
      agreeTerms: {
        serviceTermsAgree: value,
        privatePolicyAgree: value,
        marketingAgree: value,
      },
    })),

  setProfileImage: (file, preview) =>
    set(() => ({
      profileFile: file,
      profilePreview: preview,
    })),

  // 닉네임 업데이트 로직
  setNickname: (nickname) => set(() => ({ nickname })),
  // 성공 메시지 설정 (에러는 제거)
  setSuccessMessage: (message) =>
    set(() => ({
      successMessage: message,
      errorMessage: undefined,
    })),

  // 에러 메시지 설정 (성공은 제거)
  setErrorMessage: (message) =>
    set(() => ({
      errorMessage: message,
      successMessage: undefined,
    })),

  resetMessageState: () =>
    set(() => ({
      errorMessage: undefined,
      successMessage: undefined,
    })),
}))
