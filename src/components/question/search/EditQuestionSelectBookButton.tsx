'use client'

import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useBookStore } from '@/store/bookStore'
import { useEditStore } from '@/store/editStore'

interface EditQuestionSelectBookButtonProps {
  isbn: string
  questionId: string
}

export default function EditQuestionSelectBookButton({ isbn, questionId }: EditQuestionSelectBookButtonProps) {
  const router = useRouter()
  const { setSearchValue } = useBookStore((state) => state)

  const { setQuestionField } = useEditStore((state) => state)

  const onClick = () => {
    setQuestionField('isbn', isbn)

    setSearchValue('')
    router.push(`/question/${questionId}/edit?isbn=${isbn}`)
  }
  return (
    <Button onClick={onClick} size={'sm'} variant={'secondary'} width={80}>
      책 선택하기
    </Button>
  )
}
