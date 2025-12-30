import { Header, Spacing, PageLayout } from '@/components/common'
import { BookSearchField, BookContent } from '@/components/book'

export default function BookPage() {
  return (
    <main>
      <Header headerType={'title'}>책 둘러보기</Header>
      <PageLayout>
        <Spacing height={72} />
        <BookSearchField />

        <Spacing height={20} />
        <BookContent />
      </PageLayout>
    </main>
  )
}
