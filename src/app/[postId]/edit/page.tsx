import DropDownContainer from '@/components/write/DropDownContainer'
import EditPrivacyDropDown from '@/components/edit/EditPrivacyDropDown'
import EditCategoryDropDown from '@/components/edit/EditCategoryDropDown'
import EditSelectBookItem from '@/components/edit/EditSelectBookItem'
import EditQuoteField from '@/components/edit/EditQuoteField'
import EditReviewField from '@/components/edit/EditReviewField'
import EditPageField from '@/components/edit/EditPageField'
import EditRatingField from '@/components/edit/EditRatingField'
import EditReadDateField from '@/components/edit/EditReadDateField'
import { serverFetchPostDetail } from '@/lib/server/record'
import { getCategory } from '@/lib/server/write'
import { fetchBookDetailInfo } from '@/lib/server/book'
import { BookInfoSummary, BottomBorder, PageLayout, Spacing } from '@/components/common'
import EditChangeBook from '@/components/edit/EditChangeBook'
import EditHeader from '@/components/edit/EditHeader'

export default async function EditPage({
  params,
  searchParams,
}: {
  params: Promise<{ postId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { postId } = await params

  const resolvedSearchParams = await searchParams
  const isbn = (resolvedSearchParams.isbn as 'isbn') || 'isbn'

  const result = await serverFetchPostDetail(Number(postId))
  const postData = result.data

  const categoryResponse = await getCategory()
  const categories = categoryResponse.data?.categoryList

  const bookDetailResponse = await fetchBookDetailInfo(isbn)
  const bookInfo = bookDetailResponse.data

  return (
    <main>
      <EditHeader postId={Number(postId)} />
      <PageLayout>
        <div>
          <DropDownContainer>
            <EditPrivacyDropDown selectedPrivacyDropDown={postData.postVisibility} isbn={isbn} />
            <EditCategoryDropDown categories={categories} selectedCategoryId={postData.categoryId} />
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
              rightElement={<EditChangeBook postId={postId} />}
            />
          ) : (
            <EditSelectBookItem path={`/${postId}/edit/search`} />
          )}

          <Spacing height={20} />
          <BottomBorder />
          <Spacing height={20} />

          <EditReadDateField selectedReadDate={postData.readDate} />
          <Spacing height={20} />

          <EditRatingField selectedRating={postData.rating} />
          <Spacing height={20} />

          <EditPageField selectedPage={postData.page} />
          <Spacing height={20} />

          <EditReviewField selectedReview={postData.content} />
          <Spacing height={20} />

          <EditQuoteField selectedQuotes={postData.quotes} />
          <Spacing height={300} />
        </div>
      </PageLayout>
    </main>
  )
}
