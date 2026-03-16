import { BottomBorder, Spacing } from '@/components/common'
import EditQuestionField from '@/components/question/edit/EditQuestionField'
import EditBookInfo from '@/components/question/edit/EditBookInfo'

export default async function EditQuestionPage({
  params,
  searchParams,
}: {
  // 2. 타입을 Promise로 감싸기
  params: Promise<{ questionId: string }>
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { questionId } = await params

  const resolvedSearchParams = await searchParams
  const isbn = resolvedSearchParams.isbn || '0'

  return (
    <main>
      <Spacing height={20} />
      <EditBookInfo questionId={questionId} isbn={isbn} />

      <Spacing height={20} />
      <BottomBorder />

      <Spacing height={20} />
      <EditQuestionField isbn={isbn} />
    </main>
  )
}
