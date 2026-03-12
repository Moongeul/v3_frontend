import SearchField from '@/components/search/SearchField'
import Spacing from '@/components/common/Spacing'
import All from '@/components/search/All'
import User from '@/components/search/User'
import Book from '@/components/search/Book'
import { Tab } from '@/components/common'

type TabType = 'ALL' | 'USER' | 'BOOK'

// 1. Switcher에서 query를 prop으로 받도록 수정
function FindSearchSwitcher({ tab }: { tab: TabType }) {
  if (tab === 'ALL') return <All />
  if (tab === 'USER') return <User />
  if (tab === 'BOOK') return <Book />

  return <All />
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const tab = (resolvedSearchParams.tab as TabType) || 'ALL'

  const tabList: { content: string; path: string; key: TabType }[] = [
    // 3. 탭 이동 시에도 검색어가 유지되도록 path 수정
    { content: '전체', path: `/search?tab=ALL`, key: 'ALL' },
    { content: '도서', path: `/search?tab=BOOK`, key: 'BOOK' },
    { content: '사용자', path: `/search?tab=USER`, key: 'USER' },
  ]

  return (
    <main>
      <SearchField />
      <Spacing height={20} />
      <Tab tabList={tabList} width={210} />
      <Spacing height={20} />
      {/* 4. Switcher에 query 전달 */}
      <FindSearchSwitcher tab={tab} />
    </main>
  )
}
