import { Header } from '@/components/common'

export default async function MypageRecordLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  console.log('id', id)
  return (
    <div>
      <Header headerType={'dynamic'}>{id}</Header>
      {children}
    </div>
  )
}
