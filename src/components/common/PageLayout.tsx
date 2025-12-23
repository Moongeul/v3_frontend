'use client'

import * as Style from '@/styles/common/Layout.styles'

import { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return <Style.PageLayout>{children}</Style.PageLayout>
}
