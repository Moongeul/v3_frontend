import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { memoment, suit } from '@/styles/font'
import EmotionRootRegistry from './registry'
import { Providers } from '@/providers/Providers'
import { ToastProvider } from '@/components/common/toast/ToastContext'
import ToastContainer from '@/components/common/toast/ToastContainer' // Emotion 설정 파일 (필요시)

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
    <html lang="ko" className={`${suit.variable} ${memoment.variable}`}>
      <Providers>
        <EmotionRootRegistry>
          <ToastProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
            <ToastContainer />
          </ToastProvider>
        </EmotionRootRegistry>
      </Providers>
    </html>
  )
}
