'use client'
import { Button } from '@/components/common'

interface SelectBookButtonProps {
  onClick: () => void
}

export default function SelectBookButton({ onClick }: SelectBookButtonProps) {
  return <Button onClick={onClick}>책 선택하기</Button>
}
