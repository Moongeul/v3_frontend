import BookList from '@/components/record/bookshelf/BookList'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllDoneReadBooks } from '@/lib/server/record'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

const DEFAULT_SIZE = 20

export default async function BookShelfRecord() {
  const queryClient = getRequestClient()

  const firstPage = await serverFetchAllDoneReadBooks(1, DEFAULT_SIZE)
  const totalCount = firstPage.data?.total ?? 0

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['records'],
    queryFn: ({ pageParam }) => serverFetchAllDoneReadBooks(pageParam, DEFAULT_SIZE),
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
      <BookList />
      <Spacing height={110} />
    </HydrationBoundary>
  )
}
