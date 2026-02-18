import { ReviewItem } from '@/components/book'
import MyPageCategoryRecordList from '@/components/mypage/record/MyPageCatagoryRecordList'

export default async function MyPageRecordDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main>
      <MyPageCategoryRecordList categoryId={id} />
    </main>
  )
}
