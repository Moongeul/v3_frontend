import { BookInfoSummary, Spacing } from '@/components/common'
import { ReviewContentText } from '@/components/book'
import { AvatarGroup, CommentSummary, Comment } from '@/components/question'

export default function QuestionDetailPage() {
  return (
    <main>
      <AvatarGroup />
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
      <ReviewContentText content={'어쩌구 저쩌구'} />

      <Spacing height={12} />
      <CommentSummary count={5} />

      <Comment />
      <Comment />
      <Comment />
    </main>
  )
}
