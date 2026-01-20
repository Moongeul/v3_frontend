'use client'

import { useTestStore } from '@/store/testStore'
import { useEffect } from 'react'

export default function ResultPage() {
  const testResult = useTestStore((state) => state.testResult)
  useEffect(() => {
    console.log('testResult', testResult)
  }, [testResult])
  return <></>
}
