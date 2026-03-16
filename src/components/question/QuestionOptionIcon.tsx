'use client'

import ThemeOptionIcon from '@/components/common/icon/ThemeOptionIcon'
import OptionsMenu from '@/components/common/OptionMenu'
import { useEditStore } from '@/store/editStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface QuestionOptionIconProps {
  content: string
  isbn: string
  questionId: string
}

export default function QuestionOptionIcon({ content, isbn, questionId }: QuestionOptionIconProps) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 메뉴 열림 상태
  const { setQuestionField } = useEditStore((state) => state)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  const onDeleteClick = () => {
    setIsMenuOpen(false)
  }

  const onEditClick = () => {
    setQuestionField('content', content)
    setQuestionField('isbn', isbn)
    setIsMenuOpen(false)

    router.push(`/question/${questionId}/edit?isbn=${isbn}`)
  }
  return (
    <div style={{ position: 'relative' }}>
      <ThemeOptionIcon onClick={handleMenuClick} />
      {isMenuOpen && <OptionsMenu onDeleteClick={onDeleteClick} onEditClick={onEditClick} />}
    </div>
  )
}
