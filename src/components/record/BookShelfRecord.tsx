import BookList from '@/components/record/bookshelf/BookList'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllDoneReadBooks } from '@/lib/server/record'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import AuthWatcher from '@/components/common/AuthWatcher'

const DEFAULT_SIZE = 20

export default async function BookShelfRecord() {
  const queryClient = getRequestClient()
  const queryKey = ['records']

  // 1. 첫 페이지 호출 (totalCount 추출 및 초기 에러 감지용)
  const firstPage = await serverFetchAllDoneReadBooks(1, DEFAULT_SIZE)

  // 데이터가 없을 때를 대비한 옵셔널 체이닝
  const totalCount = firstPage?.data?.total ?? 0
  const initialError = firstPage?.success ? undefined : firstPage?.error

  console.log('initialError', firstPage)

  // 2. 무한 스크롤 프리페치
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await serverFetchAllDoneReadBooks(pageParam as number, DEFAULT_SIZE)
      // fetch 실패 시에도 런타임 에러 방지를 위해 기본 구조 반환
      if (!res.success) {
        return {
          data: { books: [], total: 0, page: 0, totalPages: 0, isLast: true, size: DEFAULT_SIZE },
          success: false,
          message: res.error,
        }
      }
      return res
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      if (!lastPage || !lastPage.data) return undefined
      const { page, totalPages } = lastPage.data
      return page < totalPages ? page + 1 : undefined
    },
    // pages: 1 (기본값) - prefetch 시 몇 개의 페이지를 가져올지 결정
  })

  // 3. 캐시된 데이터를 안전하게 가져오기 (AuthWatcher 전달용)
  const prefetchedData = queryClient.getQueryData(queryKey)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* 프리페치 결과와 초기 에러를 모두 전달 */}
      <AuthWatcher error={initialError} results={prefetchedData} />

      <Spacing height={12} />
      <Label labelStyle={typography.subtitleLg}>{totalCount}권</Label>
      <Spacing height={16} />
      <BookList />
      <Spacing height={110} />
    </HydrationBoundary>
  )
}
