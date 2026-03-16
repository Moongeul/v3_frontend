import { Header, PageLayout, Spacing } from '@/components/common'
import { StoryWriteButton } from '@/components/story'
import { serverFetchPostDetail } from '@/lib/server/record'
import { cookies } from 'next/headers'

export default async function RecordDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
