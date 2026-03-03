import { fetchNoticeDetailData } from '@/lib/server/notice'
import { Label, Spinner } from '@/components/common'
import { typography } from '@/styles/theme'
import NoticeDetailContent from '@/components/notice/NoticeDetailContent'

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = await params
  console.log('id', id)
  const result = await fetchNoticeDetailData(id)

  if (!result.data) return <Spinner />
  console.log('공지사항 상세 페이지', result)
  const notice = result.data
  return (
    <main>
      <NoticeDetailContent title={notice.title} content={notice.content} uploadDate={notice.uploadDate} />
    </main>
  )
}
