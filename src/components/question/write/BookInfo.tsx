import { BookInfoSummary } from '@/components/common'
import { fetchBookDetailInfo } from '@/lib/server/book'
import { SelectBookItem } from '@/components/question'
import QuestionChangeBook from '@/components/question/write/QuestionChangeBook'

interface BookInfoProps {
  isbn: string | string[]
}

export default async function BookInfo({ isbn }: BookInfoProps) {
  const bookInfoResponse = await fetchBookDetailInfo(isbn)
  const bookInfo = bookInfoResponse.data

  return !bookInfo ? (
    <SelectBookItem path={'/question/search'} />
  ) : (
    <BookInfoSummary
      title={bookInfo.title}
      isbn={bookInfo.isbn}
      bookImage={bookInfo.bookImage}
      author={bookInfo.author}
      rightElement={<QuestionChangeBook />}
      rating={bookInfo.ratingAverage}
      styleType={'transparent'}
      publisher={bookInfo.publisher}
      pubdate={bookInfo.pubdate}
    />
  )
}
