'use client'

import QuestionOptionIcon from '@/components/question/QuestionOptionIcon'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'
import { Header } from '@/components/common'
import { QuestionType } from '@/types/question'
import { useState } from 'react'

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
          <UserOptionMenu handleMenuClick={handleMenuClick} />
        )
      }
    >
      질문
    </Header>
  )
}
