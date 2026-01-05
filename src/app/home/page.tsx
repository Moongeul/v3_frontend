import { Label, Spacing, Tab } from '@/components/common'
import { Banner, RecordList, ViewAllQuestionButton } from '@/components/home'
import { typography } from '@/styles/theme'
import { QuestionCardRowList } from '@/components/question'
import { SearchParams } from 'next/dist/server/request/search-params'
import { ReviewList } from '@/components/book'

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  const tab = (searchParams.tab as 'PUBLIC' | 'FOLLOWERS') || 'PUBLIC'
  const tabList: { content: string; path: string; key: string }[] = [
    { content: '전체보기', path: '/home?tab=PUBLIC', key: 'PUBLIC' },
    { content: '팔로워 보기', path: '/home?tab=FOLLOWERS', key: 'FOLLOWERS' },
  ]
  return (
    <main>
      <Tab tabList={tabList} />
      <Spacing height={20} />

      <Banner />
      <Spacing height={32} />

      <RecordList />
      <Spacing height={32} />

      <Label labelElement={<ViewAllQuestionButton />} labelStyle={typography.subtitleMd}>
        질문
      </Label>
      <Spacing height={4} />

      <QuestionCardRowList />
      <Spacing height={32} />

      <Label labelStyle={typography.subtitleMd}>기록</Label>
      <ReviewList tab={tab} />
    </main>
  )
}
