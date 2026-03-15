import { Header, NavBar, PageLayout, Spacing, Tab } from '@/components/common'
import { RecordTabType } from '@/types/record'
import BookShelfRecord from '@/components/record/BookShelfRecord'
import CalendarRecord from '@/components/record/CalendarRecord'
import RatingRecord from '@/components/record/RatingRecord'
import ReportRecord from '@/components/record/ReportRecord'
import WishListRecord from '@/components/record/WishListRecord'
import AddRecordButton from '@/components/record/AddRecordButton'

function FindResultSwitcher(tab: RecordTabType) {
  if (tab === 'BOOKSHELF') return <BookShelfRecord />
  if (tab === 'CALENDAR') return <CalendarRecord />
  if (tab === 'RATING') return <RatingRecord />
  if (tab === 'REPORT') return <ReportRecord />
  if (tab === 'WISHLIST') return <WishListRecord />

  return <BookShelfRecord />
}

export default async function RecordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const tab = (resolvedSearchParams.tab as RecordTabType) || 'BOOKSHELF'

  const tabList: { content: string; path: string; key: RecordTabType }[] = [
    { content: '책장', path: '/record?tab=BOOKSHELF', key: 'BOOKSHELF' },
    { content: '캘린더', path: '/record?tab=CALENDAR', key: 'CALENDAR' },
    { content: '별점', path: '/record?tab=RATING', key: 'RATING' },
    { content: '리포트', path: '/record?tab=REPORT', key: 'REPORT' },
    { content: '읽을책', path: '/record?tab=WISHLIST', key: 'WISHLIST' },
  ]
  return (
    <main>
      <Header headerType={'title'} rightIcon={<AddRecordButton />}>
        책장 및 리포트
      </Header>
      <Spacing height={60} />

      <PageLayout>
        <Tab tabList={tabList} />
        {FindResultSwitcher(tab)}
      </PageLayout>

      <Spacing height={98} />
      <NavBar />
    </main>
  )
}
