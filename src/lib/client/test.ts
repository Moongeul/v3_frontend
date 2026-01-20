import { ApiCallResult } from '@/types/common'

/**
 * 질문 생성 API
 */
export const createTest = async (
  testData: TestAnswerType
): Promise<
  ApiCallResult<
    ApiCallResult<{
      readingTasteType: string
      intro: string
    }>
  >
> => {
  try {
    const response = await fetch(`/api/reading-taste`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
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
