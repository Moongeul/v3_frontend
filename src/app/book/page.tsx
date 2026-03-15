import { Header, Spacing, PageLayout, NavBar } from '@/components/common'
import { BookContent, BookSearchField } from '@/components/book'
import { fetchWeeklyRecommendBook } from '@/lib/server/post'
import { fetchBookBestSeller } from '@/lib/server/book'

export default async function BookPage() {
  const weeklyRecommendBookResult = await fetchWeeklyRecommendBook()
  const weeklyRecommendBook = weeklyRecommendBookResult.data

  const bestSellerResult = await fetchBookBestSeller()
  const bestSeller = bestSellerResult.data?.data

  return (
    <main>
      <Header headerType={'title'}>책 둘러보기</Header>
      <PageLayout>
        <Spacing height={72} />
        <BookSearchField />

        <Spacing height={20} />
        <BookContent bestSellers={bestSeller} weeklyRecommendBook={weeklyRecommendBook} />
      </PageLayout>

      <Spacing height={98} />
      <NavBar />
    </main>
  )
}
