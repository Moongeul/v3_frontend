'use client'

import { useState, useEffect } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  addMonths,
  subMonths,
  getYear,
  getMonth,
} from 'date-fns'
import CalendarItem from '@/components/record/calendar/CalendarItem'
import {
  StyledCalendarContainer,
  StyledCalendarGrid,
  StyledCalendarHeader,
  StyledDayHeader,
} from '@/styles/record/Calender.styles'
import { clientFetchAllDoneReadCalendar } from '@/lib/client/record'
import { CalendarDateType } from '@/types/record'
import { GrayLeftArrowIcon, GrayRightArrowIcon } from '@/assets/svgComponents'
import { Spacing } from '@/components/common'

export default function CalendarRecord() {
  const [currentDate, setCurrentDate] = useState(new Date())
  // 날짜(day)를 키로 하는 데이터 맵 상태
  const [recordMap, setRecordMap] = useState<Record<number, CalendarDateType>>({})
  const [isLoading, setIsLoading] = useState(false)

  // 1. API 호출 로직
  useEffect(() => {
    const fetchCalendarData = async () => {
      setIsLoading(true)
      try {
        const year = getYear(currentDate)
        const month = getMonth(currentDate) + 1 // JS Month(0-11) -> API Month(1-12)

        const response = await clientFetchAllDoneReadCalendar({ year, month })
        console.log('response', response)

        if (response.success && response.data) {
          // 배열을 { day: data } 형태의 객체로 변환하여 접근 최적화
          const newMap: Record<number, CalendarDateType> = {}
          response.data.data.forEach((item: CalendarDateType) => {
            newMap[item.day] = item
          })
          setRecordMap(newMap)
        }
      } catch (error) {
        console.error('달력 데이터를 불러오는데 실패했습니다:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCalendarData()
  }, [currentDate])

  // 2. 캘린더 날짜 계산
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const allDays = eachDayOfInterval({ start: startDate, end: endDate })

  // 3. 월 이동 핸들러
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  return (
    <>
      <Spacing height={12} />
      <StyledCalendarContainer style={{ opacity: isLoading ? 0.6 : 1 }}>
        <StyledCalendarHeader>
          <GrayLeftArrowIcon onClick={handlePrevMonth} width={36} height={36} />
          <span>{format(currentDate, 'yyyy년 MM월')}</span>
          <GrayRightArrowIcon onClick={handleNextMonth} width={36} height={36} />
        </StyledCalendarHeader>

        <StyledCalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <StyledDayHeader key={day}>{day}</StyledDayHeader>
          ))}

          {allDays.map((day) => {
            const isCurrentMonth = isSameMonth(day, monthStart)
            const dayNumber = day.getDate()

            // 현재 표시중인 달의 날짜인 경우에만 데이터를 매칭
            const record = isCurrentMonth ? recordMap[dayNumber] : undefined

            return (
              <CalendarItem
                key={day.toISOString()}
                date={dayNumber}
                isCurrentMonth={isCurrentMonth}
                imageUrl={record?.bookImage}
                postCount={record?.count}
              />
            )
          })}
        </StyledCalendarGrid>
      </StyledCalendarContainer>
    </>
  )
}
