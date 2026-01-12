import { SearchParams } from 'next/dist/server/request/search-params'
import { Spacing } from '@/components/common'
import { BottomButtons, ProgressBar, TestCard } from '@/components/test'

type StepType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

interface TestPageProps {
  searchParams: SearchParams
}

export default async function TestPage({ searchParams }: TestPageProps) {
  const step = (searchParams.step as StepType) || '1'

  const stepData = {
    '1': {
      buttonContentA: '마음 세탁용 힐링책',
      buttonContentB: '영화보다는 재밌는 스토리 책',
      onClickA: () => {},
      onClickB: () => {},
    },
    '2': {
      buttonContentA: '장르 딱 보고 직진하는 “테마형 인간”',
      buttonContentB: '남들이 좋다 한 책부터 보는 “인싸형 인간”',
      onClickA: () => {},
      onClickB: () => {},
    },
    '3': {
      buttonContentA: '"홀린 듯이" 바로 구매. 표지가 예쁘면 무조건 장바구니에 넣는다!',
      buttonContentB: '철저한 사전 조사 후 결정! 목차와 서평 정독은 기본이다.',
      onClickA: () => {},
      onClickB: () => {},
    },
    '4': {
      buttonContentA: '"도전!" 새로운 세상에 발을 들여놓는 것을 즐긴다.',
      buttonContentB: '"PASS!" 내가 좋아하는 \'확신의 영역\' 내에서만 머물고 싶다.',
      onClickA: () => {},
      onClickB: () => {},
    },
    '5': {
      buttonContentA: '해가 떠도, 졸려도… 밤에 본다',
      buttonContentB: '햇살 맛집 카페, 아침·낮이 찐이지',
      onClickA: () => {},
      onClickB: () => {},
    },
    '6': {
      buttonContentA: '밑줄 긋다 멈춰서 깊은 생각',
      buttonContentB: '그냥 휙휙 읽기',
      onClickA: () => {},
      onClickB: () => {},
    },
    '7': {
      buttonContentA: '긴 글로 조목조목 써 내려가는 서평러',
      buttonContentB: '한 줄 밑줄 긋고 “갓 구절”만 모으는 밈러',
      onClickA: () => {},
      onClickB: () => {},
    },
    '8': {
      buttonContentA: '“안 돼! 이건 내 흑역사 노트야” 비공개파',
      buttonContentB: '“봐줘! 칭찬해줘!” 공유덕후',
      onClickA: () => {},
      onClickB: () => {},
    },
    '9': {
      buttonContentA: '“이거 무조건 읽어야 해!!” 강추',
      buttonContentB: '“음… 너 취향에 맞을진 모르겠는데…” 조심스러운 추천',
      onClickA: () => {},
      onClickB: () => {},
    },
    '10': {
      buttonContentA: '“쿨하게 손절” → 서재에서 증발',
      buttonContentB: '“너 언젠가 다시 보자…” → 보관함행',
      onClickA: () => {},
      onClickB: () => {},
    },
    '11': {
      buttonContentA: '눈물 혹은 감탄… 감정 폭발형',
      buttonContentB: '담담하게 정리… 차분한 사색형',
      onClickA: () => {},
      onClickB: () => {},
    },
    '12': {
      buttonContentA: '“다음 책 뭐 읽을까?” 벌써 들떠있다',
      buttonContentB: '“이 책으로 오늘은 충분하다” 여운을 즐긴다',
      onClickA: () => {},
      onClickB: () => {},
    },
  }

  return (
    <main>
      <ProgressBar />
      <Spacing height={16} />

      <TestCard />

      <BottomButtons
        buttonContentA={stepData[step].buttonContentA}
        buttonContentB={stepData[step].buttonContentB}
        onClickA={stepData[step].onClickA}
        onClickB={stepData[step].onClickB}
      />
    </main>
  )
}
