import BookShelfList from '@/components/record/bookshelf/BookShelfList'
import { Header, PageLayout, Spacing } from '@/components/common'

export default async function RecordPostPage({ params }: { params: Promise<{ isbn: string; userId: string }> }) {
  const { isbn, userId } = await params
  return (
    <main>
      <Header headerType={'dynamic'}>책장</Header>
      <Spacing height={30} />
      <PageLayout>
        <BookShelfList isbn={isbn} userId={userId} />
      </PageLayout>
    </main>
  )
}
