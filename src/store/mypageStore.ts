import { create } from 'zustand/index'
import { devtools } from 'zustand/middleware'
import { WithDrawType } from '@/types/mypage'
import { FollowAcceptType } from '@/types/alarm'

interface MypageState {
  withdrawData: WithDrawType
  profilePreview: string | null
  profileFile: File | null
  nickname: string // 닉네임 상태 추가
  errorMessage: string | undefined
  successMessage: string | undefined

  updateWithdrawData: <K extends keyof WithDrawType>(field: K, value: WithDrawType[K]) => void
  setProfileImage: (file: File | null, preview: string | null) => void
  // 닉네임 설정 함수 추가
  setNickname: (nickname: string) => void
  setErrorMessage: (message: string) => void
  setSuccessMessage: (message: string) => void
  resetMessageState: () => void
}

const initWithdrawData: WithDrawType = {
  reason: '',
  detailReason: '',
}

const initFollowAcceptData: Partial<FollowAcceptType> = {
  followerId: 0,
  status: 'ACCEPT',
}

export const useMypageStore = create<MypageState>()(
  devtools((set, get) => ({
    // 초기값
    withdrawData: initWithdrawData,
    profilePreview: null,
    profileFile: null,
    nickname: '', // 초기값은 빈 문자열
    errorMessage: undefined,
    successMessage: undefined,

    // 공고 데이터 업데이트
    updateWithdrawData: (field, value) =>
      set(
        (state) => ({
          withdrawData: { ...state.withdrawData, [field]: value },
        }),
        false,
        `withdrawData/update_${field}`
      ),

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
)
