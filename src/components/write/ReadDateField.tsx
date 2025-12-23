'use client'

import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import Button from '@/components/common/Button'
import { CalendarIcon } from '@/assets/svgComponents'

export default function ReadDateField() {
  return (
    <div>
      <Label isRequired={true}>읽은 날짜</Label>
      <Spacing height={8} />
      <Button width={108} leftIcon={<CalendarIcon width={20} height={20} />} size={'sm'} variant={'outline'}>
        날짜 선택
      </Button>
    </div>
  )
}
