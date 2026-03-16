'use client'

import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import Button from '@/components/common/Button'
import { CalendarIcon } from '@/assets/svgComponents'
import { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import * as Style from '@/styles/common/Calendar.styles'
import { useEditStore } from '@/store/editStore'

interface EditReadDateFieldProps {
  selectedReadDate: string // "2025-05-02"
}

export default function EditReadDateField({ selectedReadDate }: EditReadDateFieldProps) {
  // 스토어에서 writeData(또는 editData)와 setField를 가져옵니다.
  const { editData, setField } = useEditStore()
  const [isOpen, setIsOpen] = useState(false)

  // 1. 초기 진입 시 props로 받은 날짜를 스토어에 저장
  useEffect(() => {
    if (selectedReadDate && !editData.readDate) {
      setField('readDate', selectedReadDate)
    }
  }, [selectedReadDate, editData.readDate, setField])

  // 2. 날짜 선택 핸들러
  const handleSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd')
      setField('readDate', formattedDate)
      setIsOpen(false)
    }
  }

  // 3. 문자열을 Date 객체로 안전하게 변환 (DayPicker용)
  const getDisplayDate = (dateString: string | null | undefined): Date | undefined => {
    if (!dateString) return undefined
    const date = parseISO(dateString) // ISO 형식(yyyy-MM-dd) 파싱에 최적화
    return isNaN(date.getTime()) ? undefined : date
  }

  const currentReadDate = editData.readDate || selectedReadDate

  return (
    <div>
      <Label isRequired={true}>읽은 날짜</Label>
      <Spacing height={8} />

      <Style.DateInputBox onClick={() => setIsOpen(!isOpen)}>
        {currentReadDate ? (
          <>
            {/* 표시 형식: 2025. 05. 02 */}
            <span style={{ flex: 1 }}>{format(parseISO(currentReadDate), 'yyyy. MM. dd', { locale: ko })}</span>
            <Button
              onClick={(e) => {
                e.stopPropagation() // Box 클릭 이벤트 전파 방지
                setIsOpen(true)
              }}
              width={108}
              leftIcon={<CalendarIcon width={20} height={20} />}
              size={'sm'}
              variant={'outline'}
            >
              날짜 변경
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setIsOpen(true)}
            width={108}
            leftIcon={<CalendarIcon width={20} height={20} />}
            size={'sm'}
            variant={'outline'}
          >
            날짜 선택
          </Button>
        )}
      </Style.DateInputBox>

      {isOpen && (
        <Style.CalendarWrapper>
          <DayPicker
            mode="single"
            selected={getDisplayDate(currentReadDate)}
            onSelect={handleSelect}
            locale={ko}
            disabled={{ after: new Date() }} // 오늘 이후 날짜 선택 불가
          />
        </Style.CalendarWrapper>
      )}
    </div>
  )
}
