import { BookQuote, InteractionButton, ReviewContentMeta, ReviewContentText, ReviewHeader } from '@/components/book'
import { BookInfoSummary, Spacing } from '@/components/common'

export default function RecordDetailPage() {
  return (
    <main>
      <Spacing height={12} />

      <ReviewHeader isProfile={true} />
      <Spacing height={12} />

      <BookInfoSummary
        rating={4.9}
        styleType={'lightYellow'}
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={'황유림'}
        title={'책 제목이 길어질 경우에'}
        bookImage={'/bookimage.png'}
      />

      <Spacing height={12} />
      <ReviewContentMeta rating={4.9} createdAt={'2026.01.05'} />

      <Spacing height={12} />
      <ReviewContentText
        content={
          '블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는 아닙니다.'
        }
      />

      <Spacing height={12} />
      <BookQuote quoteContent={'인상깊은구절이란 인상깊은구절이 아닐까 하는 생각이다.'} page={'123'} />

      <Spacing height={8} />
      <BookQuote quoteContent={'인상깊은구절이란 인상깊은구절이 아닐까 하는 생각이다.'} page={'123'} />

      <Spacing height={40} />
      <InteractionButton />
    </main>
  )
}
