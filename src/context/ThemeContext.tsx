// src/context/ThemeContext.tsx
'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { ThemeProvider as EmotionProvider } from '@emotion/react'
import { lightTheme, darkTheme } from '@/styles/theme'

export type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function MyThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeMode] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null
    if (saved) setThemeMode(saved)
    setMounted(true)
  }, [])

  const activeTheme = useMemo(() => {
    // SSR 시점이나 하이드레이션 전에는 시스템 설정을 읽을 수 없으므로
    // 기본 테마를 제공하되, 클라이언트에서 즉시 업데이트되도록 함
    return theme === 'dark' ? darkTheme : lightTheme
  }, [theme])

  // 팁: mounted가 false일 때 아예 안 보여주는 것이 '깜빡임' 방지에 더 확실합니다.
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMode }}>
      <EmotionProvider theme={activeTheme}>
        {/* visibility 대신 렌더링 자체를 제어하거나,
            배경색이 적용된 컨테이너를 하나 더 두는 것이 좋습니다. */}
        <div id="theme-wrapper" style={{ opacity: mounted ? 1 : 0 }}>
          {children}
        </div>
      </EmotionProvider>
    </ThemeContext.Provider>
  )
}

export const useMyTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useMyTheme must be used within MyThemeProvider')
  return context
}
