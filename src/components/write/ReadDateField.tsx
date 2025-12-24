'use client'

import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import Button from '@/components/common/Button'
import { CalendarIcon } from '@/assets/svgComponents'
import { useWriteStore } from '@/store/writeStore'
import { useState } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import * as Style from '@/styles/common/Calendar.styles'

export default function ReadDateField() {
  const writeData = useWriteStore((state) => state.writeData)
  const setState = useWriteStore((state) => state.setState)

  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setState({ ...writeData, writeData: { ...writeData, readDate: date.toDateString() } })
      setIsOpen(false)
    }
  }

  /**
   * toDateString()으로 저장된 문자열을 다시 Date 객체로 변환
   */
  const restoreDate = (dateString: string | null | undefined): Date | null => {
    if (!dateString) return null

    const date = new Date(dateString)

    return isNaN(date.getTime()) ? null : date
  }

  return (
    <div>
      <Label isRequired={true}>읽은 날짜</Label>
      <Spacing height={8} />
      <Style.DateInputBox onClick={() => setIsOpen(!isOpen)}>
        {writeData.readDate ? (
          <>
            {format(writeData.readDate, 'yyyy. MM. dd', { locale: ko })}
            <Button
              onClick={() => {
                setIsOpen(true)
              }}
              width={108}
              leftIcon={<CalendarIcon width={20} height={20} />}
              size={'sm'}
              variant={'outline'}
            >
              날짜 선택
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setIsOpen(true)
            }}
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
            selected={restoreDate(writeData.readDate) ?? undefined}
            onSelect={handleSelect}
            locale={ko}
            disabled={{ after: new Date() }}
          />
        </Style.CalendarWrapper>
      )}
    </div>
  )
}
