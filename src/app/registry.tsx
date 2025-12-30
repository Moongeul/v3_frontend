'use client'

import React, { useState, useSyncExternalStore } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { useTheme } from 'next-themes'
import { lightTheme, darkTheme } from '@/styles/theme'
// 클라이언트 사이드인지 확인하는 헬퍼 훅 (React 19 권장 방식)
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

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
  const isClient = useIsClient()

  const currentTheme = isClient && resolvedTheme === 'dark' ? darkTheme : lightTheme

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
