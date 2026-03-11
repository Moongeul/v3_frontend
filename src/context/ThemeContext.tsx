// src/context/ThemeContext.tsx
'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { ThemeProvider as EmotionProvider } from '@emotion/react'
import { lightTheme, darkTheme } from '@/styles/theme'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function MyThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeMode] = useState<ThemeMode>('system') // 초기값은 고정
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 마운트 직후 로컬스토리지 값을 읽어 동기화
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null
    if (savedTheme) setThemeMode(savedTheme)

    const rafId = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(rafId)
  }, [])

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode)
    localStorage.setItem('theme', mode)
  }

  // 테마 데이터 계산
  const activeTheme = useMemo(() => {
    if (theme === 'system' && typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return isDark ? darkTheme : lightTheme
    }
    return theme === 'dark' ? darkTheme : lightTheme
  }, [theme])

  // Context value 메모이제이션
  const value = useMemo(() => ({ theme, setTheme: handleThemeChange }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      <EmotionProvider theme={activeTheme}>
        {/* 중요: mounted 전에는 투명하게 children을 유지하여 트리가 깨지지 않게 함 */}
        <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.2s' }}>{children}</div>
      </EmotionProvider>
    </ThemeContext.Provider>
  )
}

export const useMyTheme = () => {
  const context = useContext(ThemeContext)
  // 여기서 에러가 난다면 import 경로가 잘못되었거나 Provider 위치 문제입니다.
  if (!context) throw new Error('useMyTheme must be used within MyThemeProvider')
  return context
}
