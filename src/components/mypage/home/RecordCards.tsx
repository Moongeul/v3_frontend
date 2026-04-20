'use client'

import { baseColor } from '@/styles/theme'
import { StyleGridRecordContainer } from '@/styles/mypage/MypageHome.styles'
import { RecordCard } from '@/components/mypage'
import { MyCategoryResponseType } from '@/types/mypage'

interface RecordCardsProps {
  category: MyCategoryResponseType | undefined
  userId: number | undefined | string
}

// 🎨 반복해서 사용할 색상 팔레트 정의
const COLOR_PALETTE = [
  { backgroundColor: '#68DCDC4D', borderColor: baseColor.primary200 }, // 0: '전체'용
  { backgroundColor: '#7AA0FF4D', borderColor: '#BCCFFF' }, // 1
  { backgroundColor: '#68BDDC4D', borderColor: '#B3DEED' }, // 2
  { backgroundColor: '#FF96C04D', borderColor: '#FFCBDF' }, // 3
  { backgroundColor: '#FF927A4D', borderColor: '#FFC9BC' }, // 4
  { backgroundColor: '#EB7AFF4D', borderColor: '#F5BCFF' }, // 5
]

export default function RecordCards({ category, userId }: RecordCardsProps) {
  // 수정된 로직
  const baseCategory = [{ categoryId: 0, categoryTitle: '전체', postCount: category?.totalPostCount || 0 }]

  // categoryList가 배열인지 확인 후 합치기
  const categories = Array.isArray(category?.data) ? [...baseCategory, ...category?.data] : baseCategory

  const recordCardContents = categories.map((category, index) => {
    const colorTheme = COLOR_PALETTE[index % COLOR_PALETTE.length]
    return {
      title: category.categoryTitle,
      count: `${category.postCount}개`,
      categoryId: category.categoryId,
      ...colorTheme,
    }
  })

  return (
    <StyleGridRecordContainer>
      {recordCardContents.map((recordCardContent, idx) => (
        <RecordCard
          key={`${recordCardContent.title}-${idx}`}
          userId={userId}
          id={recordCardContent.categoryId}
          title={recordCardContent.title}
          count={recordCardContent.count}
          backgroundColor={recordCardContent.backgroundColor}
          borderColor={recordCardContent.borderColor}
        />
      ))}
    </StyleGridRecordContainer>
  )
}
