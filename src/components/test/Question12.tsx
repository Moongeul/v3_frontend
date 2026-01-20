'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question12Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'
import { createTest } from '@/lib/client/test'
import { TagEnumType } from '@/types/user'
import { convertKorToEnumTag } from '@/utils/user'

export default function Question12() {
  const router = useRouter()
  const { setTestAnswer, setTestResult, testAnswers } = useTestStore((state) => state)

  const onNavigate = (path: string, type: TagEnumType | undefined) => {
    router.push(`/${path}?type=${type}`)
  }

  /**
   * 모든 답변이 채워졌는지 검증하고 결과를 제출하는 함수
   * @param finalAnswers - 최신 답변이 포함된 전체 answers 객체
   */
  const handleSubmit = async (finalAnswers: typeof testAnswers) => {
    try {
      // 1. 모든 항목에 null이 없는지 검증 (Object.values 사용)
      const allAnswered = Object.values(finalAnswers.answers).every((answer) => answer !== null)

      if (!allAnswered) {
        alert('누락된 답변이 있습니다. 모든 문항을 완료해주세요.')
        return
      }

      // 2. API 호출
      const result = await createTest(finalAnswers)

      // 3. 결과 처리 및 페이지 이동
      if (result?.data?.data) {
        console.log('취향테스트 평가 완료', result)
        setTestResult({
          readingTasteType: result.data.data.readingTasteType,
          intro: result.data.data.intro,
        })
        onNavigate('result', convertKorToEnumTag(result.data.data.readingTasteType))
      }
    } catch (error) {
      console.error('테스트 제출 중 오류 발생:', error)
      alert('제출에 실패했습니다. 다시 시도해주세요.')
    }
  }

  /**
   * 버튼 클릭 핸들러
   * @param choice - 선택한 답변 ('A' | 'B')
   */
  const handleButtonClick = (choice: 'A' | 'B') => {
    // 1. Zustand 스토어 업데이트 (12번 답변 저장)
    setTestAnswer(12, choice)

    // 2. 검증을 위해 현재 스토어 데이터에 방금 선택한 12번 값을 합친 최신 객체 생성
    // (setTestAnswer가 비동기적으로 작동할 수 있으므로 직접 합쳐서 넘기는 것이 안전함)
    const updatedAnswers = {
      ...testAnswers,
      answers: {
        ...testAnswers.answers,
        12: choice,
      },
    }

    // 3. 제출 및 검증 함수 실행
    handleSubmit(updatedAnswers)
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={100} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question12Graphic width={202} height={220} />}
        question={'오늘의 책 여행 끝! 이 순간 나는…'}
        questionNumber={12}
      />

      <BottomButtons
        clickNumber={testAnswers.answers['12']}
        onClickA={() => handleButtonClick('A')}
        onClickB={() => handleButtonClick('B')}
        buttonContentA={'“다음 책 뭐 읽을까?” 벌써 들떠있다'}
        buttonContentB={'“이 책으로 오늘은 충분하다” 여운을 즐긴다'}
      />
    </StyleTestWrapper>
  )
}
