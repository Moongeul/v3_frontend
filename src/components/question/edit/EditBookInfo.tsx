import { BookInfoSummary } from '@/components/common'
import { fetchBookDetailInfo } from '@/lib/server/book'
import { SelectBookItem } from '@/components/question'
import EditQuestionChangeBook from '@/components/question/search/EditQuestionChangeBook'

interface BookInfoProps {
  isbn: string
  questionId: string
}

export default async function EditBookInfo({ isbn, questionId }: BookInfoProps) {
  const bookInfoResponse = await fetchBookDetailInfo(isbn)
  const bookInfo = bookInfoResponse.data

  return !bookInfo ? (
    <SelectBookItem path={`/question/${questionId}/search`} />
  ) : (
    <BookInfoSummary
      title={bookInfo.title}
      isbn={bookInfo.isbn}
      bookImage={bookInfo.bookImage}
      author={bookInfo.author}
      rightElement={<EditQuestionChangeBook questionId={questionId} />}
      rating={bookInfo.ratingAverage}
      styleType={'transparent'}
      publisher={bookInfo.publisher}
      pubdate={bookInfo.pubdate}
    />
  )
}
