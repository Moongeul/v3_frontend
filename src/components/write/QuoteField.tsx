'use client'

import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import Button from '@/components/common/Button'
import { ChangeEvent, useCallback, useState } from 'react'
import * as Style from '@/styles/Write.styles'

import { AddIcon, CloseIcon } from '@/assets/svgComponents'

export default function QuoteField() {
  const [value, setValue] = useState('')
  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])
  return (
    <div>
      <Label>인상깊은 구절</Label>
      <Spacing height={8} />
      <TextInput
        topElement={<PageInput />}
        onChange={inputHandler}
        value={value}
        textType={'textField'}
        placeholder={'인상깊은 구절 문장을 작성해 보아요.'}
      />
      <Spacing height={8} />
      <TextInput
        topElement={<PageInput />}
        onChange={inputHandler}
        value={value}
        textType={'textField'}
        placeholder={'인상깊은 구절 문장을 작성해 보아요.'}
      />
      <Spacing height={8} />
      <Button leftIcon={<AddIcon width={15} height={15} />} variant={'outline'} size={'md'}>
        추가
      </Button>
    </div>
  )
}

function PageInput({}: {}) {
  const [pageNumber, setPageNumber] = useState(0)
  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(parseInt(e.target.value))
  }, [])
  return (
    <Style.QuoteTopElementContainer>
      <Style.Column>
        <p>p.</p>
        <Style.QuotePageInput type={'number'} value={pageNumber} placeholder={'00'} onChange={inputHandler} />
      </Style.Column>

      <CloseIcon width={18} height={18} />
    </Style.QuoteTopElementContainer>
  )
}
