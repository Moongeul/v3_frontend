'use client'

import { Button } from '@/components/common'

export default function SaveStoryButton() {
  const handleSaveClick = () => {
    // 커스텀 이벤트를 발생시킵니다.
    const event = new CustomEvent('TRIGGER_STORY_CAPTURE')
    window.dispatchEvent(event)
  }
  return (
    <Button onClick={handleSaveClick} size={'sm'} width={64}>
      게시
    </Button>
  )
}
