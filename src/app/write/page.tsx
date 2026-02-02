import { getCategory } from '@/lib/server/write'
import ReviewField from '@/components/write/ReviewField'
import Spacing from '@/components/common/Spacing'
import QuoteField from '@/components/write/QuoteField'
import ReadDateField from '@/components/write/ReadDateField'
import RatingField from '@/components/write/RatingField'
import BookInfoSummary from '@/components/common/BookInfoSummary'
import ChangeBook from '@/components/write/ChangeBook'
import BottomBorder from '@/components/common/BottomBorder'
import DropDownContainer from '@/components/write/DropDownContainer'
import PrivacyDropDown from '@/components/common/dropdown/PrivacyDropDown'
import CategoryDropDown from '@/components/common/dropdown/CategoryDropDown'
import PageField from '@/components/write/PageField'
import { fetchBookDetailInfo } from '@/lib/server/book'
import Header from '../../components/common/Header'
import SubmitButton from '@/components/write/SubmitButton'
import PageLayout from '../../components/common/PageLayout'
import { SelectBookItem } from '@/components/question'

export default async function WritePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const isbn = (resolvedSearchParams.isbn as 'isbn') || 'isbn'

  const categoryResponse = await getCategory()
  const bookDetailResponse = await fetchBookDetailInfo(isbn)
  const categories = categoryResponse.data?.categoryList
  const bookInfo = bookDetailResponse.data

  return (
    <main>
      <Header headerType={'dynamic'} rightIcon={<SubmitButton />}>
        글쓰기
      </Header>
      <PageLayout>
        <div>
          <DropDownContainer>
            <PrivacyDropDown />
            <CategoryDropDown categories={categories} />
          </DropDownContainer>

          <Spacing height={16} />

          {bookInfo ? (
            <BookInfoSummary
              publisher={bookInfo.publisher}
              pubdate={bookInfo.pubdate}
              isbn={bookInfo.isbn}
              author={bookInfo.author}
              title={bookInfo.title}
              bookImage={bookInfo.bookImage}
              rightElement={<ChangeBook />}
            />
          ) : (
            <SelectBookItem path={'/write/search'} />
          )}

          <Spacing height={20} />
          <BottomBorder />
          <Spacing height={20} />

          <ReadDateField />
          <Spacing height={20} />

          <RatingField />
          <Spacing height={20} />

          <PageField />
          <Spacing height={20} />

          <ReviewField />
          <Spacing height={20} />

          <QuoteField />
        </div>
      </PageLayout>
    </main>
  )
}
