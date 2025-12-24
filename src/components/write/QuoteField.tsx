'use client'

import { ChangeEvent, useCallback } from 'react'
import * as Style from '@/styles/Write.styles'
import Button from '@/components/common/Button'
import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import { AddIcon, CloseIcon } from '@/assets/svgComponents'
import { useWriteStore } from '@/store/writeStore'

export default function QuoteField() {
  const setState = useWriteStore((state) => state.setState)
  const writeData = useWriteStore((state) => state.writeData)

  // 1. 현재 구절 개수 확인
  const quotesCount = writeData.quotes?.length ?? 0
  const isMaxQuotes = quotesCount >= 10

  const updateQuoteHandler = useCallback(
    (index: number, key: 'quoteContent' | 'pageNumber', value: string | number) => {
      const currentQuotes = [...(writeData.quotes ?? [])]

      currentQuotes[index] = {
        ...currentQuotes[index],
        [key]: value,
      }

      setState({
        ...writeData,
        writeData: { ...writeData, quotes: currentQuotes },
      })
    },
    [writeData, setState]
  )

  const deleteQuoteHandler = useCallback(
    (index: number) => {
      const filteredQuotes = writeData.quotes?.filter((_, i) => i !== index) ?? null
      setState({
        ...writeData,
        writeData: { ...writeData, quotes: filteredQuotes },
      })
    },
    [writeData, setState]
  )

  const addQuoteHandler = useCallback(() => {
    // 2. 추가 버튼 클릭 시에도 다시 한번 체크 (방어 코드)
    if (isMaxQuotes) return

    const newQuote = {
      quoteContent: '',
      pageNumber: 0,
    }

    setState({
      ...writeData,
      writeData: {
        ...writeData,
        quotes: [...(writeData?.quotes ?? []), newQuote],
      },
    })
  }, [writeData, setState, isMaxQuotes])

  return (
    <div>
      <Label>인상깊은 구절</Label>
      <Spacing height={8} />
      {writeData.quotes?.map((quote, index) => {
        return (
          <div key={index}>
            <TextInput
              topElement={
                <PageInput
                  index={index}
                  updateQuoteHandler={(e: ChangeEvent<HTMLInputElement>) =>
                    updateQuoteHandler(index, 'pageNumber', parseInt(e.target.value))
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
        )
      })}

      {/* 3. 10개가 되면 버튼을 비활성화하거나 안내 문구 처리 */}
      {!isMaxQuotes && (
        <Button
          onClick={addQuoteHandler}
          leftIcon={<AddIcon width={15} height={15} />}
          variant={'outline'}
          size={'md'}
          disabled={isMaxQuotes} // 버튼 비활성화
        >
          {isMaxQuotes ? '최대 10개까지 추가 가능합니다' : '추가'}
        </Button>
      )}
    </div>
  )
}

// ... PageInput 컴포넌트는 동일
function PageInput({
  index,
  deleteQuoteHandler,
  updateQuoteHandler,
}: {
  index: number
  updateQuoteHandler: (e: ChangeEvent<HTMLInputElement>) => void
  deleteQuoteHandler: () => void
}) {
  const writeData = useWriteStore((state) => state.writeData)

  const currentPageNumber = writeData?.quotes?.[index]?.pageNumber

  return (
    <Style.QuoteTopElementContainer>
      <Style.Column>
        <p>p.</p>
        <Style.QuotePageInput
          type={'number'}
          value={currentPageNumber === 0 ? '' : currentPageNumber}
          placeholder={'00'}
          onChange={updateQuoteHandler}
        />
      </Style.Column>

      <CloseIcon style={{ cursor: 'pointer', display: 'flex' }} onClick={deleteQuoteHandler} width={18} height={18} />
    </Style.QuoteTopElementContainer>
  )
}
