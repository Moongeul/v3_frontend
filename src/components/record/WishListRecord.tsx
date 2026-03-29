import BookList from '@/components/record/wishlist/BookList'
import { Spacing } from '@/components/common'
import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllWishReadBooks } from '@/lib/server/record'
import AuthWatcher from '@/components/common/AuthWatcher'

const DEFAULT_SIZE = 20

export default async function WishListRecord() {
  const queryClient = getRequestClient()

  const firstPage = await serverFetchAllWishReadBooks(1, DEFAULT_SIZE)
  const initialError = firstPage?.success ? undefined : firstPage?.error
  console.log('firstPage', firstPage)
  const totalCount = firstPage.data?.total ?? 0

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['records'],
    queryFn: ({ pageParam }) => serverFetchAllWishReadBooks(pageParam, DEFAULT_SIZE),
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
    <>
      <AuthWatcher error={initialError} results={firstPage} />
      <Spacing height={12} />
      <BookList />
    </>
  )
}
