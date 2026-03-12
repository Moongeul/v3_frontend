'use client'

import { PencilSketchEffect } from '@/styles/common/Common.styles'
import { StyleTabButton, StyleTabContainer } from '@/styles/common/Tab.styles'
import { OptionTabType } from '@/components/story/OptionSelector'

interface OptionTabProps {
  isQuote: boolean
  currentTab: OptionTabType
  onClick: (tab: OptionTabType) => void
}

export default function OptionTab({ currentTab, onClick, isQuote }: OptionTabProps) {
  // tabList 구성 로직
  const tabList = [
    { content: '인용구', key: 'quote' },
    { content: '배경', key: 'background' },
    { content: '서체', key: 'font' },
  ].filter((tab) => {
    // 1. 키가 'quote'가 아니라면(배경, 서체) 무조건 포함
    if (tab.key !== 'quote') return true
    // 2. 키가 'quote'라면 isQuote가 true일 때만 포함
    return isQuote
  })

  return (
    <StyleTabContainer>
      <PencilSketchEffect />
      {tabList.map((tab) => (
        <StyleTabButton
          key={tab.key}
          onClick={() => onClick(tab.key as OptionTabType)}
          $selectedButton={tab.key === currentTab}
        >
          {tab.content}
        </StyleTabButton>
      ))}
    </StyleTabContainer>
  )
}
