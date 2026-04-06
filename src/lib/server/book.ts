import { ApiCallResult, Paging } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { BestSellerType, BookReviewType, BookType, MostRecordedBookType } from '@/types/book'

/**
 * 책 상세 정보 조회 API
 */
export const fetchBookDetailInfo = async (isbn: string | string[]): Promise<ApiCallResult<BookType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/book/${isbn}`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('책 상세 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
/**
 * 책 리뷰 정보 조회 API
 */
export const fetchBookReview = async (isbn: string | string[]): Promise<ApiCallResult<Paging<BookReviewType[]>>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/book/review/${isbn}`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('책 상세 정보 불러오기 실패:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 베스트 셀러 조회
 */
export const fetchBookBestSeller = async (): Promise<ApiCallResult<{ data: BestSellerType[] }>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/book/bestseller`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('베스트셀러 도서 조회API:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 베스트 셀러 상세 조회
 */
export const fetchBookBestSellerDetail = async (): Promise<ApiCallResult<{ data: BookType[] }>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/book/bestseller/detail`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('베스트셀러 도서 상세 API:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 가장 많이 기록된 책 API
 */
export const fetchMostRecordedBook = async (): Promise<ApiCallResult<MostRecordedBookType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/post/most-recorded-book`, {
      method: 'GET',
    })

    if (error) {
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('가장 많이 기록된 책 API 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
