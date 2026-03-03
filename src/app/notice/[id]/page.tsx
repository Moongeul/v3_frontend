import { fetchNoticeDetailData } from '@/lib/server/notice'
import { Spinner } from '@/components/common'
import NoticeDetailContent from '@/components/notice/NoticeDetailContent'

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = await params
  const result = await fetchNoticeDetailData(id)

  if (!result.data) return <Spinner />

  const notice = result.data

  return (
    <main>
      <NoticeDetailContent title={notice.title} content={notice.content} uploadDate={notice.uploadDate} />
    </main>
  )
}
