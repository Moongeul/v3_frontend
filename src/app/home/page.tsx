import { Label, Spacing, Tab } from '@/components/common'
import { StoryList, ViewAllQuestionButton } from '@/components/home'
import { typography } from '@/styles/theme'
import { QuestionCardRowList } from '@/components/question'
import { ReviewList } from '@/components/book'
import { fetchQuestions } from '@/lib/server/question'
import HomeModal from '@/components/common/modal/HomeModal'
import HomeBanner from '@/components/home/HomeBanner'
import AuthWatcher from '@/components/common/AuthWatcher'
import DeletePostModal from '@/components/common/modal/DeletePostModal'
import ReportModal from '@/components/common/modal/ReportModal'
import BlockModal from '@/components/common/modal/BlockModal'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const questionResult = await fetchQuestions(1, 2)
  const initialError = questionResult?.success ? undefined : questionResult?.error

  console.log('initialError', initialError)

  const questionList = questionResult.data?.data

  const tab = (resolvedSearchParams.tab as 'PUBLIC' | 'FOLLOWERS') || 'PUBLIC'
  const tabList: { content: string; path: string; key: string }[] = [
    { content: '전체보기', path: '/home?tab=PUBLIC', key: 'PUBLIC' },
    { content: '팔로워 보기', path: '/home?tab=FOLLOWERS', key: 'FOLLOWERS' },
  ]
  return (
    <main>
      <DeletePostModal />
      <ReportModal />
      <BlockModal />
      <AuthWatcher error={initialError} results={questionResult} />
      <HomeModal />
      <Tab tabList={tabList} />
      <Spacing height={20} />

      <HomeBanner />
      <Spacing height={32} />

      <StoryList key={`story-section-${tab}`} tab={tab} />
      <Spacing height={32} />

      <Label labelElement={<ViewAllQuestionButton />} labelStyle={typography.subtitleMd}>
        질문
      </Label>
      <Spacing height={4} />

      <QuestionCardRowList questionList={questionList} />
      <Spacing height={32} />

      <Label labelStyle={typography.subtitleMd}>기록</Label>
      <ReviewList key={`review-section-${tab}`} tab={tab} />
    </main>
  )
}
