import { Tab } from '@/components/common'
import { RecordTabType } from '@/types/record'
import { SearchParams } from 'next/dist/server/request/search-params'
import BookShelfRecord from '@/components/record/BookShelfRecord'
import CalendarRecord from '@/components/record/CalendarRecord'
import RatingRecord from '@/components/record/RatingRecord'
import ReportRecord from '@/components/record/ReportRecord'
import WishListRecord from '@/components/record/WishListRecord'

function FindResultSwitcher({ tab }: { tab: RecordTabType }) {
  if (tab === 'BOOKSHELF') return <BookShelfRecord />
  if (tab === 'CALENDAR') return <CalendarRecord />
  if (tab === 'RATING') return <RatingRecord />
  if (tab === 'REPORT') return <ReportRecord />
  if (tab === 'WISHLIST') return <WishListRecord />

  return <BookShelfRecord />
}
interface RecordPageProps {
  searchParams: SearchParams
}

export default function RecordPage({ searchParams }: RecordPageProps) {
  const tab = (searchParams.tab as RecordTabType) || 'BOOKSHELF'

  const tabList: { content: string; path: string; key: RecordTabType }[] = [
    { content: '책장', path: '/record?tab=BOOKSHELF', key: 'BOOKSHELF' },
    { content: '캘린더', path: '/record?tab=CALENDAR', key: 'CALENDAR' },
    { content: '별점', path: '/record?tab=RATING', key: 'RATING' },
    { content: '리포트', path: '/record?tab=REPORT', key: 'REPORT' },
    { content: '읽을책', path: '/record?tab=WISHLIST', key: 'WISHLIST' },
  ]
  return (
    <main>
      <Tab tabList={tabList} />
      {FindResultSwitcher(tab)}
    </main>
  )
}
