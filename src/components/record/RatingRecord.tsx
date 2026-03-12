import RatingItem from '@/components/record/rating/RatingItem'
import { Label, Spacing } from '@/components/common'
import { serverFetchAllDoneReadRatingSummary } from '@/lib/server/record'
import { typography } from '@/styles/theme'

// 색상만 정의한 설정 (너비는 동적으로 계산하므로 제거)
const RANGE_COLORS: Record<string, string> = {
  '4.5~5.0': '#1ECB83',
  '4.0~4.4': '#1ECB83',
  '3.5~3.9': '#1ECB83',
  '3.0~3.4': '#FFA600',
  '2.5~2.9': '#FFA600',
  '2.0~2.4': '#FFA600',
  '1.5~1.9': '#FF626D',
  '1.0~1.4': '#FF626D',
  '0.5~0.9': '#FF626D',
  '0.0~0.4': '#FF626D',
}

/**
 * 5단계 너비 계산 함수
 * @param count 현재 개수
 * @param min 전체 데이터 중 최소 개수
 * @param max 전체 데이터 중 최대 개수
 */
const getTieredWidth = (count: number, min: number, max: number) => {
  // 1. 모든 count가 같거나 데이터가 하나뿐일 경우 100% 반환
  if (max === min) return '100%'

  // 2. 5단계 너비 정의 (가장 낮은 0단계는 68px)
  const widths = [68, '76%', '84%', '92%', '100%']

  // 3. (count - min) / (max - min) 비율을 0~4 단계로 변환
  const step = (max - min) / 4
  const tier = Math.min(Math.floor((count - min) / (step || 1)), 4)

  return widths[tier]
}

export default async function RatingRecord() {
  const result = await serverFetchAllDoneReadRatingSummary()
  const rawData = result?.data?.data || []

  // 1. 정렬: 점수 범위 내림차순 (5.0 -> 0.0)
  const sortedData = [...rawData].sort((a, b) => b.range.localeCompare(a.range))

  // 2. 최솟값과 최댓값 추출 (너비 단계 계산용)
  const counts = rawData.map((d) => d.count)
  const maxCount = Math.max(...counts)
  const minCount = Math.min(...counts)

  return (
    <div>
      <Spacing height={12} />
      <Label labelStyle={typography.subtitleLg}>{result?.data?.totalBooks || 0}권</Label>
      <Spacing height={16} />

      {sortedData.map((ratingSummary) => {
        // 동적 스타일 결정
        const itemColor = RANGE_COLORS[ratingSummary.range] || '#FF626D'
        const itemWidth = getTieredWidth(ratingSummary.count, minCount, maxCount)

        return (
          <div key={ratingSummary.range}>
            <RatingItem label={ratingSummary.range} count={ratingSummary.count} color={itemColor} width={itemWidth} />
            <Spacing height={12} />
          </div>
        )
      })}

      <Spacing height={90} />
    </div>
  )
}
