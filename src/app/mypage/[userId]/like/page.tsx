import LikeList from '@/components/mypage/like/LikeList'

export default async function LikePage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  return (
    <main>
      <LikeList userId={userId} />
    </main>
  )
}
