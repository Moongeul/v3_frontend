'use client'

import { useCallback, useEffect, useRef } from 'react'
import { toBlob } from 'html-to-image'
import { StyledContent } from '@/styles/story/Story.styles'
import ContentHeader from '@/components/story/ContentHeader'
import ContentBody from '@/components/story/ContentBody'
import { BookInfoSummary } from '@/components/common'
import { useStoryStore } from '@/store/storyStore'
import { BookType } from '@/types/book'
import { BookQuote } from '@/components/book'
import { useToast } from '@/components/common/toast/ToastContext'

interface StoryContentProps {
  postId: number
  bookInfo: BookType
  created: string
  rating: number
  content: string
}

export default function StoryContent({ bookInfo, content, rating, created, postId }: StoryContentProps) {
  const { bgColor, menu, selectedQuotes, fontType } = useStoryStore((state) => state)
  const { success, error } = useToast()
  const contentRef = useRef<HTMLDivElement>(null)

  // 1. 캡처 로직을 useCallback으로 감싸기
  const handleUploadImage = useCallback(async () => {
    if (!contentRef.current) return

    try {
      const blob = await toBlob(contentRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      })

      if (!blob) throw new Error('Blob 생성 실패')

      const formData = new FormData()
      formData.append('StoryImage', blob, 'story-capture.png')

      const response = await fetch(`/api/story/create/${postId}`, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        success('이미지 전송 성공', '스토리 이미지 전송에 성공했어요.')
      } else {
        error('이미지 전송 실패', '스토리 이미지 전송에 실패했어요.')
      }
    } catch (e) {
      console.error('Capture Error:', e)
      error('이미지 전송 실패', '이미지 캡쳐 중 오류가 발생했습니다.')
    }
  }, [postId, success, error]) // 의존성 추가

  // 2. 외부 이벤트를 감지하는 useEffect 추가
  useEffect(() => {
    const handleCaptureEvent = () => {
      handleUploadImage()
    }

    // 'TRIGGER_STORY_CAPTURE'라는 이름의 이벤트를 기다립니다.
    window.addEventListener('TRIGGER_STORY_CAPTURE', handleCaptureEvent)
    return () => {
      window.removeEventListener('TRIGGER_STORY_CAPTURE', handleCaptureEvent)
    }
  }, [handleUploadImage])

  return (
    <>
      <StyledContent ref={contentRef} $bgColor={bgColor}>
        <ContentHeader rating={rating} created={created} />
        {menu === 'quote' ? (
          selectedQuotes.map((selectedQuote) => (
            <BookQuote
              fontType={fontType}
              key={selectedQuote.pageNumber}
              quoteContent={selectedQuote.quoteContent}
              page={selectedQuote.pageNumber}
              isBorderLeft={false}
            />
          ))
        ) : (
          <ContentBody fontType={fontType} content={content} />
        )}
        <BookInfoSummary
          styleType={'lightYellow'}
          publisher={bookInfo.publisher}
          pubdate={bookInfo.pubdate}
          isbn={bookInfo.isbn}
          author={bookInfo.author}
          title={bookInfo.title}
          bookImage={bookInfo.bookImage}
        />
      </StyledContent>
    </>
  )
}
