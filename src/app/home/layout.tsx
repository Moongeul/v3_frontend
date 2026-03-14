import { Header, NavBar, PageLayout, Spacing } from '@/components/common'
import Link from 'next/link'
import AlarmCount from '@/components/alarm/AlarmCount'
import { fetchUnReadNotification } from '@/lib/server/alarm'
import ThemeSearchIcon from '@/components/common/icon/ThemeSearchIcon'
export default async function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const result = await fetchUnReadNotification()
  console.log('result', result)
  return (
    <div>
      <Header
        headerType={'default'}
        leftIcon={
          <Link href={'/search?tab=ALL'}>
            <ThemeSearchIcon height={24} width={24} />
          </Link>
        }
        rightIcon={
          <Link href={'/alarm'}>
            <AlarmCount exist={result.data?.exist} />
          </Link>
        }
      />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>

      <Spacing height={80} />
      <NavBar />
    </div>
  )
}
