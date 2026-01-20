'use client'

import { StyleResultSummaryCardWrapper } from '@/styles/test/Result.styles'
import ResultSummaryCard from '@/components/test/result/ResultSummaryCard'
import { TagKorType } from '@/types/user'

export default function AllResultList() {
  const results: { readingTasteType: TagKorType; intro: string; description: string }[] = [
    {
      readingTasteType: '넷플릭스급 몰입러',
      intro: '드라마 오타쿠 몽상가',
      description: '스토리 몰입형으로 한번 \n' + '책을 읽으면 밤새 정주행하는 스타일이다.',
    },
    {
      readingTasteType: '랜덤 피커',
      intro: '책 선택은 운명이다.',
      description: '계획 없는 독서가 곧\n' + '계획, 끌릴 때 \n' + '읽는 편이다. ',
    },
    {
      readingTasteType: '감성 사색 정리러',
      intro: '감성 새벽 독거노인',
      description: '밤 또는 새벽에 책을 혼자 읽는 시간을 좋아한다.',
    },
    {
      readingTasteType: '비밀 일기장 주인',
      intro: '내 기록은 흑역사, 공개 불가.',
      description: '기록하는 것을 좋아하지만 기록 후엔 혼자 본다.',
    },
    {
      readingTasteType: '신상 헌터',
      intro: '신간과 트렌드만이 \n' + '답이다',
      description: '유행 지나면 흥미도\n' + '같이 식는 편이다.',
    },
    {
      readingTasteType: '장르 고인물',
      intro: '나는 같은 장르만 \n' + '조진다',
      description: '늘 좋아하던 장르와\n' + '작가 선택이 먼저다.',
    },
    {
      readingTasteType: '수다쟁이 독서가',
      intro: '책과 관련된 이야기를 \n' + '좋아해.',
      description: '공유와 피드백에서\n' + '동기를 얻는다.',
    },
    {
      readingTasteType: '정리왕 서평러',
      intro: '안 쓰면 안 읽은 거다.',
      description: '기록으로 남겨야 직성이 풀리기 때문에 읽은 \n' + '책들은 모두 기록한다.',
    },
  ]

  return (
    <StyleResultSummaryCardWrapper>
      {results.map((result) => (
        <ResultSummaryCard
          readingTasteType={result.readingTasteType}
          intro={result.intro}
          description={result.description}
          key={result.readingTasteType}
        />
      ))}
    </StyleResultSummaryCardWrapper>
  )
}
