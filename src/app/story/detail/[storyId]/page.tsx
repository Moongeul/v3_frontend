import DetailLayout from '@/components/story/detail/DetailLayout'
import { fetchStoryDetail } from '@/lib/server/story'
import Image from 'next/image'
import { Spinner } from '@/components/common'
import DetailHeader from '@/components/story/detail/DetailHeader'

interface StoryDetailProps {
  params: Promise<{ storyId: string }>
}

export default async function StoryDetailPage({ params }: StoryDetailProps) {
  const { storyId } = await params
  const result = await fetchStoryDetail(storyId)
  console.log('result', result.data)

  const story = result.data

  if (!story) return <Spinner />

  return (
    <DetailLayout>
      <DetailHeader memberInfo={story.memberInfo} created={story.storyInfo.created} />
      <Image src={story.storyInfo.storyImage} alt={'이미지'} width={335} height={296} />
    </DetailLayout>
  )
}
