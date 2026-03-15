import RatingRangeRecordList from '@/components/record/rating/RatingRangeRecordList'

export default async function RatingDetailPage({ params }: { params: Promise<{ range: string }> }) {
  const { range } = await params
  return (
    <main>
      <RatingRangeRecordList range={range} />
    </main>
  )
}
