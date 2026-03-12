import TabButtons from '@/components/story/TabButtons'
import { Spacing } from '@/components/common'
import StoryContent from '@/components/story/StoryContent'
import OptionSelector from '@/components/story/OptionSelector'
import { serverFetchPostDetail } from '@/lib/server/record'

interface WriteStoryPageProps {
  params: Promise<{ postId: string }>
}

export default async function WriteStoryPage({ params }: WriteStoryPageProps) {
  const { postId } = await params

  const result = await serverFetchPostDetail(Number(postId))
  const postData = result.data

  return (
    <main>
      <TabButtons />
      <Spacing height={12} />
      <StoryContent
        postId={postData.postId}
        content={postData.content}
        created={postData.created}
        rating={postData.rating}
        bookInfo={postData.bookInfo}
      />
      <Spacing height={26} />
      <OptionSelector quotes={postData.quotes} />
    </main>
  )
}
