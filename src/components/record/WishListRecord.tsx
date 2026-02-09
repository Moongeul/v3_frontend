import BookList from '@/components/record/wishlist/BookList'
import { Spacing } from '@/components/common'
import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllDoneReadBooks, serverFetchAllWishReadBooks } from '@/lib/server/record'

const DEFAULT_SIZE = 20

export default async function WishListRecord() {
  const queryClient = getRequestClient()

  const firstPage = await serverFetchAllWishReadBooks(1, DEFAULT_SIZE)
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
      <Spacing height={12} />
      <BookList />
    </>
  )
}
