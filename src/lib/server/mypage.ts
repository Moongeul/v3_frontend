import { ApiCallResult } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { FollowUserInfoType, MyCategoryResponseType, MyCategoryType } from '@/types/mypage'
import { UserInfoType } from '@/types/user'

/**
 * 팔로워
 */
export const fetchFollowers = async (): Promise<ApiCallResult<FollowUserInfoType[]>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/follower`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('팔로워 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 팔로잉
 */
export const fetchFollowings = async (): Promise<ApiCallResult<FollowUserInfoType[]>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/following`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('팔로잉 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 사용자 정보
 */
export const fetchUserInfo = async (userId?: string): Promise<ApiCallResult<UserInfoType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/user-info${userId ? `?userId=${userId}` : ''}`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('사용자 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 사용자 정보
 */
export const fetchMyCategoryList = async (
  userId: number | undefined
): Promise<ApiCallResult<MyCategoryResponseType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/post-stats?userId=${userId}`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('사용자 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
