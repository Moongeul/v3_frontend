'use client'

import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { getRequestClient } from '@/app/getRequestClient'

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = getRequestClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
