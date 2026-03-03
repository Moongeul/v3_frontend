import { create } from 'zustand'

export interface AgreeTermsType {
  serviceTermsAgree: boolean
  privatePolicyAgree: boolean
  marketingAgree: boolean
}

interface OnboardingState {
  agreeTerms: AgreeTermsType
  // 개별 약관 상태 변경
  setAgreeTerm: (key: keyof AgreeTermsType, value: boolean) => void
  // 전체 약관 상태 일괄 변경
  setAllAgreeTerms: (value: boolean) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  agreeTerms: {
    serviceTermsAgree: false,
    privatePolicyAgree: false,
    marketingAgree: false,
  },

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
}))
