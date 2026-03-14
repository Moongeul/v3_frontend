'use client'

import { Button } from '@/components/common'
import { useWriteStore } from '@/store/writeStore'
import { useRouter } from 'next/navigation'
import { useBookStore } from '@/store/bookStore'

interface SelectBookButtonProps {
  isbn: string
}

export default function SelectBookButton({ isbn }: SelectBookButtonProps) {
  const router = useRouter()
  const { setSearchValue } = useBookStore((state) => state)

  const { writeData, setState } = useWriteStore((state) => state)
  const onClick = () => {
    setState({
      ...writeData,
      writeData: { ...writeData, isbn: isbn },
    })
    setSearchValue('')
    router.push(`/write?isbn=${isbn}`)
  }
  return (
    <Button onClick={onClick} size={'sm'} variant={'secondary'} width={80}>
      책 선택하기
    </Button>
  )
}
