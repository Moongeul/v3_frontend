'use client'

import { baseColor } from '@/styles/theme'
import { StyleGridRecordContainer } from '@/styles/mypage/MypageHome.styles'
import { RecordCard } from '@/components/mypage'

export default function RecordCards() {
  const recordCardContents = [
    { title: '전체', count: '13개', backgroundColor: '#68DCDC4D', borderColor: baseColor.primary200 },
    { title: '카테고리1', count: '13개', backgroundColor: '#7AA0FF4D', borderColor: '#BCCFFF' },
    { title: '카테고리2', count: '13개', backgroundColor: '#68BDDC4D', borderColor: '#B3DEED' },
    { title: '카테고리3', count: '13개', backgroundColor: '#FF96C04D', borderColor: '#FFCBDF' },
    { title: '카테고리4', count: '13개', backgroundColor: '#FF927A4D', borderColor: '#FFC9BC' },
    { title: '카테고리5', count: '13개', backgroundColor: '#EB7AFF4D', borderColor: '#F5BCFF' },
  ]
  return (
    <StyleGridRecordContainer>
      {recordCardContents.map((recordCardContent) => (
        <RecordCard
          key={recordCardContent.title}
          title={recordCardContent.title}
          count={recordCardContent.count}
          backgroundColor={recordCardContent.backgroundColor}
          borderColor={recordCardContent.borderColor}
        />
      ))}
    </StyleGridRecordContainer>
  )
}
