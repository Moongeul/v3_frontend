import { ApiCallResult, Paging } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { FollowUserInfoType, MyCategoryResponseType } from '@/types/mypage'
import { UserInfoType } from '@/types/user'
import { QuestionType } from '@/types/question'

/**
 * 팔로워
 */
export const fetchFollowers = async (userId?: string): Promise<ApiCallResult<FollowUserInfoType[]>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/follower${userId ? `?userId=${userId}` : ''}`, {
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
export const fetchFollowings = async (userId?: string): Promise<ApiCallResult<FollowUserInfoType[]>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/member/following${userId ? `?userId=${userId}` : ''}`, {
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
/**
 * 질문 리스트 조회 API
 */
export const fetchMyQuestions = async (
  pageParam: number,
  size: number,
  userId?: string
): Promise<ApiCallResult<Paging<QuestionType[]>>> => {
  try {
    const { data, error } = await apiCallServer(
      `/v2/member/question-list?${userId ? `userId=${userId}&` : ''}page=${pageParam}&size=${size}`,
      {
        method: 'GET',
      }
    )

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('질문 리스트 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 카테고리명 조회 API
 */
export const fetchCategoryName = async (
  id: string
): Promise<
  ApiCallResult<{
    categoryId: number
    title: string
  }>
> => {
  try {
    const { data, error } = await apiCallServer(`/v2/category/${id}?id=${id}`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('카테고리명 조회 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
