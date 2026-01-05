import { ApiCallResult } from '@/types/common'
import { QuestionType } from '@/types/question'

/**
 * 질문 생성 API
 */
export const createQuestion = async (
  question: QuestionType
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
