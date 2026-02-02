import { ApiCallResult, APIResponseType, Paging } from '@/types/common'
import { CreateQuestionType, QuestionType } from '@/types/question'
import { RecordType } from '@/types/record'

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
