import { Header, Spacing, PageLayout, NavBar } from '@/components/common'
import { BookContent, BookSearchField } from '@/components/book'
import { fetchWeeklyRecommendBook } from '@/lib/server/post'

export default async function BookPage() {
  const weeklyRecommendBookResult = await fetchWeeklyRecommendBook()
  const weeklyRecommendBook = weeklyRecommendBookResult.data
  console.log('weeklyRecommendBook', weeklyRecommendBook)

  return (
    <main>
      <Header headerType={'title'}>책 둘러보기</Header>
      <PageLayout>
        <Spacing height={72} />
        <BookSearchField />

        <Spacing height={20} />
        <BookContent weeklyRecommendBook={weeklyRecommendBook} />
      </PageLayout>

      <Spacing height={98} />
      <NavBar />
    </main>
  )
}
