'use client'

import { ChangeEvent, useCallback, useEffect } from 'react'
import * as Style from '@/styles/Write.styles'
import Button from '@/components/common/Button'
import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import { AddIcon, CloseIcon } from '@/assets/svgComponents'
import { QuoteType } from '@/types/write'
import { useEditStore } from '@/store/editStore'

interface EditQuoteFieldProps {
  selectedQuotes: QuoteType[]
}

export default function EditQuoteField({ selectedQuotes }: EditQuoteFieldProps) {
  const { setField, editData } = useEditStore((state) => state)

  // 1. 컴포넌트 마운트 시 전달받은 selectedQuotes를 스토어에 초기화 (필요한 경우)
  useEffect(() => {
    if (selectedQuotes && selectedQuotes.length > 0) {
      setField('quotes', selectedQuotes)
    }
  }, [selectedQuotes]) // 초기 데이터가 변경될 때만 실행

  const quotesCount = editData.quotes?.length ?? 0
  const isMaxQuotes = quotesCount >= 10

  // 2. 구절 수정 로직
  const updateQuoteHandler = useCallback(
    (index: number, key: 'quoteContent' | 'pageNumber', value: string | number) => {
      const currentQuotes = [...(editData.quotes ?? [])]

      currentQuotes[index] = {
        ...currentQuotes[index],
        [key]: value,
      }

      setField('quotes', currentQuotes)
    },
    [editData, setField]
  )

  // 3. 구절 삭제 로직
  const deleteQuoteHandler = useCallback(
    (index: number) => {
      const filteredQuotes = editData.quotes?.filter((_, i) => i !== index) ?? []
      setField('quotes', filteredQuotes)
    },
    [editData, setField]
  )

  // 4. 구절 추가 로직
  const addQuoteHandler = useCallback(() => {
    if (isMaxQuotes) return

    const newQuote: QuoteType = {
      quoteContent: '',
      pageNumber: 0,
    }

    setField('quotes', [...(editData?.quotes ?? []), newQuote])
  }, [editData, setField, isMaxQuotes])

  return (
    <div>
      <Label>인상깊은 구절 수정</Label>
      <Spacing height={8} />

      {editData.quotes?.map((quote, index) => (
        <div key={index}>
          <TextInput
            topElement={
              <PageInput
                index={index}
                pageNumber={quote.pageNumber}
                updateQuoteHandler={(e: ChangeEvent<HTMLInputElement>) =>
                  updateQuoteHandler(index, 'pageNumber', parseInt(e.target.value) || 0)
                }
                deleteQuoteHandler={() => deleteQuoteHandler(index)}
              />
            }
            onChange={(e) => updateQuoteHandler(index, 'quoteContent', e.target.value)}
            value={quote.quoteContent}
            textType={'textField'}
            placeholder={'인상깊은 구절 문장을 작성해 보아요.'}
          />
          <Spacing height={8} />
        </div>
      ))}

      {!isMaxQuotes && (
        <Button onClick={addQuoteHandler} leftIcon={<AddIcon width={15} height={15} />} variant={'outline'} size={'md'}>
          추가
        </Button>
      )}
    </div>
  )
}

/** * 내부에서 사용하는 페이지 입력 컴포넌트
 * 재사용성을 위해 pageNumber를 직접 받도록 수정했습니다.
 */
function PageInput({
  pageNumber,
  deleteQuoteHandler,
  updateQuoteHandler,
}: {
  index: number
  pageNumber: number
  updateQuoteHandler: (e: ChangeEvent<HTMLInputElement>) => void
  deleteQuoteHandler: () => void
}) {
  return (
    <Style.QuoteTopElementContainer>
      <Style.Column>
        <p>p.</p>
        <Style.QuotePageInput
          type={'number'}
          value={pageNumber === 0 ? '' : pageNumber}
          placeholder={'00'}
          onChange={updateQuoteHandler}
        />
      </Style.Column>
      <CloseIcon style={{ cursor: 'pointer', display: 'flex' }} onClick={deleteQuoteHandler} width={18} height={18} />
    </Style.QuoteTopElementContainer>
  )
}
