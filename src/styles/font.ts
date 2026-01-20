import localFont from 'next/font/local'

export const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-suit',
})
export const memoment = localFont({
  src: '../../public/fonts/MemomentKkukkukk.otf', // public 폴더 기준 상대 경로
  variable: '--font-memoment', // CSS 변수 이름 설정
})
