'use client'

import { RecordCard, WriteRecordButton } from '@/components/home/index'
import { StyleRecordList, StyleRecordListWrapper } from '@/styles/home/Record.styles'

interface RecordListProps {}
export default function RecordList({}: RecordListProps) {
  return (
    <StyleRecordListWrapper>
      <WriteRecordButton />
      <StyleRecordList>
        <RecordCard />
        <RecordCard />
        <RecordCard />
        <RecordCard />
        <RecordCard />
      </StyleRecordList>
    </StyleRecordListWrapper>
  )
}
