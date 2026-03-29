import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllDoneReadBooks } from '@/lib/server/record'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import BookList from '@/components/record/bookshelf/BookList'

const DEFAULT_SIZE = 20

interface UserBookShelfRecordProps {
  userId: string
}

export default async function UserBookShelfRecord({ userId }: UserBookShelfRecordProps) {
  const queryClient = getRequestClient()

  const firstPage = await serverFetchAllDoneReadBooks(1, DEFAULT_SIZE)
  const totalCount = firstPage.data?.total ?? 0

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['records'],
    queryFn: ({ pageParam }) => serverFetchAllDoneReadBooks(pageParam, DEFAULT_SIZE, userId),
    initialPageParam: 1,
    pages: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) {
        return undefined
      }

      const { page, totalPages } = lastPage.data

      if (page < totalPages) {
        return page + 1
      }

      return undefined
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Spacing height={12} />
      <Label labelStyle={typography.subtitleLg}>{totalCount}권</Label>
      <Spacing height={16} />
      <BookList userId={userId} />
      <Spacing height={110} />
    </HydrationBoundary>
  )
}
