'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { PencilSketchEffect } from '@/styles/common/Common.styles'
import { StyleTabButton, StyleTabContainer } from '@/styles/common/Tab.styles'

interface TabProps {
  tabList: { content: string; path: string; key: string }[]
  width?: number
}
export default function Tab({ tabList, width }: TabProps) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const currentTab = searchParams.get('tab') || 'home'

  return (
    <StyleTabContainer $width={width}>
      <PencilSketchEffect />
      {tabList.map((tab) => (
        <StyleTabButton
          key={tab.key}
          onClick={() => {
            router.push(tab.path)
          }}
          $selectedButton={tab.key === currentTab}
        >
          {tab.content}
        </StyleTabButton>
      ))}
    </StyleTabContainer>
  )
}
