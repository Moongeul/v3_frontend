import { AlarmIcon, SearchIcon } from '@/assets/svgComponents'
import { Header, NavBar, PageLayout, Spacing } from '@/components/common'
import Link from 'next/link'
export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header
        headerType={'default'}
        leftIcon={
          <Link href={'/search'}>
            <SearchIcon width={24} height={24} />
          </Link>
        }
        rightIcon={
          <Link href={'/alarm'}>
            <AlarmIcon width={24} height={24} />
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
