import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { AnswerType, CreateAnswerType, CreateQuestionType, QuestionType } from '@/types/question'

/**
 * 질문 생성 API
 */
export const createQuestion = async (
  question: CreateQuestionType
): Promise<
  ApiCallResult<
    ApiCallResult<{
      questionId: number
    }>
  >
> => {
  try {
    const response = await fetch(`/api/question/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 질문 수정 API
 */
export const putQuestion = async (
  question: CreateQuestionType,
  questionId: string
): Promise<
  ApiCallResult<
    ApiCallResult<{
      questionId: number
    }>
  >
> => {
  try {
    const response = await fetch(`/api/question/${questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 질문 리스트 조회
 */
export const clientFetchQuestions = async (params: {
  page: number
  size: number
}): Promise<APIResponseType<Paging<QuestionType[]>>> => {
  const { page = 1, size = 20 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/question/list?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 질문 리스트 조회
 */
export const clientFetchAnswers = async (params: {
  page: number
  size: number
  questionId: number
}): Promise<APIResponseType<Paging<AnswerType[]>>> => {
  const { page = 1, size = 20, questionId = 1 } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await fetch(`/api/answer/list/${questionId}?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

/**
 * 전화번호 인증코드 인증
 */
export const postCreateAnswer = async (answer: CreateAnswerType): Promise<ApiCallResult<{ answerId: number }>> => {
  try {
    const response = await fetch(`/api/answer/create`, {
      method: 'POST',
      body: JSON.stringify(answer),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('전화번호 인증 데이터', data)
    return data
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 질문 삭제 API
 */
export const deleteQuestion = async (questionId: string | number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/question/${questionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 답변 삭제 API
 */
export const deleteAnswer = async (answerId: string | number): Promise<ApiCallResult<ApiCallResult<string>>> => {
  try {
    const response = await fetch(`/api/answer/${answerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 답변 수정 API
 */
export const putAnswer = async (
  answer: string,
  answerId: string
): Promise<
  ApiCallResult<
    ApiCallResult<{
      questionId: number
    }>
  >
> => {
  try {
    const response = await fetch(`/api/answer/${answerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: answer }),
      credentials: 'include',
    })
    console.log('응답', response)

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
