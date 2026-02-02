import { ApiCallResult, Paging } from '@/types/common'
import { apiCallServer } from '@/lib/api.server'
import { AnswerType, QuestionType } from '@/types/question'

/**
 * 질문 리스트 조회 API
 */
export const fetchQuestions = async (
  pageParam: number,
  size: number
): Promise<ApiCallResult<Paging<QuestionType[]>>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/question/list?page=${pageParam}&size=${size}`, {
      method: 'GET',
    })

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
 * 질문 리스트 조회 API
 */
export const fetchQuestionDetail = async (questionId: string): Promise<ApiCallResult<QuestionType>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/question/${questionId}`, {
      method: 'GET',
    })

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
 * 답변 리스트 조회 API
 */
export const fetchAnswers = async (
  pageParam: number,
  size: number,
  questionId: number
): Promise<ApiCallResult<Paging<AnswerType[]>>> => {
  try {
    const { data, error } = await apiCallServer(`/v2/answer/list/${questionId}?page=${pageParam}&size=${size}`, {
      method: 'GET',
    })

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
