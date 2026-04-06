import { Header, NavBar, PageLayout, Spacing } from '@/components/common'
import Link from 'next/link'
import AlarmCount from '@/components/alarm/AlarmCount'
import { fetchUnReadNotification } from '@/lib/server/alarm'
import ThemeSearchIcon from '@/components/common/icon/ThemeSearchIcon'
import { cookies } from 'next/headers'
export default async function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const result = await fetchUnReadNotification()

  // 2. 쿠키 인스턴스 가져오기 (비동기 처리 필요 - Next.js 15 기준)
  const cookieStore = await cookies()
  const memberId = cookieStore.get('memberId')?.value

  return (
    <div>
      <Header
        headerType={'default'}
        leftIcon={
          memberId ? (
            <Link href={'/search?tab=ALL'}>
              <ThemeSearchIcon height={24} width={24} />
            </Link>
          ) : null
        }
        rightIcon={
          memberId ? (
            <Link href={'/alarm'}>
              <AlarmCount exist={result.data?.exist} />
            </Link>
          ) : (
            <Link href={'/search?tab=ALL'}>
              <ThemeSearchIcon height={24} width={24} />
            </Link>
          )
        }
      />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>

      <Spacing height={80} />
      <NavBar />
    </div>
  )
}
