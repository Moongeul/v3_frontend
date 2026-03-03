'use client'

import { Button, TextInput } from '@/components/common'
import { useState } from 'react'
import { WriteNoticeType } from '@/types/notice'
import { createNotice } from '@/lib/client/notice'
import { useToast } from '@/components/common/toast/ToastContext'

export default function NoticeForm() {
  const { success, error } = useToast()
  const [writeNoticeData, setWriteNoticeData] = useState<WriteNoticeType>({
    title: '',
    content: '',
  })

  // 핸들러를 하나로 관리하면 코드가 더 깔끔해집니다.
  const handleChange = (key: keyof WriteNoticeType, value: string) => {
    setWriteNoticeData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextInput
        placeholder={'제목'}
        value={writeNoticeData.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />

      <TextInput
        textType={'textArea'}
        placeholder={'공지사항 내용'}
        value={writeNoticeData.content}
        onChange={(e) => handleChange('content', e.target.value)}
      />

      <Button
        onClick={async () => {
          // 유효성 검사 살짝 추가
          if (!writeNoticeData.title.trim() || !writeNoticeData.content.trim()) {
            error('입력 확인', '제목과 내용을 모두 입력해주세요.')
            return
          }

          const result = await createNotice(writeNoticeData)
          if (result.success) {
            success('성공 했어요', '공지사항 등록에 성공했어요.')
            // 성공 후 입력창 초기화 (선택사항)
            setWriteNoticeData({ title: '', content: '' })
          } else {
            error('실패 했어요', '공지사항 등록에 실패했어요.')
          }
        }}
      >
        제출
      </Button>
    </div>
  )
}
