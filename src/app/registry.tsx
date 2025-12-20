'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { useTheme } from 'next-themes'
import { lightTheme, darkTheme } from '@/styles/theme'

export default function EmotionRootRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  // ThemeWrapper를 통해 테마 상태를 감지하도록 변경
  return (
    <CacheProvider value={cache}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </CacheProvider>
  )
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme

  // 서버 사이드 렌더링 시에는 기본 라이트 테마를 제공하여 에러 방지
  if (!mounted) {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  }

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
