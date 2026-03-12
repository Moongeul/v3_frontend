import { SearchIcon } from '@/assets/svgComponents'
import { Header, NavBar, PageLayout, Spacing } from '@/components/common'
import Link from 'next/link'
import AlarmCount from '@/components/alarm/AlarmCount'
import { fetchUnReadNotification } from '@/lib/server/alarm'
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
            <SearchIcon width={24} height={24} />
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
