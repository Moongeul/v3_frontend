'use client'

import QuestionOptionIcon from '@/components/question/QuestionOptionIcon'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'
import { Header } from '@/components/common'
import { QuestionType } from '@/types/question'
import { useState } from 'react'
import ThemeOptionIcon from '@/components/common/icon/ThemeOptionIcon'
import QuestionOptionsMenu from '@/components/common/option/QuestionOptionMenu'

interface QuestionDetailHeaderProps {
  question: QuestionType
}

export default function QuestionDetailHeader({ question }: QuestionDetailHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Header
      path={'/question'}
      headerType={'dynamic'}
      rightIcon={
        question?.myArticle ? (
          <QuestionOptionIcon
            questionId={String(question.questionId)}
            isbn={question.bookInfo.isbn}
            content={question.content}
          />
        ) : (
          <UserOptionMenuIcon isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        )
      }
    >
      질문
    </Header>
  )
}
function UserOptionMenuIcon({
  handleMenuClick,
  isMenuOpen,
}: {
  handleMenuClick: (e: React.MouseEvent) => void
  isMenuOpen: boolean
}) {
  return (
    <div style={{ position: 'relative' }}>
      <ThemeOptionIcon onClick={handleMenuClick} />
      {isMenuOpen && <UserOptionMenu handleMenuClick={handleMenuClick} />}
    </div>
  )
}
