import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { memoment, myeongjo, suit } from '@/styles/font'
import EmotionRootRegistry from './registry'
import { Providers } from '@/providers/Providers'
import { ToastProvider } from '@/components/common/toast/ToastContext'
import ToastContainer from '@/components/common/toast/ToastContainer'
import { MyThemeProvider } from '@/context/ThemeContext'
import { GlobalStyle } from '@/styles/GlobalStyle' // Emotion 설정 파일 (필요시)

const geistSans = Geist({
  variable: '--fonts-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--fonts-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Moongeul',
  description: '책 기록 애플리케이션',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${suit.variable} ${memoment.variable} ${myeongjo.variable}`}>
      {/* 1. <html> 바로 아래에는 <head>와 <body>만 올 수 있습니다.
          2. 모든 Context Provider는 <body> 안쪽에서 children을 감싸야 합니다.
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <EmotionRootRegistry>
            <MyThemeProvider>
              <GlobalStyle />
              <ToastProvider>
                {children}
                <ToastContainer />
              </ToastProvider>
            </MyThemeProvider>
          </EmotionRootRegistry>
        </Providers>
      </body>
    </html>
  )
}
