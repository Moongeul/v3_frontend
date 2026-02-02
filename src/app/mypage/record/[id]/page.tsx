export default async function MyPageRecordDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <></>
}
