'use client'

import { StylePopularBookLayout } from '@/styles/common/Book.styles'
import { PopularBookDescription } from '@/components/book/index'
import { BookInfoSummary } from '@/components/common'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

export default function PopularBook() {
  return (
    <StylePopularBookLayout>
      <PencilSketchEffect />
      <BookInfoSummary
        rating={4.5}
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={'황유림'}
        title={'책 제목이 길어질 경우에'}
        bookImage={'/bookimage.png'}
      />
      <PopularBookDescription
        description={
          '인간의 생이 미약하여 가치 없게 느껴진다면 이 책을 펴보길. 누구보다 인간답고 모호했던 나의 내면이 톨스토이의 서술로 명료해진다.'
        }
      />
    </StylePopularBookLayout>
  )
}
