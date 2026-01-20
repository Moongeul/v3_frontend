import { TagKorType } from '@/types/user'
import { StyleDescriptionItem, StyleDescriptionList, StyleResultDescription } from '@/styles/test/Result.styles'

interface ResultContentProps {
  readingTasteType: TagKorType
}
export default function ResultDescription({ readingTasteType }: ResultContentProps) {
  const TASTE_DESCRIPTIONS: Record<TagKorType, string[]> = {
    '신상 헌터': [
      '새로운 분야·작가에 도전적이라 깊게 파기보단 넓게 훑는 취향을 갖고 있다.',
      '유행 지나면 흥미도 같이 식는 편이다.',
      '읽는 행위 = 트렌드 체크',
      '읽고 나면 바로 공유하는 것을 좋아한다.',
    ],
    '장르 고인물': [
      '늘 좋아하던 장르와 작가 선택이 먼저다.',
      '대신 한번 책을 읽으면 누구보다 깊게 파고드는 것을 좋아한다.',
      '기록은 남을 보여주기보다는 혼자 본다.',
      '여운은 혼자 씹어 먹는 타입이다.',
    ],
    '수다쟁이 독서가': [
      '읽자마자 추천부터 발사!',
      '공유와 피드백에서 동기를 얻는다.',
      '신상보단 취향 맞는 책을 선호한다.',
      '주변인들한테 책 영업하는 전형적인 인싸형 독서가 재질이다.',
    ],
    '정리왕 서평러': [
      '책마다 긴 글 리뷰 작성을 한다.',
      '책을 읽을 땐 차분히 분석하며 사색한다.',
      '자기계발과 성장 목적 강하다.',
      '기록으로 남겨야 직성이 풀리기 때문에 읽은 책들은 모두 기록한다.',
    ],
    '비밀 일기장 주인': [
      '기록하는 것을 좋아하지만 기록 후엔 혼자 본다.',
      '힐링을 할 수 있는 책을 좋아한다.',
      '마음의 상처는 책으로 치유한다.',
      '좋아하는 책이 있다면 추천도 슬쩍 친한 사람 또는 같은 취향을 가진 사람에게만 한다.',
    ],
    '감성 사색 정리러': [
      '밤 또는 새벽에 책을 혼자 읽는 시간을 좋아한다.',
      '새로운 자극보단 여운있는 책을 선호한다.',
      '책을 읽고 새벽에 울다가 정신 차리면 아침이 된 적이 종종 있다.',
      '책을 읽고 난 후, 여운을 씹다 하루 삭제된다.',
    ],
    '랜덤 피커': [
      '계획 없는 독서가 곧 계획, 끌릴 때 읽는 편이다.',
      '기록은 느낀점만 간단하게 정리한다.',
      '새로운 책 큐레이션이 재밌는 것을 선호한다.',
      '겉표지가 예쁘고 제목이 끌리면 바로 장바구니로 향한다.',
    ],
    '넷플릭스급 몰입러': [
      '스토리 몰입형으로 한번 책을 읽으면 밤새 정주행하는 스타일이다.',
      '감정 폭발하는 엔딩에 약하다.',
      '길게 기록하기 보다는 감상 공유에 열정적이다.',
      '미디어 보다는 책을 선호한다.',
    ],
  }

  const currentDescriptions = TASTE_DESCRIPTIONS[readingTasteType] || TASTE_DESCRIPTIONS['신상 헌터']

  return (
    <StyleResultDescription>
      <StyleDescriptionList>
        {currentDescriptions.map((text: string, index: number) => (
          <StyleDescriptionItem key={index}>{text}</StyleDescriptionItem>
        ))}
      </StyleDescriptionList>
    </StyleResultDescription>
  )
}
