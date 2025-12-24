import BookInfoSummary from '@/components/common/BookInfoSummary'
import Spacing from '@/components/common/Spacing'
import BottomBorder from '@/components/common/BottomBorder'
import BookIntroduction from '@/components/book/BookIntroduction'
import BookReviews from '@/components/book/BookReviews'

export default function BookDetailPage() {
  return (
    <main>
      <Spacing height={68}></Spacing>
      <BookInfoSummary
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={'황유림'}
        title={'책 제목이 길어질 경우에'}
        bookImage={'/bookimage.png'}
        // rightElement={<ChangeBook />}
      />
      <Spacing height={20} />
      <BookIntroduction />

      <Spacing height={20} />
      <BottomBorder />
      <Spacing height={20} />

      <BookReviews />
    </main>
  )
}
