import { create } from 'zustand/index'
import { devtools } from 'zustand/middleware'
import { WithDrawType } from '@/types/mypage'
import { FollowAcceptType } from '@/types/alarm'

interface MypageState {
  withdrawData: WithDrawType
  updateWithdrawData: <K extends keyof WithDrawType>(field: K, value: WithDrawType[K]) => void
}

const initWithdrawData: Partial<WithDrawType> = {
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
    // 공고 데이터 업데이트
    updateWithdrawData: (field, value) =>
      set(
        (state) => ({
          withdrawData: { ...state.withdrawData, [field]: value },
        }),
        false,
        `withdrawData/update_${field}`
      ),
  }))
)
