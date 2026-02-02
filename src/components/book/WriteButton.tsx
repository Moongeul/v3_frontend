'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useWriteStore } from '@/store/writeStore'

interface WriteButtonProps {
  isbn: string
}

export default function WriteButton({ isbn }: WriteButtonProps) {
  const router = useRouter()
  const { setState, writeData } = useWriteStore((state) => state)
  return (
    <Button
      onClick={() => {
        router.push(`/write?isbn=${isbn}`)
        setState({ ...writeData, writeData: { ...writeData, isbn: isbn } })
      }}
      width={81}
      size={'sm'}
      variant={'primary'}
      leftIcon={<AddWhiteIcon width={15} height={15} />}
    >
      기록
    </Button>
  )
}
