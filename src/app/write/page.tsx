import ReviewField from '@/components/write/ReviewField'
import Spacing from '@/components/common/Spacing'
import QuoteField from '@/components/write/QuoteField'
import ReadDateField from '@/components/write/ReadDateField'
import RatingField from '@/components/write/RatingField'
import BookInfoSummary from '@/components/common/BookInfoSummary'
import ChangeBook from '@/components/write/ChangeBook'
import BottomBorder from '@/components/common/BottomBorder'
import DropDownContainer from '@/components/write/DropDownContainer'
import { getCategory } from '@/lib/server/write'

export default async function WritePage() {
  const categoryResponse = await getCategory()
  const categories = categoryResponse.data?.categoryList

  return (
    <main>
      <DropDownContainer categories={categories} />
      <Spacing height={16} />

      <BookInfoSummary
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={'황유림'}
        title={'책 제목이 길어질 경우에'}
        bookImage={'/bookimage.png'}
        rightElement={<ChangeBook />}
      />

      <Spacing height={20} />
      <BottomBorder />
      <Spacing height={20} />

      <ReadDateField />
      <Spacing height={20} />

      <RatingField />
      <Spacing height={20} />

      <ReviewField />
      <Spacing height={20} />

      <QuoteField />
    </main>
  )
}
