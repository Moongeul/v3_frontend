'use client'

import Button from '@/components/common/Button'

export default function SubmitButton() {
  return (
    <Button
      onClick={() => {}}
      buttonType={'button'}
      width={65}
      disabled={false}
      isActive={true}
      variant={'primary'}
      size={'sm'}
    >
      게시
    </Button>
  )
}
