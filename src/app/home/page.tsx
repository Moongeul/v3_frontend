import { Button, Label, Spacing, Tab } from '@/components/common'
import { Banner, StoryList, ViewAllQuestionButton } from '@/components/home'
import { typography } from '@/styles/theme'
import { QuestionCardRowList } from '@/components/question'
import { ReviewList } from '@/components/book'
import { WriteBannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'
import { fetchQuestions } from '@/lib/server/question'
import HomeModal from '@/components/common/modal/HomeModal'
import HomeBanner from '@/components/home/HomeBanner'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const questionResult = await fetchQuestions(1, 2)
  const questionList = questionResult.data?.data

  const tab = (resolvedSearchParams.tab as 'PUBLIC' | 'FOLLOWERS') || 'PUBLIC'
  const tabList: { content: string; path: string; key: string }[] = [
    { content: '전체보기', path: '/home?tab=PUBLIC', key: 'PUBLIC' },
    { content: '팔로워 보기', path: '/home?tab=FOLLOWERS', key: 'FOLLOWERS' },
  ]
  return (
    <main>
      <HomeModal />
      <Tab tabList={tabList} />
      <Spacing height={20} />

      <HomeBanner />
      <Spacing height={32} />

      <StoryList tab={tab} />
      <Spacing height={32} />

      <Label labelElement={<ViewAllQuestionButton />} labelStyle={typography.subtitleMd}>
        질문
      </Label>
      <Spacing height={4} />

      <QuestionCardRowList questionList={questionList} />
      <Spacing height={32} />

      <Label labelStyle={typography.subtitleMd}>기록</Label>
      <ReviewList tab={tab} />
    </main>
  )
}
