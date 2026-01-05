import { BookInfoSummary } from '@/components/common'
import { fetchBookDetailInfo } from '@/lib/server/book'
import { SelectBookItem } from '@/components/question'
import { ChangeBook } from '@/components/write'

interface BookInfoProps {
  isbn: string
}

export default async function BookInfo({ isbn }: BookInfoProps) {
  const bookInfoResponse = await fetchBookDetailInfo(isbn)
  const bookInfo = bookInfoResponse.data

  return !bookInfo ? (
    <SelectBookItem />
  ) : (
    <BookInfoSummary
      title={bookInfo.title}
      isbn={bookInfo.isbn}
      bookImage={bookInfo.bookImage}
      author={bookInfo.author}
      rightElement={<ChangeBook />}
      rating={bookInfo.ratingAverage}
      styleType={'transparent'}
      publisher={bookInfo.publisher}
      pubdate={bookInfo.pubdate}
    />
  )
}
