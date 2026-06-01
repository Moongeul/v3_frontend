import MyPageCategoryRecordList from '@/components/mypage/record/MyPageCatagoryRecordList'

export default async function MyPageRecordDetail({ params }: { params: Promise<{ id: string; userId: string }> }) {
  const { id, userId } = await params
  return (
    <main>
      <MyPageCategoryRecordList categoryId={id} userId={userId} />
    </main>
  )
}
