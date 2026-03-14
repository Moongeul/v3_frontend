'use client'

import { StyledCalendarItem, StyledDate, StylePostCountTag } from '@/styles/record/Calender.styles'

interface CalendarItemProps {
  date: number // 날짜 (1, 2, 3...)
  imageUrl?: string // 배경 이미지
  isCurrentMonth: boolean // 이번 달 여부
  postCount?: number // 기록 개수
}

export default function CalendarItem({ date, imageUrl, isCurrentMonth, postCount }: CalendarItemProps) {
  // 🌟 이미지가 있는지 여부를 판단합니다.
  const hasImage = !!imageUrl

  return (
    <StyledCalendarItem imageUrl={imageUrl} isCurrentMonth={isCurrentMonth}>
      {/* 🌟 StyledDate에 필요한 정보를 프롭으로 전달합니다. */}
      <StyledDate hasImage={hasImage} isCurrentMonth={isCurrentMonth}>
        {date}
      </StyledDate>

      {/* 기록이 있을 때만 표시 (+3 형태) */}
      {/* 이미지가 있을 때만 개수를 보여주는 것이 디자인적으로 깔끔합니다. */}
      {hasImage && postCount && postCount > 0 && <StylePostCountTag>+{postCount}</StylePostCountTag>}
    </StyledCalendarItem>
  )
}
