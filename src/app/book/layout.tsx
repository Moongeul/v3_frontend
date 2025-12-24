import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
