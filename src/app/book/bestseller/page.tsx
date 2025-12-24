import BookInfoSummary from '@/components/common/BookInfoSummary'
import Spacing from '@/components/common/Spacing'

export default function BestSellerPage() {
  return (
    <main>
      <Spacing height={72} />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div key={index}>
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
        </div>
      ))}
    </main>
  )
}
