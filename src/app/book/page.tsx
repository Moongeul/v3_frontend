import Spacing from '@/components/common/Spacing'
import BookSearchField from '@/components/book/BookSearchField'
import BestsellerList from '@/components/book/BestsellerList'
import PopularBook from '@/components/book/PopularBook'
import Header from '@/components/common/Header'
import PageLayout from '@/components/common/PageLayout'

export default function BookPage() {
  return (
    <main>
      <Header headerType={'title'}>책 둘러보기</Header>
      <PageLayout>
        <Spacing height={72} />
        <BookSearchField />

        <Spacing height={27} />
        <BestsellerList />

        <Spacing height={36} />
        <PopularBook />
      </PageLayout>
    </main>
  )
}
