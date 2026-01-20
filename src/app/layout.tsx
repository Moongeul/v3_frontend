import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { memoment, suit } from '@/styles/font'
import EmotionRootRegistry from './registry'
import { Providers } from '@/providers/Providers' // Emotion 설정 파일 (필요시)

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
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </EmotionRootRegistry>
      </Providers>
    </html>
  )
}
