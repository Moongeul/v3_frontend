'use client'

import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useBookStore } from '@/store/bookStore'
import { useQuestionStore } from '@/store/questionStore'

interface QuestionSelectBookButtonProps {
  isbn: string
}

export default function QuestionSelectBookButton({ isbn }: QuestionSelectBookButtonProps) {
  const router = useRouter()
  const { setSearchValue } = useBookStore((state) => state)

  const { setQuestion } = useQuestionStore((state) => state)
  const onClick = () => {
    setQuestion({ isbn: isbn })

    setSearchValue('')
    router.push(`/question/write?isbn=${isbn}`)
  }
  return (
    <Button onClick={onClick} size={'sm'} variant={'secondary'} width={80}>
      책 선택하기
    </Button>
  )
}
